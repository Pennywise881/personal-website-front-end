<template>
  <div class="font-base">
    <!-- <NavBar @change-section="changeSection($event)"/> -->
    <NavBar />
    <Social />
    <router-view />
    <!-- <div class="flex">
        <SideBar />
        <Post :section="this.section"/>
    </div> -->
    <Footer />
    
  </div>
</template>

<script>
import axios from "axios";
import Footer from "./components/MainSite/Footer.vue";
import NavBar from "./components/MainSite/NavBar.vue";
import Social from "./components/MainSite/Social.vue";
// import Post from './components/MainSite/Post.vue';
// import SideBar from './components/MainSite/SideBar.vue';

export default{
  name: "App",
  components:{
    NavBar,
    // Post,
    // SideBar,
    Footer,
    NavBar,
    Social
},
  // data(){
  //   return{
  //     section: 'blog',
  //   }
  // },
  // methods:{
  //   changeSection(section)
  //   { 
  //     this.section = section;
  //     // console.log('From App.vue:', this.section);
  //   }
  // },
  beforeCreate()
  {
    this.$store.commit("INIT_STORE");
    const authId = this.$store.state.authId;

    if(authId)axios.defaults.headers.common["Authorization"] = authId;
    else axios.defaults.headers.common["Authorization"] = "";
  }
};
</script>
