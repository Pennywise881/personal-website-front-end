<template>
  <div class="font-base">
    <NavBar />
    <Social />
    <router-view />
    <Footer />
    <!-- <router-view /> -->
  </div>
</template>

<script>
import axios from "axios";
import Footer from "./components/MainSite/Footer.vue";
import NavBar from "./components/MainSite/NavBar.vue";
import Social from "./components/MainSite/Social.vue";
import TGHome from "./views/TriviaGame/TGHome.vue";

export default{
  name: "App",
  components:{
    NavBar,
    Footer,
    NavBar,
    Social,
    TGHome,
},
  beforeCreate()
  {
    this.$store.commit("INIT_STORE");
    const authId = this.$store.state.authId;

    if(authId)axios.defaults.headers.common["Authorization"] = authId;
    else axios.defaults.headers.common["Authorization"] = "";
  }
};
</script>
