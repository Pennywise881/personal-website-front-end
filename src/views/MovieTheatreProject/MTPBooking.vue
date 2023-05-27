<template>
    <MTPNavBar />
    <div>
        <div class="bg-zinc-700 flex justify-center p-4">
            <img :src="this.bookingData.poster" alt="poster" class="border-2 border-white w-2/3 md:w-40">
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
        <div class="md:flex justify-center mb-10">
            <div class="p-2 md:p-4">
                <!-- Select tickets -->
                <section>
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
                </section>

                <!-- Select Seats -->
                <section class="mt-10">
                    <div class="flex justify-between">
                        <p class="text-xl font-bold">Select seats:</p>
                        <p class="text-xl">{{ this.remainingSeats }} seat(s) remaining</p>
                    </div>
                    <div class="border rounded-sm">
                        <div class="bg-zinc-300 m-1 p-1 mb-5 md:mb-10">
                            <p class="text-lg font-bold text-center">MOVIE SCREEN</p>
                        </div>
                        <div class="flex justify-between">
                            <div v-for="(color, index) in this.seatColors" :key="index"
                                class="grid grid-cols-5 grid-rows-5 gap-2 max-h-48">
                                <div v-for="i in 5">
                                    <div v-for="j in 5">
                                        <div class="mb-1">
                                            <button :class="this.getSeatButtonClass(color, i, j, index)"
                                                @click="this.setSeat($event)">
                                                {{ this.getSeatRowAlpha(j, index + 1) }}{{ i }}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- <div class="grid grid-cols-5 grid-rows-5 gap-2 max-h-48">
                                <div v-for="i in 5">
                                    <div v-for="j in 5">
                                        <div class="mb-1">
                                            <button :class="{
                                                    'border border-green-600 w-full p-1 hover:bg-green-600 hover:text-white': !this.seats.includes(this.getSeatRowAlpha(j, 2) + i),
                                                    'border border-green-600 w-full p-1 bg-green-600 text-white': this.seats.includes(this.getSeatRowAlpha(j, 2) + i)
                                                }" @click="this.setSeat(2, $event)">
                                                {{ this.getSeatRowAlpha(j, 2) }}{{ i }}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div> -->
                        </div>
                    </div>
                </section>
            </div>
        </div>

        <div v-if="this.tickets > 0 && this.remainingSeats === 0" class="flex justify-center mb-5">
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
    </div>
</template>

<script>
import MTPNavBar from '../../components/MovieTheatreProject/MTPNavBar.vue';

export default {
    name: "MTPBooking",
    components: {
        MTPNavBar,
    },
    data() {
        return {
            bookingData: {},
            tickets: 0,
            remainingSeats: 0,
            seats: [],
            seatColors: ['blue', 'green']
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
        },
        setTicket(val) {
            if (val === 'add' && this.tickets < 5)
                this.tickets += 1;
            else if (val === 'sub' && this.tickets > 0)
                this.tickets -= 1;

            this.remainingSeats = this.tickets;
            this.seats = [];
        },
        getTotalPrice() {
            return this.tickets * 350;
        },
        confirmBooking() {
            // let email = document.getElementById('mtp_booking_email').value;
            // this.bookingData.email = email;
            this.bookingData.seats = this.seats;
            this.$store.commit("SET_BOOKING_DATA", this.bookingData);
            this.$router.push({ name: 'mtp' });
        },
        getSeatRowAlpha(row, col) {
            row -= 1;
            let baseCharCode;
            if (col === 1) baseCharCode = 'A'.charCodeAt(0);
            else baseCharCode = 'F'.charCodeAt(0);

            return String.fromCharCode(baseCharCode + row);
        },
        setSeat(event) {
            if (this.seats.includes(event.target.innerHTML)) {
                // this.toggleClassList(col, event)
                this.seats = this.seats.filter(item => item !== event.target.innerHTML);

            }
            else if (this.tickets > 0 && this.remainingSeats > 0) {
                // this.toggleClassList(col, event);
                this.seats.push(event.target.innerHTML)
            }
            this.remainingSeats = this.tickets - this.seats.length;
        },
        // toggleClassList(col, event) {
        //     if (col === 1) event.target.classList.toggle("bg-blue-600");
        //     else event.target.classList.toggle("bg-green-600");
        //     event.target.classList.toggle("text-white");
        // },
        getSeatButtonClass(color, i, j, index) {
            if (!this.seats.includes(this.getSeatRowAlpha(j, index + 1) + i)) {

                // console.log(color);
                // if (color === 'blue') return "border border-blue-600 w-full p-1 text-xs md:text-base hover:bg-blue-600 hover:text-white";
                return `border border-${color}-600 w-full p-1 text-xs md:text-base hover:bg-${color}-600 hover:text-white`;

            }
            else
                return `border border-${color}-600 w-full p-1 text-xs md:text-base bg-${color}-600 text-white`;
        }
    }
};

</script>