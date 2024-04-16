<template>
  <v-dialog v-model="dialog" persistent width="750px">
    <div class="bg-white  rounded-md">
      <div class="bg-amber-400 rounded-t-md p-3 flex items-center justify-between text-white font-bold">
        <h1 v-if="selectedItem?.tourPackageUniqueId">Edit Tour Package</h1>
        <h1 v-else>Add Tour Package</h1>

        <button @click="closeDialog()">Close</button>
      </div>
      <div class="bg-white max-h-[80vh] overflow-y-auto rounded-b-md p-3">
        <form @submit.prevent="submitForm()" enctype="multipart/form-data">
          <div class="flex flex-col my-2">
            <label class="mb-2">Package Name</label>
            <input type="text" name="name" v-model="formFields.name" class="w-full p-3 border rounded-md">
          </div>
          <div class="flex flex-col my-2">
            <label class="mb-2">Tour Package Description</label>
            <QuillEditor theme="snow" toolbar="full" v-model:content="formFields.description" contentType="html" placeholder="Write anything here..."  />
          </div>
          <div class="flex flex-col my-2">
            <label class="mb-2">Intro Image</label>
            <input type="file" name="file" v-on:change="handleImageUpload($event)" accept="image/*" class="w-full p-3 border rounded-md">
          </div>
          <div class="flex flex-col my-2">
            <label class="mb-2">Tour Package Itinerary</label>
            <QuillEditor theme="snow" toolbar="full" v-model:content="formFields.itinerary" contentType="html" placeholder="Write anything here..."  />
          </div>
          <div class="flex flex-col my-2">
            <label class="mb-2">Destination</label>
            <select name="destinationUniqueId" v-model="formFields.destinationUniqueId" class="w-full p-3 border rounded-md">
              <option v-for="(destination, index) in destination" :value="destination?.destinationUniqueId">{{destination?.name}} </option>
            </select>
          </div>
          <div class="flex flex-col my-2">
            <label class="mb-2">Prices</label>
            <QuillEditor theme="snow" toolbar="full" v-model:content="formFields.prices" contentType="html" placeholder="Write anything here..."  />
          </div>
          <div class="flex flex-col my-2">
            <label class="mb-2">No. of Days</label>
            <input type="number" max="14" name="duration" v-model="formFields.duration"
                   class="w-full p-3 border rounded-md">
          </div>
          <div class="flex flex-col my-2">
            <label class="mb-2">Price Inclusion</label>
            <QuillEditor theme="snow" toolbar="full" v-model:content="formFields.price_inclusion" contentType="html" placeholder="Write anything here..."  />
          </div>
          <div class="flex flex-col my-2">
            <label class="mb-2">Price Excludes</label>
            <QuillEditor theme="snow" toolbar="full" v-model:content="formFields.price_exclusion" contentType="html" placeholder="Write anything here..."  />
          </div>
          <div class="flex justify-end">
            <button type="submit"
                    class="bg-amber-400 px-3 py-2 text-white font-semibold hover:bg-black rounded-md">Save</button>
          </div>
        </form>
      </div>
    </div>
  </v-dialog>
</template>
<script setup>
import {onMounted, ref, watch} from 'vue'
import { useApiStore } from '@/stores/index';
import {notifySuccess, notifyError} from "@/services/notificationService.js";
import axios from "axios";

const apiStore = useApiStore();
const props = defineProps(['openDialog','selectedItem'])
const emits = defineEmits(['closeDialog'])

const dialog = ref(false);
const destination = ref(null)


watch(() => props.openDialog, (value) => {
  dialog.value = value
})

const filePath = ref(null)

const formFields = ref({
  name: null,
  description: null,
  destinationUniqueId: null,
  prices: null,
  duration: null,
  itinerary: null,
  price_inclusion: null,
  price_exclusion: null,
  image: null
})

watch(() => props.selectedItem, (value) => {
  // Assign each property individually
  formFields.value.name = value?.name;
  formFields.value.description = value?.description;
  formFields.value.destinationUniqueId = value?.destinationUniqueId;
  formFields.value.prices = value?.prices;
  formFields.value.duration = value?.duration;
  formFields.value.itinerary = value?.itinerary;
  formFields.value.price_inclusion = value?.price_inclusion;
  formFields.value.price_exclusion = value?.price_exclusion;
})

const closeDialog = () => {
  formFields.value = {
    name: null,
    description: null,
    destinationUniqueId: null,
    prices: null,
    duration: null,
    itinerary: null,
    price_inclusion: null,
    price_exclusion: null,
  }
  emits('closeDialog')
}

let selectedImage = ref(null);

const handleImageUpload = (event) => {
  // Retrieve the selected image file
  const file = event.target.files[0];
  // Create a FormData object
  const formData = new FormData();
  formData.append('file', file); // Assuming 'file' is the name of the field in your server

  // Send the file to the server using fetch or axios
  axios.post('http://localhost/leviva-backend/api/image_upload.php', formData)
      .then(response => {
        // Handle response from the server if needed
        notifySuccess("File Uploaded successfully.");
        filePath.value = response.data?.new_file_name
        console.log('File uploaded successfully:', response.data?.new_file_name);
      })
      .catch(error => {
        // Handle error
        console.error('Error uploading file:', error);
        notifyError("Error uploading file.");
      });
};


const submitForm = async () => {
  console.log(formFields.value.image)
  if (props.selectedItem?.tourPackageUniqueId) {
    try {
      formFields.value = {
        ...formFields.value,
        image: filePath.value,
        tourPackageUniqueId: props.selectedItem?.tourPackageUniqueId
      }
      const response = await apiStore.updateResource('tour_packages',  formFields.value);
      emits('closeDialog');
      await notifySuccess("Tour package updated successfully")
    } catch (error) {
      console.error('Error updating tour package:', error);
      // Optionally show an error message to the user
      await notifyError("Error updating tour package");
    }
  }
  else {
    try {
      formFields.value.image = filePath.value
      const response = await apiStore.createResource('tour_packages', formFields.value);
      emits('closeDialog');
      await notifySuccess("Tour package created successfully")
    } catch (error) {
      console.error('Error creating tour package:', error);
      await notifyError("Error creating tour package");
      // Optionally show an error message to the user
    }
  }
}

// Function to fetch destinations data
const fetchDestinations = async () => {
  try {
    // Call the fetchData action from the API store
    await apiStore.fetchData('destination');
    // Update the destinations data with the fetched data
    destination.value = apiStore.data.destination;
  } catch (error) {
    // Handle any errors
    console.error('Error fetching destinations:', error);
    await notifyError("Error fetching destinations");
  }
};

onMounted(() => {
  fetchDestinations()
})

</script>
<style scoped>

</style>