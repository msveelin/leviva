<template>
  <div class="p-5">
    <div class="border-b py-2">
        <h1 class="font-semibold text-xl text-amber-400">Accommodations List</h1>
    </div>
    <div class="p-3 flex justify-end">
      <button class="bg-amber-400 text-white rounded-md px-3 py-1 font-semibold">Add Accommodation</button>
    </div>
    <div class="p-3">
      <shared-table :columns="columns" :table-data="accommodations"></shared-table>
    </div>
    
</div>
  </template>
  
  <script setup>
  import { useApiStore } from '@/stores/index';
  import { ref, onMounted } from 'vue';
  import SharedTable from '@/components/shared/SharedTable.vue'
  
  // Access the API store
  const apiStore = useApiStore();
  
  // Define a reactive reference for accommodations data
  const accommodations = ref(null);

  const columns = ref({
    name: "Accommodation Name",
    description: "Description",
    location: "Accomodation Location",
    price_per_night: "Price Per Night"
  })
  
  // Function to fetch accommodations data
  const fetchData = async () => {
    try {
      // Call the fetchData action from the API store
      await apiStore.fetchData('accomodations');
      // Update the accommodations data with the fetched data
      accommodations.value = apiStore.data.accomodations;
    } catch (error) {
      // Handle any errors
      console.error('Error fetching accommodations:', error);
    }
  };
  
  // Fetch data on component mount
  onMounted(() => {
    fetchData();

  });
  </script>
  