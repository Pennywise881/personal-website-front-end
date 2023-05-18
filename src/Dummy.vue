<template>
  <div class="md:px-20">
    <div class="px-2 md:px-10">
      <div class="p-5">
        <div class="relative mt-2 md:mt-5 rounded-lg border border-gray-300 p-2">
          <button type="button"
            class="mx-5 absolute top-0 left-0 z-30 flex items-center justify-center h-full cursor-pointer focus:outline-none"
            @click="carouselButtonClick('left')">
            <span
              class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-red-600 hover:bg-red-500 text-white">
              <svg aria-hidden="true" class="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
              </svg>
            </span>
          </button>
          <!-- The cards -->
          <div class="h-40 md:h-full mx-10 md:mx-20 overflow-x-hidden whitespace-nowrap scroll-smooth" id="carousel">
            <router-link v-for="movie in this.arrivals"
              class="inline-grid grid-cols-3 gap-4 md:inline-block mr-2 md:mr-4 hover:opacity-75 hover:text-red-700"
              :to="{ name: 'Showtime', params: { key: movie.key, slug: movie.slug } }">
              <img class="rounded" :src="movie.poster" :alt="movie.title">
              <p class="font-bold text-sm">{{ movie.title }}</p>
            </router-link>
          </div>
          <button type="button"
            class="mx-5 absolute top-0 right-0 z-30 flex items-center justify-center h-full cursor-pointer focus:outline-none"
            @click="carouselButtonClick('right')">
            <span
              class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-red-600 hover:bg-red-500 text-white">
              <span
                class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-red-600 hover:bg-red-500 text-white">
                <svg aria-hidden="true" class="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor"
                  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </span>
            </span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
import axios from 'axios';

export default {
  name: 'Dummy',

  data() {
    return {
      arrivals: [],
    };
  },
  mounted() {
    this.getArrivals();
  },
  methods: {
    carouselButtonClick(direction) {
      if (direction === "left") document.getElementById('carousel').scrollLeft -= 800;
      else if (direction === "right") document.getElementById('carousel').scrollLeft += 800;
    },
    getArrivals() {
      axios
        .get(`/api/v1/movietheatreproject/get-arrivals`)
        .then((response) => {
          this.arrivals = response.data;
          for (let i = 0; i < this.arrivals.length; i++) {
            if (this.arrivals[i].title.split(' ').length > 2) {
              let title_words = this.arrivals[i].title.split(' ');
              this.arrivals[i].title = title_words[0] + " " + title_words[1] + "..."
            }
          }
        })
        .catch((error) => {
          console.error(error);
        })
    },
  }
};
</script>
  