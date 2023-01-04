<template>
    <div class="flex">
        <SideBar />
        <Post section='ai-ml'/>
    </div>
</template>

<script>
import Post from '../../components/MainSite/Post.vue';
import SideBar from '../../components/MainSite/SideBar.vue';


export default{
    name: 'AI-ML',
    components:{
    SideBar,
    Post
},
};
</script>