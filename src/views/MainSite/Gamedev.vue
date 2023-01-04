<template>
    <div class="flex">
        <SideBar />
        <Post section='game-dev'/>
    </div>
</template>

<script>
import Post from '../../components/MainSite/Post.vue';
import SideBar from '../../components/MainSite/SideBar.vue';


export default{
    name: 'Gamedev',
    components:{
    SideBar,
    Post
},
};
</script>