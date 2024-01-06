<template>
    <div>
        <main class="intro  bg-black text-white">
            <div class="p-4 fixed top-0 w-full">
                <landing-nav></landing-nav>
            </div>
            <div class="intro-main pt-10 flex justify-center items-center">
                <div class="items-center flex flex-col justify-center">
                    <h1 class="text-6xl mb-2 homemade drop-shadow-xl">Book a Trip / Flight</h1>
                    
                </div>
            </div>

        </main>
        <div>
            <footer-bar></footer-bar>
        </div>
    </div>
</template>
<script setup>
import FooterBar from '@/components/shared/FooterBar.vue';
import LandingNav from '@/components/shared/LandingNav.vue';
</script>
<style scoped>
.intro {
    background-image: url("@/assets/images/balloon&sunrise.JPG");
    background-size: cover;
    object-fit: cover;
    background-position: center;
    background-repeat: no-repeat;
}

.intro-main {
    height: 80vh;
}
</style>