<template>
  <nav class="hidden sm:block p-5 font-bold md:w-full border-b-2 border-red-600 bg-zinc-200" v-show="showNavbar">
    <!-- Desktop view navbar -->
    <div class="flex justify-between">
      <div class="flex">
        <p @click="this.setSection('blog')" class="text-xl md:text-3xl font-bold hover:underline hover:cursor-pointer">
          zamansprojects
        </p>
      </div>
      <div class="flex text-base md:text-lg font-bold uppercase items-center">
        <div v-for="item in this.navItems">
          <p class="self-center px-5 md:px-10">
            <span @click="this.setSection(item)" class="hover:underline hover:cursor-pointer hover:text-red-800">
              {{ item }}
            </span>
          </p>
        </div>
      </div>
    </div>
  </nav>

  <nav class="sm:hidden p-5 font-bold w-full border-b-2 border-red-600 bg-zinc-200 fixed">
    <!-- Mobile view navbar -->
    <div class="flex justify-between items-center">
      <p @click="this.setSection('blog')" class="text-xl hover:underline hover:cursor-pointer">zamansprojects</p>
      <p class="underline cursor-pointer text-red-800 font-semibold uppercase">
        <span @click="this.setSection(this.section)">
          {{ this.section }}
        </span>
      </p>
      <div>
        <button class="py-1 px-2 block text-white bg-red-900 rounded-sm" @click="this.onMenuClick()">
          <svg class="w-8 h-8 fill-current hamburger-icon" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
          <svg class="w-8 h-8 fill-current close-icon hidden" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
          </svg>
        </button>
        <div class="font-normal absolute shadow-md mt-2 right-0 mr-5 dropdown-menu hidden">
          <div class="bg-zinc-200 border-4 border-white rounded">
            <p v-for="item in this.navItems" class="uppercase font-semibold">
            <div v-if="item != this.section" class="px-4 py-2">
              <span @click="this.setSection(item)"
                class="hover:underline hover:cursor-pointer hover:text-red-800 font-semibold uppercase">
                {{ item }}
              </span>
            </div>
            </p>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
// import { mapState } from 'vuex';

export default {
  name: "NavBar",
  // computed:{
  //   ...mapState(['section']),
  //   // someComputedLocalState()
  //   // {
  //   //   return "Yo"
  //   // }
  // },
  // watch:{
  //   postType(val, oldVal)
  //   {
  //     console.log(val, oldVal);
  //     // this.section = val;
  //   }
  // },
  data() {
    return {
      section: '',
      navItems: ['blog', 'ai-ml', 'web', 'games'],
      showNavbar: true
    }
  },
  mounted() {
    this.setSection(null);
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.showNavbar = window.pageYOffset === 0;
      this.$store.commit('SET_SHOWNAVBAR', this.showNavbar);
    },
    onMenuClick() {
      document.querySelector('.hamburger-icon').classList.toggle('hidden');
      document.querySelector('.close-icon').classList.toggle('hidden');
      document.querySelector('.dropdown-menu').classList.toggle('hidden');
    },

    setSection(section) {
      if (section === null) this.$store.commit('SET_SECTION', 'blog');
      else this.$store.commit('SET_SECTION', section)

      this.section = this.$store.getters.currentSection;

      var spans = document.getElementsByTagName('span');

      for (let i = 0; i < spans.length; i++) {
        if (spans[i].innerHTML === this.section) spans[i].className = "underline cursor-pointer text-red-800 font-semibold uppercase";
        else spans[i].className = 'hover:underline hover:cursor-pointer hover:text-red-800 font-semibold uppercase';
      }
    }
  }
}
</script>