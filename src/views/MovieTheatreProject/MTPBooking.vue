<template>
    <MTPNavBar />
    <div>
        <div class="bg-zinc-700 flex justify-center p-4">
            <img :src="this.bookingData.poster" alt="poster" class="border-2 border-white w-64 md:w-40">
            <div class="ml-4 flex flex-col">
                <p class="text-white font-bold text-xl md:text-2xl">{{ this.bookingData.title }}</p>
                <p class="text-gray-300 text-sm mb-10">
                    <span>{{ this.bookingData.rating }}, </span>
                    <span>{{ this.bookingData.duration }}</span>
                </p>
                <p class="font-bold text-white text-2xl md:text-3xl">{{ this.bookingData.date }}</p>
                <p class="font-bold text-white text-2xl md:text-3xl mb-10">@ {{ this.bookingData.time }}</p>
                <p class="text-white font-bold text-sm">{{ this.bookingData.theatre }}</p>
                <p class="text-gray-300 text-sm">{{ this.bookingData.location }}</p>
            </div>
        </div>

        <hr class="border-2 border-red-600">
        <section>
            <div class="flex justify-center mb-10">
                <div class="flex flex-col p-4">
                    <p class="font-bold text-xl">Choose the number of tickets</p>
                    <p>You can request up to 5 reserved seats per transaction.</p>
                    <div class="mt-5 flex justify-between font-bold text-xl">
                        <p>Tickets:</p>
                        <div class="flex flex-row">
                            <button @click="this.setTicket('sub')">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </button>
                            <p class="mx-2">{{ this.tickets }}</p>
                            <button @click="this.setTicket('add')">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div class="flex flex-col">
                        <p>&#2547;350 per ticket</p>
                        <div class="flex justify-between mt-5 text-xl">
                            <p class="font-bold">Your total:</p>
                            <p>{{ this.tickets }} X &#2547;350 = &#2547;{{ this.getTotalPrice() }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="this.tickets > 0" class="flex justify-center mb-5">
                <!-- <input
                    class="h-auto shadow-md rounded rounded-r-none focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
                    type="text" placeholder="Enter email address">

                <button @click="confirmBooking"
                    class="bg-red-600 hover:bg-red-700 text-white hover:underline font-bold py-2 px-3 mt-5 rounded">
                    Confirm Booking
                </button> -->


                <form class="px-10">
                    <div class="flex items-center border-b border-red-500 py-2">
                        <input id="mtp_booking_email"
                            class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                            type="text" placeholder="Email" aria-label="Full name">
                        <button @click="confirmBooking"
                            class="flex-shrink-0 bg-red-600 hover:bg-red-700 border-red-600 hover:border-red-700 text-sm border-4 text-white py-1 px-2 rounded font-bold"
                            type="button">
                            Confirm Booking
                        </button>
                    </div>
                </form>


            </div>
        </section>
    </div>
</template>

<script>
import MTPNavBar from '../../components/MovieTheatreProject/MTPNavBar.vue';

export default {
    name: "MTPBooking",
    components: {
        MTPNavBar,
    },
    // props: ["poster", "title", "rating", "duration", "theatre", "location", "date", "time"],
    data() {
        return {
            bookingData: {},
            tickets: 0,
        }
    },
    mounted() {
        this.getBookingInfo();
    },
    methods: {
        getBookingInfo() {
            if (localStorage.getItem("bookingData")) {
                this.bookingData = JSON.parse(localStorage.getItem("bookingData"));
            }
            // else {
            // this.bookingData = {
            //     poster: this.poster,
            //     title: this.title,
            //     rating: this.rating,
            //     duration: this.duration,
            //     theatre: this.theatre,
            //     location: this.location,
            //     date: this.date,
            //     time: this.time,
            // };
            // // this.$store.commit("SET_BOOKING_DATA", this.bookingData);
            // }
        },
        setTicket(val) {
            if (val === 'add' && this.tickets < 5)
                this.tickets += 1;
            else if (val === 'sub' && this.tickets > 0)
                this.tickets -= 1;
        },
        getTotalPrice() {
            return this.tickets * 350;
        },
        confirmBooking() {
            // let email = document.getElementById('mtp_booking_email').value;
            // this.bookingData.email = email;
            // this.$store.commit("SET_BOOKING_DATA", bookingData);
            this.$router.push({ name: 'mtp' });
        }
    }
};

</script>