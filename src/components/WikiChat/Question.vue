<template>
    <form @submit.prevent="askQuestion" method="post">
        <div class="p-10 flex flex-col">
            <p class="text-center font-mono text-5xl font-bold mb-10">Wiki article: '<span class="text-green-700">{{articleName}}</span>'</p>
            <label class="text-center font-mono text-5xl font-bold" for="question">Your question:</label>
            <input class="shadow-md rounded border-2 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 font-mono" type="text" name="question" id="question" value="when was he born?">
            <input type="submit" value="Get Answers" class="mt-5 self-center bg-green-500 hover:bg-green-400 text-white font-mono text-2xl font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded">
        </div>
    </form>

    <!-- <div v-if="this.answers.length > 0" class="p-5 font-mono"> -->
    <div class="p-5 font-mono">
        <p class="text-5xl font-bold mb-5">Answers: {{this.answers.length}}</p>
        <div class="grid grid-cols-4 gap-4">
            <div v-for="answer in this.answers" class="max-w-sm rounded overflow-hidden shadow-lg hover:shadow-2xl border border-sky-500">
                <div class="px-6 py-4">
                    <div>
                        <p class="font-bold text-xl mb-2">Text:</p>
                        <p class="text-gray-700 text-xl">{{answer.text}}</p>
                    </div>
                </div>

                <div class="px-6 py-4">
                    <div>
                        <p class="font-bold text-xl mb-2">Score:</p>
                        <p class="text-gray-700 text-xl">{{answer.score}}</p>
                    </div>
                </div>

                <div class="px-6 pt-4 pb-2">
                    <p class="font-bold text-xl mb-2">Sections:</p>
                    <span v-for="section in answer.sections" class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{{section}}</span>
                </div>
            </div>
        </div>
    </div>



</template>

<script>
import axios from 'axios';

export default {
    name:'Question',
    emits:['set-error'],
    props: ['articleName'],
    data() {
        return{
            answers: [],
        }
    },
    methods: {
        askQuestion(e){
            this.error = "";
            const formData = {
                question: document.querySelector('#question').value
            }
            axios
            .post(`/api/v1/wikiqa/ask-question/`, formData)
            .then((response) => {
                console.log(response.data);
                if (response.data.Error) this.$emit('set-error', response.data.Error);
                else{
                    this.answers = response.data;
                    console.log(this.answers);
                }
            })
            .catch((error) => {
                console.error(error);
            });
        }
    },
};
</script>