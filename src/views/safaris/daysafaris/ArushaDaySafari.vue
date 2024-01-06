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
        <div class="p-10 flex lg:flex-row text-justify flex-col">
            <div class="lg:w-2/3 w-full p-3">
                <p>Embark on a thrilling journey into the heart of Tanzania's diverse landscapes with our Arusha National
                    Park
                    Safari. This unique adventure offers a perfect blend of wildlife encounters, picturesque scenery, and
                    the
                    rich cultural tapestry that defines the region. Arusha National Park, often referred to as the "Gem of
                    Northern Tanzania," beckons with its varied ecosystems, from lush rainforests to the rugged peaks of
                    Mount
                    Meru.</p>
                <p>You’ll almost certainly see zebras, giraffes, baboons, buffalos and colobus monkeys, and with a bit of
                    luck maybe you’ll even spot an elephant or a leopard. The landscapes are stunning as well, with the
                    Momella lakes and the Ngurdoto crater as absolute highlights. Around the lakes, you’ll also be able to
                    see hundreds or thousands of flamingos. </p>
            </div>
            <div class="lg:w-1/3 w-full p-3">
                <div class="border border-white p-3">
                    <h2 class="font-bold mb-2">Price:</h2>
                    <ul class="ml-3 list-disc">
                        <li>1pax: US $320 pp</li>
                        <li>2pax: US $310 pp</li>
                        <li>3pax: US $300 pp</li>
                        <li>4-7pax: US $280 pp</li>
                    </ul>
                    <h2 class="font-bold mb-2">Price Inclusion:</h2>
                    <ul class="ml-3 mb-3 list-disc">
                        <li>Park fees</li>
                        <li>A professional driver/guide</li>
                        <li>Lunch and Drinks</li>
                        <li>Binocular</li>
                        <li>Transport</li>
                    </ul>
                    <p class="mb-2">The recommended amount for a driver is around 15 USD per day if you’re
                        satisfied, to be divided by all your group members. Thank you! </p>
                    <button class="bg-primary w-full p-2">
                        <router-link to="book-now">BOOK NOW</router-link>
                    </button>

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