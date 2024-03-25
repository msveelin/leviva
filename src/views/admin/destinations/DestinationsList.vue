<template>
    <div class="p-5">
        <div class="border-b py-2">
            <h1 class="font-semibold text-xl text-amber-400">Destinations List</h1>
        </div>
        <div class="p-3 flex justify-end">
          <button class="bg-amber-400 text-white rounded-md px-3 py-1 font-semibold">Add Destination</button>
        </div>
        <div class="p-3">
          <shared-table :columns="columns" :table-data="destinations"></shared-table>
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
  const destinations = ref(null);

  const columns = ref({
    name: "Destination Name",
    description: "Description",
    location: "Destination Location"
  })
  
  // Function to fetch destinations data
  const fetchData = async () => {
    try {
      // Call the fetchData action from the API store
      await apiStore.fetchData('destination');
      // Update the destinations data with the fetched data
      destinations.value = apiStore.data.destination;
    } catch (error) {
      // Handle any errors
      console.error('Error fetching destinations:', error);
    }
  };
  
  // Fetch data on component mount
  onMounted(() => {
    fetchData();

  });
  </script>