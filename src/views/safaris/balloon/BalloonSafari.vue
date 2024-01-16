<template>
    <landing-nav></landing-nav>
    <div>
        <div class="intro">


            <div class="intro-main flex justify-center items-center">
                <div class="items-center p-5 text-center flex flex-col justify-center">
                    <h1 class="text-4xl lg:text-7xl mb-2 drop-shadow-xl homemade">Soar through the skies.</h1>
                </div>
            </div>
        </div>
        <div class="lg:p-20 p-10 text-justify bg-white text-black">
            <h1 class="mt-4 gloria primary text-center text-3xl mb-3">Experience the Unseen</h1>
            <p>Embark on a whimsical journey as you soar through the skies on a majestic balloon safari. Feel the gentle
                breeze caress your face as your colorful balloon gracefully ascends, offering a panoramic canvas of nature's
                wonders beneath. Drift silently above sprawling landscapes, where untamed beauty unfolds in every direction.
            </p>

            <div>
                <h1 class="mt-4 gloria primary text-center text-3xl">Itinerary</h1>
                <p class="mt-3">04:00-5:00 am, Serengeti Balloon Safaris will collect you from your lodge or camp and
                    transfer you by Landrover/Landcruiser to our launch site in order for you to arrive by 06:00.
                    Here you will meet your pilot, receive a safety briefing and watch the inflation of your
                    balloon.</p>
                <p class="mt-3">At dawn we take off, rising as the sun rises and floating in whichever direction the winds
                    of
                    the morning take us. Our pilot can precisely control the altitude of our balloon: sometimes
                    flying at treetop height, sometimes lower, offering a unique perspective and great
                    photographic opportunities of the wildlife below. At other times our pilot may ascend to
                    1,000 ft or more, to see the enormity and wonderful panorama of the Serengeti. From time
                    to time the pilot must put more heat into the balloon with the powerful whisper burners. In
                    between these burns, there is silence apart from the natural sounds below.</p>
                <p class="mt-3">The flight is for about one hour, depending on conditions, and eventually we must land.
                    We celebrate in the traditional manner with champagne (well, an excellent sparkling wine)
                    before sitting down to a full English breakfast prepared and served in the bush in “Out of
                    Africa” style with bone china, linen table cloth, Sheffield cutlery etc.</p>
                <p class="mt-3">After breakfast, you receive your Serengeti Balloon certificate and later meet up with your
                    safari driver at approximately 09:45 ready to continue your day’s activities.</p>

                <div class="grid  grid-cols-1 lg:grid-cols-2 gap-6 mt-5 mb-5">
                    <div>
                        <h1 class="gloria primary text-xl mb-2">Seasons:</h1>
                        <ul class="list-disc">
                            <li>Central Serengeti: All year-round</li>
                            <li>Ndutu: 20th Dec – 31st Mar</li>
                            <li>Western Corridor: 15th May – 30th Oct</li>
                            <li>North Serengeti: 15th Jun – 15th Jan</li>
                        </ul>
                        <h1 class="gloria primary text-xl mb-2 mt-2">Cancellations:</h1>
                        <ul class="list-disc">
                            <li>14 days prior to flight – no fees charged</li>
                            <li>13 days – 7 days – 50% charged</li>
                            <li>6 days – 48 hours – 75% charged</li>
                            <li>Less than 48 hours – 100% charged</li>
                            <li>No Show – 100% charged</li>
                        </ul>
                        <p class="mt-2 mb-2">THE ABOVE TERMS APPLY WHATEVER THE REASONS FOR CANCELLATION</p>
                        <p> IF WE CANCEL: (e.g. weather/technical) WE REFUND IN FULL or if you wish and we have
                            availability we will offer the opportunity to fly the following day</p>
                    </div>
                    <div>
                        <h1 class="gloria primary text-xl mb-2">Price Includes:</h1>
                        <ul class="list-disc">
                            <li>Transport from the lodge or camp to the launch site</li>
                            <li>Balloon flight (approx one hour)</li>
                            <li>Sparkling wine</li>
                            <li>Full English breakfast in the bush</li>
                            <li>Return road transfer to Seronera Visitor Centre
                                (or in North
                                Serengeti, Western Corridor & Ndutu to pre-arranged rendezvous)</li>
                        </ul>
                        <h1 class="gloria primary text-xl mt-2 mb-2">Restrictions:</h1>
                        <p> We do not carry children under the age of 7. There is no upper age limit, however
                            passengers must be reasonably mobile, fit to fly and prepared for an adventure.</p>
                        <p>Passenger weights are calculated at an average of 80 kgs. Passengers weighing 50% plus more than
                            this
                            (i.e.120 kgs/265 lb/19 stone) may be charged for two places</p>

                    </div>
                </div>
                <div class="mt-5 text-white grid grid-cols-1 lg:grid-cols-4 gap-4">
                    <div class="p-1 rounded-md bg-black balloon-serengeti h-96 flex flex-col justify-end">
                        <div class="p-2 mt-1 w-full">
                            <h1 class="text-xl font-bold mb-1">Serengeti</h1>
                            <p>Price:</p>
                            <p>ADULT - US$ 599.00</p>
                            <p>CHILD - US$ 545.00 </p>
                            <button class="menu-btn w-full"><router-link to="book-now">BOOK
                                    NOW</router-link></button>

                        </div>
                    </div>
                    <div class="p-1 rounded-md bg-black ballon-ngorongoro h-96 flex flex-col justify-end">
                        <div class="p-2 mt-1 w-full">
                            <h1 class="text-xl font-bold mb-1">Ngorongoro</h1>
                            <p>Price:</p>
                            <p>ADULT - US$ 580.00</p>
                            <P>CHILD - US$ 530.00</P>
                            <button class="menu-btn w-full"><router-link to="book-now">BOOK
                                    NOW</router-link></button>
                        </div>
                    </div>
                </div>
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
    background-image: url("@/assets/images/balloon&sunrise.JPG");
    background-size: cover;
    object-fit: cover;
    background-position: center;
    background-repeat: no-repeat;
}

.intro-main {
    height: 80vh;
}

.balloon-serengeti {
    background-image: url("../../../assets/images/ballon-serengeti.jpg");
    background-size: cover;
    object-fit: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-color: rgba(0, 0, 0, 0.5);
    /* Adjust the alpha value (0.0 to 1.0) for transparency */
    background-blend-mode: overlay;
}

.ballon-ngorongoro {
    background-image: url("../../../assets/images/balloon-ngorongoro.jpg");
    background-size: cover;
    object-fit: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-color: rgba(0, 0, 0, 0.5);
    /* Adjust the alpha value (0.0 to 1.0) for transparency */
    background-blend-mode: overlay;
}
</style>