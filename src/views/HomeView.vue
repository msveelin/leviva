<template>
  <main class="intro  bg-black text-white">
    <div class="p-4 fixed top-0 w-full">
      <landing-nav></landing-nav>
    </div>
    <div class="intro-main pt-10 flex justify-center items-center">
      <div class="items-center flex flex-col justify-center">
        <h1 class="text-6xl mb-2 homemade drop-shadow-xl">Welcome to the Safaris</h1>
        <button class="intro-btn mt-3"><span>Book Now</span></button>
      </div>
    </div>

  </main>
  <div class="p-10 mt-2">
    <div class="flex justify-center">
      <h1 class="text-center gloria text-4xl flex items-center mb-2"> <img :src="destination" class="h-20 w-20 mr-4"
          alt="">
        Popular Destinations</h1>
    </div>

    <div class="mt-4 grid grid-cols-4 gap-4">
      <div class="p-1 rounded-md bg-black tarangire h-96 flex flex-col justify-end">
        <div class="p-2 mt-1">
          <h1 class="text-xl font-bold mb-1">Tarangire National Park</h1>
          <button class="menu-btn w-full  "><span>VIEW MORE</span></button>
        </div>
      </div>
      <div class="p-1 rounded-md bg-black serengeti h-96 flex flex-col justify-end">
        <div class="p-2  mt-1">
          <h1 class="text-xl font-bold mb-1">Serengeti National Park</h1>
          <button class="menu-btn w-full  "><span>VIEW MORE</span></button>
        </div>
      </div>
      <div class="p-1 rounded-md bg-black ngorongoro h-96 flex flex-col justify-end">
        <div class="p-2  mt-1">
          <h1 class="text-xl font-bold mb-1">Ngorongoro Conservation Area</h1>
          <button class="menu-btn w-full   "><span>VIEW MORE</span></button>
        </div>
      </div>
      <div class="p-1 rounded-md bg-black arusha h-96 flex flex-col justify-end">
        <div class="p-2  mt-1">
          <h1 class="text-xl font-bold mb-1">Arusha National Park</h1>
          <button class="menu-btn w-full "><span>VIEW MORE</span></button>
        </div>
      </div>
    </div>
  </div>

  <div class="p-10 mt-2">
    <div class="flex justify-center">
      <h1 class="text-center gloria text-4xl flex items-center mb-2">
        The Adventure of a Lifetime with Leviva</h1>
    </div>
    <div class="p-10 text-justify mt-3">
      <p>Embark on a journey like no other with Leviva Travel and Tours. Immerse yourself in the heart of untamed
        landscapes, where the call of the wild beckons and every moment is an exploration into the extraordinary. Our
        travel safaris are meticulously crafted to deliver an unforgettable experience, blending luxury with the thrill of
        the wilderness.</p>
      <div class="grid grid-cols-2 gap-6 mt-6 p-3">
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
</template>

<script setup>
import destination from '@/assets/destination.svg';
import FooterBar from '@/components/shared/FooterBar.vue';
import LandingNav from '@/components/shared/LandingNav.vue';
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



.intro-btn {
  padding: 0.1em 0.25em;
  width: 13em;
  height: 4.2em;
  background-color: #ffa732;
  border: 0.08em solid #fff;
  border-radius: 0.3em;
  font-size: 12px;
  cursor: pointer;
}

.intro-btn span {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 0.4em;
  width: 8.25em;
  height: 2.5em;
  background-color: #ffa732;
  border-radius: 0.2em;
  font-size: 1.5em;
  color: #fff;
  border: 0.08em solid #fff;
  box-shadow: 0 0.4em 0.1em 0.019em #fff;
}

.intro-btn span:hover {
  transition: all 0.5s;
  transform: translate(0, 0.4em);
  box-shadow: 0 0 0 0 #fff;
}

.intro-btn span:not(hover) {
  transition: all 1s;
}</style>