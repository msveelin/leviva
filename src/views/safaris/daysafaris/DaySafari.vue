<template>
    <landing-nav></landing-nav>
    <div>
        <div class="intro">
            <div class="intro-main flex justify-center items-center">
                <div class="items-center flex flex-col p-10 justify-center">
                    <h1 class="lg:text-5xl text-4xl text-center mb-2 drop-shadow-xl homemade"> Where Nature's Beauty Takes Center Stage
                    </h1>
                </div>
            </div>
        </div>
        <div class="p-10 bg-white text-black text-justify">
            <p>Embark on an unforgettable journey into the heart of the wild with our exclusive day safaris. Picture this:
                as the golden sun stretches its rays over the vast landscapes, you find yourself immersed in a canvas
                painted by Mother Nature herself. </p>
            <p>Your adventure begins with the promise of discovery, where the rhythm of the wilderness sets the tempo for an
                extraordinary day. Feel the crisp morning air as you venture into the park, where every turn unveils a new
                chapter in the untold stories of the African savannah.</p>

            <div class="mt-5 p-2 text-white grid-cols-1 grid lg:grid-cols-4 gap-6">
                <div class="p-1 rounded-md bg-black arusha h-96 flex flex-col justify-end">
                    <div class="p-2  mt-1">
                        <h1 class="text-xl font-bold mb-1">Arusha Day Trip</h1>
                        <button class="menu-btn w-full  " @click="$router.push('/arusha-day-safari')">VIEW MORE</button>
                    </div>
                </div>
                <div class="p-1 rounded-md bg-black tarangire h-96 flex flex-col justify-end">
                    <div class="p-2  mt-1">
                        <h1 class="text-xl font-bold mb-1">Tarangire Day Trip</h1>
                        <button class="menu-btn w-full  " @click="$router.push('/tarangire-day-safari')">VIEW MORE</button>
                    </div>
                </div>
                <div class="p-1 rounded-md bg-black chemka h-96 flex flex-col justify-end">
                    <div class="p-2  mt-1">
                        <h1 class="text-xl font-bold mb-1">Chemka Hot Springs Day Trip</h1>
                        <button class="menu-btn w-full  " @click="$router.push('/chemka-day-safari')">VIEW MORE</button>
                    </div>
                </div>
                <div class="p-1 rounded-md bg-black materuni h-96 flex flex-col justify-end">
                    <div class="p-2  mt-1">
                        <h1 class="text-xl font-bold mb-1">Materuni Day Trip</h1>
                        <button class="menu-btn w-full  " @click="$router.push('/materuni-day-trip')">VIEW MORE</button>
                    </div>
                </div>
            </div>
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
    background-image: url("@/assets/images/daysafari-bg.jpg");
    background-size: cover;
    object-fit: cover;
    background-position: center;
    background-repeat: no-repeat;
}

.intro-main {
    height: 80vh;
}

.arusha {
    background-image: url("@/assets/images/IMG_5703.jpg");
    background-size: cover;
    object-fit: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-color: rgba(0, 0, 0, 0.5);
    /* Adjust the alpha value (0.0 to 1.0) for transparency */
    background-blend-mode: overlay;
}

.tarangire {
    background-image: url("@/assets/images/IMG_9393.jpg");
    background-size: cover;
    object-fit: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-color: rgba(0, 0, 0, 0.5);
    /* Adjust the alpha value (0.0 to 1.0) for transparency */
    background-blend-mode: overlay;
}

.chemka {
    background-image: url("@/assets/images/chemka.jpg");
    background-size: cover;
    object-fit: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-color: rgba(0, 0, 0, 0.5);
    /* Adjust the alpha value (0.0 to 1.0) for transparency */
    background-blend-mode: overlay;
}

.materuni {
    background-image: url("@/assets/images/materuni-card.jpg");
    background-size: cover;
    object-fit: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-color: rgba(0, 0, 0, 0.5);
    /* Adjust the alpha value (0.0 to 1.0) for transparency */
    background-blend-mode: overlay;
}
</style>