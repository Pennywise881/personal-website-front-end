<template>
    <div class="flex">
        <SideBar />
        <Post section='web-dev'/>
    </div>
</template>

<script>
import Post from '../../components/MainSite/Post.vue';
import SideBar from '../../components/MainSite/SideBar.vue';


export default{
    name: 'Webdev',
    components:{
    SideBar,
    Post
},
};
</script>