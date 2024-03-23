<template>

  <div class="bg-white">
    <landing-nav></landing-nav>
    <div class="bg-white">
      <carousel-slider></carousel-slider>
    </div>
    <div class="p-10 bg-white text-black">
      <h2 class="text-center font-semibold fjalla-one-regular text-2xl hover:scale-105">TRAVEL DESTINATIONS</h2>
      <h3 class="text-center text-5xl chelsea-market-regular animate__animated animate__bounceIn">YOUR GUIDE TO THE GREATEST WONDERS</h3>
      <div class="flex items-center justify-center">
        <div class="my-5 p-5 mt-5 w-3/4 grid grid-cols-4 gap-6">

          <div class="h-72 flex flex-col justify-between bg-amber-300 serengeti shadow-md rounded-md hover:scale-105 hover:ease-in-out p-6 text-white">
            <div>
              <h1 class="fjalla-one-regular text-xl">Serengeti National Park</h1>
              <p>Where the wilderness whispers and the lion roars.</p>
            </div>
            <div class="w-full">
              <button @click="$router.push('/serengeti')" class="bg-white w-full text-amber-400 rounded-md font-semibold p-2 hover:bg-amber-400 hover:text-white">Read More</button>
            </div>
          </div>
          <router-link to="/serengeti">
            <div class="h-72 bg-amber-300 rounded-md p-3 text-white">Serengeti</div>
          </router-link>

          <router-link to="/serengeti">
            <div class="h-72 bg-amber-300 rounded-md p-3 text-white">Serengeti</div>
          </router-link>

          <router-link to="/serengeti">
            <div class="h-72 bg-amber-300 rounded-md p-3 text-white">Serengeti</div>
          </router-link>
        </div>
      </div>
    </div>
    <div class="p-10 bg-white text-black mt-2">

      <div class="flex justify-center">
        <h1 class="text-center chelsea-market-regular text-4xl flex items-center mb-2"> <img :src="destination" class="h-20 w-20 mr-4"
                                                                             alt="">
          Tour Packages</h1>
      </div>

      <div class="mt-4 grid text-white grid-cols-1 lg:grid-cols-4 gap-4">
        <div class="p-1 rounded-md bg-black tarangire h-96 flex flex-col justify-end" >
          <div class="p-2 mt-1">
            <h1 class="text-xl font-bold mb-1">Tarangire National Park Day Trip</h1>
            <button class="menu-btn w-full  " @click="$router.push('/tarangire-day-safari')">VIEW MORE</button>
          </div>
        </div>
        <div class="p-1 rounded-md bg-black serengeti h-96 flex flex-col justify-end">
          <div class="p-2  mt-1">
            <h1 class="text-xl font-bold mb-1">Two Day Wonders in Nothern Tanzania</h1>
            <button class="menu-btn w-full  " @click="$router.push('/two-day-wonders')">VIEW MORE</button>
          </div>
        </div>
        <div class="p-1 rounded-md bg-black ngorongoro h-96 flex flex-col justify-end">
          <div class="p-2  mt-1">
            <h1 class="text-xl font-bold mb-1">Ngorongoro Day Trip</h1>
            <button class="menu-btn w-full" @click="$router.push('/ngorongoro')">VIEW MORE</button>
          </div>
        </div>
        <div class="p-1 rounded-md bg-black arusha h-96 flex flex-col justify-end">
          <div class="p-2  mt-1">
            <h1 class="text-xl font-bold mb-1">Arusha National Park Day Trip</h1>
            <button class="menu-btn w-full " @click="$router.push('/arusha-day-safari')"> VIEW MORE</button>
          </div>
        </div>
      </div>
    </div>


    <div class="p-10 bg-white text-black">
      <div class="flex justify-center">
        <h1 class="text-center gloria text-4xl flex items-center mb-2">
          The Adventure of a Lifetime with Leviva</h1>
      </div>
      <div class="lg:p-10 p-5 text-justify mt-3">
        <p>Embark on a journey like no other with Leviva Travel and Tours. Immerse yourself in the heart of untamed
          landscapes, where the call of the wild beckons and every moment is an exploration into the extraordinary. Our
          travel safaris are meticulously crafted to deliver an unforgettable experience, blending luxury with the thrill of
          the wilderness.</p>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6 p-3">
          <p>🌍 <b> Discover the Wild Wonders:</b>
            Step into the realm of majestic beasts and breathtaking landscapes. Our carefully curated safaris take you to
            the most iconic wildlife destinations, from the sweeping plains of the Serengeti to the enticing beauty of the
            Kilimanjaro. Witness the untamed beauty of nature as you encounter elephants roaming freely, lions on the prowl,
            and
            exotic birds painting the sky.</p>
          <p>🏞️ <b>Luxury Amidst the Wilderness:</b>
            Indulge in opulent accommodations that seamlessly blend with nature. Our carefully selected lodges and campsites
            provide the perfect balance between comfort and the authentic safari experience. Imagine waking up to the sounds
            of the wilderness, surrounded by the beauty of the great outdoors.</p>
          <p>🚙 <b>Expertly Guided Expeditions:</b>
            Our seasoned guides are passionate about wildlife and the regions they explore. With a wealth of knowledge,
            they'll lead you through the hidden gems of each destination, providing insights into the behavior of animals,
            local cultures, and conservation efforts. Every moment becomes a chance to learn and appreciate the wonders of
            the natural world</p>
          <p>🌅 <b>Bespoke Safari Experiences:</b>
            Tailor your adventure to match your desires. Whether you seek a family-friendly escapade, a romantic getaway, or
            a photography-focused expedition, we customize every safari to suit your preferences. From sunrise hot air
            balloon rides to intimate sundowner game drives, the choice is yours.</p>
          <p>🤝 <b>Book Your Safari Today:</b>
            Seize the opportunity to witness nature's grandeur in its purest form. Let [Your Safari Company Name] be your
            gateway to an extraordinary safari experience. Begin your journey by exploring our safari packages or contact
            our travel experts for a personalized itinerary. Adventure awaits – are you ready?</p>
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

.serengeti {
  background-image: url("../assets/images/serengeti.jpg");
  background-size: cover;
  object-fit: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: rgba(0, 0, 0, 0.5);
  /* Adjust the alpha value (0.0 to 1.0) for transparency */
  background-blend-mode: overlay;
  transition: transform 0.5s; /* Add transition effect for smooth scaling */
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