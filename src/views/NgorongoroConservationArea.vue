<template>
    <div>
        <div class="intro">
            <div class="p-4">
                <landing-nav></landing-nav>
            </div>
            <div class="intro-main flex justify-center items-center">
                <div class="items-center flex flex-col p-10 justify-center">
                    <h1 class="text-5xl text-center mb-2 drop-shadow-xl homemade"> Ngorongoro Conservation Area
                    </h1>
                </div>
            </div>
        </div>
        <div class="p-10">
            <p>Tanzania's Ngorongoro Crater, often referred to as the "Eighth Wonder of the World," is a geological marvel
                and a haven for wildlife enthusiasts. Nestled within the Ngorongoro Conservation Area, this ancient caldera
                offers a unique and immersive safari experience, showcasing a thriving ecosystem within its walls.</p>
            <h2 class="font-bold mt-3 mb-2">The Cradle of Life:</h2>
            <p class="mt-2">Ngorongoro Crater is a massive volcanic caldera, formed millions of years ago. Today, it is a
                natural amphitheater, spanning over 260 square kilometers and harboring a remarkably high concentration of
                wildlife. The crater's floor is a lush paradise, providing a fertile habitat for a diverse array of flora
                and fauna.</p>
            <h2 class="font-bold mt-3 mb-2">Wildlife Abundance:</h2>
            <p class="mt-2">
                The crater is home to an astonishing variety of wildlife, earning it the nickname "Noah's Ark of Africa."
                Encounter the iconic "Big Five" – lions, elephants, buffalos, leopards, and rhinoceros – as well as a
                multitude of other species such as hippos, zebras, wildebeests, and countless bird species. The compact
                nature of the crater ensures that game drives are filled with constant wildlife sightings.
            </p>
            <h2 class="font-bold mt-3 mb-2">Spectacular Landscapes:</h2>
            <p class="mt-2">Surrounded by the crater's walls, the landscapes within are a photographer's dream. From the
                grassy plains to the Lerai Forest and the shimmering Lake Magadi, each corner of Ngorongoro Crater offers a
                unique backdrop for capturing the beauty of the African wilderness.</p>
            <h2 class="font-bold mt-3 mb-2">Conservation at its Core:</h2>
            <p class="mt-2">As part of the Ngorongoro Conservation Area, the crater is dedicated to preserving its unique
                ecosystem and maintaining a delicate balance between wildlife, culture, and sustainable tourism. Visitors
                contribute to these conservation efforts simply by experiencing the wonder of Ngorongoro.</p>
            <h2 class="font-bold mt-3 mb-2">Cultural Encounters:</h2>
            <p class="mt-2">Beyond its natural wonders, Ngorongoro Crater is also a place where wildlife and Maasai culture
                coexist. Engage with the local Maasai communities, known for their vibrant traditions and colorful attire.
                Some lodges even offer cultural experiences, providing visitors with an opportunity to learn about the
                indigenous people who share their home with the wildlife.</p>

            <p class="mt-2 italic">EExperience the wonders of Ngorongoro – where wildlife, culture, and conservation
                converge in a spectacular display of nature's grandeur!</p>

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
    background-image: url("@/assets/images/ngorongoro.jpg");
    background-size: cover;
    object-fit: cover;
    background-position: center;
    background-repeat: no-repeat;
}

.intro-main {
    height: 80vh;
}
</style>