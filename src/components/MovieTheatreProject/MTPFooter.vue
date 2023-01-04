<template>
    <div class="bg-zinc-900 px-2 md:px-20">
        <div class="flex justify-between md:px-10">
            <div v-for="item in this.texts">
                <p class="text-white font-bold text-xs md:text-sm my-5 uppercase">{{item.heading}}</p>
                <p v-for="link in item.links" class="text-white font-light text-xs my-2 hover:underline cursor-pointer capitalize">{{link}}</p>
            </div>
        </div>
    </div>
</template>

<script>

export default{
    name: "MTPFooter",
    data(){
        return{
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