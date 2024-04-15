<template>
    <div class="p-5">
      <add-edit-tour-package :selected-item="selectedData" :open-dialog="openAddEditPackage"  @close-dialog="openAddEditPackage = false"></add-edit-tour-package>
      <view-tour-package-details :selected-item="selectedData" :open-dialog="openTourPackage" @close-dialog="openTourPackage = false"></view-tour-package-details>
      <div class="border-b py-2">
        <h1 class="font-semibold text-xl text-amber-400">Tour Packages</h1>
      </div>
      <div class="p-3 flex justify-end">
        <button @click="openDialog()" class="bg-amber-400 text-white rounded-md px-3 py-1 font-semibold">Add Package</button>
      </div>
      <div class="p-3 overflow-x-auto">
        <SharedTable :tableData="tour_packages" :columns="columns" :has-actions="true">
          <template v-slot:description="{itemData}">
            <p v-html="itemData?.description"></p>
          </template>
            <template v-slot:price="{itemData}">
               <p>USD$ {{ itemData?.price }} /=</p>
            </template>
          <template v-slot:actions="{ itemData }">
            <span class="cursor-pointer text-green-400 mx-2 hover:font-bold"
                  @click="viewPackageDetailsDialog(itemData)">View</span>
            <span class="cursor-pointer text-blue-400 mx-2 hover:font-bold"
                  @click="openDialog(itemData)">Edit</span>
            <span class="cursor-pointer text-red-400 mx-2 hover:font-bold"
                  @click="deleteData(itemData)">Delete</span>
          </template>
          </SharedTable>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useApiStore } from '@/stores/index';
  import { ref, onMounted } from 'vue';
  import SharedTable from '@/components/shared/SharedTable.vue';
  import AddEditTourPackage from "@/views/admin/tourpackages/AddEditTourPackage.vue";
  import ViewTourPackageDetails from "@/views/admin/tourpackages/ViewTourPackageDetails.vue";
  import {notifyError, notifySuccess} from "@/services/notificationService.js";
  
  // Access the API store
  const apiStore = useApiStore();
  
  // Define a reactive reference for accommodations data
  const tour_packages = ref([]);
  const openAddEditPackage = ref(false);
  const openTourPackage = ref(false);
  const selectedData = ref({})
  
  // Define columns for the shared table
  const columns = ref({
    name: "Package Name",
    description: "Package Description",
    duration: "Duration",
  });

  const openDialog = (value) => {

    if (openAddEditPackage.value) {
      openAddEditPackage.value = false
      selectedData.value = null;
    } else {
      openAddEditPackage.value = true

      if (value !== null) {
        console.log(value);
        selectedData.value = value;
      } else {
        // If value is null (indicating "Add" mode), clear selectedData
        selectedData.value = null;
      }
    }
  }

  const viewPackageDetailsDialog = (value) => {
    if(openTourPackage.value){
      openTourPackage.value = false;
    } else {
      openTourPackage.value = true;
      selectedData.value = value;
    }
  }
  
  // Function to fetch tour_packages data
  const fetchData = async () => {
    try {
     // Fetch data from the API store
    await apiStore.fetchData('tour_packages');
    // Get the fetched data
    const fetchedData = apiStore.data.tour_packages;
    // Decode JSON fields in the fetched data
    tour_packages.value = fetchedData
      
    } catch (error) {
      // Handle any errors
      console.error('Error fetching tour packages: ', error);
    }
  };

  const deleteData = async (value) => {
    try {
      // Call the fetchData action from the API store
      await apiStore.deleteResource('tour_packages', "tourPackageUniqueId", value?.tourPackageUniqueId);
      await notifySuccess("Tour package deleted successfully")
    } catch (error) {
      // Handle any errors
      console.error('Error deleting tour package:', error);
      await notifyError("Error deleting tour package");
    }
  }
  
  // Fetch data on component mount
  onMounted(() => {
    fetchData();
  });
  </script>
  