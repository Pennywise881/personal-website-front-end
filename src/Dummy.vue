<template>
<nav class="md:hidden p-5 font-bold w-full border-b-2 border-red-600 bg-zinc-200 fixed">
  <!-- Mobile view navbar -->
  <div class="flex justify-between items-center">
    <p @click="this.setSection('blog')" class="text-xl hover:underline hover:cursor-pointer">zamansprojects</p>
    <div>
      <button class="py-1 px-2 block text-white bg-red-900 rounded-sm" @click="this.onMenuClick()">
        <svg class="w-8 h-8 fill-current hamburger-icon" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
        </svg>
        <svg class="w-8 h-8 fill-current close-icon hidden" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"/>
        </svg>
      </button>
      <div class="font-normal absolute shadow-md mt-2 right-0 mr-5 dropdown-menu hidden">
        <div class="bg-zinc-200 border-4 border-white rounded">
        </div>
      </div>
    </div>
  </div>
</nav>

<div class="md:hidden px-5 flex w-full py-28">
  <img class="rounded-full border-2 border-red-600 shadow-sm w-16" src="../../../src/assets/img.png" alt="user image" />
  <div class="flex flex-col justify-center">
    <p class="mx-2 font-bold">Nafi Uz Zaman</p>
    <p class="mx-2 text-sm font-light">NLP, Web & Gamedev</p>
  </div>
  <div class="flex items-center">
    <button @click="this.showSocials()" class="ml-10 rounded hover:bg-black hover:text-white text-sm p-1 bg-transparent border border-black">
      Follow
    </button>
  </div>
</div>


</template>
  
<script>
    import SideBar from './components/MainSite/SideBar.vue';

  export default {
    components:{
        SideBar,
    },
    data() {
      return {
        showNavbar: true
      };
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll);
    },
    destroyed() {
      window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
      handleScroll() {
        this.showNavbar = window.pageYOffset === 0;
      }
    }
  };
  </script>
  
  <style>
  /* Add your custom styles here */
  /* You can customize the styles according to your needs */
  </style>
  