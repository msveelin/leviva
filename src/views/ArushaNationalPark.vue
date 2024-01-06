<template>
    <div>
        <div class="intro">
            <div class="p-4">
                <landing-nav></landing-nav>
            </div>
            <div class="intro-main flex justify-center items-center">
                <div class="items-center flex flex-col p-10 justify-center">
                    <h1 class="text-5xl text-center mb-2 drop-shadow-xl homemade"> Arusha National Park
                    </h1>
                </div>
            </div>
        </div>
        <div class="p-10">
            <p>Nestled at the foothills of Mount Meru in Tanzania, Arusha National Park is a captivating blend of diverse
                landscapes, rich wildlife, and stunning vistas. While often overshadowed by its larger neighbors, this
                hidden gem offers a unique and intimate safari experience for those seeking the road less traveled.</p>
            <h2 class="font-bold mt-3 mb-2">Mount Meru's Majesty:</h2>
            <p class="mt-2">The park's centerpiece is the majestic Mount Meru, Tanzania's second-highest peak. Towering over
                the savannah, the mountain provides a dramatic backdrop to the park's landscapes. Adventurous visitors can
                embark on the challenging trek to Meru's summit for panoramic views of the surrounding plains and distant
                Mount Kilimanjaro.</p>
            <h2 class="font-bold mt-3 mb-2">Flora and Fauna Extravaganza:</h2>
            <p class="mt-2">
                Arusha National Park boasts an incredible diversity of ecosystems within its relatively compact size.
                Explore the lush rainforests where colobus monkeys swing from the trees, traverse the rolling hills dotted
                with giraffes and zebras, and marvel at the alkaline lakes that attract a myriad of bird species, including
                flamingos. The park is also home to buffalos, warthogs, and elusive leopards.
            </p>

            <p class="mt-2 italic">Discover the allure of Arusha National Park – where diverse landscapes and untamed beauty
                come together to create a truly unique safari experience!</p>

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
    background-image: url("@/assets/images/arusha.jpg");
    background-size: cover;
    object-fit: cover;
    background-position: center;
    background-repeat: no-repeat;
}

.intro-main {
    height: 80vh;
}
</style>