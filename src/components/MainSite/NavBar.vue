<template>
  <nav class="p-5 font-bold md:w-full border-b-2 border-red-600 bg-zinc-200">
    <!-- <div class="md:hidden grid grid-cols-5 gap-4">
      <div v-for="item in this.navItems">
        <div v-if="item.text === 'zamansprojects'" class="flex justify-center">
          <img @click="this.setSection('blog', 'home')" src="../../../src/assets/img.png" alt="img" class="rounded-full absolute hover:underline hover:cursor-pointer w-20 border-2 border-red-600">  
        </div>
        <div v-else class="flex justify-between uppercase">
          <p>
            <span @click="this.setSection(item.section)" class="hover:underline hover:cursor-pointer hover:text-red-800">
              {{item.text}}
            </span>
          </p>
        </div>
      </div>
    </div> -->
    <div class="md:hidden flex justify-between items-center">
      <p class="text-xl hover:underline hover:cursor-pointer">zamansprojects</p>
      <p>
        <span @click="this.setSection(item.section)" class="hover:underline hover:cursor-pointer hover:text-red-800 font-semibold uppercase">
          {{this.section}}
        </span>
      </p>
      <div>
        <button class="py-1 px-2 block text-white bg-red-900 rounded-sm" @click="this.onMenuClick()">
          <svg class="w-8 h-8 fill-current hamburger-icon" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
          <svg class="w-8 h-8 fill-current close-icon hidden" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"/></svg>
        </button>
        <div class="font-normal absolute shadow-md mt-2 right-0 mr-5 dropdown-menu hidden">
          <div class="bg-zinc-200 border-4 border-white p-2 rounded">
            <p v-for="item in this.navItems" class="uppercase font-semibold">
              <span @click="this.setSection(item.section)" class="hover:underline hover:cursor-pointer hover:text-red-800 font-semibold uppercase" v-if="item.text!=this.section && item.text!='zamansprojects'" >
                {{item.text}}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="hidden md:block">
      <div class="flex justify-between">
        <div class="flex">
          <p @click="this.setSection('blog', 'home')" class="text-3xl font-bold hover:underline hover:cursor-pointer">zamansprojects</p>
        </div>
        <div class="flex text-lg font-bold uppercase items-center">
          <div v-for="item in this.navItems">
            <p v-if="item.text !=='zamansprojects'" class="self-center px-10 ">
              <span @click="this.setSection(item.section)" class="hover:underline hover:cursor-pointer hover:text-red-800">
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
      section: 'blog',
      navItems:
      [
        {
          text: 'blog',
          section: 'blog',
        }, 
        {
          text: 'ai-ml',
          section: 'ai-ml',
        },
        {
          text : 'zamansprojects',
          section : this.section,
        },
        {
          text: 'web',
          section: 'web',
        }, 
        {
          text: 'games',
          section: 'games'
        },
      ],
    }
  },  
  mounted(){
    this.setSection('blog');
    // this.$emit('change-section', this.section);
    // this.$store.commit("SET_section", this.section);
    // router.push({name:this.section});
  },
  methods:{
    onMenuClick()
    {
      document.querySelector('.hamburger-icon').classList.toggle('hidden');
      document.querySelector('.close-icon').classList.toggle('hidden');
      document.querySelector('.dropdown-menu').classList.toggle('hidden');
    },
    setSection(section)
    { 
      var spans = document.getElementsByTagName('span');
      // console.log(text, section);
      this.section = section;

      for (let i = 0; i < spans.length; i++) {
        if(spans[i].innerHTML === this.section)spans[i].className = "underline cursor-pointer text-red-800 font-semibold uppercase";
        else spans[i].className = 'hover:underline hover:cursor-pointer hover:text-red-800 font-semibold uppercase'; 
      }

      // this.$emit('change-section', section);
      router.push({name: section});
    }
  }
}
</script>