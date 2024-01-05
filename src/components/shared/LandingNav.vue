<template>
    <div class="p-1 px-3 glass flex justify-between items-center rounded-md">
        <router-link to="/">
            <img :src="logo" alt="" class="h-20 w-20 hover:scale-105 cursor-pointer">
        </router-link>
        <div class="flex items-center">
            <a href="/flights" class="mr-3 menu__link">Flights</a>
            <a href="/safaris" class="mr-3 menu__link">Safaris</a>
            <a href="/about" class="mr-3 menu__link">About</a>
            <a href="https://api.whatsapp.com/send?phone=255758996047" class="p-2 px-3 bg-primary rounded-md hover:bg-black cursor-pointer">CHAT ON WHATSAPP</a>
        </div>
    </div>
</template>
<script setup>
import logo from "@/assets/logo.svg";
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
