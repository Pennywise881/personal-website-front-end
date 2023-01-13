<template>
    <div class="bg-gray-300 grid grid-row-3 gap-4 h-screen">
        <div class="flex flex-col justify-center items-center">
            <img src="https://upload.wikimedia.org/wikipedia/en/8/80/Wikipedia-logo-v2.svg" alt="wikipedialogo">
            <div class="mt-3 flex items-center">
                <input @keyup.enter="this.sendArticleName" type="text" id="articleName" class="mr-2 border border-gray-300 focus:ring-blue-500 focus:bg-white focus:border-blue-500 rounded-full" placeholder="Wikipedia article name......">
                <button @click="this.sendArticleName" class="rounded p-1 md:p-2 bg-green-600 text-white hover:bg-green-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>
                </button>
            </div>
            <div id="errormsg" class="hidden flex items-start text-red-600">
                <svg class="mr-1 w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z" clip-rule="evenodd" />
                </svg>
                <p class="text-red-500">Wiki article not found.</p>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default{
    name: "WikiChatHome",
    methods: {
        async sendArticleName()
        {   
            document.getElementById('errormsg').className = 'hidden flex text-red-600'
            const formData = {
                articleName: document.querySelector('#articleName').value
            }
            // axios.defaults.headers.common["Authorization"] = '';
            await axios
            .post(`/api/v1/wikichat/build-article`, formData)
            .then((response) => {

                this.$router.push({name:'wcbot', params: { articleNameSlug: 'foo' }});

                if(formData.articleName.split(' ').length > 1) this.$router.push({name: 'wcbot', params: {articleNameSlug: formData.articleName.split(' ').join('-')}})
                else this.$router.push({name: 'wcbot', params: {articleNameSlug: formData.articleName}})

            })
            .catch((error) => {
                // console.error(error);
                // console.log(error.response.data);
                var statusCode = error.response.status;
                if(statusCode === 400)
                {
                    var errorMsg = error.response.data;
                    console.error(errorMsg);
                    document.getElementById('errormsg').className = 'flex text-red-600'
                }
                // else{
                //     // go back to home page
                // }
            });
        }
    },  
}
</script>