<template>
    <div class="container p-2 md:p-5 w-full md:w-4/6 mb-10">
        <div v-if="this.section === 'games'" class="flex justify-center">
           <img src="https://media.giphy.com/media/S675CRFMUX7el7gyu7/giphy.gif" alt="gif">
        </div>

        <div v-if="this.gotPosts" v-for="post in this.posts" class="p-6 bg-white border-2 border-gray-200 rounded-lg shadow-md mb-5">
            <router-link v-if="post.project_route" :to="{ name: post.project_route }">
                <div class="flex items-center">
                    <p class="text-xl md:text-2xl font-bold text-red-800 capitalize hover:underline mr-3">{{post.title}}</p>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                        <path d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z" />
                        <path d="M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z" />
                    </svg>
                </div>
            </router-link>
            <a v-else-if="post.project_link" :href="post.project_link" target="_blank">
                <div class="flex items-center">
                    <p class="text-xl md:text-2xl font-bold text-red-800 capitalize hover:underline mr-3">{{post.title}}</p>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                        <path d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z" />
                        <path d="M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z" />
                    </svg>
                </div>
            </a>
            <h5 v-else class="text-xl md:text-2xl font-bold text-red-800 capitalize">{{post.title}}</h5>
            <p class="italic text-gray-500 mb-2">Published: {{this.getFormatedDate(post.publish_date)}}</p>
            <p :id="post.key+'-text'" class="text-sm md:text-base mb-3 font-normal text-gray-700 text-justify" v-html="post.text"></p>
        </div>
        <div v-else-if="!this.gotPosts && this.postType!=='games'" class="flex justify-center">
            <svg class="animate-spin md:w-40 md:h-40 w-20 h-20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import { mapState } from 'vuex';

export default{
    name: "Post",

    computed:{
        ...mapState(['section']),
    },

    watch:{
        section(val)
        {   
            this.postType = val;
            this.getPosts();
        }
    },

    data() {
        return {
            postType: null,
            gotPosts: false,
            posts: [],
            postButtonStyling: 'inline-flex items-center text-sm px-2 py-1 md:px-3 md:py-2 font-medium text-center text-white bg-red-800 rounded-sm md:rounded-lg hover:bg-red-900 focus:ring-4 focus:outline-none focus:ring-red-300'
        }
    },
    // mounted(){
    //     // this.getPosts();
    // },
    methods:{
        getPosts()
        {      
            console.log("This is from Post.vue:", this.postType);
            this.gotPosts = false;
            if (this.postType === 'games')return;
            
            axios
            .get(`/api/v1/home/get-posts/${this.postType}`)
            .then((response) =>{
                // console.log(response.data);
                this.posts = [];
                this.posts = response.data
                // this.gotPosts = true;
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