<template>
  <div class="relative bg-black">
    <Splide class="opacity-75" :options="options" aria-label="Intro">
      <SplideSlide  v-for="slide in pictures">
        <img :src="slide.src" :alt="slide.alt">
        </SplideSlide>
    </Splide>
    <div class="absolute top-1/2 w-full">
      <div class=" w-full items-center flex flex-col justify-center">
        <h1 class="lg:text-5xl animate__animated animate__bounce animate__delay-4s	4s text-center mb-2 text-2xl fjalla-one-regular drop-shadow-xl">WELCOME TO</h1>
        <h2 class="chelsea-market-regular mb-2 lg:text-7xl text-6xl">TANZANIA!</h2>
        <button class="intro-btn mt-3" @click="$router.push('/book-now')"><span>Book A Trip With Us Now</span></button>
      </div>
    </div>
  </div>
</template>
<script setup>
import {Splide, SplideSlide} from "@splidejs/vue-splide";
import {ref} from 'vue'

const options = ref({
rewind: true,
gap   : '1rem',
autoStart: true,
pauseOnHover: true,
type   : 'loop',
drag   : 'free',
focus  : 'center',
autoplay: true,
arrows: false,
pagination: false,
})

const pictures = [
{src: 'src/assets/images/intro-bg.png', alt: 'Intro'},
{src: 'src/assets/images/daysafari-bg.jpg', alt: 'Ngorongoro'},
{src: 'src/assets/images/balloon&sunrise.jpg', alt: 'Materuni'},
{src: 'src/assets/images/safari-bg.jpg', alt: 'Tarangire'}
]

</script>
<style scoped>

img{
width: 100%;
height: 60vh;
object-fit: cover;
object-position: center;
}



.intro-btn {
  padding: 0.1em 0.25em;
  width: 25em;
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
  width: 16.25em;
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
}
</style>