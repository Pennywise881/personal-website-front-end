<template>
  <div class="font-base">
    <router-view />
    <Footer />
  </div>
</template>

<script>
import axios from "axios";
import Footer from "./components/MainSite/Footer.vue";
export default{
  name: "App",
  components:{
    Footer,
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
