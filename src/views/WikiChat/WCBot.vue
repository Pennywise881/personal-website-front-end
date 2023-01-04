<template>
    <div class="bg-zinc-200 md:px-20">
        <div class="md:px-10 bg-white rounded overflow-hidden shadow-lg">
            <div class="mx-2 md:mx-20 my-10">
                <div class="border-2 border-gray-400 bg-white rounded">
                    <div class="p-2 text-lg md:text-xl font-bold">
                        Wiki Article: <span class="text-green-500">{{this.topic}}</span> 
                    </div>
                    <hr>
                    <div id="chat-history" class="relative w-full overflow-y-auto h-[30rem] bg-gray-100 py-5">
                        <div v-for="(message, index) in this.messages" class="py-2 px-5">
                            <!-- Bot -->
                            <div v-if="index % 2 === 0" class="flex justify-start">
                                <div class="inline-flex items-start mr-1">
                                    <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z" />
                                    </svg>
                                    
                                </div>
                                <div class="bg-orange-500 relative w-2/3 px-2 text-sm py-1 md:text-base md:max-w-sm md:px-4 md:py-2 text-white rounded shadow-lg break-word">
                                    <p class="block">{{message}}</p>
                                </div>
                            </div>

                            <!-- User -->
                            <div v-else class="flex justify-end my-5 md:my-0">
                                <div class="bg-green-600 relative px-2 text-sm py-1 md:text-base md:max-w-sm md:px-4 md:py-2 text-white rounded shadow-lg break-word">
                                    <span class="block text-justify">{{message}}</span>
                                </div>
                                <div class="inline-flex items-start ml-1">                                    
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <!-- While answer is being fetched -->
                        <div v-if="this.fetchingAnswer" class="ml-5 flex justify-start">
                            <div class="inline-flex items-start mr-1">
                                <svg class="animate-spin w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                            </div>
                            <div class="bg-orange-500 relative px-2 text-sm py-1 md:text-base md:max-w-sm md:px-4 md:py-2 text-white rounded shadow-lg break-word">
                                <p class="block">..........</p>
                            </div>
                        </div>
                    </div>
                    <hr>
                    <div class="flex m-5">
                        <input @keyup.enter="this.sendMessage" type="text" id="message" class="mr-2 bg-gray-200 border border-gray-300 focus:ring-blue-500 focus:bg-white focus:border-blue-500 w-full rounded rounded-full" placeholder="Enter your message here......">
                        <button @click="this.sendMessage" class="inline-flex items-center text-white bg-green-600 rounded-full p-2 border border-gray-300">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';


export default {

    name: "WCBot",
    data(){
        return{
            messages: [],
            answers: [],
            fetchingAnswer: false,
            topic: "",
        }
    },
    mounted(){
        this.getTopic();
        this.displayWelcomeMessage();
    },
    methods:{
        getTopic()
        {
            var slug = this.$route.params.articleNameSlug.split('-');
            if(slug.length > 1) this.topic = slug.join(' ')
            else this.topic = slug[0];
        },
        displayWelcomeMessage()
        {
            this.messages.push(`Hello! I am WikiChat. Ask me something about: \n ${this.topic}`)
        },
        sendMessage(){
            const data = {
                message: document.querySelector('#message').value
            };
            this.messages.push(data.message);
            this.answers = [];
            this.fetchingAnswer = true;
            document.querySelector('#message').value = '';

            axios
            .post(`/api/v1/wikichat/chat`, data)
            .then((response) => {
                this.fetchingAnswer = false;
                console.log(response.data);
                
                if(response.data.hasOwnProperty('score'))
                {
                    var ans = "Answer: " +  response.data.answer + ", Sore: " + response.data.score;
                    this.messages.push(ans);
                }
                else this.messages.push("Sorry! I can't understand. Can you please rephrase the question or be a bit more specific?")
            })
            .catch((error) => {
                console.error(error);
            })
        }
    }
};
</script>