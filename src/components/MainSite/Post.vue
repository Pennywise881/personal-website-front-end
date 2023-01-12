<template>
    <div class="container p-5 w-full md:w-4/6 h-screen">
        <div v-for="post in this.posts" class="p-6 bg-white border-2 border-gray-200 rounded-lg shadow-md mb-5">
            <router-link v-if="post.name" :to="{ name: post.name }">
            <div class="flex items-center">
                <p class="text-xl md:text-2xl font-bold text-red-800 capitalize hover:underline mr-3">{{post.title}}</p>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                    <path d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z" />
                    <path d="M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z" />
                </svg>
            </div>
            </router-link>
            <!-- <div v-if="post.name" class="flex items-center">
                <p @click="this.gotoProject(post.name)" class="hover:cursor-pointer text-xl md:text-2xl font-bold text-red-800 capitalize hover:underline mr-3">{{post.title}}</p>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                    <path d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z" />
                    <path d="M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z" />
                </svg>
            </div> -->
            <h5 v-else class="text-xl md:text-2xl font-bold text-red-800 capitalize">{{post.title}}</h5>
            <p class="italic text-gray-500 mb-2">Last Edit: {{this.getFormatedDate(post.last_modified)}}</p>
            <p :id="post.key+'-text'" class="text-sm md:text-base mb-3 font-normal text-gray-700 text-justify line-clamp-2" v-html="post.text"></p>
            <button :id="post.key+'-btn-expand'" @click="this.expandCollapseText(post.key, $event)" class="inline-flex items-center text-sm px-2 py-1 md:px-3 md:py-2 font-bold text-center text-white bg-red-800 rounded-sm md:rounded-lg hover:bg-red-900 focus:ring-4 focus:outline-none focus:ring-red-300">
                Read More
                <!-- <svg class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                </svg> -->
            </button>
            <!-- <button :id="post.key+'-collapse'" @click="this.expandText(post.key, 'collapse')" :class="'hidden ' + this.postButtonStyling">
                Read less
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 ml-2 -mr-1">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75" />
                </svg>
            </button> -->
        </div>
    </div>
</template>

<script>
import axios from 'axios';
// import router from '../../router';

export default{
    name: "Post",
    props: ['section'],
    data() {
        return {
            posts: [],
            postButtonStyling: 'inline-flex items-center text-sm px-2 py-1 md:px-3 md:py-2 font-medium text-center text-white bg-red-800 rounded-sm md:rounded-lg hover:bg-red-900 focus:ring-4 focus:outline-none focus:ring-red-300'
        }
    },
    mounted(){
        this.getPosts();
    },
    watch:{
        section: function makeAPICall() {
            this.getPosts();
        }
    },
    methods:{
        getPosts()
        {
            // console.log('From Post.vue:', this.section);
            axios
            .get(`/api/v1/mainsite/get-posts/${this.section}`)
            .then((response) =>{
                // console.log(response.data);
                this.posts = [];
                this.posts = response.data
            })
            .catch((error) =>{
                console.error(error);
            })
            
        },
        getFormatedDate(date)
        {   
            const dateArr = new Date(date).toDateString().split(' ');
            return dateArr[2] + " " + dateArr[1] + ", " + dateArr[3];
        },
        // gotoProject(projectName)
        // {
        //     router.push({name:projectName});
        // },
        expandCollapseText(post_key, event)
        {   
            // console.log("From posts.", this.section);
            // console.log(event.target.id);
            if(event.target.id === post_key+'-btn-expand')
            {
                event.target.innerHTML = 'Read Less'
                event.target.id =  post_key+'-btn-collapse';
                document.getElementById(post_key+'-text').className = 'text-sm md:text-base mb-3 font-normal text-gray-700 text-justify line-clamp-0';
            }
            else if(event.target.id === post_key+'-btn-collapse')
            {
                event.target.innerHTML = 'Read More'
                event.target.id =  post_key+'-btn-expand';
                document.getElementById(post_key+'-text').className = 'text-sm md:text-base mb-3 font-normal text-gray-700 text-justify line-clamp-2';
            }
            // console.log(post_id);
            // const buttonDisplayClass = this.postButtonStyling;//"inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-800 rounded-lg hover:bg-red-900 focus:ring-4 focus:outline-none focus:ring-red-300"
            // const buttonHideClass = 'hidden '+this.postButtonStyling;//" inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-800 rounded-lg hover:bg-red-900 focus:ring-4 focus:outline-none focus:ring-red-300"
            
            // console.log('asdasdasd');
            // if(behaviour === 'expand')
            // {
            //     // console.log(document.querySelector('#'+text_id+'-text').classList);
            //     document.getElementById(post_id+'-text').className = 'text-sm md:text-base mb-3 font-normal text-gray-700 text-justify line-clamp-0'
            //     document.getElementById(post_id+'-expand').className=buttonHideClass;
            //     document.getElementById(post_id+'-collapse').className = "inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-800 rounded-lg hover:bg-red-900 focus:ring-4 focus:outline-none focus:ring-red-300";
            // }
            // else if(behaviour === 'collapse')
            // {   
            //     console.log("heyyyy");
            //     document.getElementById(post_id+'-text').className = 'text-sm md:text-base mb-3 font-normal text-gray-700 text-justify line-clamp-2'
            //     document.getElementById(post_id+'-expand').className=buttonDisplayClass;
            //     document.getElementById(post_id+'-collapse').classList=buttonHideClass;
            // }
        }
    }
}
</script>