<template>
  <div class="flex flex-col font-base">
    <NavBar @change-posts="changePosts($event)"/>
    <!-- <router-view /> -->
    <div class="flex">
        <SideBar />
        <Post :section="this.posts"/>
    </div>
    <Footer />
  </div>
</template>

<script>
import axios from "axios";
import Footer from "./components/MainSite/Footer.vue";
import NavBar from "./components/MainSite/NavBar.vue";
import Post from './components/MainSite/Post.vue';
import SideBar from './components/MainSite/SideBar.vue';

export default{
  name: "App",
  components:{
    NavBar,
    Post,
    SideBar,
    Footer
  },
  data(){
    return{
      posts: 'blog',
    }
  },
  methods:{
    changePosts(posts)
    { 
      this.posts = posts;
      console.log('From App.vue:', this.posts);
    }
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
