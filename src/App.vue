<template>
  <div id="app">
    <div class="screen-container" ref="screenContainer" :style="containerStyle">
      <SadFace />
      <Landing />
      <Title />
      <About />
      <Chapters />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState, mapMutations } from 'vuex';
import './core/media-listeners';
import Landing from './screens/landing';
import Title from './screens/title';
import About from './screens/about';
import Chapters from './screens/chapters';
import SadFace from './components/sad-face';
import { scrollHelper } from './core/utils';
import { setTimeout } from 'timers';
import { SET_BODY_HEIGHT } from './core/mutation-types';
import { THRESHHOLDS } from './core/config';

export default {
  name: 'app',
  components: {
    Landing,
    Title,
    About,
    Chapters,
    SadFace,
  },
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
}
</script>

<style lang="scss">
@import './styles/_normalize';
@include normalize();
body {
  background: black;
}
#app {
  background: black;
  position: relative;
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  .screen-container {
    position: absolute;
    top: 0;
    left: 0;
    .screen {
      position: absolute;
      top: 0;
      left: 0;
      text-align: center;
      display: flex;
      justify-content: center; 
      align-items: center;
    }
  }
}
</style>
