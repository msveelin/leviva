<template>
    <v-dialog v-model="dialog" persistent width="750px">
        <div class="bg-white rounded-md">
            <div class="bg-amber-400 rounded-t-md p-3 flex items-center justify-between text-white font-bold">
                <h1 v-if="selectedItem?.accomodationUniqueId">Edit Accommodation</h1>
                <h1 v-else>Add Accommodation</h1>

                <button @click="closeDialog()">Close</button>
            </div>
            <div class="bg-white rounded-b-md p-3">
                <form @submit.prevent="submitForm()">
                    {{ formFields }}
                    <div class="flex flex-col my-2">
                        <label class="mb-2">Accommodation Name</label>
                        <input type="text" name="name" v-model="formFields.name" class="w-full p-3 border rounded-md">
                    </div>
                    <!-- <div class="flex flex-col my-2">
                        <label class="mb-2">Description</label>
                        <input type="text" name="description" v-model="formFields.description"
                            class="w-full p-3 border rounded-md">
                    </div> -->
                    <QuillEditor theme="snow" toolbar="full" v-model="formFields.description" @text-change="updateDescription" />
                    <div class="flex flex-col my-2">
                        <label class="mb-2">Location</label>
                        <input type="text" name="location" v-model="formFields.location"
                            class="w-full p-3 border rounded-md">
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
import { ref, watch } from 'vue'
import { useApiStore } from '@/stores/index';

const props = defineProps(['openDialog', 'selectedItem'])
const emits = defineEmits(['closeDialog'])


const dialog = ref(false)

// Access the API store
const apiStore = useApiStore();

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
    formFields.value = ref({
        name: null,
        description: null,
        location: null,
        price_per_night: null
    })
    emits('closeDialog')
}
const updateDescription = (content, delta, source, editor) => {
    formFields.description = editor.getContents(); // Update the description with Quill editor content
}

const submitForm = async () => {
    if(props.selectedItem?.accomodationUniqueId){
        try {
            formFields.value = {
                ...formFields.value,
                accomodationUniqueId: props.selectedItem?.accomodationUniqueId
            }
            const response = await apiStore.updateResource('accomodations', props.selectedItem?.accomodationUniqueId,  formFields.value);
            console.log(response); // Optionally log the response
            emits('closeDialog');
        } catch (error) {
            console.error('Error creating accommodation:', error);
            // Optionally show an error message to the user
        }
    } else {
        try {
        const response = await apiStore.createResource('accomodations', formFields.value);
        console.log(response); // Optionally log the response
        emits('closeDialog');
    } catch (error) {
        console.error('Error creating accommodation:', error);
        // Optionally show an error message to the user
    }
    }
}
</script>