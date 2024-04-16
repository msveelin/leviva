<template>
  <landing-nav></landing-nav>
  <div>
    <div class="intro" :style="{ 'background-image': `url('http://localhost/leviva-backend/api/uploads/${data?.image}')` }">

      <div class="intro-main flex justify-center items-center">
        <div class="items-center flex flex-col p-10 justify-center">
          <h1 class="text-5xl text-center mb-2 drop-shadow-xl chelsea-market-regular">
            {{data?.name}}
          </h1>
        </div>
      </div>
    </div>
    <div class="p-10 flex bg-white text-black text-justify flex-col lg:flex-row">
      <div class="lg:w-2/3 w-full p-3">
        <p v-html="data?.description"></p>

        <h2 class="primary gloria text-xl mt-2 mb-3">Itinerary</h2>
        <p v-html="data?.itinerary"></p>
      </div>
      <div class="lg:w-1/3 w-full p-3">
        <div class="border border-black p-3">
          <h2 class="font-bold mb-2">Price:</h2>
          <p v-html="data?.prices"></p>
          <h2 class="font-bold mt-2 mb-2">Price Inclusion:</h2>
          <p v-html="data?.price_inclusion"></p>
          <h2 class="font-bold mt-2 mb-2">Price Does Not Include:</h2>
          <p v-html="data?.price_exclusion"></p>

          <p class="mb-2 mt-4">The recommended amount for a driver is around 15 USD per day if you’re
            satisfied, to be divided by all your group members. Thank you! </p>
          <button class="bg-primary2 text-white w-full p-2" @click="$router.push('/book-now')">
            BOOK NOW
          </button>

        </div>
      </div>
    </div>
    <div>
      <footer-bar></footer-bar>
    </div>
  </div>
</template>
<script setup>
import {useApiStore} from "@/stores/index.js";
import {onMounted, ref} from "vue";
import FooterBar from "@/components/shared/FooterBar.vue";
import LandingNav from "@/components/shared/LandingNav.vue";
import {useRoute} from "vue-router";

const apiStore = useApiStore();
const data = ref(null)

const router  = useRoute();

const fetchStats = async  () => {
  try{
    const response = await apiStore.fetchItem("tour_packages", "tourPackageUniqueId", router.params.uUid);
    console.log(response)
    data.value = response
  } catch (error) {
    console.error(error)
  }
}

onMounted(() => {
  fetchStats()
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
}
</style>