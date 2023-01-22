<template>
    <div class="flex">
        <SideBar />
        <Post section='web'/>
    </div>
</template>

<script>
import Post from '../../components/MainSite/Post.vue';
import SideBar from '../../components/MainSite/SideBar.vue';


export default{
    name: 'Web',
    components:{
    SideBar,
    Post
},
};
</script>