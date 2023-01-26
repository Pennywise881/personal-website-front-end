<template>
    <div class="md:hidden py-10 px-5 flex">
        <img class="rounded-full border-2 border-red-600 shadow-sm w-16" src="../../../src/assets/img.png" alt="user image" />
        <div class="flex flex-col justify-center">
            <p class="mx-2 font-bold">Nafi Uz Zaman</p>
            <p class="mx-2 text-sm font-light">NLP, Web & Gamedev</p>
        </div>
        <div class="flex items-center">
            <button @click="this.showSocials()" class="ml-10 rounded hover:bg-black hover:text-white text-sm p-1 bg-transparent border border-black">
                Follow
                <div class="font-normal absolute shadow-md mt-2 right-20 mr-5 hidden socials-menu">
                    <div class="bg-zinc-200 border-4 border-white px-2 rounded">
                        <div v-for="social in this.socials" class="flex my-2">
                            <img width="16" :alt="social.alt" :src="social.src">
                            <p class="ml-2 hover:text-red-800 hover:underline hover:cursor-pointer text-black">{{social.title}}</p>
                        </div>
                    </div>
                </div>
            </button>
        </div>
    </div>

</template>


<script>

export default{
    name: 'Social',
    data (){
        return{
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
                    src: 'https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg'
                },
                {
                    title: 'Twitter',
                    alt: 'twitter-logo',
                    src: 'https://upload.wikimedia.org/wikipedia/commons/4/4f/Twitter-logo.svg'
                },
            ]
        }
    },
    methods:{
        showSocials()
        {
          document.querySelector('.socials-menu').classList.toggle('hidden');
        }
    }
}
</script>