<template>
    <div class="p-5">
      <view-destination-details :open-dialog="openDestination" :selected-item="selectedData" @close-dialog="openDestination = false"></view-destination-details>
      <add-edit-destination :selected-item="selectedData" :open-dialog="openDialog" @close-dialog="openDialog = false"></add-edit-destination>
        <div class="border-b py-2">
            <h1 class="font-semibold text-xl text-amber-400">Destinations List</h1>
        </div>
        <div class="p-3 flex justify-end">
          <button @click="viewDialog" class="bg-amber-400 text-white rounded-md px-3 py-1 font-semibold">Add Destination</button>
        </div>
        <div class="p-3">
          <shared-table :columns="columns" :table-data="destinations" :has-actions="true">
            <template v-slot:description="{ itemData }">
              <p v-html="itemData?.description"></p>
            </template>
            <template v-slot:actions="{ itemData }">
              <span class="cursor-pointer text-green-400 mx-2 hover:font-bold" @click="viewDestination(itemData)">View</span>
              <span class="cursor-pointer text-blue-400 mx-2 hover:font-bold"
                    @click="viewDialog(itemData)">Edit</span>
              <span class="cursor-pointer text-red-400 mx-2 hover:font-bold"
                    @click="deleteData(itemData)">Delete</span>
            </template>
          </shared-table>
        </div>
        
    </div>
</template>
<script setup>
  import { useApiStore } from '@/stores/index';
  import { ref, onMounted } from 'vue';
  import SharedTable from '@/components/shared/SharedTable.vue'
  import AddEditDestination from "@/views/admin/destinations/AddEditDestination.vue";
  import {tr} from "vuetify/locale";
  import {notifyError, notifySuccess} from "@/services/notificationService.js";
  import ViewDestinationDetails from "@/views/admin/destinations/ViewDestinationDetails.vue";
  
  // Access the API store
  const apiStore = useApiStore();
  
  // Define a reactive reference for accommodations data
  const destinations = ref(null);
  const selectedData = ref(null)
  const openDialog = ref(false)
  const openDestination = ref(false);


  const columns = ref({
    name: "Destination Name",
    location: "Destination Location"
  })

  const viewDialog = (value) => {
    if(openDialog.value){
      openDialog.value = false
      selectedData.value = null;
    } else{
      openDialog.value = true;
      if(value !== null){
        selectedData.value = value;
      }
    }
  }

  const viewDestination = (value) => {
    if(openDestination.value){
      openDestination.value = false
      selectedData.value = null;
    } else{
      openDestination.value = true;
      if(value !== null){
        selectedData.value = value;
      }
    }
  }
  
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

  const deleteData = async (value) => {
    try {
      // Call the fetchData action from the API store
      await apiStore.deleteResource('destination', "destinationUniqueId", value?.destinationUniqueId);
      await notifySuccess("Destination deleted successfully")
    } catch (error) {
      // Handle any errors
      console.error('Error deleting destination:', error);
      await notifyError("Error deleting destination");
    }
  }

  // Fetch data on component mount
  onMounted(() => {
    fetchData();

  });
  </script>