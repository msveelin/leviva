<template>
  <div>
    <main class="intro  bg-black text-white">
      <div class="p-4">
        <landing-nav></landing-nav>
      </div>
      <div class="h-96 flex justify-center items-center">
        <div class="items-center flex flex-col justify-center">
          <h1 class="text-7xl mb-2 drop-shadow-xl homemade">Where the sunsets are golden</h1>
        </div>
      </div>
    </main>
    <div class="p-10 text-justify">
      <h1 class="gloria text-5xl text-center mb-3">Our Story</h1>
      <p class="p-10 mb-2">At Leviva Travel and Tours, we believe in transforming dreams into unparalleled travel
        experiences. Established
        with a passion for exploration and a commitment to exceptional service, our journey began with the vision of
        creating moments that linger in the hearts of our travelers.</p>
      <h1 class="gloria text-5xl text-center mb-3">What Sets Us Apart?</h1>
      <div class="p-10 mb-2">
        <p class="mb-1">🌍 <b>Dedication to Excellence:</b>
          We take pride in being a travel agency that consistently delivers beyond expectations. From meticulously planned
          itineraries to personalized services, our commitment to excellence is evident in every aspect of your journey.
        </p>
        <p class="mb-1">🤝 <b>Trusted Partnerships:</b>
          Leviva Travel and Tours has cultivated strong partnerships with in the travel industry. These
          collaborations enable us to provide our clients with exclusive access, ensuring seamless travel arrangements and
          unique experiences.</p>
        <p class="mb-1">🌐 <b>Global Expertise:</b>
          Our team of travel enthusiasts and experts bring a wealth of knowledge and a global perspective to every
          journey.
          Whether you seek an exotic adventure, a cultural exploration, or a relaxing escape, we have the expertise to
          craft
          the perfect itinerary tailored to your desires.</p>
      </div>
      <h1 class="gloria text-5xl text-center mb-3">Our Services</h1>
      <div class="p-10 grid grid-cols-2 gap-6">
        <p>🛫 <b>Air Ticketing:</b>
          Navigate the skies effortlessly with our comprehensive air ticketing services. From securing the best fares to
          managing your travel preferences, we are dedicated to making your journey as smooth as possible.</p>
        <p>🌴 <b>Tour Packages:</b>
          Discover the world through our thoughtfully curated tour packages. Whether you're drawn to the allure of
          bustling cities, serene beaches, or the untamed wilderness, our diverse array of packages caters to all tastes
          and preferences.</p>
        <p>🏨 <b>Accommodation:</b>
          Indulge in comfort and luxury with our handpicked selection of accommodations. From boutique hotels to sprawling
          resorts, we ensure that your stay is as memorable as the destinations you explore.</p>
        <p>🚗 <b>Car Hire Services:</b>
          Experience the freedom to explore at your own pace with our reliable and diverse car hire options. From compact
          cars for city adventures to spacious SUVs for family road trips, Leviva Travel and Tours provides a range of
          vehicles to suit your travel needs. Our commitment to quality ensures that your road trip is not just a journey
          but an integral part of your overall travel experience.</p>
        <p>🛬 <b>Airport Transfer Services:</b>
          Arriving in a new destination should be a seamless transition. Our airport transfer services are designed to
          whisk you away from the terminal to your accommodation with comfort and efficiency. Relax and enjoy the
          beginning of your journey as our professional drivers navigate the intricacies of airport logistics, ensuring a
          stress-free start to your adventure.</p>
        <p>🛡️ <b>Travel Insurance:</b>
          Your peace of mind is our priority. Leviva Travel and Tours offers comprehensive travel insurance coverage,
          providing protection against unforeseen events that may disrupt your travel plans. From trip cancellations to
          medical emergencies, our travel insurance plans are tailored to safeguard you throughout your journey, allowing
          you to focus on making memories rather than worrying about the unexpected.</p>
      </div>
      <h1 class="gloria text-5xl text-center mb-3">Join Us on Your Next Adventure:</h1>
      <div class="p-10">
        <p>Whether you're a seasoned traveler or embarking on your first journey, Leviva Travel and Tours invites you to
          explore the world with us. Let's turn your travel dreams into a reality, one unforgettable experience at a time.
        </p>
        <p class="mt-7 text-2xl homemade text-center">🚗 🛬 🛡️ Leviva Travel and Tours - Where Your Journey Is Our Priority.</p>
      </div>
    </div>
  </div>
  <footer-bar></footer-bar>
</template>
<script setup>
import FooterBar from '@/components/shared/FooterBar.vue';
import LandingNav from '@/components/shared/LandingNav.vue';
</script>

<style>
.intro {
  background-image: url("../assets/images/about.jpg");
  background-size: cover;
  object-fit: cover;
  background-position: center;
  background-repeat: no-repeat;
}</style>
