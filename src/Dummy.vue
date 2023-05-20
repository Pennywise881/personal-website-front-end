<template>
  <div class="bg-zinc-200 md:px-20">
    <div class="px-2 md:px-10">
      <div class="bg-white rounded overflow-hidden shadow-lg">
        <div class="p-2 md:p-5">
          <div class="my-1 md:my-5">
            <p class="md:text-xl font-bold">BUY MOVIE TICKETS</p>
            <p class="text-xs md:text-sm text-red-500 font-bold">
              <span class="hover:underline hover:cursor-pointer">SEE ALL MOVIES</span>
            </p>
          </div>

          <div class="m-10 rounded-lg border border-gray-300 h-30">
            <div class="scroll-smooth flex overflow-hidden p-2" id="carousel">
              <div v-for="movie in arrivals" class="flex-shrink-0 -mr-5">
                <img class="rounded w-2/3 mx-auto" :src="movie.poster" :alt="movie.title">
                <p class="font-bold text-center">{{ movie.title }}</p>
              </div>
            </div>
          </div>


          <section>
            <div class="p-2 md:p-5">
              <p class="mt-5 md:mt-0 md:text-xl font-bold mb-2 md:mb-5">FEATURED</p>
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
  