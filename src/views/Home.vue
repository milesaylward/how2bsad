<template>
<div class="screen-container" ref="screenContainer" :style="containerStyle" :class="visible">
  <Landing />
  <Title />
  <About ref="about" />
  <Chapters ref="chapter" @changeChapter="handleChapterChange" :animOut="animOut" />
</div>
</template>

<script>
import { mapGetters, mapState, mapMutations } from 'vuex';
import Landing from '@/screens/landing';
import Title from '@/screens/title';
import About from '@/screens/about';
import Chapters from '@/screens/chapters';
import { scrollToSection } from '../core/utils';
import { SECTIONS } from '../core/config';
import eventBus from '@/main';
import { SCROLL_TO_CHAPTER } from '../core/mutation-types';

export default {
  name: 'home',
  components: {
    Landing,
    Title,
    About,
    Chapters,
  },
  data: () => ({
    animOut: false,
    visible: false,
  }),
  computed: {
    mainContainerStyles() {
      return scrollHelper({
        scrollPosition: this.scrollPosition,
        baseStyles: this.containerStyle
      });
    },
    ...mapGetters(['containerStyle']),
    ...mapState(['scrollPosition', 'windowWidth', 'windowHeight', 'scrollToChapter'])
  },
  methods: {
    handleChapterChange(linkName) {
      const cb = () => {
        this.$router.push(linkName);
      };
      setTimeout(() => {
        this.$refs.chapter.animOut(cb);
      }, 300);
    },
    ...mapMutations({
      setScrollToChapter: SCROLL_TO_CHAPTER
    })
  },
  mounted() {
    if (this.scrollToChapter) {
      setTimeout(() => {
        const cb = () => {
          setTimeout(() => {
            this.setScrollToChapter(false);
          }, 300);
        };
        scrollToSection({ subsection: SECTIONS.chapters, fast: true, cb });
      }, 300);
    }
  },
}
</script>

<style lang="scss" scoped>
.screen-container {
  // opacity: 0;
}
</style>