<template>
  <div id="app">
    <CustomCursor />
    <SadFace />
    <TransitionHero />
    <router-view></router-view>
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" class="svg-filters">
      <defs>
        <filter id="filter">
          <feTurbulence type="fractalNoise" baseFrequency="0 0" numOctaves="1" result="warp" />
          <feDisplacementMap xChannelSelector="R" yChannelSelector="G" scale="30" in="SourceGraphic" in2="warp" />
        </filter>
      </defs>
    </svg>
  </div>
</template>

<script>
import './core/media-listeners';
import SadFace from './components/sad-face';
import CustomCursor from './components/cursor';
import TransitionHero from './components/transitionHero';
import ripple from './assets/imgs/ripple.png';
import { mapState } from 'vuex';

export default {
  name: 'app',
  components: {
    SadFace,
    CustomCursor,
    TransitionHero,
  },
  data: () => ({
    ripple,
  }),
  computed: {
    ...mapState([
      'bodyHeight'
    ])
  },
  watch: {
    '$route': {
      handler() {
        this.checkBodyHeight();
      },
    },
    bodyHeight() {
      this.checkBodyHeight();
    }
  },
  methods: {
    checkBodyHeight() {
      if (this.$route.name === 'home') {
        document.body.style.height = `${this.bodyHeight}px`;
        document.body.classList.remove('sub-page');
      } else {
        document.body.style.height = 'auto';
        document.body.classList.add('sub-page');
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.checkBodyHeight();
    })
  }
}
</script>

<style lang="scss">
@import './styles/_normalize';
@include normalize();
body.sub-page {
  #app {
    position: static;
    min-height: 100vh;
  }
}
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
    position: fixed;
    z-index: 800;
    height: 140vh;
    left: -40%;
    top: -20%;
    width: 180%;
    pointer-events: none;
    will-change: transform;
    animation: noiseAnimation 1s steps(20) infinite;
    background-image: url('./assets/imgs/noise.png');
    z-index: 6;
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

.svg-filters {
  position: absolute;
  visibility: hidden;
  width: 1px;
  height: 1px;
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
