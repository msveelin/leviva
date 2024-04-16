<template>
  <v-dialog v-model="dialog" persistent width="80%">
    <div class="bg-white rounded-md max-h-[80vh] overflow-y-auto">
      <div class="bg-amber-400 rounded-t-md p-3 flex items-center justify-between text-white font-bold">
        <h1>Destination Details</h1>

        <button @click="closeDialog()">Close</button>
      </div>
      <div class="bg-white rounded-b-md p-3">
        <!-- {{ selectedItem }} -->
        <h1 class="font-bold">{{selectedItem?.name}}</h1>
        <h2 class="mt-2">{{selectedItem?.destination}}</h2>

        <hr class="my-3">
        <p><b>Location:</b> {{selectedItem?.location}}</p>


        <div class="py-2">
          <h3 class="font-bold mb-1">Description:</h3>
          <p v-html="selectedItem?.description"></p>
        </div>
        <div class="py-2">
          <h3 class="font-bold mb-1">Intro Image:</h3>
          <img :src="`http://localhost/leviva-backend/api/uploads/${selectedItem?.image}`" class="w-full h-auto object-cover" />
        </div>
      </div>
    </div>
  </v-dialog>
</template>
<script setup>
import { ref, watch } from 'vue'

const props = defineProps(['openDialog', 'selectedItem'])
const emits = defineEmits(['closeDialog'])

const dialog = ref(false)

watch(() => props.openDialog, (value) => {
  dialog.value = value
})

const closeDialog = () => {
  emits('closeDialog')
}

</script>