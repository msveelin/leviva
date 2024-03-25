<template>
    <div class="bg-white">
        <img src="../../assets/footer-bg.svg" class="w-full" alt="">
    </div>
    <div class="p-10 text-white footer">
      <div class="mb-3">
        <h1 class="text-2xl font-bold mb-2">Want to Contact Us?</h1>
        <p>We are delighted to assist you, available 24hrs through out the week!</p>
        <div class="flex mt-2">
          <input type="text" class="w-96 p-3 bg-white text-black rounded-full outline-none border-0" placeholder="Send us a message...">
          <button type="submit" class="p-3 rounded-full bg-amber-950 text-white font-bold mx-3">SEND</button>
        </div>
      </div>
        <div>
          <img src="../../assets/logo.svg" class="h-32 w-32" alt="">
        </div>
        <div class="flex flex-col md:flex-row justify-between items-start">
            <div class="w-full md:w-1/3">
                
                <h2 class="font-bold text-xl">Leviva Travel and Tours</h2>
                
                <div class="flex items-center"> <img src="../../assets/call-receive-svgrepo-com.svg" class="h-5 w-5 mr-2" alt="" srcset=""> <span>+255 758 996 047 / +255 759 428 834</span></div>
                <div class="flex items-center"> <img src="../../assets/email-1572-svgrepo-com.svg" class="h-5 w-5 mr-2" alt="" srcset=""> <span>info@levivainvestments.co.tz</span></div>
                <div class="flex items-center"> <img src="../../assets/location-pin-alt-1-svgrepo-com.svg" class="h-5 w-5 mr-2" alt="" srcset=""> <span>Afrika Mashariki Road, JMJW+QCF Arusha International Conference Centre, Arusha 23101</span></div>    
                <h3 class="font-semibold mt-2">Social Media</h3>
                <div class="flex items-center">
                    <a href="https://www.instagram.com/levivatravelandtours/"><img src="../../assets/instagram-167-svgrepo-com.svg" class="h-10 w-10 mr-2" alt=""></a>
                <a class="ml-2" href="https://www.facebook.com/profile.php?id=61555172558507&mibextid=ZbWKwL"><img src="../../assets/facebook-svgrepo-com.svg" class="h-10 w-10 mr-2" alt=""></a>
                </div>
            </div>
            <div class="w-full md:w-1/3 ml-3">
                <h2 class="font-bold text-xl">Useful Links</h2>
                <div class="ml-3 flex flex-col">
                   
                    <a href="https://www.instagram.com/levivatravelandtours/">Instagram</a>
                    <a href="mailto: info@levivainvestments.co.tz">Email</a>
                </div>
            </div>
            <div class="w-full md:w-1/3 ml-3">
                <h2 class="font-bold">We Accept Online Payments</h2>
                <div class="flex items-center">
                    <img src="../../assets/mastercard-3-svgrepo-com.svg" class="h-16 w-16 mr-2" alt="">
                    <img src="../../assets/visa-3-svgrepo-com.svg" class="h-16 w-16" alt="">
                </div>
            </div>
        </div>
        <div class="mt-3 w-full p-3 text-center">
            <p>Copyright&copy;{{currentYear}}. All Rights Reserved</p>
        </div>
    </div>
</template>
<script setup>
const date = new Date()
let currentYear = date.getFullYear()
</script>
<style scoped>
.footer {
    background-color: #ffa732;
}
</style>