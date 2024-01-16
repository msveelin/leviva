<template>
    <landing-nav></landing-nav>
    <div>
        <div class="intro">

            <div class="intro-main flex justify-center items-center">
                <div class="items-center flex flex-col p-10 justify-center">
                    <h1 class="text-5xl text-center mb-2 drop-shadow-xl homemade"> Ngorongoro Conservation Area Day Trip
                    </h1>
                </div>
            </div>
        </div>
        <div class="p-10 flex bg-white text-black text-justify flex-col lg:flex-row">
            <div class="lg:w-2/3 w-full p-3">
                <p>Tanzania's Ngorongoro Crater, often referred to as the "Eighth Wonder of the World," is a geological
                    marvel and a haven for wildlife enthusiasts. Nestled within the Ngorongoro Conservation Area, this
                    ancient caldera offers a unique and immersive safari experience, showcasing a thriving ecosystem within
                    its walls.
                </p>
                <p> Ngorongoro Crater is a massive volcanic caldera, formed millions of years ago. Today, it is a natural
                    amphitheater, spanning over 260 square kilometers and harboring a remarkably high concentration of
                    wildlife. The crater's floor is a lush paradise, providing a fertile habitat for a diverse array of
                    flora and fauna.</p>
                <p>
                    The crater is home to an astonishing variety of wildlife, earning it the nickname "Noah's Ark of
                    Africa." Encounter the iconic "Big Five" – lions, elephants, buffalos, leopards, and rhinoceros – as
                    well as a multitude of other species such as hippos, zebras, wildebeests, and countless bird species.
                    The compact nature of the crater ensures that game drives are filled with constant wildlife sightings.
                </p>
                <h2 class="primary gloria font-bold text-xl mt-3 mb-2">Itinerary</h2>
                <p>After an early breakfast, you will descend into the Ngorongoro Crater on a journey to
                    find the black rhino; the hardest animal to spot. Inside this beautiful crater, you will
                    experience Africa’s version of “Noah’s Ark”, with a vast variety of wildlife including
                    elephants, hyenas, big cats, rhinos, and more. In the afternoon, you will stop for lunch
                    at the hippo lake and then enjoy another game drive as you ascend back up to the
                    crater rim. Afterward we will head to Arusha town whereby it will be the end of our
                    tour.</p>
            </div>
            <div class="lg:w-1/3 w-full p-3">
                <div class="border border-black p-3">
                    <h2 class="font-bold mb-2">Price:</h2>
                    <ul class="ml-3 list-disc">
                        <li>1pax: US $830 pp</li>
                        <li>2pax: US $480 pp</li>
                        <li>3pax: US $340 pp</li>
                        <li>4-6pax: US $280 pp</li>
                    </ul>
                    <h2 class="font-bold mt-2 mb-2">Price Inclusion:</h2>
                    <ul class="ml-3 mb-3 list-disc">
                        <li>Lunch box</li>
                        <li>Water</li>
                        <li>All Entry Fee</li>
                        <li>Government Tax 18%</li>
                        <li>Safari Jeep (Go & Return)</li>
                        <li>Crater fee</li>
                        <li>Professional Safari Guide</li>
                        <li>Full Day Game Drive.</li>
                    </ul>
                    <h2 class="font-bold mt-2 mb-2">Price Does Not Include:</h2>
                    <ul class="ml-3 mb-3 list-disc">
                        <li>VISA Application</li>
                        <li>Flight</li>
                        <li>All Entry Fee</li>
                        <li>Travel Insurance</li>
                        <li>Guide/ Driver tip </li>
                    </ul>
                    <p class="mb-2">The recommended amount for a driver is around 15 USD per day if you’re
                        satisfied, to be divided by all your group members. Thank you! </p>
                    <button class="bg-primary text-white w-full p-2" @click="$router.push('/book-now')">
                        BOOK NOW
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