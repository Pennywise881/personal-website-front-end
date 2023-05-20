<template>
    <div class="bg-zinc-200 md:px-20">
        <div class="md:px-10">
            <div class="bg-white rounded overflow-hidden shadow-lg">
                <div class="md:p-5">
                    <div class="my-1 md:my-5">
                        <p class="px-2 md:px-0 text-xl font-extrabold uppercase">now showing</p>
                        <p class="px-2 md:px-0 text-xs md:text-sm text-red-500 font-bold">
                            <span class="hover:underline hover:cursor-pointer uppercase">see all movies</span>
                        </p>
                    </div>

                    <section class="p-2 md:p-0">
                        <div class="flex justify-center">
                            <button class="cursor-pointer focus:outline-none" @click="carouselButtonClick('left')">
                                <span
                                    class="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-red-600 hover:bg-red-500 text-white">
                                    <svg aria-hidden="true" class="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M15 19l-7-7 7-7"></path>
                                    </svg>
                                </span>
                            </button>
                            <div class="rounded md:border border-gray-300">
                                <div class="scroll-smooth flex overflow-hidden md:p-1" id="carousel">
                                    <router-link v-for="movie in arrivals"
                                        class="flex-shrink-0 -mr-14 md:-mr-12 hover:text-red-700"
                                        :to="{ name: 'Showtime', params: { key: movie.key, slug: movie.slug } }">
                                        <img class="rounded w-2/3 cursor-pointer hover:opacity-70" :src="movie.poster"
                                            :alt="movie.title">
                                        <p class="font-bold">{{ movie.title }}</p>
                                    </router-link>
                                </div>
                            </div>
                            <button class="cursor-pointer focus:outline-none" @click="carouselButtonClick('right')">
                                <span
                                    class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-red-600 hover:bg-red-500 text-white">
                                    <svg aria-hidden="true" class="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M9 5l7 7-7 7"></path>
                                    </svg>
                                </span>
                            </button>
                        </div>
                    </section>
                </div>

                <section>
                    <div class="p-2 md:p-5">
                        <p class="mt-5 md:mt-0 text-xl font-extrabold mb-2 md:mb-5 uppercase">featured</p>
                        <div class="grid grid-cols-3 gap-2">
                            <div v-for="item in this.featuredItems" class="bg-white rounded-lg hover:text-red-700">
                                <div class="hover:opacity-75">
                                    <img class="rounded-lg" :src="item.img" alt="featured image" />
                                    <p class="mt-2 font-bold text-sm md:text-base line-clamp-1 md:line-clamp-0">{{ item.txt
                                    }}
                                    </p>
                                    <p class="text-xs md:text-sm font-light line-clamp-2 md:line-clamp-0">{{ item.subtxt }}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div class="p-2 md:p-5">
                        <p class="mt-5 md:mt-0 text-xl font-extrabold mb-2 md:mb-5 uppercase">offers</p>
                        <div class="grid grid-cols-3 gap-2">
                            <div v-for="offer in this.offers" class="bg-white border border-gray-300 rounded shadow-md">
                                <img class="w-full
                                " :src="offer.img" alt="offer image" />
                                <p
                                    class="text-sm md:text-base font-bold px-2 md:px-4 py-1 md:py-2 line-clamp-1 md:line-clamp-0">
                                    {{ offer.txt }}</p>
                                <p class="text-xs md:text-sm font-light px-2 md:px-4 md:py-2 line-clamp-2 md:line-clamp-0">
                                    {{ offer.subtxt }}</p>
                                <p
                                    class="mt-auto px-2 md:px-4 py-1 md:py-2 font-bold text-xs md:text-sm hover:underline uppercase text-red-600">
                                    {{ offer.btnName }}</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div class="p-2 md:p-5">
                        <p class="mt-5 md:mt-0 text-xl font-extrabold mb-2 md:mb-5 uppercase">new & coming soon</p>
                        <!-- <div class="grid grid-cols-4 gap-2 md:grid-cols-8 md:gap-4">
                            <div v-for="m in this.comingSoon" class="rounded">
                                <img :src="m.poster" alt="poster"
                                    class="rounded hover:brightness-75 hover:scale-110 transition-all duration-700 cursor-pointer">
                            </div>
                        </div> -->
                        <div class="scroll-smooth flex overflow-x-auto" id="carousel">
                            <div v-for="movie in this.comingSoon" class="flex-shrink-0 -mr-24">
                                <img class="rounded w-2/4 hover:brightness-75 hover:scale-110 transition-all duration-700 cursor-pointer"
                                    :src="movie.poster" :alt="movie.title">
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: "MTPContent",
    data() {
        return {
            maxItemsPerSlide: 6,
            maxItemsPerSmallSlide: 3,
            arrivals: [],
            // carouselSlides: [],
            // smallCarouselSlides: [],
            // slideIndex: 0,
            // smallSlideIndex: 0,
            comingSoon: [],
            featuredItems: [
                {
                    img: 'https://images.fandango.com/ImageRenderer/500/0/redesign/static/img/default_poster.png/0/images/spotlight/Carousel_Anticipated_2023.jpg',
                    txt: 'The Most Anticipated Movies Of 2023',
                    subtxt: 'What movie fans are looking forward to in the new year'
                },
                {
                    img: 'https://images.fandango.com/ImageRenderer/500/0/redesign/static/img/default_poster.png/0/images/spotlight/Carousel_Avatar_Junket.jpg',
                    txt: 'The Cast of Avatar: The Way of Water',
                    subtxt: 'Reuniting, evolving and experiencing the result'
                },
                {
                    img: 'https://images.fandango.com/ImageRenderer/500/0/redesign/static/img/default_poster.png/0/images/spotlight/Carousel_PussInBoots_Exclusive2.jpg',
                    txt: 'Exclusive Clip: Puss In Boots',
                    subtxt: 'Puss In Boots faces off with a rampaging giant as only he can'
                }
            ],
            offers: [
                {
                    img: 'https://images.fandango.com/render/interlace/quality-65/resize-300/images.fandango.com/cms/assets/31a20e20-759e-11ed-90fe-f325d9bf4959--pussinboots-gwp-offerfooter.jpg',
                    txt: 'BUY A PUSS IN BOOTS: THE LAST WISH MOVIE TICKET',
                    subtxt: 'Get the original Puss In Boots for $7.50 on Vudu. Limited Time Offer.',
                    btnName: 'buy tickets',
                },
                {
                    img: 'https://images.fandango.com/render/interlace/quality-65/resize-300/images.fandango.com/cms/assets/dad27a40-7a51-11ed-b2f6-e1f3892e3f59--12daysofgiveaways-homepageoffer-footer.jpg',
                    txt: 'JOIN US FOR 12 DAYS OF SAVINGS',
                    subtxt: 'For 12 Days, unlock special Fandango and Vudu offers on the Fandango Facebook page every morning.',
                    btnName: 'learn more',
                },
                {
                    img: 'https://images.fandango.com/render/interlace/quality-65/resize-300/images.fandango.com/cms/assets/23cc4ae0-75a8-11ed-90fe-f325d9bf4959--veuveclicquot-homepageoffer-footer.png',
                    txt: 'JOIN US AS WE COUNTDOWN TO THE NEW YEAR!',
                    subtxt: 'Enter Let it Clicquot Sweepstakes for a chance to win Daily Prizes including Movie Tickets + A Trip to Aspen.',
                    btnName: 'enter now'
                }
            ],
        }
    },
    mounted() {
        this.getArrivals();
        this.getComingSoon();
    },
    methods: {
        getComingSoon() {
            axios
                .get(`/api/v1/movietheatreproject/get-movies-coming-soon`)
                .then((response) => {
                    this.comingSoon = response.data;
                })
                .catch((error) => {
                    console.error(error);
                })
        },
        carouselButtonClick(direction) {
            let speed;
            if (window.innerWidth < 768) speed = 200;
            else speed = 800;

            if (direction === 'left')
                document.getElementById('carousel').scrollLeft -= speed;

            else if (direction === 'right')
                document.getElementById('carousel').scrollLeft += speed;

        },
        getArrivals() {
            axios
                .get(`/api/v1/movietheatreproject/get-arrivals`)
                .then((response) => {
                    this.arrivals = response.data;
                    // console.log(this.arrivals);

                    for (let i = 0; i < this.arrivals.length; i++) {
                        if (this.arrivals[i].title.split(' ').length > 2) {
                            let title_words = this.arrivals[i].title.split(' ');
                            this.arrivals[i].title = title_words[0] + " " + title_words[1] + "..."
                        }
                    }

                    // var carouselItems = [];
                    // var smallCarouselItems = [];
                    // for (let i = 0; i < this.arrivals.length; i++) {
                    //     carouselItems.push(this.arrivals[i]);
                    //     smallCarouselItems.push(this.arrivals[i]);
                    //     if (carouselItems.length === this.maxItemsPerSlide) {
                    //         this.carouselSlides.push(carouselItems);
                    //         carouselItems = [];
                    //     }

                    //     if (smallCarouselItems.length === this.maxItemsPerSmallSlide) {
                    //         this.smallCarouselSlides.push(smallCarouselItems);
                    //         smallCarouselItems = [];
                    //     }
                    // }

                    // this.carouselSlides.push(carouselItems);
                    // this.smallCarouselSlides.push(smallCarouselItems);
                    // console.log(this.carouselSlides);

                })
                .catch((error) => {
                    console.error(error);
                })
        }
    },
}

</script>