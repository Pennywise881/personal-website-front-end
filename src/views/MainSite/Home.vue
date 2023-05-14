<template>
    <NavBar />
    <Social />
    <div class="flex">
        <SideBar />
        <Post />
        <!-- <main class="w-5/6 p-4 ml-auto border-l-2 border-gray-200">
            <div v-for="i in 100">
                <h1>Hello</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus itaque natus vitae ipsum aspernatur eaque libero modi. Blanditiis, praesentium, laudantium ea aut maxime architecto, ullam sit quo vero necessitatibus quia?</p>
            </div>
        </main> -->
    </div>
</template>

<script>
import Post from '../../components/MainSite/Post.vue';
import SideBar from '../../components/MainSite/SideBar.vue';
import NavBar from "../../components/MainSite/NavBar.vue";
import Social from "../../components/MainSite/Social.vue";


export default{
    name: 'Home',
    components:{
        SideBar,
        Post,
        NavBar,
        Social
    },
};
</script>