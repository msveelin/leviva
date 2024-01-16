<template>
    <landing-nav></landing-nav>
    <div>
        <div class="intro">
            <div class="intro-main bg-opacity-35 bg-black flex justify-center items-center">
                <div class="items-center flex flex-col p-10 justify-center">
                    <h1 class="text-5xl text-center mb-2 drop-shadow-xl homemade"> Materuni Day Trip
                    </h1>
                </div>
            </div>
        </div>
        <div class="p-10 bg-white text-black flex lg:flex-row text-justify flex-col">
            <div class="lg:w-2/3 w-full p-3">
                <p>A tour to Materuni Village and Waterfalls is a great way to spend a day away from the
                    bustle of town life. The walk to Materuni Waterfall offers a glimpse into the nature of
                    Tanzania allowing you either to prepare your body for the forthcoming climb to
                    Kilimanjaro or ease your muscles after the climb.
                </p>

                <h2 class="primary gloria text-xl mt-2 mb-3">Itinerary</h2>
                <p>The Materuni Waterfall tour starts with a walk through the area adjacent to the
                    waterfall, rich in beautiful natural scenery of Tanzania. It is an opportunity to see how
                    local fruit like avocados, mangos, lemons, and bananas grow, as well as learn some of
                    the local history, traditions, village economy, agricultural and cultural life. When you
                    get to the waterfall, you can refresh yourself in the natural pool, so swimsuits will
                    come in handy!
                    .</p>
                <p class="mt-2">The tour will continue with a visit to the local village lying in the coffee plantations.
                    The
                    villagers will demonstrate the process of coffee farming and guide you through the
                    preparation of coffee from a bean to a cup. Sing and dance along with the Chaga
                    people as they are grinding, roasting, and boiling the beans. When the coffee is ready,
                    villagers will serve lunch - a national Chagga meal.</p>
            </div>
            <div class="lg:w-1/3 w-full p-3">
                <div class="border border-black p-3">
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
    background-image: url("@/assets/images/materuni.jpg");
    background-size: cover;
    object-fit: cover;
    background-position: center;
    background-repeat: no-repeat;
}

.intro-main {
    height: 80vh;
}
</style>