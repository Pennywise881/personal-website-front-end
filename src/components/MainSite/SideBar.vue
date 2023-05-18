<template>
    <aside class="hidden md:flex flex-col justify-between w-1/6 border-r-2 border-gray-200 h-screen"
        :class="{ 'fixed': !this.isShowNavbar }">
        <!-- <div class="p-4 flex justify-between" :class="{'hidden': this.showNavbar}">
            <div class="font-bold cursor-pointer hover:underline text-red-800 uppercase">blog</div>.
            <div class="font-bold cursor-pointer hover:underline text-red-800 uppercase">ai-ml</div>.
            <div class="font-bold cursor-pointer hover:underline text-red-800 uppercase">web</div>.
            <div class="font-bold cursor-pointer hover:underline text-red-800 uppercase">games</div>
        </div> -->

        <div class="py-4 px-3 opacity-75 hover:opacity-100">
            <ul class="mt-5">
                <li>
                    <img class="m-auto rounded-full border-4 border-red-600 shadow-sm w-32"
                        src="../../../src/assets/img.png" alt="user image" />
                </li>
                <li>
                    <p class="my-3 text-center font-bold text-xl">Nafi Uz Zaman</p>
                </li>
                <li>
                    <p class="my-3 text-center text-sm font-light">NLP, Web & Game Dev</p>
                </li>
            </ul>
            <Social />
        </div>

        <p class="text-xs mt-auto p-1 text-center">© 2023 <a href="#" class="hover:underline">zamansprojects™</a>. All
            Rights Reserved.</p>
    </aside>
</template>

<script>
import { mapState } from 'vuex';
import Social from './Social.vue';


export default {
    name: 'SideBar',
    components: {
        Social
    },
    computed: {
        ...mapState(['showNavbar']),
    },
    watch: {
        showNavbar(val) {
            this.isShowNavbar = val;
        }
    },
    data() {
        return {
            isShowNavbar: null,
        }
    }
}
</script> 