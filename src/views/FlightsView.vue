<template>
    <div>
        <div class="intro">
            <div class="p-4">
                <landing-nav></landing-nav>
            </div>
            <div class="intro-main p-5 flex justify-center items-center">
                <div class="items-center flex text-center flex-col justify-center">
                    <h1 class="text-7xl mb-2  drop-shadow-xl homemade">Conquer the skies with us</h1>
                    <p class="text-3xl mt-2 drop-shadow-xl">Book a flight to anywhere in the world</p>
                </div>
            </div>
        </div>
        <div class="lg:p-10 p-5 text-justify">
            <h1 class="gloria text-5xl text-center mb-3">Your gateway to seamless travel</h1>
            <div class="p-10">
                <p>Welcome to Leviva Travel and Tours, your go-to destination for hassle-free air travel. With our
                    comprehensive
                    flight and air ticketing services, we redefine the way you experience the skies, ensuring convenience,
                    affordability, and a world of possibilities.</p>
                <p class="mt-2 mb-1">Leviva Travel and Tours takes the stress out of flight booking, offering a
                    user-friendly platform that
                    allows you to effortlessly search, compare, and reserve the best airfares for your journey. Our
                    commitment to providing the most competitive prices ensures that you can explore the world without
                    breaking the bank.</p>
                <h2 class="font-bold">Explore Our Extensive Routes:</h2>
                <p class="mt-2 mb-1">Dive into a world of possibilities with Leviva Travel and Tours' extensive range of
                    flight routes.
                    Whether you're jetting off for business or leisure, we connect you to a global network of destinations.
                    From bustling metropolises to serene beach retreats, our diverse routes cater to all your travel
                    aspirations.</p>
                <h2 class="font-bold">Discover Top Airlines:</h2>
                <p class="mt-2 mb-1">Experience the pinnacle of air travel with our curated selection of top-tier airlines.
                    Leviva Travel and
                    Tours partners with leading carriers renowned for their commitment to safety, comfort, and exceptional
                    service. Embark on your journey with confidence, knowing that you're in good hands from takeoff to
                    touchdown.</p>
                <h1 class="gloria text-3xl text-center mb-3">Why Choose Leviva for Air Ticketing:</h1>
                <p class="mt-2 mb-1">🌐 <b>Effortless Booking Process:</b>
                    Our user-friendly platform ensures a seamless booking experience, allowing you to secure your air
                    tickets with just a few clicks. Say goodbye to complicated processes and hello to stress-free travel
                    arrangements.</p>
                <p class="mt-2 mb-1">🤑 <b>Competitive Pricing:</b>
                    We understand the importance of budget-conscious travel. Leviva Travel and Tours consistently offers
                    competitive pricing, ensuring that you get the best value for your money without compromising on
                    quality.</p>
                <p class="mt-2 mb-1">🤝 <b>Trusted Partnerships:</b>
                    As a travel agency committed to excellence, we have forged strong partnerships with major airlines. This
                    allows us to provide you with exclusive deals, perks, and access to a vast network of flights.</p>
                    <h1 class="gloria text-3xl mt-3 text-center mb-3">Some Airlines We Work With</h1>
                    <img src="../assets/airlines.svg" class="mt-3" alt="">
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
    background-image: url("../assets/images/flights.jpg");
    background-size: cover;
    object-fit: cover;
    background-position: center;
    background-repeat: no-repeat;
}

.intro-main {
    height: 80vh;
}
</style>