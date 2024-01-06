<template>
    <div>
        <div class="intro">
            <div class="p-4">
                <landing-nav></landing-nav>
            </div>
            <div class="intro-main flex justify-center items-center">
                <div class="items-center flex flex-col p-10 justify-center">
                    <h1 class="text-5xl text-center mb-2 drop-shadow-xl homemade"> Tarangire National Park Day Safari
                    </h1>
                </div>
            </div>
        </div>
        <div class="p-10 flex text-justify flex-col lg:flex-row">
            <div class="lg:w-2/3 w-full p-3">
                <p>Embark on an awe-inspiring journey into the heart of Tanzania's wilderness with our Tarangire National
                    Park Safari. Known for its iconic baobab trees, diverse landscapes, and abundant wildlife, Tarangire
                    National Park offers an unforgettable safari experience. From vast savannas to the meandering Tarangire
                    River, this safari promises encounters with majestic creatures and the beauty of untamed nature.</p>
                <p>Tarangire is often referred to as the "Land of Giants" due to its impressive population of baobab trees.
                    These iconic, ancient trees dot the landscape, providing a surreal and picturesque setting. The park is
                    one of the best places in Tanzania to witness these massive and distinctive trees, offering excellent
                    photo opportunities.</p>
            </div>
            <div class="lg:w-1/3 w-full p-3">
                <div class="border border-white p-3">
                    <h2 class="font-bold mb-2">Price:</h2>
                    <ul class="ml-3 list-disc">
                        <li>1pax: US $350 pp</li>
                        <li>2pax: US $340 pp</li>
                        <li>3pax: US $320 pp</li>
                        <li>4-7pax: US $300 pp</li>
                    </ul>
                    <h2 class="font-bold mt-2 mb-2">Price Inclusion:</h2>
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
    background-image: url("@/assets/images/IMG_9310.jpg");
    background-size: cover;
    object-fit: cover;
    background-position: center;
    background-repeat: no-repeat;
}

.intro-main {
    height: 80vh;
}</style>