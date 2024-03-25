<template>
    <div class="p-5">
      <div class="border-b py-2">
        <h1 class="font-semibold text-xl text-amber-400">Tour Packages</h1>
      </div>
      <div class="p-3 flex justify-end">
        <button class="bg-amber-400 text-white rounded-md px-3 py-1 font-semibold">Add Package</button>
      </div>
      <div class="p-3 overflow-x-auto">
        <SharedTable :tableData="tour_packages" :columns="columns">
            <template v-slot:price="{itemData}">
               <p>TZS {{ itemData?.price }} /=</p>
            </template>
          </SharedTable>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useApiStore } from '@/stores/index';
  import { ref, onMounted } from 'vue';
  import SharedTable from '@/components/shared/SharedTable.vue';
  
  // Access the API store
  const apiStore = useApiStore();
  
  // Define a reactive reference for accommodations data
  const tour_packages = ref([]);
  
  // Define columns for the shared table
  const columns = ref({
    name: "Package Name",
    description: "Package Description",
    price: "Package Price",
    duration: "Duration",
    included_services: "Services",
    itinerary: "Itinerary",
    prices: "Price Range",
    price_inclusion: "Price Includes",
    price_exclusion: "Price Excludes"

  });

  // Function to decode JSON fields
const decodeJSONFields = (data) => {
  return data.map((tourPackage) => {
    // Decode JSON fields if they are JSON-encoded strings
    for (const key in tourPackage) {
      if (typeof tourPackage[key] === 'string' && tourPackage[key].startsWith('"') && tourPackage[key].endsWith('"')) {
        try {
          tourPackage[key] = JSON.parse(tourPackage[key]);
        } catch (error) {
          console.error(`Error decoding JSON field ${key}:`, error);
        }
      }
    }
    return tourPackage;
  });
};
  
  // Function to fetch tour_packages data
  const fetchData = async () => {
    try {
     // Fetch data from the API store
    await apiStore.fetchData('tour_packages');
    // Get the fetched data
    const fetchedData = apiStore.data.tour_packages;
    // Decode JSON fields in the fetched data
    tour_packages.value = decodeJSONFields(fetchedData);
      
    } catch (error) {
      // Handle any errors
      console.error('Error fetching tour packages: ', error);
    }
  };
  
  // Fetch data on component mount
  onMounted(() => {
    fetchData();
  });
  </script>
  