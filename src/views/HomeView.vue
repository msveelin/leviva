<template>

  <div class="bg-white">
    <landing-nav></landing-nav>
    <div class="bg-white">
      <carousel-slider></carousel-slider>
    </div>
    <div class="p-10 bg-white text-black">
      <h2 class="text-center font-semibold fjalla-one-regular text-2xl hover:scale-105 drop-shadow-md">TRAVEL DESTINATIONS</h2>
      <h3 class="text-center text-5xl chelsea-market-regular animate__animated animate__bounceIn drop-shadow-md">YOUR GUIDE TO THE GREATEST WONDERS</h3>
      <div class="flex items-center justify-center">
        <div class=" p-5 mt-5 w-full md:w-3/4 grid grid-cols-2 md:grid-cols-4 gap-6">

          <div v-for="destination in destinations" :style="{ 'background-image': `url(http://localhost/leviva-backend/api/uploads/${destination?.image})` }" class="h-72 flex flex-col cursor-pointer justify-between bg-amber-300 serengeti shadow-md rounded-md hover:scale-105 hover:ease-in-out p-6 text-white">
            <div>
              <h1 class="fjalla-one-regular text-xl">{{destination?.name}}</h1>
            </div>
            <div class="w-full">
              <button @click="$router.push(`/destination-details/${destination?.destinationUniqueId}`)" class="bg-white w-full text-amber-400 rounded-md font-semibold p-2 hover:bg-amber-400 hover:text-white">Read More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="p-10 bg-white text-black mt-2">

      <div class="bg-white p-5">
        <h1 class="homemade drop-shadow-md text-3xl text-center">Where The Adventure Never  Stops</h1>

        <div class="p-10 text-lg text-center">
          <p class="my-1">A Tanzania holiday is an exclusive experience than any other! Tanzania is a top safari destination and has a lot to offer. From variety of selections such as experiencing an amazing Tanzania safari or relax and sun-bathe at the most beautiful beaches on Zanzibar Island.</p>
          <p class="my-1 text-amber-500">Is trekking Kilimanjaro in your bucket list? ,We also offer that.</p>
          <p class="my-1"><b>Leviva Travel and Tours</b>  offers the most extensive range of Tanzania vacation from solo, private to group joining safaris for single individuals, couples, families, friends, or groups of people from all over the world are able to book holidays directly in Tanzania also Zanzibar, including Flights or Hotel/accommodation bookings.</p>
        </div>
      </div>

      <div class="flex justify-center">
        <h1 class="text-center chelsea-market-regular text-5xl flex items-center mb-2"> <img :src="destination" class="h-20 w-20 mr-4"
                                                                             alt="">
          <span class="drop-shadow-md">Tour Packages</span></h1>
      </div>
      <div class="flex flex-col items-center justify-center">
        
        <div class="mt-4 w-3/4 grid text-white grid-cols-1 lg:grid-cols-4 gap-4">
          <div v-for="tourPackage in tour_packages" class="rounded-md w-full cursor-pointer h-72 shadow-md relative overflow-hidden">
            <img :src="`http://localhost/leviva-backend/api/uploads/${tourPackage?.image}`" class="absolute rounded-md top-0 object-cover left-0 h-72 w-full hover:transition-transform hover:duration-300 hover:transform hover:scale-125 ease-in-out">
            <div class="p-2 mt-1 overlaying w-full absolute bottom-0">
              <h1 class="text-xl font-bold mb-1">{{tourPackage?.name}}</h1>
              <button class="menu-btn w-full" @click="$router.push(`/package-details/${tourPackage?.tourPackageUniqueId}`)">VIEW MORE</button>
            </div>
          </div>
        </div>

        <div class="flex items-center justify-center my-4">
          <button @click="$router.push('/safaris')" class="bg-amber-500 text-white p-3 mt-4 shadow-md rounded-md hover:scale-105 hover:bg-black">VIEW MORE PACKAGES</button>
        </div>
      </div>
    </div>


    <div class="p-10 bg-white text-black">
      <div class="flex justify-center">
        <h1 class="text-center chelsea-market-regular drop-shadow-md text-5xl flex items-center">
          The Adventure of a Lifetime with Leviva</h1>
      </div>
      <div class="lg:p-10 p-5 text-justify mt-3">
        
          <div class="w-full flex text-lg flex-col items-center justify-center">
            <p class="w-2/3">Embark on a journey like no other with Leviva Travel and Tours. Immerse yourself in the heart of untamed
              landscapes, where the call of the wild beckons and every moment is an exploration into the extraordinary. Our
              travel safaris are meticulously crafted to deliver an unforgettable experience, blending luxury with the thrill of
              the wilderness.</p>
            <div class="flex items-center mt-7 w-2/3">
              <div class="w-1/3 mr-7">
                <img src="../assets/images/IMG_0088.jpg" class="w-full rounded-md h-auto hover:scale-105 cursor-pointer object-cover" alt="">
              </div>
              <p class="w-2/3">🌍 <b> Discover the Wild Wonders:</b>
                Step into the realm of majestic beasts and breathtaking landscapes. Our carefully curated safaris take you to
                the most iconic wildlife destinations, from the sweeping plains of the Serengeti to the enticing beauty of the
                Kilimanjaro. Witness the untamed beauty of nature as you encounter elephants roaming freely, lions on the prowl,
                and
                exotic birds painting the sky.</p>
            </div>
            <div class="flex items-center mt-7 w-2/3">
              <p class="w-2/3">🏞️ <b>Luxury Amidst the Wilderness:</b>
                Indulge in opulent accommodations that seamlessly blend with nature. Our carefully selected lodges and campsites
                provide the perfect balance between comfort and the authentic safari experience. Imagine waking up to the sounds
                of the wilderness, surrounded by the beauty of the great outdoors.</p>
                <div class="w-1/3 ml-7">
                  <img src="../assets/images/IMG_5703.jpg" alt="" class="w-full rounded-md h-auto hover:scale-105 cursor-pointer object-cover">
                </div>
            </div>
            <div class="flex items-center mt-7 w-2/3">
              <div class="w-1/3 mr-7">
                <img src="../assets/images/expertguides.jpeg" alt="" class="w-full rounded-md h-auto hover:scale-105 cursor-pointer object-cover">
              </div>
              <p class="w-2/3">🚙 <b>Expertly Guided Expeditions:</b>
                Our seasoned guides are passionate about wildlife and the regions they explore. With a wealth of knowledge,
                they'll lead you through the hidden gems of each destination, providing insights into the behavior of animals,
                local cultures, and conservation efforts. Every moment becomes a chance to learn and appreciate the wonders of
                the natural world</p>
            </div>
            <div class="flex items-center mt-7 w-2/3">
              <p class="w-2/3">🌅 <b>Bespoke Safari Experiences:</b>
                Tailor your adventure to match your desires. Whether you seek a family-friendly escapade, a romantic getaway, or
                a photography-focused expedition, we customize every safari to suit your preferences. From sunrise hot air
                balloon rides to intimate sundowner game drives, the choice is yours.</p>
                <div class="w-1/3 ml-7">
                  <img src="../assets/images/IMG_9310.jpg" alt="" class="w-full rounded-md h-auto hover:scale-105 cursor-pointer object-cover">
                </div>
            </div>
            <div class="flex items-center mt-7 w-2/3">
              <div class="w-1/3 mr-7">
                <img src="../assets/images/IMG_9393.jpg" alt="" class="w-full rounded-md h-auto hover:scale-105 cursor-pointer object-cover">
              </div>
              <p class="w-2/3">🤝 <b>Book Your Safari Today:</b>
                Seize the opportunity to witness nature's grandeur in its purest form. Let [Your Safari Company Name] be your
                gateway to an extraordinary safari experience. Begin your journey by exploring our safari packages or contact
                our travel experts for a personalized itinerary. Adventure awaits – are you ready?</p>
            </div>
          </div>
          
        
        <p class="mt-10 gloria text-xl text-center">Leviva Travel and Tours - Your Safari, Your Way.</p>
      </div>
    </div>
    <footer-bar></footer-bar>
  </div>
