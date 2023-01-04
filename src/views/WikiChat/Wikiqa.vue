<template>
    <div v-if="this.error" class="bg-red-100 border border-red-400 text-red-700 p-2 rounded relative" role="alert">
        <p> <span class="font-bold">Error!</span> {{error}}</p>
    </div>
    <div class="bg-stone-900 p-3 flex justify-between shadow-md mb-10">
        <div class="text-white font-mono text-3xl font-bold">
            <p>WikiQA</p>
        </div>
        <ul class="flex justify-end font-mono text-xl font-bold">
            <li class="mr-6">
                <a class="text-slate-500 hover:text-slate-600" href="#">Home</a>
            </li>
            <li class="mr-6">
                <a class="text-slate-500 hover:text-slate-600" href="#">About</a>
            </li>
        </ul>
    </div>

    <Article v-if="!this.foundArticle" @set-error="setError" @found-article="setArticleData"/>
    <Question v-if="this.foundArticle" @set-error="setError" :articleName="this.articleName"/>
</template>

<script>
// import axios from "axios";
import Article from '../components/WikiQA/Article.vue';
import Question from '../components/WikiQA/Question.vue';

export default {
    name: "Wikiqa",
    components:{
        Article,
        Question,
    },
    data() {
        return{
            foundArticle: false,
            error: "",
            articleName: "",
        }
    },
    methods:{
        setError(error){
            this.error = error;
        },
        setArticleData(articleName)
        {
            this.foundArticle = true;
            this.articleName = articleName;
        }
    }
    // props : ['error'],
    // methods: {
    //     setWikiPage(e){
    //         this.error = "";
    //         const formData = {
    //             pageName: document.querySelector('#pageName').value
    //         }
    //         axios
    //         .post(`/api/v1/wikiqa/create-wiki-page-data/`, formData)
    //         .then((response) => {
    //             // console.log(response.data);
    //             if(response.data.Error)this.error = response.data.Error;
    //             else{

    //             }
    //         })
    //         .catch((error) => {
    //             // for (const property in error.response.data){
    //             //     this.error = error.response.data[property][0];
    //             // }
    //             console.error(error);
    //         });
    //     }
    // },4
};
</script>