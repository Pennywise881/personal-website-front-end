<template>
    <aside class="hidden md:flex flex-col justify-between w-1/6 border-r-2 border-gray-200 h-screen" :class="{ 'fixed': !this.isShowNavbar}">
        <!-- <div class="p-4 flex justify-between" :class="{'hidden': this.showNavbar}">
            <div class="font-bold cursor-pointer hover:underline text-red-800 uppercase">blog</div>.
            <div class="font-bold cursor-pointer hover:underline text-red-800 uppercase">ai-ml</div>.
            <div class="font-bold cursor-pointer hover:underline text-red-800 uppercase">web</div>.
            <div class="font-bold cursor-pointer hover:underline text-red-800 uppercase">games</div>
        </div> -->

        <div class="py-4 px-3 opacity-75 hover:opacity-100">
            <ul class="mt-5">
                <li>
                    <img class="m-auto rounded-full border-4 border-red-600 shadow-sm w-32" src="../../../src/assets/img.png" alt="user image" />
                </li>
                <li>
                    <p class="my-3 text-center font-bold text-xl">Nafi Uz Zaman</p>
                </li>
                <li>
                    <p class="my-3 text-center text-sm font-light">NLP, Web & Game Dev</p>
                </li>
            </ul>
            <div class="p-5 my-3 flex flex-col">
                <div v-for="social in this.socials" class="flex mb-3">
                    <img width="25" :alt="social.alt" :src="social.src">
                    <p class="ml-2 hover:text-red-800 hover:underline hover:cursor-pointer">{{social.title}}</p>
                </div>
            </div>
        </div>

        <p class="text-xs mt-auto p-1 text-center">© 2023 <a href="#" class="hover:underline">zamansprojects™</a>. All Rights Reserved.</p>
    </aside>
</template>

<script>
import { mapState } from 'vuex';


export default{
    name: 'SideBar',
    computed:{
        ...mapState(['showNavbar']),
    },
    watch:{
        showNavbar(val)
        {
            this.isShowNavbar = val;
        }
    },
    data(){
        return{
            isShowNavbar: null,
            socials:[
                {
                    title: 'LinkedIn',
                    alt: 'linkedin-logo',
                    src: 'https://upload.wikimedia.org/wikipedia/commons/c/ce/Linkedin_circle.svg'
                },
                {
                    title: 'GitHub',
                    alt: 'github-logo',
                    src: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg'
                },
                {
                    title: 'YouTube',
                    alt: 'youtube-logo',
                    src: 'https://upload.wikimedia.org/wikipedia/commons/5/52/YouTube_social_white_circle_%282017%29.svg'
                },
                {
                    title: 'Twitter',
                    alt: 'twitter-logo',
                    src: 'https://upload.wikimedia.org/wikipedia/commons/6/6f/Logo_of_Twitter.svg'
                },
            ]
        }
    }
}
</script> 