</template>

<script setup>
import destination from '@/assets/destination.svg';
import FooterBar from '@/components/shared/FooterBar.vue';
import LandingNav from '@/components/shared/LandingNav.vue';
import CarouselSlider from "@/components/shared/CarouselSlider.vue";

import {useApiStore} from "@/stores/index.js";
import {onMounted, ref} from "vue";

const apiStore = useApiStore();
const tour_packages = ref()

const destinations = ref(null)

// Function to fetch destinations data
const fetchDestinationData = async () => {
  try {
    // Call the fetchData action from the API store
    await apiStore.fetchData('destination');
    // Update the destinations data with the fetched data
    let fetchedData = apiStore.data?.destination;
    destinations.value = fetchedData.splice(0,8);
  } catch (error) {
    // Handle any errors
    console.error('Error fetching destinations:', error);
  }
};

// Function to fetch tour_packages data
const fetchData = async () => {
  try {
    // Fetch data from the API store
    await apiStore.fetchData('tour_packages');
    // Get the fetched data
    const fetchedData = apiStore.data?.tour_packages;
    // Decode JSON fields in the fetched data
    tour_packages.value = fetchedData.slice(0,4)
  } catch (error) {
    // Handle any errors
    console.error('Error fetching tour packages: ', error);
  }
};

