<template>
    <div class="p-3">
        <div class="border-b py-2">
            <h1 class="font-semibold text-xl text-amber-400">Dashboard</h1>
        </div>
      <div class="grid grid-cols-4 mt-2 gap-4">
        <div class="card">
          <a class="card1" href="#">
            <p class="font-semibold">No. of Destinations</p>
            <p class="small">{{data?.no_of_destinations}}</p>
            <div class="go-corner" href="#">
              <div class="go-arrow">
                →
              </div>
            </div>
          </a>
        </div>

        <div class="card">
          <a class="card1" href="#">
            <p class="font-semibold">No. of Tour Packages</p>
            <p class="small">{{data?.no_of_tour_packages}}</p>
            <div class="go-corner" href="#">
              <div class="go-arrow">
                →
              </div>
            </div>
          </a>
        </div>

        <div class="card">
          <a class="card1" href="#">
            <p class="font-semibold">No. of Accommodations</p>
            <p class="small">{{data?.no_of_accommodations}}</p>
            <div class="go-corner" href="#">
              <div class="go-arrow">
                →
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
</template>
<script setup>
import {useApiStore} from "@/stores/index.js";
import {onMounted, ref} from "vue";

const apiStore = useApiStore();
const data = ref(null)

const fetchStats = async  () => {
  const response = await apiStore.fetchItem("dashboard")
  data.value = response
}

onMounted(() => {
  fetchStats()
})
</script>

<style scoped>
.card p {
  font-size: 17px;
  line-height: 20px;
  color: #666;
}

.card p.small {
  font-size: 14px;
}

.go-corner {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 32px;
  height: 32px;
  overflow: hidden;
  top: 0;
  right: 0;
  background-color: #ffa732;
  border-radius: 0 4px 0 32px;
}

.go-arrow {
  margin-top: -4px;
  margin-right: -4px;
  color: white;
  font-family: courier, sans;
}

.card1 {
  display: block;
  position: relative;
  max-width: 262px;
  background-color: #f2f8f9;
  border-radius: 4px;
  padding: 32px 24px;
  margin: 12px;
  text-decoration: none;
  z-index: 0;
  overflow: hidden;
}

.card1:before {
  content: "";
  position: absolute;
  z-index: -1;
  top: -16px;
  right: -16px;
  background: #ffa732;
  height: 32px;
  width: 32px;
  border-radius: 32px;
  transform: scale(1);
  transform-origin: 50% 50%;
  transition: transform 0.25s ease-out;
}

.card1:hover:before {
  transform: scale(21);
}

.card1:hover p {
  transition: all 0.3s ease-out;
  color: rgba(255, 255, 255, 0.8);
}

.card1:hover h3 {
  transition: all 0.3s ease-out;
  color: #fff;
}

.card2 {
  display: block;
  top: 0px;
  position: relative;
  max-width: 262px;
  background-color: #f2f8f9;
  border-radius: 4px;
  padding: 32px 24px;
  margin: 12px;
  text-decoration: none;
  z-index: 0;
  overflow: hidden;
  border: 1px solid #f2f8f9;
}

.card2:hover {
  transition: all 0.2s ease-out;
  box-shadow: 0px 4px 8px rgba(38, 38, 38, 0.2);
  top: -4px;
  border: 1px solid #ccc;
  background-color: white;
}

.card2:before {
  content: "";
  position: absolute;
  z-index: -1;
  top: -16px;
  right: -16px;
  background: #ffa732;
  height: 32px;
  width: 32px;
  border-radius: 32px;
  transform: scale(2);
  transform-origin: 50% 50%;
  transition: transform 0.15s ease-out;
}

.card2:hover:before {
  transform: scale(2.15);
}

.card3 {
  display: block;
  top: 0px;
  position: relative;
  max-width: 262px;
  background-color: #f2f8f9;
  border-radius: 4px;
  padding: 32px 24px;
  margin: 12px;
  text-decoration: none;
  overflow: hidden;
  border: 1px solid #f2f8f9;
}

.card3 .go-corner {
  opacity: 0.7;
}

.card3:hover {
  border: 1px solid #ffa732;
  box-shadow: 0px 0px 999px 999px rgba(255, 255, 255, 0.5);
  z-index: 500;
}

.card3:hover p {
  color: #ffa732;
}

.card3:hover .go-corner {
  transition: opactiy 0.3s linear;
  opacity: 1;
}

.card4 {
  display: block;
  top: 0px;
  position: relative;
  max-width: 262px;
  background-color: #fff;
  border-radius: 4px;
  padding: 32px 24px;
  margin: 12px;
  text-decoration: none;
  overflow: hidden;
  border: 1px solid #ccc;
}

.card4 .go-corner {
  background-color: #ffa732;
  height: 100%;
  width: 16px;
  padding-right: 9px;
  border-radius: 0;
  transform: skew(6deg);
  margin-right: -36px;
  align-items: start;
  background-image: linear-gradient(-45deg, #8f479a 1%, #dc2a74 100%);
}

.card4 .go-arrow {
  transform: skew(-6deg);
  margin-left: -2px;
  margin-top: 9px;
  opacity: 0;
}

.card4:hover {
  border: 1px solid #cd3d73;
}

.card4 h3 {
  margin-top: 8px;
}

.card4:hover .go-corner {
  margin-right: -12px;
}

.card4:hover .go-arrow {
  opacity: 1;
}
</style>