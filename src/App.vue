<template>
  <div id="app">
    <CustomCursor />
    <SadFace />
    <ScrollMarker v-if="!isHomePage" />
    <div class="scrollable" :style="transformStyle">
      <TransitionHero />
      <router-view :key="$route.name"></router-view>
      <TransitionFooter class="hidden" :hidden="true" />
		</div>
    <TransitionFooter />
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
import ScrollMarker from './components/ScrollMarker';
import CustomCursor from './components/cursor';
import eventBus from '@/main';
import TransitionHero from './components/transitionHero';
import TransitionFooter from './components/transitionFooter';
import ripple from './assets/imgs/ripple.png';
import ChapterContent from '@/core/chapter-content';
import { mapState, mapMutations } from 'vuex';
import { SET_CHAPTER_CONTENT } from './core/mutation-types';
import SmoothScroll from '@/mixins/smooth-scroll-mixin';

export default {
  name: 'app',
  components: {
    SadFace,
    CustomCursor,
    ScrollMarker,
    TransitionHero,
    TransitionFooter
  },
  mixins: [SmoothScroll],
  data: () => ({
    ripple,
    SmoothScroll: null,
  }),
  computed: {
    isHomePage() {
      return this.$route.name === 'home';
    },
    transformStyle() {
      if (this.isHomePage) return;
      return {
        transform: `translate3d(0, ${-1*this.easedPosition}px, 0)`
      }
    },
    ...mapState(['bodyHeight', 'easedPosition'])
  },
  watch: {
    '$route': {
      handler(to) {
        this.checkBodyHeight();
      },
    },
    bodyHeight() {
      this.checkBodyHeight();
    }
  },
  methods: {
    checkBodyHeight() {
      if (this.isHomePage) {
        document.body.style.height = `${this.bodyHeight}px`;
        document.body.classList.remove('sub-page');
      } else {
        setTimeout(() => {
          this.setSize();
        }, 1000);
        document.body.classList.add('sub-page');
      }
    },
    ...mapMutations({
      setChapterContent: SET_CHAPTER_CONTENT,
    })
  },
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        eventBus.$on('stopAnimation', this.stopAnimation);
        eventBus.$on('startAnimation', this.startAnimation);
        this.checkBodyHeight();
      }, 1000);      
    })
  },
  created() {
    this.setChapterContent(ChapterContent);
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
@keyframes noiseAnimationSmall {
    0% { transform: translate(0, 0); }
    10% { transform: translate(-1%, -1%); }
    20% { transform: translate(-2%, 1%); }
    30% { transform: translate(1%, -2%); }
    40% { transform: translate(-1%, 3%); }
    50% { transform: translate(-2%, 1%); }
    60% { transform: translate(3%, 0); }
    70% { transform: translate(0, 2%); }
    80% { transform: translate(-3%, 0); }
    90% { transform: translate(2%, 1%); }
    100% { transform: translate(1%, 0); }
}
</style>
