<template>
  <v-dialog v-model="dialog" persistent width="750px">
    <div class="bg-white  rounded-md">
      <div class="bg-amber-400 rounded-t-md p-3 flex items-center justify-between text-white font-bold">
        <h1 v-if="selectedItem?.tourPackageUniqueId">Edit Destination</h1>
        <h1 v-else>Add Destination</h1>

        <button @click="closeDialog()">Close</button>
      </div>
      <div class="bg-white max-h-[60vh] overflow-y-auto rounded-b-md p-3">
        <form @submit.prevent="submitForm()">
          <div class="flex flex-col my-2">
            <label class="mb-2">Destination Name</label>
            <input type="text" name="name" v-model="formFields.name" class="w-full p-3 border rounded-md">
          </div>
          <div class="flex flex-col my-2">
            <label class="mb-2">Destination Description</label>
            <QuillEditor theme="snow" toolbar="full" v-model:content="formFields.description" contentType="html" placeholder="Write anything here..."  />
          </div>
          <div class="flex flex-col my-2">
            <label class="mb-2">Location</label>
            <input type="text" name="name" v-model="formFields.location" class="w-full p-3 border rounded-md">
          </div>
          <div class="flex flex-col my-2">
            <label class="mb-2">Intro Image</label>
            <input type="file" name="file" v-on:change="handleImageUpload($event)" accept="image/*" class="w-full p-3 border rounded-md">
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
  location: null,
  image: null
})

watch(() => props.selectedItem, (value) => {
  // Assign each property individually
  formFields.value.name = value?.name;
  formFields.value.description = value?.description;
  formFields.value.location = value?.location;
})

const closeDialog = () => {
  formFields.value = {
    name: null,
    description: null,
    location: null,
  }
  emits('closeDialog')
}

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
  if (props.selectedItem?.destinationUniqueId) {
    try {
      formFields.value = {
        ...formFields.value,
        image: filePath.value,
        destinationUniqueId: props.selectedItem?.destinationUniqueId
      }
      const response = await apiStore.updateResource('destination',  formFields.value);
      emits('closeDialog');
      await notifySuccess("Destination updated successfully")
    } catch (error) {
      console.error('Error updating destination:', error);
      // Optionally show an error message to the user
      await notifyError("Error updating destination");
    }
  } else {
    try {
      formFields.value.image = filePath.value;
      const response = await apiStore.createResource('destination', formFields.value);
      emits('closeDialog');
      await notifySuccess("Destination created successfully")
    } catch (error) {
      console.error('Error creating destination:', error);
      await notifyError("Error creating destination");
      // Optionally show an error message to the user
    }
  }
}

</script>
