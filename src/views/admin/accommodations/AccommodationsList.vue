<template>
  <div class="p-5">
    <div class="border-b py-2">
      <h1 class="font-semibold text-xl text-amber-400">Accommodations List</h1>
    </div>
    <add-edit-accomodation :open-dialog="openAddEditAccomodation" :selected-item="selectedData"
      @closeDialog="openAddEditAccomodation = false"></add-edit-accomodation>
      <view-accommodation-details :open-dialog="openAccomodationDetails" :selected-item="selectedData"
      @closeDialog="openAccomodationDetails = false"></view-accommodation-details>
    <div class="p-3 flex justify-end">
      <button @click="viewAccommodationDialog()" class="bg-amber-400 text-white rounded-md px-3 py-1 font-semibold">Add
        Accommodation</button>
    </div>
    <div class="p-3">
      <shared-table :columns="columns" :table-data="accommodations" :has-actions="true">
        <template v-slot:actions="{ itemData }">
          <!-- {{ itemData }} -->
          <span class="cursor-pointer text-green-400 mx-2 hover:font-bold"
            @click="viewAccommodationDetailsDialog(itemData)">View</span>
          <span class="cursor-pointer text-blue-400 mx-2 hover:font-bold"
            @click="viewAccommodationDialog(itemData)">Edit</span>
            <span class="cursor-pointer text-red-400 mx-2 hover:font-bold"
            @click="viewAccommodationDialog(itemData)">Delete</span>
        </template>
      </shared-table>
    </div>

  </div>
</template>

<script setup>
import { useApiStore } from '@/stores/index';
import { ref, onMounted } from 'vue';
import SharedTable from '@/components/shared/SharedTable.vue'
import AddEditAccomodation from './AddEditAccomodation.vue'
import ViewAccommodationDetails from './ViewAccommodationDetails.vue'

// Access the API store
const apiStore = useApiStore();

// Define a reactive reference for accommodations data
const accommodations = ref(null);

const openAddEditAccomodation = ref(false)
const openAccomodationDetails = ref(false)
const selectedData = ref(null)

const viewAccommodationDialog = (value) => {
  if (openAddEditAccomodation.value === false) {
    openAddEditAccomodation.value = true;
    if (value != null) {
      selectedData.value = value;
    } else {
      // If value is null (indicating "Add" mode), clear selectedData
      selectedData.value = null;
    }
  } else {
    openAddEditAccomodation.value = false;
    selectedData.value = null; // Clear the value when closing the dialog
  }
}

const viewAccommodationDetailsDialog = (value) => {
  if (openAccomodationDetails.value === false) {
    openAccomodationDetails.value = true;
    if (value != null) {
      selectedData.value = value;
    } else {
      // If value is null (indicating "Add" mode), clear selectedData
      selectedData.value = null;
    }
  } else {
    openAccomodationDetails.value = false;
    selectedData.value = null; // Clear the value when closing the dialog
  }
}

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

const deleteData = async (value) => {
  try {
    // Call the fetchData action from the API store
    await apiStore.fetchData('accomodations');
    // Update the accommodations data with the fetched data
    accommodations.value = apiStore.data.accomodations;
  } catch (error) {
    // Handle any errors
    console.error('Error fetching accommodations:', error);
  }
}

// Fetch data on component mount
onMounted(() => {
  fetchData();

});
</script>