onMounted(() => {
  fetchData()
  fetchDestinationData()
})
</script>

<style scoped>
.intro {
  background-image: url("../assets/images/intro-bg.png");
  background-size: cover;
  object-fit: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.intro-main {
  height: 80vh;
}

.tarangire {
  background-image: url("../assets/images/tarangire.jpg");
  background-size: cover;
  object-fit: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: rgba(0, 0, 0, 0.5);
  /* Adjust the alpha value (0.0 to 1.0) for transparency */
  background-blend-mode: overlay;
}

.selous {
  background-image: url("../assets/images/raissa-lara-lutolf-fasel-Qaygg2blNl8-unsplash.jpg");
  background-size: cover;
  object-fit: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: rgba(0, 0, 0, 0.5);
  /* Adjust the alpha value (0.0 to 1.0) for transparency */
  background-blend-mode: overlay;
}

.mikumi {
  background-image: url("../assets/images/olga-budko-hl0W9gS0C6k-unsplash.jpg");
  background-size: cover;
  object-fit: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: rgba(0, 0, 0, 0.5);
  /* Adjust the alpha value (0.0 to 1.0) for transparency */
  background-blend-mode: overlay;
}

.kili {
  background-image: url("../assets/images/kilimanjaro.jpg");
  background-size: cover;
  object-fit: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: rgba(0, 0, 0, 0.5);
  /* Adjust the alpha value (0.0 to 1.0) for transparency */
  background-blend-mode: overlay;
}

.lake-manyara {
  background-image: url("../assets/images/lake-manyara.jpg");
  background-size: cover;
  object-fit: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: rgba(0, 0, 0, 0.5);
  /* Adjust the alpha value (0.0 to 1.0) for transparency */
  background-blend-mode: overlay;
}

.serengeti {
  background-size: cover;
  object-fit: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: rgba(0, 0, 0, 0.5);
  /* Adjust the alpha value (0.0 to 1.0) for transparency */
  background-blend-mode: overlay;
  transition: transform 0.5s; /* Add transition effect for smooth scaling */
}

.overlaying{
  background-color: rgba(0, 0, 0, 0.5);
  /* Adjust the alpha value (0.0 to 1.0) for transparency */
  background-blend-mode: overlay;
}


.ngorongoro {
  background-image: url("../assets/images/ngorongoro.jpg");
  background-size: cover;
  object-fit: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: rgba(0, 0, 0, 0.5);
  /* Adjust the alpha value (0.0 to 1.0) for transparency */
  background-blend-mode: overlay;
}

.arusha {
  background-image: url("../assets/images/arusha.jpg");
  background-size: cover;
  object-fit: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: rgba(0, 0, 0, 0.5);
  /* Adjust the alpha value (0.0 to 1.0) for transparency */
  background-blend-mode: overlay;
}

</style>