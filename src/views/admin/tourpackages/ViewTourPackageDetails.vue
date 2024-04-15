<template>
  <v-dialog v-model="dialog" persistent width="80%">
    <div class="bg-white rounded-md">
      <div class="bg-amber-400 rounded-t-md p-3 flex items-center justify-between text-white font-bold">
        <h1>Tour Package Details</h1>

        <button @click="closeDialog()">Close</button>
      </div>
      <div class="bg-white rounded-b-md p-3">
        <!-- {{ selectedItem }} -->
        <h1 class="font-bold">{{selectedItem?.name}}</h1>
        <h2 class="mt-2">{{selectedItem?.destination}}</h2>

        <hr class="my-3">
        <p><b>Duration:</b> {{selectedItem?.duration}}</p>
        <div class="py-2">
          <h3 class="font-bold mb-1">Description:</h3>
          <p v-html="selectedItem?.description"></p>
        </div>
        <div class="py-2">
          <h3 class="font-bold mb-1">Prices:</h3>
          <p v-html="selectedItem?.prices"></p>
        </div>
        <div class="py-2">
          <h3 class="font-bold mb-1">Price Includes:</h3>
          <p v-html="selectedItem?.price_inclusion"></p>
        </div>
        <div class="py-2">
          <h3 class="font-bold mb-1">Price Excludes:</h3>
          <p v-html="selectedItem?.price_exclusion"></p>
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