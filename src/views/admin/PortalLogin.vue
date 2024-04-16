<template>
  <div class="h-screen w-screen flex justify-center items-center bg-primary2">
    <div class="bg-white p-5 rounded-md shadow w-1/3">
      <h2 class="text-center text-3xl chelsea-market-regular">Log In</h2>
      <form @submit.prevent="submitForm()">
        <div class="flex my-3 flex-col w-full">
          <label for="email">Username</label>
          <input class="mt-2 bg-slate-50 p-3 rounded-md" type="text" v-model="formData.username" required/>
        </div>
        <div class="flex flex-col w-full">
          <label for="email">Password</label>
          <input class="mt-2 bg-slate-50 p-3 rounded-md" type="password" v-model="formData.pwd" required/>
        </div>
        <div class="flex mt-3 flex-col w-full">
          <button class="bg-amber-500 p-2 rounded-md text-white font-bold" type="submit">LOG IN</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import {ref} from "vue"
import {useApiStore} from "@/stores/index.js";

const apiStore = useApiStore();

const formData = ref({
  username: null,
  pwd: null
})

const submitForm = async () => {
  if(formData.value.pwd != null && formData.value.username != null){} {
    try {
      const response = await apiStore.login(formData.value)
    } catch (e) {
      console.error(e)
    }
  }
}
</script>

<style scoped>

</style>