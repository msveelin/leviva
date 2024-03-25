<template>
    <div class="bg-white">
        <landing-nav></landing-nav>
        <div class="intro">
            <div class="intro-main flex justify-center items-center">
                <div class="items-center flex flex-col p-10 justify-center">
                    <h1 class="text-7xl text-center mb-2 drop-shadow-xl chelsea-market-regular"> Ngorongoro Conservation
                        Area
                    </h1>
                </div>
            </div>
        </div>
        <div class="p-10 text-black">
            <p>In the heart of Tanzania, the Ngorongoro Conservation Area stands as a testament to the country's
                dedication to preserving its natural heritage. Spanning over 8,000 square kilometers, this awe-inspiring
                sanctuary is a haven for wildlife enthusiasts, offering a captivating blend of diverse landscapes and
                abundant wildlife.</p>
            <h2 class="font-bold mt-3 mb-2">The Great Wildebeest Migration:</h2>
            <p class="mt-2">Serengeti National Park is home to one of the most spectacular natural events on Earth—the
                Great
                Wildebeest Migration. Witness millions of wildebeest, zebras, and gazelles as they traverse the vast
                plains,
                braving crocodile-infested rivers and predators on their journey in search of greener pastures. This
                awe-inspiring spectacle unfolds between the Serengeti and Kenya's Maasai Mara, providing a
                once-in-a-lifetime opportunity for visitors.</p>
            <h2 class="font-bold mt-3 mb-2">Wildlife Wonderland:</h2>
            <p class="mt-2">
                Renowned for its unrivaled biodiversity, the Ngorongoro Conservation Area is home to an astonishing
                array of wildlife. Witness the awe-inspiring sight of massive herds of wildebeest and zebras migrating
                across the plains, while majestic lions and elusive leopards roam freely. The area's numerous watering
                holes attract a myriad of bird species, making it a paradise for birdwatchers.
            </p>
            <h2 class="font-bold mt-3 mb-2">Spectacular Landscapes:</h2>
            <p class="mt-2">Immerse yourself in the breathtaking landscapes of the Ngorongoro Conservation Area. From
                the vast grassy plains to the dense forests and shimmering lakes, every corner of this protected area
                offers a feast for the senses. Marvel at the iconic silhouette of the Ngorongoro Crater, a natural
                wonder that provides a sanctuary for a diverse range of flora and fauna.</p>
            <h2 class="font-bold mt-3 mb-2">Unforgettable Activities:</h2>
            <p class="mt-2">Embark on an unforgettable safari adventure through the Ngorongoro Conservation Area, where
                every turn presents a new and exciting wildlife encounter. Whether you choose to explore the crater
                floor on a game drive or embark on a guided walking safari along the crater rim, there are endless
                opportunities to connect with nature in this pristine wilderness.</p>
            <h2 class="font-bold mt-3 mb-2">Best Times to Visit:</h2>
            <p class="mt-2">To witness the incredible wildlife spectacle of the Ngorongoro Conservation Area, plan your
                visit during the dry season (June to October). During this time, the vegetation is sparse, making it
                easier to spot animals congregating around water sources.</p>


            <p class="mt-2 italic">Amidst the untamed beauty of the Ngorongoro Conservation Area, nature whispers secrets of timeless wonder!</p>

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
    background-image: url("@/assets/images/serengeti.jpg");
    background-size: cover;
    object-fit: cover;
    background-position: center;
    background-repeat: no-repeat;
}

.intro-main {
    height: 80vh;
}
</style>