<template>
    <MTPNavBar />
    <div class="bg-zinc-200 md:px-20">
        <div class="md:px-10">
            <div class="md:bg-white rounded overflow-hidden shadow-lg">
                <section>
                    <div class="md:m-6 max-w-4xl p-6 bg-white md:border border-gray-300 md:rounded-lg">
                        <div class="flex justify-center md:justify-start mb-4">
                            <img class="rounded-md" :src="this.movieInfo.poster" alt="poster">
                        </div>
                        <div class="flex flex-col md:flex-row">
                            <div class="flex justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="w-6 h-6 mr-2">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                </svg>
                                <div class="flex flex-col">
                                    <p class="font-bold uppercase text-center">{{ this.movieInfo.title }}</p>
                                    <!-- <p class="font-light text-sm text-center">
                                        <span v-if="this.movieDetails.Rating">{{ this.movieDetails.Rating }}, </span>
                                        <span v-else>N/A, </span>
                                        <span>{{ this.movieDetails.Runtime }}</span>
                                    </p> -->
                                </div>
                            </div>
                            <div class="my-10 md:mt-0 md:ml-auto w-28">
                                <a :href="this.movieInfo.rt_link">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/6/6f/Rotten_Tomatoes_logo.svg"
                                        alt="rt_link">
                                </a>
                            </div>
                        </div>
                        <div class="mb-10">
                            <p class="font-light text-sm text-justify">{{ this.movieInfo.synopsis }}</p>
                        </div>
                        <div v-for="(value, name) in this.movieDetails" :key="name">
                            <p class="text-sm mb-2">
                                <span class="font-bold uppercase">{{ name }}: </span>
                                <span>{{ value }}</span>
                            </p>
                        </div>
                    </div>
                </section>

                <section>
                    <div class="bg-white">
                        <div class="p-3 mt-5 mx-2 md:mx-6 md:my-3 md:p-0 flex flex-row text-xl">
                            <p class="font-bold mr-3">THEATRES NEAR</p>
                            <div class="flex flex-row text-red-600">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                </svg>
                                <p class="font-bold">Dhaka City</p>
                            </div>
                        </div>
                    </div>

                    <div v-for="(value, name) in this.showTimes" :key="name"
                        class="md:mx-6 md:mb-6 mb-3 max-w-4xl p-4 md:p-6 bg-white md:border border-gray-300 md:rounded-lg">
                        <div class="flex flex-row">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-6 h-6 mr-2">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                            </svg>
                            <p class="font-bold text-xl">{{ name }}</p>
                        </div>
                        <p class="mt-3 font-bold text-sm text-red-600 mb-10">{{ value.location }}</p>

                        <div v-for="(timings, date) in value" :key="date">
                            <div v-if="date !== 'location'" class="mb-10 md:mb-5">
                                <p class="font-bold text-lg">{{ this.getFormatedDate(date) }}</p>
                                <hr>
                                <button
                                    class="mt-2 md:mt-5 bg-red-600 hover:bg-red-700 text-white text-sm hover:underline font-bold py-1 px-2 md:py-2 md:px-3 rounded mr-3"
                                    v-for="t in timings" @click="this.gotoBooking(name, value.location, date, t)">
                                    {{ this.getFormattedTime(t) }}
                                </button>
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
import MTPNavBar from '../../components/MovieTheatreProject/MTPNavBar.vue';

export default {
    name: "Showtime",
    components: {
        MTPNavBar,
    },
    data() {
        return {
            movieInfo: {},
            movieDetails: {},
            showTimes: {},
            theatreInfo: {},
            currentDate: "",
        };
    },
    mounted() {
        this.getMovieInfo();
        this.getShowTimes();
    },
    methods: {
        getMovieInfo() {
            const movieKey = this.$route.params.key;
            // console.log(movieKey);

            axios
                .get(`/api/v1/movietheatreproject/get-movie/${movieKey}`)
                .then((response) => {
                    this.movieInfo = response.data;
                    this.movieDetails = response.data.details;

                })
                .catch((error) => {
                    console.error(error);
                })
        },
        getShowTimes() {
            const movieKey = this.$route.params.key;
            axios
                .get(`/api/v1/movietheatreproject/get-showtimes/${movieKey}`)
                .then((response) => {
                    this.showTimes = response.data;

                    // console.log(Object.entries(this.showTimes)[0]);
                })
                .catch((error) => {
                    console.error(error);
                })
        },
        getFormatedDate(date) {
            const dateArr = new Date(date).toDateString().split(' ');
            return dateArr[0] + ", " + dateArr[1] + " " + dateArr[2] + " " + dateArr[3];
        },
        getFormattedTime(time) {
            const arr = time.split(":");
            var hr = parseInt(arr[0])

            var period = "AM";

            if (hr > 12) {
                hr -= 12
                period = "PM";
            }

            return hr.toString() + ":" + arr[1] + " " + period;
        },
        gotoBooking(theatre, location, date, time) {
            const bookingData = {
                poster: this.movieInfo.poster,
                title: this.movieInfo.title,
                rating: !this.movieDetails.Rating ? 'N/A' : this.movieDetails.Rating,
                duration: this.movieDetails.Runtime,
                theatre: theatre,
                location: location,
                date: this.getFormatedDate(date),
                time: this.getFormattedTime(time),
                seats: [],
                // email: "",
            }
            this.$store.commit("SET_BOOKING_DATA", bookingData);
            this.$router.push({ name: 'booking' })
        }

    }
};
</script>