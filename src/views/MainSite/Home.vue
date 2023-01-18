<template>
    <NavBar />
    <div class="flex">
        <SideBar />
        <Post section='blog'/>
    </div>
    <Footer />
</template>

<script>
import Footer from '../../components/MainSite/Footer.vue';
import NavBar from '../../components/MainSite/NavBar.vue';
import Post from '../../components/MainSite/Post.vue';
import SideBar from '../../components/MainSite/SideBar.vue';


export default{
    name: 'Home',
    components:{
    SideBar,
    Post,
    NavBar,
    Footer
},
};
</script>