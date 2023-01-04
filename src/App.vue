<script>
import axios from "axios";
import Footer from "./components/MainSite/Footer.vue";
import NavBar from "./components/MainSite/NavBar.vue";

export default{
  name: "App",
  components:{
    NavBar,
    Footer
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

<template>
  <div class="flex flex-col font-base">
    <NavBar />
    <router-view />
    <Footer />
  </div>
</template>
