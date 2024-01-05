<template>
  <div>
    <main class="intro  bg-black text-white">
      <div class="p-4">
        <landing-nav></landing-nav>
      </div>
      <div class="h-96 flex justify-center items-center">
        <div class="items-center flex flex-col justify-center">
          <h1 class="text-4xl mb-2 drop-shadow-xl homemade">Where the sunsets are golden</h1>
        </div>
      </div>
    </main>
    <div class="p-10 text-justify">
      <h1 class="font-bold">Who are we?</h1>
      <p>Leviva Travel and Tours is a travel agency specialized in providing services in tourism and air ticketing among
        many others. We believe that blah blah</p>
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
  background-image: url("../assets/images/intro-bg.png");
  background-size: cover;
  object-fit: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
