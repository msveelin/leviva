<template>
  <div class="bg-white">
    <landing-nav></landing-nav>
    <div class="intro" :style="{ 'background-image': `url('http://localhost/leviva-backend/api/uploads/${destinations?.image}')` }">
      <div class="intro-main flex justify-center items-center">
        <div class="items-center flex flex-col p-10 justify-center">
          <h1 class="text-7xl text-center mb-2 text-white drop-shadow-xl chelsea-market-regular"> {{destinations?.name}}
          </h1>
        </div>
      </div>
    </div>
    <div class="p-10 text-black">
      <p v-html="destinations?.description"></p>
    </div>
    <div>
      <footer-bar></footer-bar>
    </div>
  </div>
</template>
<script setup>
import FooterBar from '@/components/shared/FooterBar.vue';
import LandingNav from '@/components/shared/LandingNav.vue';
import {onMounted, ref} from "vue";
import {useApiStore} from "@/stores/index.js";
import {useRoute} from "vue-router";


const apiStore = useApiStore();
const destinations = ref(null)
const router = useRoute()

// Function to fetch destinations data
const fetchData = async () => {
  try {
    const response = await apiStore.fetchItem("destination", "destinationUniqueId", router.params.uUid);
    console.log(response)
    destinations.value = response;
  } catch (error) {
    // Handle any errors
    console.error('Error fetching destinations:', error);
  }
};

onMounted( () => {
  fetchData()
})
</script>
<style scoped>
.intro {
  background-size: cover;
  object-fit: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.intro-main {
  height: 80vh;
}</style>