<template>
    <!-- <div class="px-40 py-20 bg-green-600">
        <div class="h-screen bg-green-600">
            <div v-for="i in 10" class="grid grid-cols-10 gap-2 mb-2">
                <img v-for="j in 10" :src="getCard(i, j)" alt="">
            </div>
        </div>
    </div> -->

    <div class="bg-green-600 grid grid-cols-10 gap-2 px-40 py-20">
      <img v-for="(image, index) in this.images" :key="index" :src="image" class="object-cover">
    </div>

  </template>
  
  <script>
  export default {
    data() {
      return {
        images: [],
      };
    },
    mounted() {
      // const imageFiles = import.meta.glob('../../assets/cards/*.png');
      // const images = [];
      // for (const path in imageFiles) {
      //   const imagePath = await imageFiles[path]();
      //   images.push(imagePath.default);
      // }
      // this.images = images;
      // for (let index = 0; index < this.images.length; index++) {
      //   console.log(this.images[index]);        
      // }
      this.getCards();
    },
    methods:{
        // getCard(i, j)
        // {
        //     var index = (10 * (i-1)) + (j-1)
        //     console.log(i, j, index)
        //     return this.images[index]
        // },
        getCards()
        {
          for (let index = 0; index < 100; index++) {
            var path = `/src/assets/cards/${index+1}.png`
            this.images.push(path)
          }
          console.log(this.images);
        }
    }
  };
  </script>
  