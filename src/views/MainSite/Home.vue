<template>
    <NavBar />
    <div class="md:hidden">
        <Social />
    </div>
    <div class="flex">
        <SideBar />
        <Post />
    </div>
    <!-- <Dummy /> -->
</template>

<script>
import Post from '../../components/MainSite/Post.vue';
import SideBar from '../../components/MainSite/SideBar.vue';
import NavBar from "../../components/MainSite/NavBar.vue";
import Social from "../../components/MainSite/Social.vue";
import Dummy from '../../Dummy.vue';


export default {
    name: 'Home',
    components: {
        SideBar,
        Post,
        NavBar,
        Social,
        Dummy
    },
};
</script>