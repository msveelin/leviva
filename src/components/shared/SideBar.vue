<template>
    <div class="p-5 flex flex-col h-screen">
      <div class="shadow-md bg-white py-3 px-1 flex-none rounded-xl mb-5">
        <img src="../../assets/logo.svg" class="w-full h-auto" alt="">
        <h2 class="text-amber-400 text-lg text-center mt-3 border-y p-2 font-semibold">Content Management System</h2>
  
        <div class="mt-5 overflow-y-scroll p-3 text-black flex flex-col h-[40vh]">
          <router-link
            v-for="link in links"
            :key="link.path"
            class="hover:bg-amber-100 p-2 my-2 animate__animated animate__fadeInRight rounded-md"
            :to="link.path"
            :class="{ 'active-link': isPathActive(link.path) }"
          >{{ link.label }}</router-link>
        </div>
      </div>
  
      <div @click="logout()" class="p-5 cursor-pointer flex items-center text-black shadow-md bg-white rounded-xl">
        <div class="mr-3">
          <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 20H6C4.89543 20 4 19.1046 4 18L4 6C4 4.89543 4.89543 4 6 4H14M10 12H21M21 12L18 15M21 12L18 9" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <span>Logout</span>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useRoute } from 'vue-router';
  import {useApiStore} from "@/stores/index.js";
  
  const route = useRoute()
  const apiStore = useApiStore();
  
  const links = ref([
    { label: 'Dashboard', path: '/admin-portal/dashboard' },
    { label: 'Destinations', path: '/admin-portal/destinations' },
    { label: 'Tour Packages', path: '/admin-portal/tour-packages' },
    { label: 'Accommodations', path: '/admin-portal/accommodations' }
  ])
  
  const isPathActive = (path) => {
    return route.path.includes(path);
  }

  const logout = async () => {
    await apiStore.logout()
  }
  </script>
  
  <style scoped>
  .active-link {
    /* Add your active link styles here */
    background-color: #fbbf24; /* Example background color */
    color: white;
    font-weight: bolder;
  }
  </style>
  