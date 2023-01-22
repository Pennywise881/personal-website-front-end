<template>
    <div class="flex">
        <SideBar />
        <Post section='blog'/>
    </div>

</template>

<script>
import Post from '../../components/MainSite/Post.vue';
import SideBar from '../../components/MainSite/SideBar.vue';


export default{
    name: 'Blog',
    components:{
    SideBar,
    Post
},
};
</script>