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
.chapter-link {
  position: relative;
  width: 620px;
  height: 620px;
  background-color: #555;
  padding: 50px;
  .number {
    position: absolute;
    left: 50px;
    top: 50px;
  }
  .photo {
    display: block;
    width: 100%;
    margin: 0 auto;
    max-height: 540px;
  }
  .no-photo {
    background: black;
    width: 100%;
    height: 100%;
    max-height: 540px;
  }
  .title {
    display: block;
    max-width: 400px;
    max-height: 134px;
    margin-left: auto;
    margin-right: 0;
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
  }
  &.now {
    background: #292929;
    .title {
      max-width: 260px;
    }
  }
}
</style>