<template>
    <div class="md:hidden h-fit">

    </div>
    <footer class="bg-gray-800 text-center p-2 md:p-5">
        <div class="hidden md:block">
            <span class="text-sm text-gray-500 text-center dark:text-gray-400">© 2023 <a href="#" class="hover:underline">zamansprojects™</a>. All Rights Reserved.
            </span>
        </div>
        <div class="md:hidden flex flex-col justify-center">
            <div class="flex justify-center">
                <img v-for="social in this.socials" width="20" :src="social.src" :alt="social.alt" class="mr-2 hover:cursor-pointer">
            </div>
            <div>
                <span class="mt-2 text-xs text-gray-500 text-center dark:text-gray-400">© 2023 <a href="#" class="hover:underline">zamansproject™</a>. All Rights Reserved.</span>
            </div>
        </div>
    </footer>

</template>


<script>

export default{
    name: 'Footer',
    data (){
        return{
            socials:[
                {
                    alt: 'linkedin-logo',
                    src: 'https://upload.wikimedia.org/wikipedia/commons/c/ce/Linkedin_circle.svg'
                },
                {
                    alt: 'github-logo',
                    src: 'https://upload.wikimedia.org/wikipedia/commons/a/ae/Github-desktop-logo-symbol.svg'
                },
                {
                    alt: 'youtube-logo',
                    src: 'https://upload.wikimedia.org/wikipedia/commons/5/52/YouTube_social_white_circle_%282017%29.svg'
                },
                {
                    alt: 'twitter-logo',
                    src: 'https://upload.wikimedia.org/wikipedia/commons/4/4f/Twitter-logo.svg'
                },
            ]
        }
    }
}
</script>