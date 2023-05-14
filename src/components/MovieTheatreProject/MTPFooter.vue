<template>
    <div class="bg-zinc-900 px-2 md:px-20">
        <div class="flex justify-between md:px-10">
            <div v-for="item in this.texts">
                <p class="text-white font-bold text-xs md:text-sm my-5 uppercase">{{item.heading}}</p>
                <p v-for="link in item.links" class="text-white font-light text-xs my-2 hover:underline cursor-pointer capitalize">{{link}}</p>
            </div>
        </div>
    </div>
    <div class="bg-zinc-200 hidden md:flex px-2 md:px-20 justify-between pb-10">
        <div class="md:mt-10 md:px-10">
            <p class="uppercase font-extrabold text-xl">follow us</p>
            <div class="flex justify-between">
                <div v-for="item in this.socials" class="my-5 mr-5">
                    <img width="25" :src="item.src" :alt="item.alt">
                </div>
            </div>
        </div>
        
        <div class="flex flex-col md:mt-10 md:px-10">
            <div>
                <p class="uppercase">
                    <span class="font-extrabold text-xl mr-5">get updates on all things movies</span>
                    <span class="text-xs text-red-500 hover:underline hover:text-red-700 cursor-pointer">privacy policy</span>
                </p>
            </div>
            <div class="my-5">
                <input class="w-4/5 px-5 shadow-md rounded rounded-r-none focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500" type="text" placeholder="Enter email address">   
                <button class="bg-red-600 p-3 rounded rounded-l-none uppercase text-white text-sm font-bold">submit</button>
            </div>
        </div>
        <div class="flex flex-col md:mt-10 md:px-10">
            <p class="uppercase font-extrabold text-xl">get the official app</p>
            <div class="flex my-5">
                <img class="cursor-pointer mr-5" width="100" src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="">
                <img class="cursor-pointer" width="100" src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="">
            </div>
        </div>
    </div>

    <div class="bg-zinc-200 md:px-20">
        <div class="bg-white md:mx-10 p-5 md:p-20">
            <p class="text-center font-sm uppercase mb-5">
                <span class="font-extrabold text-red-500 cursor-pointer hover:underline">refunds & exchanges</span> |
                <span class="font-extrabold text-red-500 cursor-pointer hover:underline">help</span> |
                <span class="font-extrabold text-red-500 cursor-pointer hover:underline">my account</span>
            </p>
            <p class="text-center capitalize mb-5">
                <span v-for="link in this.otherLinks" class="text-red-500 font-bold text-xs md:text-base">{{link}} | </span>
            </p>
            <div class="text-center">
                <button class="p-2 my-5 capitalize rounded border-2 border-red-500 font-extrabold text-red-500">
                    advertise with us
                </button>
                <p>© 2023</p>
            </div>
        </div>
    </div>

</template>

<script>

export default{
    name: "MTPFooter",
    data(){
        return{
            otherLinks:['about this site', 'careers', 'affiliate program', 'rewards', 'site index', 'ad choices', 'privacy policy', 'dhaka notice', 'terms and policies', 'accessibility'],
            affiliations: ["vudu", "movieclips", "fandango", "cineplex", "blockbuster", "rotten tomatoes"],
            socials:[
                {
                    src:"https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
                    alt: 'facebook'
                },
                {
                    src:"https://upload.wikimedia.org/wikipedia/commons/6/6f/Logo_of_Twitter.svg",
                    alt: 'twitter'
                },
                {
                    src:"https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg",
                    alt: "instagram"
                },
                {
                    src:"https://upload.wikimedia.org/wikipedia/commons/1/16/Youtube_circle.svg",
                    alt:"youtube"
                }
            ],
            texts: [
                { heading: "explore", links: ['movies in theatres', 'movie actors and actresses', 'mobile', 'new for streaming', 'special offers', 'gift cards']},
                { heading: "editorials", links: ['awards watch', 'indie movie guide', 'family guide', 'house of screams', 'movie news',]},
                { heading: "videos", links: ['movie trailers', 'weekly ticket', 'your movie minute']},
                { heading: "photos", links: ['red carpet premiers', 'celebrity birthdays', 'award show galleries',]},
            ],
        }
    },
}
</script>