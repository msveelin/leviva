<template>
    <div class="bg-gray-100 flex">
      <div class="w-1/5">
        <SideBar></SideBar>
      </div>
      <div class="w-4/5 py-5 px-2">
        <div class="bg-white mb-3 text-black p-3 flex justify-end items-center shadow-md w-full rounded-md">
          <div>
            <p>vanessabenezeth@gmail.com</p>
          </div>
        </div>
        <div class="bg-white router-view-container rounded-md overflow-auto text-black">
          <RouterView/>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { RouterView } from 'vue-router';
  import SideBar from '@/components/shared/SideBar.vue'
  </script>
  
  <style scoped>
  /* Style the RouterView container to fill the remaining height */
  .router-view-container {
    height: calc(100vh - 7rem); /* Adjust the top padding if needed */
  }
  </style>
  