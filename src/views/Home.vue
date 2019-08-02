<template>
<div class="screen-container" ref="screenContainer" :style="containerStyle">
  <Landing />
  <Title />
  <About ref="about" />
  <Chapters ref="chapter" @changeChapter="handleChapterChange" :animOut="animOut" />
</div>
</template>

<script>
import { mapGetters, mapState } from 'vuex';
import Landing from '@/screens/landing';
import Title from '@/screens/title';
import About from '@/screens/about';
import Chapters from '@/screens/chapters';

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
  }),
  computed: {
    mainContainerStyles() {
      return scrollHelper({
        scrollPosition: this.scrollPosition,
        baseStyles: this.containerStyle
      });
    },
    ...mapGetters(['containerStyle']),
    ...mapState(['scrollPosition', 'windowWidth', 'windowHeight'])
  },
  methods: {
    handleChapterChange() {
      setTimeout(() => {
        this.$refs.about.animOut();
        this.$refs.chapter.animOut(this.routeChange);
      }, 300);
    },
    routeChange() {
      this.$router.push('/family');
    },
  }
}
</script>

<style lang="scss" scoped>

</style>