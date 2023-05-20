<template>
  <div class="font-base">
    <router-view />
    <!-- <Footer /> -->
    <!-- <Dummy /> -->
    <button v-show="showButton" @click="scrollToTop"
      class="fixed bottom-8 right-8 bg-red-900 text-white rounded-full p-3 shadow-md transition-opacity duration-300">
      <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
        stroke-linejoin="round">
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </button>
  </div>
</template>

<script>
import axios from "axios";
import Footer from "./components/MainSite/Footer.vue";
import Dummy from "./Dummy.vue";

export default {
  name: "App",
  components: {
    Footer,
    Dummy,
  },
  beforeCreate() {
    this.$store.commit("INIT_STORE");
    const authId = this.$store.state.authId;

    if (authId) axios.defaults.headers.common["Authorization"] = authId;
    else axios.defaults.headers.common["Authorization"] = "";
  },
  data() {
    return {
      showButton: false,
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      this.showButton = scrollPosition > 200; // Show the button when scrolling down at least 100 pixels
    },
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top with smooth animation
    }
  }
};
</script>
