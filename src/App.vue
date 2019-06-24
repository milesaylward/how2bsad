<template>
  <div id="app">
    <CustomCursor />
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
import CustomCursor from './components/cursor';
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
    CustomCursor,
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
#app {
  background:black;
  position: relative;
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  cursor: none;
  &:after {
    content: '';
    position: absolute;
    z-index: 800;
    height: 180vh;
    left: -40%;
    top: -40%;
    width: 180%;
    pointer-events: none;
    will-change: transform;
    animation: noiseAnimation 1s steps(20) infinite;
    background-image: url('./assets/imgs/noise.png');
  }
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

@keyframes noiseAnimation {
    0% { transform: translate(0, 0); }
    10% { transform: translate(-5%, -5%); }
    20% { transform: translate(-10%, 5%); }
    30% { transform: translate(5%, -10%); }
    40% { transform: translate(-5%, 15%); }
    50% { transform: translate(-10%, 5%); }
    60% { transform: translate(15%, 0); }
    70% { transform: translate(0, 10%); }
    80% { transform: translate(-15%, 0); }
    90% { transform: translate(10%, 5%); }
    100% { transform: translate(5%, 0); }
}
</style>
