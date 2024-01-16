<template>
    <landing-nav></landing-nav>
    <div>
        <div class="intro">
            <div class="intro-main flex justify-center items-center">
                <div class="items-center flex flex-col p-10 justify-center">
                    <h1 class="text-5xl text-center mb-2 drop-shadow-xl homemade"> Arusha National Park Day Safari
                    </h1>
                </div>
            </div>
        </div>
        <div class="p-10 bg-white text-black flex lg:flex-row text-justify flex-col">
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
                <h2 class="primary gloria text-xl mt-2 mb-3">Itinerary</h2>
                <p>Picked up in the morning after breakfast and heading to Arusha National Park, A
                    combines walking and jeep safari tour as a day that gives you a wonderful memory,
                    varied view of the Arusha National Parks. The park has an incredible variety of Fauna
                    and flora which cannot fail to impress. Hollywood also chooses this region to film
                    different movies such as “Hatari” in which hard Kruger starred alongside the
                    legendary John Wagne.</p>
                <p class="mt-2">Your day trip will include a visit to the ngurudoto Crater, often called little
                    Ngorongoro. Along the way you might see the troop of olive baboon, different birds,
                    and plant spices to small Serengeti where we will see different animals such as
                    buffaloes, waterbucks, giraffes, warthogs and so on. Occasionally Elephants can be
                    seen and once can also sport a leopard. At Momella gate and armed ranger will be
                    waiting for you to accompany you on your walking safari to Tululusia water falls that
                    will give you a chance to experience the wildlife up close, you will have your lunch at
                    picnic site and in the afternoon, you will continue with safari through Momela lake
                    where you will see different variety of bird species. From here we will be heading
                    towards the gate on our way to Arusha town/ Hotel.</p>
            </div>
            <div class="lg:w-1/3 w-full p-3">
                <div class="border border-black p-3">
                    <h2 class="font-bold mb-2">Price:</h2>
                    <ul class="ml-3 list-disc">
                        <li>1pax: US $310 pp</li>
                        <li>2pax: US $220 pp</li>
                        <li>3pax: US $162 pp</li>
                        <li>4-6pax: US $148 pp</li>
                    </ul>
                    <h2 class="font-bold mb-2">Price Inclusion:</h2>
                    <ul class="ml-3 mb-3 list-disc">
                        <li>Lunch box</li>
                        <li>Water</li>
                        <li>All Entry Fee</li>
                        <li>Government Tax 18%</li>
                        <li>Safari Jeep (Go & Return)</li>
                    
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