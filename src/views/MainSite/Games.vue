<template>
    <div class="flex">
        <SideBar />
        <Post section='games'/>
    </div>
</template>

<script>
import Post from '../../components/MainSite/Post.vue';
import SideBar from '../../components/MainSite/SideBar.vue';


export default{
    name: 'Games',
    components:{
    SideBar,
    Post
},
};
</script>