<template>
    <landing-nav></landing-nav>
    <div>
        <div class="intro">

            <div class="intro-main flex justify-center items-center">
                <div class="items-center flex flex-col p-10 justify-center">
                    <h1 class="text-5xl text-center mb-2 drop-shadow-xl homemade"> Chemka Hot Spring Day Safari
                    </h1>
                </div>
            </div>
        </div>
        <div class="p-10 bg-white text-black flex flex-col lg:flex-row text-justify">

            <div class="lg:w-2/3 w-full p-3">
                <p>Welcome to a rejuvenating adventure with our Chemka Hot Springs Day Safari, a journey that combines the
                    thrill of
                    exploration with the serenity of natural hot springs. Nestled in the heart of Tanzania, Chemka Hot
                    Springs is a hidden oasis surrounded by lush greenery and towering palm trees. The crystal-clear,
                    turquoise water of the springs beckons you to unwind and soak in its therapeutic warmth, creating an
                    idyllic escape from the hustle and bustle of everyday life.</p>
                <p class="mt-2">Maji Moto, known locally as Kikuletwa Hot springs, is paradisiac oasis amidst the
                    Tanzanian savannah, offers captivating, Bounty-styled views, crystal-clean water, and
                    dense vegetation around. </p>
                <p class="mt-2">Chemka oasis is a unique phenomenon – it is the only place in Tanzania (and most
                    likely in the whole East Africa), where the groundwater actively interacted with
                    geothermal sources, forming a few small lakes with warm, never-stagnating water,
                    which purity is not inferior to the best Dominican or Maldivian resorts.</p>
                <h2 class="gloria primary text-2xl mt-4 mb-3">Itinerary</h2>
                <h3 class="font-bold">Departure from Arusha:</h3>
                <p>
                    Kick off your Chemka Hot Springs Day Safari with a comfortable morning departure from Arusha. Our
                    experienced guide will accompany you on a scenic drive through the Tanzanian countryside, providing
                    insights into the local culture and landscape.</p>
                <h3 class="font-bold">Arrival at Chemka Hot Springs:</h3>
                <p>As you arrive at Chemka, be prepared to be mesmerized by the natural beauty that unfolds before you. The
                    emerald green water, surrounded by lush vegetation, creates an oasis of tranquility. Take a leisurely
                    stroll
                    around the area, appreciating the unique flora and fauna.</p>
                <h3 class="font-bold">Relaxation by the Springs:
                </h3>
                <p>Change into your swimwear and submerge yourself in the warm, mineral-rich waters of Chemka Hot Springs.
                    The springs are renowned for their therapeutic properties, offering a perfect setting to relax and
                    rejuvenate. Float peacefully or bask in the sun as you let the soothing heat work its magic.</p>
                <h3 class="font-bold">Picnic Lunch:</h3>
                <p>Enjoy a sumptuous picnic lunch prepared by our team, featuring local delicacies and refreshing beverages.
                    Relish your meal in the shade of palm trees, savoring the flavors amidst the natural surroundings.</p>
                <h3 class="font-bold">Return Journey</h3>
                <p>Bid farewell to Chemka Hot Springs as you embark on your journey back to Arusha. Reflect on the day's
                    experiences and enjoy the changing colors of the sky as the sun sets over the Tanzanian landscape.</p>
            </div>
            <div class="lg:w-1/3 w-full p-3">
                <div class="border border-black p-2">
                    <h2 class="font-bold mb-2">Price:</h2>
                    <ul class="ml-3 list-disc">
                        <li>1pax: US $250 pp</li>
                        <li>2pax: US $140 pp</li>
                        <li>3pax: US $103 pp</li>
                        <li>4-6pax: US $98 pp</li>
                    </ul>
                    <h2 class="font-bold mb-2">Price Inclusion:</h2>
                    <ul class="ml-3 mb-3 list-disc">
                        <li>Lunch box</li>
                        <li>Soft Drinks & Water</li>
                        <li>All Entry Fee</li>
                        <li>Government Tax 18%</li>
                        <li>Transfer from Arusha (Go & Return)</li>
                        <li>Guided tour (coffee plantation, Waterfalls)</li>
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
    background-image: url("@/assets/images/kikuletwa.jpg");
    background-size: cover;
    object-fit: cover;
    background-position: center;
    background-repeat: no-repeat;
}

.intro-main {
    height: 80vh;
}
</style>