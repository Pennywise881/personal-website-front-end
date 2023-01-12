<template>
  <nav class="p-5 font-bold md:sticky md:w-full border-b-2 border-red-600 bg-zinc-200">
    <div class="md:hidden grid grid-cols-5 gap-4">
      <div v-for="item in this.navItems">
        <div v-if="item.text === 'zamansprojects'" class="flex justify-center">
          <img src="../../../src/assets/img.png" alt="img" class="rounded-full absolute hover:underline hover:cursor-pointer w-20 border-2 border-red-600">  
        </div>
        <div v-else class="flex justify-between uppercase">
          <p>
            <span @click="this.setPostSection(item.text, item.link)" class="hover:underline hover:cursor-pointer hover:text-red-800">
              {{item.text}}
            </span>
          </p>
        </div>
      </div>
    </div>

    <div class="hidden md:block">
      <div class="flex justify-between">
        <div class="flex">
          <p class="text-3xl font-bold hover:underline hover:cursor-pointer">zamansprojects</p>
        </div>
        <div class="flex text-lg font-bold uppercase items-center">
          <div v-for="item in this.navItems">
            <p v-if="item.text !=='zamansprojects'" class="self-center px-10 ">
              <span @click="this.setPostSection(item.text, item.link)" class="hover:underline hover:cursor-pointer hover:text-red-800">
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

export default{
  name: "NavBar",
  data(){
    return{
      navItems:
      [
        {
          text: 'blog',
          link: 'blog',    
        }, 
        {
          text: 'ai-ml',
          link: 'ai-ml',
        },
        {
          text : 'zamansprojects',
          link : 'blog',
        },
        {
          text: 'web',
          link: 'web-dev',
        }, 
        {
          text: 'games',
          link: 'blog'
        },
      ],
      currentPostSection: 'blog',
    }
  },  
  mounted(){
    this.setPostSection(this.currentPostSection)
  },
  methods:{
    setPostSection(text, link)
    { 
      var spans = document.getElementsByTagName('span');
      this.currentPostSection = text;

      for (let i = 0; i < spans.length; i++) {
        if(spans[i].innerHTML === this.currentPostSection)spans[i].className = "underline cursor-pointer text-red-800";
        else spans[i].className = 'hover:underline hover:cursor-pointer hover:text-red-800'; 
      }

      this.$emit('change-posts', link);
    }
  }
}
</script>