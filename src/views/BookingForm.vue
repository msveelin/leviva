<template>
    <landing-nav></landing-nav>
    <div class="bg-white text-black">
        <main class="intro  bg-black text-white">
            <div class="p-4 fixed top-0 w-full">
            </div>
            <div class="intro-main pt-10 flex justify-center items-center">
                <div class="items-center flex flex-col justify-center">
                    <h1 class="text-6xl mb-2 chelsea-market-regular drop-shadow-xl">Book a Trip</h1>

                </div>
            </div>

        </main>
        <div class="mt-5 flex flex-col justify-center items-center w-full p-10">
            <form @submit.prevent="submitForm" class="w-2/3 flex flex-col">
                <label for="name">Name:</label>
                <input class="shadow-sm bg-gray-50" v-model="formData.name" type="text" id="name" name="name" required>

                <br>

                <label for="email">Email:</label>
                <input class="shadow-sm bg-gray-50" v-model="formData.email_id" type="email" id="email" name="email_id" required>

                <br>
                <label for="tour">Select Safari Tour:</label>
                <select class="p-2 bg-gray-50 text-black rounded-xl mt-2 outline-none" id="tour" name="destination"
                    v-model="formData.destination" required>
                   <option v-for="destination in destinations" :key="destination.id" :value="destination.name">{{ destination.name }}</option>
                </select>
                <br>
                <label for="participants">Number of Participants:</label>
                <input type="number" class="shadow-sm bg-gray-50" v-model="formData.participants" id="participants" name="participants" min="1" required>
                <br>

                <label for="date">Tour Date:</label>
                <input type="date" class="shadow-sm bg-gray-50" v-model="formData.date" id="date" name="date" required>


                <button class="bg-amber-500 text-white hover:bg-black mt-3 rounded-md p-2" type="submit">Book Now</button>
            </form>
        </div>
        <div>
            <footer-bar></footer-bar>
        </div>
    </div>
</template>
<script setup>
import FooterBar from '@/components/shared/FooterBar.vue';
import LandingNav from '@/components/shared/LandingNav.vue';
import emailjs from '@emailjs/browser';
import { ref, onMounted } from 'vue';
import {useApiStore} from "@/stores/index.js";
import { useRouter } from 'vue-router';

const router = useRouter()

emailjs.init('6sG6eYDndzcj1QsJP')
const apiStore = useApiStore()
const destinations = ref(null)

const formData = ref({
    name: '',
    email_id: '',
    destination: '',
    participants: null,
    date: ''
})

// Function to fetch destinations data
const fetchData = async () => {
  try {
    // Fetch data from the API store
    await apiStore.fetchData('tour_packages');
    // Get the fetched data
    const fetchedData = apiStore.data.tour_packages;
    // Decode JSON fields in the fetched data
    destinations.value = fetchedData

  } catch (error) {
    // Handle any errors
    console.error('Error fetching tour packages: ', error);
  }
};

const submitForm = async () => {
    try {
        // Send booking confirmation email
        const bookingResponse = await emailjs.send(
            'service_vjyw5ti',  // Replace with your Email.js Service ID
            'template_dqrqwbg',  // Replace with your Booking Confirmation Template ID
            formData.value
        );

        console.log('Booking confirmation email sent:', bookingResponse);

        // Send auto-reply email
        const autoReplyResponse = await emailjs.send(
            'service_vjyw5ti',  // Replace with your Email.js Service ID
            'template_dqrqwbg',  // Replace with your Auto-Reply Template ID
            {
                to_email: formData.value.email_id,
                // Add other variables needed for the auto-reply template
            }
        );

        console.log('Auto-reply email sent:', autoReplyResponse);

        // Redirect to a thank-you page
        router.push('/thank-you');

    } catch (error) {
        console.error('Error sending emails:', error);
    }

}


onMounted(() => {
   fetchData()
})
</script>
<style scoped>
.intro {
    background-image: url("@/assets/images/balloon&sunrise.JPG");
    background-size: cover;
    object-fit: cover;
    background-position: center;
    background-repeat: no-repeat;
}

.intro-main {
    height: 80vh;
}

input {
    color: black;
    padding: 10px;
    border-radius: 10px;
    margin-top: 5px;
}
</style>
