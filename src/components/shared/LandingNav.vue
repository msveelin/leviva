<template>
    <div class="p-1 px-3 glass flex justify-between items-center rounded-md">
        <router-link to="/">
            <img :src="logo" alt="" class="h-20 w-20 hover:scale-105 cursor-pointer">
        </router-link>

        <div class="lg:hidden">
            <button @click="toggleMenu" class="text-white focus:outline-none">
                <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
            </button>
        </div>

        <!-- Regular menu for large screens -->
        <div class="hidden lg:flex items-center">
            <a href="/flights" class="mr-3 menu__link">Flights</a>
            <a href="/safaris" class="mr-3 menu__link">Safaris</a>
            <a href="/about" class="mr-3 menu__link">About</a>
            <a href="/book-now" class="p-2 px-3 bg-primary rounded-md hover:bg-black cursor-pointer">BOOK NOW</a>
        </div>

        <div v-if="isMenuOpen" class="lg:hidden fixed top-0 left-0 w-full h-full bg-transparent"
            @click="closeMenu">
            <div class="flex flex-col p-5 mt-24 bg-primary rounded-md">
                <router-link to="/flights" class="mb-4 text-white" @click="closeMenu">Flights</router-link>
                <router-link to="/safaris" class="mb-4 text-white" @click="closeMenu">Safaris</router-link>
                <router-link to="/about" class="mb-4 text-white" @click="closeMenu">About</router-link>
                <a href="/book-now" class="p-2 px-3 bg-black rounded-md hover:bg-white hover:text-black cursor-pointer"
                    @click="closeMenu">BOOK NOW</a>
            </div>
        </div>
    </div>
</template>
  
<script setup>
import logo from "@/assets/logo.svg";
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const isMenuOpen = ref(false);
const router = useRouter();

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
    isMenuOpen.value = false;
};
</script>
  
<style scoped>
.menu__link {
    color: #fff;
    line-height: 2;
    position: relative;
}

.menu__link::before {
    content: '';
    width: 0;
    height: 2px;
    border-radius: 2px;
    background-color: #fff;
    position: absolute;
    bottom: -.25rem;
    left: 50%;
    transition: width .4s, left .4s;
}

.menu__link:hover::before {
    width: 100%;
    left: 0;
}
</style>
  