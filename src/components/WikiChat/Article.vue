<template>
    <form @submit.prevent="setWikiPage" method="post">
        <div class="p-10 flex flex-col">
            <label class="text-center font-mono text-5xl font-bold" for="pageName">Wiki article name:</label>
            <input class="shadow-md rounded border-2 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 font-mono" type="text" name="pageName" id="pageName">
            <input type="submit" value="Search" class="mt-5 self-center bg-blue-500 hover:bg-blue-400 text-white font-mono text-2xl font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
        </div>
    </form>
</template>

<script>
import axios from "axios";

export default {
    name: "Article",
    emits:['set-error', 'found-article'],
    methods: {
        setWikiPage(e){
            this.error = "";
            const formData = {
                pageName: document.querySelector('#pageName').value
            }
            axios
            .post(`/api/v1/wikiqa/create-wiki-page-data/`, formData)
            .then((response) => {
                if (response.data.Error) this.$emit('set-error', response.data.Error);
                else{
                    this.$emit('set-error', '');
                    this.$emit('found-article', formData['pageName']);
                }
            })
            .catch((error) => {
                // for (const property in error.response.data){
                //     this.error = error.response.data[property][0];
                // }
                console.error(error);
            });
        }
    },
};
</script>