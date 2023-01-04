<template>
    <div class="hidden md:block sticky top-0 h-screen w-64 border-r-2 border-gray-200">
        <div class="flex flex-col justify-between py-4 px-3 opacity-75 hover:opacity-100">
            <div style="height:80vh">
                <ul class="mt-5">
                    <li>
                        <img class="m-auto rounded-full border-4 border-gray-300 shadow-sm w-32" src="../../../src/assets/img.png" alt="user image" />
                    </li>
                    <li>
                        <p class="my-3 text-center font-bold text-xl font-medium">Nafi Uz Zaman</p>
                    </li>
                    <li>
                        <p class="my-3 text-center text-sm font-light">NLP, Web & Game Dev</p>
                    </li>
                </ul>
                <div class="p-5 my-3 flex flex-col item-center justify-start">
                    <div v-for="social in this.socials" class="flex mb-3 hover:text-red-800 hover:underline hover:cursor-pointer">
                        <img width="16" :alt="social.alt" :src="social.src">
                        <p class="ml-2">{{social.title}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default{
    name: 'SideBar',
    data(){
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
    }
}
</script> 