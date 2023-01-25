<template>
  <nav class="p-5 font-bold md:w-full border-b-2 border-red-600 bg-zinc-200">
    <div class="md:hidden grid grid-cols-5 gap-4">
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
    setSection(section)
    { 
      var spans = document.getElementsByTagName('span');
      // console.log(text, section);
      this.section = section;

      for (let i = 0; i < spans.length; i++) {
        if(spans[i].innerHTML === this.section)spans[i].className = "underline cursor-pointer text-red-800";
        else spans[i].className = 'hover:underline hover:cursor-pointer hover:text-red-800'; 
      }

      // this.$emit('change-section', section);
      router.push({name: section});
    }
  }
}
</script>