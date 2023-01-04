<template>
    <MTPNavBar />
    <MTPContent />
    <MTPFooter />
</template>

<script>
import MTPNavBar from '../../components/MovieTheatreProject/MTPNavBar.vue';
import MTPContent from '../../components/MovieTheatreProject/MTPContent.vue';
import MTPFooter from '../../components/MovieTheatreProject/MTPFooter.vue';

export default {
    name: "MovieTheatreProject",
    components:{
    MTPNavBar,
    MTPContent,
    MTPFooter
}
};
</script>