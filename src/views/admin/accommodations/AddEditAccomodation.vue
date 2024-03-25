<template>
    <v-dialog v-model="dialog" persistent width="750px">
        <div class="bg-white p-3 rounded-md">
            <div class="bg-amber-400 flex items-center justify-between text-white font-bold">
                <h1 v-if="SelectedItem">Edit Accommodation</h1>
                <h1 v-else>Add Accommodation</h1>

                <button @click="closeDialog()">Close</button>
            </div>
        </div>
    </v-dialog>
</template>
<script setup>
import {ref} from 'vue'

const props = defineProps(['Dialog', 'SelectedItem'])
const emits = defineEmits(['close'])

const dialog = ref(false)

const closeDialog = () => {
    dialog.value = false
    emits('close')
}
</script>