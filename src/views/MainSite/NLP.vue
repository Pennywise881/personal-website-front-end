<template>
    <div class="flex">
        <SideBar />
        <Post section='nlp'/>
    </div>
</template>

<script>
import Post from '../../components/MainSite/Post.vue';
import SideBar from '../../components/MainSite/SideBar.vue';


export default{
    name: 'NLP',
    components:{
    SideBar,
    Post
},
};
</script>