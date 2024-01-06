<template>
    <div>
        <div class="intro">
            <div class="p-4">
                <landing-nav></landing-nav>
            </div>
            <div class="intro-main flex justify-center items-center">
                <div class="items-center flex flex-col p-10 justify-center">
                    <h1 class="text-5xl text-center mb-2 drop-shadow-xl homemade"> Arusha National Park Day Sfari
                    </h1>
                </div>
            </div>
        </div>
        <div class="p-10">
            <p>Embark on an unforgettable journey into the heart of the wild with our exclusive day safaris. Picture this:
                as the golden sun stretches its rays over the vast landscapes, you find yourself immersed in a canvas
                painted by Mother Nature herself. </p>
            <p>Your adventure begins with the promise of discovery, where the rhythm of the wilderness sets the tempo for an
                extraordinary day. Feel the crisp morning air as you venture into the park, where every turn unveils a new
                chapter in the untold stories of the African savannah.</p>

        </div>
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
    background-image: url("@/assets/images/IMG_0088.jpg");
    background-size: cover;
    object-fit: cover;
    background-position: center;
    background-repeat: no-repeat;
}

.intro-main {
    height: 80vh;
}


</style>