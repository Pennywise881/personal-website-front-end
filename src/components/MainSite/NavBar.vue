<template>
  <nav class="p-5 font-bold md:sticky md:w-full border-b-2 border-red-600 bg-zinc-200">
    <div class="md:hidden grid grid-cols-5 gap-4">
      <div v-for="item in this.navItems">
        <div v-if="item.text === 'zamansprojects'" class="flex justify-center">
          <img @click="this.setPage('blog', 'home')" src="../../../src/assets/img.png" alt="img" class="rounded-full absolute hover:underline hover:cursor-pointer w-20 border-2 border-red-600">  
        </div>
        <div v-else class="flex justify-between uppercase">
          <p>
            <span @click="this.setPage(item.text, item.page)" class="hover:underline hover:cursor-pointer hover:text-red-800">
              {{item.text}}
            </span>
          </p>
        </div>
      </div>
    </div>

    <div class="hidden md:block">
      <div class="flex justify-between">
        <div class="flex">
          <p @click="this.setPage('blog', 'home')" class="text-3xl font-bold hover:underline hover:cursor-pointer">zamansprojects</p>
        </div>
        <div class="flex text-lg font-bold uppercase items-center">
          <div v-for="item in this.navItems">
            <p v-if="item.text !=='zamansprojects'" class="self-center px-10 ">
              <span @click="this.setPage(item.text, item.page)" class="hover:underline hover:cursor-pointer hover:text-red-800">
                {{item.text}}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import router from '../../router';

export default{

  name: "NavBar",
  data(){
    return{
      navItems:
      [
        {
          text: 'blog',
          page: 'blog',
        }, 
        {
          text: 'ai-ml',
          page: 'ai-ml',
        },
        {
          text : 'zamansprojects',
          page : 'home',
        },
        {
          text: 'web',
          page: 'web-dev',
        }, 
        {
          text: 'games',
          page: 'games'
        },
      ],
      page: 'home',
    }
  },  
  mounted(){
    this.setPage('blog', 'home');
    // this.$emit('change-page', this.page);
    // this.$store.commit("SET_page", this.page);
    // router.push({name:this.page});
  },
  methods:{
    setPage(text, page)
    { 
      var spans = document.getElementsByTagName('span');
      // console.log(text, page);
      this.page = text;

      for (let i = 0; i < spans.length; i++) {
        if(spans[i].innerHTML === this.page)spans[i].className = "underline cursor-pointer text-red-800";
        else spans[i].className = 'hover:underline hover:cursor-pointer hover:text-red-800'; 
      }

      // this.$emit('change-page', page);
      router.push({name: page});
    }
  }
}
</script>