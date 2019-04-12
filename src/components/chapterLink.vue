<template>
  <div class="chapter-link" :class="{[chapter.name] : true}">
    <img :src="chapter.photo" alt="">
    <!-- <component :is="titleSVG" /> -->
  </div>
</template>

<script>
import familyPhoto from './../assets/imgs/family-photo.png';
import familySvg from './../assets/family.svg';

export default {
  name: 'chapterLink',
  props: {
    chapter: {
      type: Object,
      required: true,
    }
  },
  computed: {
    titleSVG() {
      let svg;
      switch (this.chapter.name) {
        case 'family':
          svg = this.familySvg;
          break;
        default:
          break;
      }
      return svg;
    }
  },
  mounted() {
    console.log(this.titleSVG);
    
  },
  data: () => ({
    familyPhoto,
    familySvg,
  }),

}
</script>

<style lang="scss">

</style>