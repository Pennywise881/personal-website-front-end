<template>
    <NavBar />
    <Social />
    <div class="flex">
        <SideBar />
        <!-- <Post :section='{current_section}'/> -->
        <Post />
    </div>
</template>

<script>
import Post from '../../components/MainSite/Post.vue';
import SideBar from '../../components/MainSite/SideBar.vue';
import NavBar from "../../components/MainSite/NavBar.vue";
import Social from "../../components/MainSite/Social.vue";


export default{
    name: 'Home',
    // data(){
    //     return{
    //         current_section: 'blog'
    //     }
    // },
    components:{
        SideBar,
        Post,
        NavBar,
        Social
    },
};
</script>