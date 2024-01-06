<template>
    <div>
        <div class="intro">
            <div class="p-4">
                <landing-nav></landing-nav>
            </div>
            <div class="intro-main flex justify-center items-center">
                <div class="items-center flex flex-col p-10 justify-center">
                    <h1 class="text-5xl text-center mb-2 drop-shadow-xl homemade"> Serengeti National Park
                    </h1>
                </div>
            </div>
        </div>
        <div class="p-10">
            <p>Serengeti National Park stands as a testament to the raw beauty and untamed wilderness of Africa. This iconic
                park, renowned for its annual wildebeest migration and diverse ecosystems, promises an unforgettable safari
                experience for nature enthusiasts and wildlife lovers alike.</p>
            <h2 class="font-bold mt-3 mb-2">The Great Wildebeest Migration:</h2>
            <p class="mt-2">Serengeti National Park is home to one of the most spectacular natural events on Earth—the Great
                Wildebeest Migration. Witness millions of wildebeest, zebras, and gazelles as they traverse the vast plains,
                braving crocodile-infested rivers and predators on their journey in search of greener pastures. This
                awe-inspiring spectacle unfolds between the Serengeti and Kenya's Maasai Mara, providing a
                once-in-a-lifetime opportunity for visitors.</p>
            <h2 class="font-bold mt-3 mb-2">Diverse Wildlife:</h2>
            <p class="mt-2">
                Beyond the migration, Serengeti boasts an incredible diversity of wildlife. The "Big Five" – lions,
                elephants, leopards, buffalos, and rhinoceros – roam freely, offering thrilling encounters for safari-goers.
                Cheetahs sprint across the plains, giraffes gracefully browse treetops, and hyenas lurk in the shadows,
                creating a dynamic and balanced ecosystem.
            </p>
            <h2 class="font-bold mt-3 mb-2">Serengeti's Varied Landscapes:</h2>
            <p class="mt-2">The park's landscapes are as diverse as its wildlife. From the expansive grasslands of the
                Serengeti Plains to the wooded hills of the Seronera Valley, each region offers a unique perspective.
                Acacia-dotted savannahs, rocky outcrops known as kopjes, and winding rivers complete the picturesque
                scenery, making every game drive a visual feast.</p>
            <h2 class="font-bold mt-3 mb-2">Conservation at its Core:</h2>
            <p class="mt-2">Serengeti is not just a wildlife destination; it's a conservation success story. The park's
                management and local communities collaborate to protect its flora and fauna, ensuring the delicate balance
                of this ecosystem endures for future generations.</p>
            <h2 class="font-bold mt-3 mb-2">When to Visit:</h2>
            <p class="mt-2">The best time to visit Serengeti National Park depends on your interests. The dry season (from
                June to October) offers prime game viewing, while the wet season (November to May) transforms the landscape
                into a lush paradise with newborn animals and migratory birds.</p>


            <p class="mt-2 italic">Explore the untamed beauty, witness extraordinary wildlife, and create lasting memories
                in Serengeti National Park!</p>

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
}</style>