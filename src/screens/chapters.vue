<template>
  <div 
    class="screen screen-chapters"
    :class="{
      'screen--active': this.sectionActive(this.sectionName),
    }"
    :style="sectionStyles"
  >
    <div class="screen-chapters__container">
      <ChapterLink 
        v-for="link in chapters" 
        :key="link.name"
        :chapter="link"
      />
    </div>
  </div>
</template>

<script>
import sectionMixin from './../mixins/section-mixin';
import { SECTIONS, CHAPTER_CONFIG } from '../core/config';
import ChapterLink from './../components/chapterLink';
  export default {
    name: 'chapter-section',
    mixins: [sectionMixin],
    components: {
      ChapterLink
    },
    data: () => ({
      sectionName: SECTIONS.chapters,
      heightAdjustment: 1.8,
      chapters: CHAPTER_CONFIG,
    }),
  }
</script>

<style lang="scss">
.screen {
  &-chapters {
    background: black;
    z-index: 2;
    &__container {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      justify-content: center;
      // height: 100%;
    }
  }
}
</style>
