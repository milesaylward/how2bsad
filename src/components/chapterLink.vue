<template>
  <div class="chapter-link" :class="{[chapter.name] : true}">
    <img class="number" :src="chapter.number" alt="">
    <img class="photo" :src="chapter.photo" alt="" v-if="chapter.photo">
    <div class="no-photo" v-else />
    <component :is="titleSVG" class="title" />
  </div>
</template>

<script>
import familySvg from './../assets/svg/family.svg';
import loveSvg from './../assets/svg/love.svg';
import workSvg from './../assets/svg/work.svg';
import nowSvg from './../assets/svg/now.svg';

export default {
  name: 'chapterLink',
  props: {
    chapter: {
      type: Object,
      required: true,
    }
  },
  data: () => ({
    familySvg,
    loveSvg,
    workSvg,
    nowSvg,
  }),
  computed: {
    titleSVG() {
      let svg;
      switch (this.chapter.name) {
        case 'family':
          svg = this.familySvg;
          break;
        case 'love':
          svg = this.loveSvg;
          break;
        case 'work':
          svg = this.workSvg;
          break;
        case 'now':
          svg = this.nowSvg;
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
}
</script>

<style lang="scss">
@import './../styles/_vars';

.chapter-link {
  position: relative;
  width: 620px;
  background-color: #555;
  padding: {
    top: 50px;
    left: 50px; 
    right: 50px;
  }
  @include breakpoint(large) {
    width: 520px;
  }
  @include breakpoint(medium) {
    width: 420px;
    max-height: 470px;
  }
  @include breakpoint(small) {
    width: 320px;
    max-height: 370px;
  }
  .number {
    position: absolute;
    left: 50px;
    top: 50px;
    @include breakpoint(small) {
     width: 80px; 
    }
  }
  .photo {
    display: block;
    width: 100%;
    margin: 0 auto;
    max-height: 540px;
    @include breakpoint(large) {
      max-height: 520px;
    }
    @include breakpoint(medium) {
      max-height: 366px;
    }
  }
  .no-photo {
    background: black;
    width: 100%;
    height: 100%;
    max-height: 540px;
    @media screen and ( max-width: 1439px ) {
      max-height: 454px;
    }
  }
  .title {
    display: block;
    max-width: 400px;
    max-height: 134px;
    margin-left: auto;
    margin-right: 0;
  }
  &.family {
    .number {
      @include breakpoint(small) {
        width: 50px;
      }
    }
  }
  &.love {
    background: white;
    .title {
      max-width: 290px;
    }
  }
  &.work {
    background: #ddd;
    .title {
      max-width: 300px;
    }
    .number {
      @include breakpoint(small) {
        width: 70px;
      }
    }
  }
  &.now {
    background: #292929;
    .title {
      max-width: 260px;
    }
    .number {
      @include breakpoint(small) {
        width: 75px;
      }
    }
  }
}
</style>