<template>
    <landing-nav></landing-nav>
    <div>
        <div class="intro">
            <div class="intro-main flex justify-center items-center">
                <div class="items-center text-center p-5 flex flex-col justify-center">
                    <h1 class="lg:text-7xl text-4xl mb-2 drop-shadow-xl homemade">Safari dreams come true.</h1>
                </div>
            </div>
        </div>
        <div class="p-10 bg-white text-black text-justify">
            <h1 class="gloria text-3xl text-center mb-3">Unleash the Adventure: Discover Extraordinary Safaris</h1>
            <div class="p-3">
                <p>Welcome to the wild side of travel with Leviva's Safari Experiences. Immerse yourself in the heart of
                    nature, where every sunrise brings a new spectacle and every sunset paints the savannah in warm hues.
                    Our carefully curated safari adventures promise an awe-inspiring journey into the world's most iconic
                    landscapes, teeming with majestic wildlife.</p>
                <div class="grid grid-cols-1 lg:grid-cols-2 mt-4 gap-6">
                    <p>🌍<b> Unparalleled Expertise:</b>
                        Embark on a journey guided by experts passionate about wildlife and the great outdoors. Our seasoned
                        guides are your companions in exploration, sharing their extensive knowledge of each destination,
                        from the mysterious depths of the Amazon to the vast plains of the Serengeti.</p>
                    <p>🏞️ <b>Tailored Safari Experiences:</b>
                        At Leviva Travel and Tours, we understand that every adventurer is unique. That's why our safari
                        experiences are crafted to suit your preferences. Whether you crave heart-pounding encounters with
                        the Big Five or dream of serene moments in untouched landscapes, we tailor each safari to create
                        memories that resonate with you.</p>
                    <p>🚙 <b>Luxury Amidst the Wilderness:</b>
                        Indulge in a harmonious blend of luxury and nature. Our carefully selected lodges and campsites
                        offer a sanctuary in the wild, ensuring that your safari is not just an adventure but a comfortable
                        retreat. Imagine waking up to the sounds of nature and sipping your morning coffee with elephants as
                        your neighbors.</p>
                </div>
            </div>

            <h1 class="gloria text-3xl text-center mt-3 mb-3">Explore Our Safari Packages</h1>
            <div class="grid grid-cols-1 lg:grid-cols-4 gap-4 text-white">
                <div class="p-1 rounded-md bg-black balloon h-96 flex flex-col justify-end">
                    <div class="p-2 mt-1 w-full">
                        <h1 class="text-xl font-bold mb-1">Balloon Safaris</h1>
                        <button class="menu-btn w-full" @click="$router.push('/balloon-safaris')">VIEW MORE</button>
                    </div>
                </div>
                <div class="p-1 rounded-md bg-black serengeti h-96 flex flex-col justify-end">
                    <div class="p-2  mt-1">
                        <h1 class="text-xl font-bold mb-1">Day Safaris</h1>
                        <button class="menu-btn w-full  " @click="$router.push('/day-safaris')">VIEW MORE</button>
                    </div>
                </div>
                <div class="p-1 rounded-md bg-black ngorongoro h-96 flex flex-col justify-end">
                    <div class="p-2  mt-1">
                        <h1 class="text-xl font-bold mb-1">2 Days of Wonders In Nothern Tanzania</h1>
                        <button class="menu-btn w-full  " @click="$router.push('/two-day-wonders')"><span>VIEW MORE</span></button>
                    </div>
                </div>
                <div class="p-1 rounded-md bg-black arusha h-96 flex flex-col justify-end">
                    <div class="p-2  mt-1">
                        <h1 class="text-xl font-bold mb-1">3-day Safaris</h1>
                        <button class="menu-btn w-full " @click="$router.push('/three-day-wonders')"><span>VIEW MORE</span></button>
                    </div>
                </div>
            </div>

            <h1 class="gloria text-3xl text-center mt-7 mb-3">What to wear on a safari</h1>
            <div>
                <p class="mt-2 mb-1">Get ready to safari in style with our funky guide to the coolest threads for an African
                    adventure! Rock those neutral khakis and browns to blend with the wild while strutting in comfy,
                    breathable cotton. Long sleeves and pants not only fend off the sun but also keep those pesky insect
                    bites at bay, ensuring you're a safari sensation day and night. Slip into some sturdy sneakers or hiking
                    boots to navigate the terrain, and top it off with a chic, wide-brimmed hat – safari chic, anyone?</p>
                <p class="mt-2 mb-1">Don't forget your shades, sunscreen, and a lightweight jacket for those cool safari
                    evenings. Dive into the wild with a splash by packing your swimwear for lodge pools or beachside
                    surprises. And of course, no adventure is complete without a buff or scarf to add that touch of glam.
                    Snap those safari moments with your camera and binoculars in tow, and always keep the mood light and
                    breezy with casual and comfy campwear. Bugs, be gone – you're now the trendsetter of the savannah!
                    🦓🕶️✨
                </p>
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
    background-image: url("../assets/images/safari-bg.jpg");
    background-size: cover;
    object-fit: cover;
    background-position: center;
    background-repeat: no-repeat;
}

.intro-main {
    height: 80vh;
}

.balloon {
    background-image: url("../assets/images/balloon.jpg");
    background-size: cover;
    object-fit: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-color: rgba(0, 0, 0, 0.5);
    /* Adjust the alpha value (0.0 to 1.0) for transparency */
    background-blend-mode: overlay;
}

.serengeti {
    background-image: url("../assets/images/day-safaris.jpg");
    background-size: cover;
    object-fit: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-color: rgba(0, 0, 0, 0.5);
    /* Adjust the alpha value (0.0 to 1.0) for transparency */
    background-blend-mode: overlay;
}

.ngorongoro {
    background-image: url("../assets/images/two-day.jpg");
    background-size: cover;
    object-fit: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-color: rgba(0, 0, 0, 0.5);
    /* Adjust the alpha value (0.0 to 1.0) for transparency */
    background-blend-mode: overlay;
}

.arusha {
    background-image: url("../assets/images/three-day.jpg");
    background-size: cover;
    object-fit: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-color: rgba(0, 0, 0, 0.5);
    /* Adjust the alpha value (0.0 to 1.0) for transparency */
    background-blend-mode: overlay;
}
</style>