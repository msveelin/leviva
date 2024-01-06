<template>
    <div>
        <div class="intro">
            <div class="p-4">
                <landing-nav></landing-nav>
            </div>
            <div class="intro-main flex justify-center items-center">
                <div class="items-center flex flex-col p-10 justify-center">
                    <h1 class="text-5xl text-center mb-2 drop-shadow-xl homemade"> Tarangire National Park
                    </h1>
                </div>
            </div>
        </div>
        <div class="p-10">
            <p>Nestled in the heart of Tanzania, Tarangire National Park stands as a testament to the country's commitment
                to wildlife conservation. This breathtaking reserve, covering over 2,800 square kilometers, is a haven for
                nature enthusiasts, offering a unique blend of diverse landscapes and abundant wildlife.</p>
            <h2 class="font-bold mt-3 mb-2">Wildlife Extravaganza:</h2>
            <p class="mt-2">Tarangire is renowned for its rich biodiversity, boasting a mesmerizing array of wildlife.
                Massive herds of elephants roam freely, while majestic lions, graceful giraffes, and zebras paint a vivid
                picture against the backdrop of the African savannah. Birdwatchers will delight in the park's avian
                treasures, with over 500 bird species gracing the skies.</p>
            <h2 class="font-bold mt-3 mb-2">Spectacular Landscapes:</h2>
            <p class="mt-2">
                The landscapes of Tarangire National Park are a photographer's dream. Vast savannahs stretch as far as the
                eye can see, dotted with iconic baobab trees that cast dramatic silhouettes against the setting sun. The
                meandering Tarangire River adds a touch of serenity, attracting wildlife for refreshing water sources.
            </p>
            <h2 class="font-bold mt-3 mb-2">Unforgettable Activities:</h2>
            <p class="mt-2">Embark on a thrilling game drive through the park's well-maintained trails, allowing you to
                witness the magic of Tarangire up close. The park offers guided nature walks for a more intimate experience,
                and the adventurous can explore the rugged terrains on a guided hiking expedition.</p>
            <h2 class="font-bold mt-3 mb-2">Conservation at its Core:</h2>
            <p class="mt-2">Tarangire National Park is not only a tourist destination but a testament to Tanzania's
                commitment to conservation. The park actively engages in various initiatives aimed at preserving its
                ecosystems and fostering a sustainable environment. Local communities play a crucial role in these efforts,
                contributing to the park's long-term success.</p>
            <h2 class="font-bold mt-3 mb-2">Best Times to Visit:</h2>
            <p class="mt-2">For an optimal experience, plan your visit during the dry season (June to October) when wildlife
                congregates around the Tarangire River. This period provides unparalleled opportunities for game viewing and
                photography.</p>

            <h2 class="font-bold mt-3 mb-2">Plan Your Safari Adventure:</h2>
            <p class="mt-2">Start your journey to Tarangire National Park by packing light layers, a good pair of
                binoculars, and a camera to capture the mesmerizing moments. Be sure to check for any travel advisories or
                park regulations before your visit.</p>

            <p class="mt-5">In conclusion, Tarangire National Park is a wildlife enthusiast's paradise, inviting you to
                immerse yourself in the beauty of nature and contribute to the conservation of this extraordinary ecosystem.
                Plan your safari adventure today and witness the wonders that make Tarangire a jewel in Tanzania's crown.
            </p>
            <p class="mt-2 italic">Explore, experience, and preserve the magic of Tarangire National Park!</p>

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
}
</style>