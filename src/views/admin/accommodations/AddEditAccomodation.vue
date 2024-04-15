<template>
    <v-dialog v-model="dialog" persistent width="750px">
        <div class="bg-white  rounded-md">
            <div class="bg-amber-400 rounded-t-md p-3 flex items-center justify-between text-white font-bold">
                <h1 v-if="selectedItem?.accomodationUniqueId">Edit Accommodation</h1>
                <h1 v-else>Add Accommodation</h1>

                <button @click="closeDialog()">Close</button>
            </div>
            <div class="bg-white max-h-[60vh] overflow-y-auto rounded-b-md p-3">
                <!-- {{ formFields }} -->
                <form @submit.prevent="submitForm()">
                    <div class="flex flex-col my-2">
                        <label class="mb-2">Accommodation Name</label>
                        <input type="text" name="name" v-model="formFields.name" class="w-full p-3 border rounded-md">
                    </div>
                    <div class="flex flex-col my-2">
                      <label class="mb-2">Accommodation Description</label>
                      <QuillEditor theme="snow" toolbar="full" v-model:content="formFields.description" contentType="html" placeholder="Write anything here..."  />
                    </div>
                    <div class="flex flex-col my-2">
                        <label class="mb-2">Location</label>
                      <select name="location" v-model="formFields.location" class="w-full p-3 border rounded-md">
                        <option v-for="(destination, index) in destination" :value="destination?.destinationUniqueId">{{destination?.name}} </option>
                      </select>
                    </div>
                    <div class="flex flex-col my-2">
                        <label class="mb-2">Price Per Night</label>
                        <input type="number" step="0.01" name="price_per_night" v-model="formFields.price_per_night"
                            class="w-full p-3 border rounded-md">
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

const props = defineProps(['openDialog', 'selectedItem'])
const emits = defineEmits(['closeDialog'])


const dialog = ref(false)

// Access the API store
const apiStore = useApiStore();

const destination = ref(null)

watch(() => props.openDialog, (value) => {
    dialog.value = value
})

watch(() => props.selectedItem, (value) => {
    // Assign each property individually
    formFields.value.name = value?.name;
    formFields.value.description = value?.description;
    formFields.value.location = value?.location;
    formFields.value.price_per_night = value?.price_per_night;
})

const formFields = ref({
    name: null,
    description: null,
    location: null,
    price_per_night: null
})

const closeDialog = () => {
    formFields.value = {
      name: null,
      description: null,
      location: null,
      price_per_night: null
    }
    emits('closeDialog')
}

const submitForm = async () => {
    if(props.selectedItem?.accomodationUniqueId){
        try {
            formFields.value = {
                ...formFields.value,
                accomodationUniqueId: props.selectedItem?.accomodationUniqueId
            }
            console.log(formFields.value)
            const response = await apiStore.updateResource('accomodations',  formFields.value);
            console.log(response); // Optionally log the response
            emits('closeDialog');
            await notifySuccess("Accommodation updated Successfully")
        } catch (error) {
            console.error('Error updating accommodation:', error);
            // Optionally show an error message to the user
            await notifyError("Error creating accommodation")
        }
    } else {
        console.log(formFields.value)
        try {
          const response = await apiStore.createResource('accomodations', formFields.value);
          console.log(response); // Optionally log the response
          emits('closeDialog');
          await notifySuccess("Accommodation created Successfully")
        } catch (error) {
            console.error('Error creating accommodation:', error);
            // Optionally show an error message to the user
          await notifyError("Error creating accommodation")
        }
        n
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
  }
};

onMounted(() => {
  console.log(formFields.value.description)
  fetchDestinations()
})
</script>