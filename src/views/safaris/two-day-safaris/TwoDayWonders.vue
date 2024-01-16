<template>
    <div class="bg-white text-black">
        <landing-nav></landing-nav>
    </div>
    <div>
        <div class="intro">
            <div class="intro-main bg-opacity-35 bg-black flex justify-center items-center">
                <div class="items-center flex flex-col p-10 justify-center">
                    <h1 class="text-5xl text-center mb-2 drop-shadow-xl homemade">Two Day Wonders in Nothern Tanzania
                    </h1>
                </div>
            </div>
        </div>
        <div class="p-10 bg-white text-black flex lg:flex-row text-justify flex-col">
            <div class="lg:w-2/3 w-full p-3">
                <p>Nestled in the heart of Tanzania's enchanting landscape, Arusha and Tarangire National Parks beckon with
                    a symphony of untamed beauty. Arusha National Park, a gem at the foothills of Mount Meru, unfolds a
                    tapestry of diverse ecosystems. Venture further into the wild embrace of Tarangire National Park, where
                    the landscape transforms into a mesmerizing dance of baobab trees and vast grasslands.
                </p>

                <h2 class="primary gloria text-xl mt-2 mb-3">Itinerary</h2>
                <h3 class="text-lg font-bold">Day 1: ARUSHA – TARANGIRE NATIONAL PARK</h3>
                <p>You will be picked up from the hotel and head to Tarangire National Park and start
                    your game drives. What else could be more exciting than visiting the home of
                    elephants and baobab trees? Explore the wildlife and nature till evening when you will
                    head to the lodge for dinner and your overnight stay</p>
                <div clas="mt-2"><span class="primary font-semibold mr-2">Accomodation:</span><span>Marera Valley</span>
                </div>
                <div><span class="primary font-semibold mr-2">Meals & Lunch:</span><span>Lunch & Dinner (Breakfast not
                        included)</span> </div>
                <h3 class="text-lg font-bold mt-3">Day 2: NGORONGORO CRATER</h3>
                <p class="mt-2">The tour will continue with a visit to the local village lying in the coffee plantations.
                    The
                    villagers will demonstrate the process of coffee farming and guide you through the
                    preparation of coffee from a bean to a cup. Sing and dance along with the Chaga
                    people as they are grinding, roasting, and boiling the beans. When the coffee is ready,
                    villagers will serve lunch - a national Chagga meal.</p>
                <div clas="mt-2"><span class="primary font-semibold mr-2">Accomodation:</span><span>No Accommodation. (End
                        of tour)</span></div>
                <div><span class="primary font-semibold mr-2">Meals & Lunch:</span><span> Breakfast & Lunch (Dinner is not
                        included)</span> </div>
            </div>
            <div class="lg:w-1/3 w-full p-3">
                <div class="border border-black p-3">
                    <h2 class="font-bold mb-2">Price:</h2>
                    <ul class="ml-3 list-disc">
                        <li><b>Budget Safari:</b> <br>
                            <p>Price starts from USD 500 (P/P) this is for 6 Travelers. (Group)</p>
                        </li>
                        <li><b>Midrange Safari:</b> <br>
                            <p>Price starts from USD850 (P/P) This rate is for 6 Travelers.</p>
                        </li>
                        <li><b>Luxury Safari:</b> <br>
                            <p>Price starts from USD1,500 (P/P) This rate is for 6 Travelers.</p>
                        </li>

                    </ul>
                    <p class="mt-2 text-red-600 italic">*Price may change due to hotel, camp, lodge availability*</p>
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
    background-image: url("@/assets/images/two-day.jpg");
    background-size: cover;
    object-fit: cover;
    background-position: center;
    background-repeat: no-repeat;
}

.intro-main {
    height: 80vh;
}
</style>