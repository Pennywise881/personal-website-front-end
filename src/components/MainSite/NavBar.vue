<template>
  <nav class="md:hidden grid grid-cols-3 gap-4 p-5 bg-zinc-200 text-xs font-bold uppercase border-b-2 border-zinc-400">
    <div class="flex justify-between">
      <router-link
        :to="{name:'home'}">
        <p class="hover:underline hover:cursor-pointer hover:text-red-800">blog</p>
      </router-link>
      <router-link
        :to="{name:'ai-ml'}">
        <p class="hover:underline hover:cursor-pointer hover:text-red-800">ai-ml</p>
      </router-link>
    </div>

    <div class="flex justify-center">
      <img src="../../../src/assets/img.png" alt="Circular Image" class="rounded-full w-20 absolute border-2 border-red-600">
    </div>

    <div class="flex justify-between">
      <router-link
        :to="{name:'web-dev'}">
        <p class="hover:underline hover:cursor-pointer hover:text-red-800">web</p>
      </router-link>
      <p>games</p>
    </div>
  </nav>

  <nav class="hidden md:block sticky w-full border-b-2 border-zinc-400">
    <div class="bg-zinc-200 flex p-5">
      <router-link
      @click="this.indicateCurrentPageOnNav('home')"
      :to="{name:'home'}">
        <p class="text-3xl font-bold hover:underline hover:cursor-pointer">zamansprojects</p>
      </router-link>

      <div class="ml-20 flex font-bold uppercase text-lg">
        <router-link
          v-for="link in this.links"
          class="px-10 self-center cursor-auto"
          :to="{name: link}"
          >
          <p v-if="link === 'home'" class="hover:text-red-800 hover:underline hover:cursor-pointer">blog</p>
          <p v-else-if="link === 'web-dev'" class="hover:text-red-800 hover:underline hover:cursor-pointer">web</p>
          <p v-else class="hover:text-red-800 hover:underline hover:cursor-pointer">{{link}}</p>
        </router-link> 
        <p class="px-10 self-center">
          <span class="hover:underline hover:cursor-pointer hover:text-red-800">
          games
          </span>
        </p>
      </div>
    </div>
  </nav>
</template>

<script>

export default{
    name: "NavBar",
    data(){
      return{
        links:['home', 'ai-ml', 'web-dev'],
        currentPage: 'home',
      }
    },  
    // created(){
    //   this.currentPage = window.location.pathname.split("/")[1];
    //   if(this.currentPage === "")this.currentPage='home';
    // },
    // mounted(){
    //   this.indicateCurrentPageOnNav(this.currentPage);
    // },
    methods:{
      indicateCurrentPageOnNav(link){

        const activeLinkStyle = 'underline cursor-pointer text-red-800'
        const inactiveLinkStyle = 'hover:underline hover:cursor-pointer hover:text-red-800'

        document.getElementById(this.currentPage).className = inactiveLinkStyle;
        document.getElementById(link).className = activeLinkStyle;
        this.currentPage = link;
      }
    }
}
</script>