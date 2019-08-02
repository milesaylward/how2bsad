<template>
  <div 
    class="screen screen-title"
    :class="{
      'screen--active': this.sectionActive(this.sectionName),
    }"
    :style="sectionStyles"
  >
  <div class="title-text">
   <div class="title-hide-border" />
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 807.78 74.12" class="svg-title" ref="svgTitle">
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path class="cls-1" d="M.5 1.71h15.35V30h27.57V1.71h15.25v70.7H43.42V43.12H15.85v29.29H.5zM106.35.5C127.86.5 143 15.65 143 36.86c0 21.41-15.15 36.76-36.66 36.76S69.68 58.27 69.68 36.86C69.68 15.65 84.94.5 106.35.5zm0 60.19c12.42 0 21.21-9.39 21.21-23.83 0-14.14-8.69-23.53-21.21-23.53s-21.11 9.39-21.11 23.53c0 14.44 8.76 23.83 21.11 23.83zM146.75 1.71h16l14.7 48.89h.2l14-48.89h13.94l14 48.89h.2l14.83-48.89h15.95l-22.32 70.7H212.6l-13.84-48h-.2l-13.94 48H169zM302.79 15.25h-23.33V1.71h62v13.54H318v57.16h-15.21zM382.48.5c21.51 0 36.66 15.15 36.66 36.36 0 21.41-15.15 36.76-36.66 36.76s-36.66-15.35-36.66-36.76C345.82 15.65 361.07.5 382.48.5zm0 60.19c12.42 0 21.21-9.39 21.21-23.83 0-14.14-8.68-23.53-21.21-23.53s-21.11 9.39-21.11 23.53c0 14.44 8.79 23.83 21.11 23.83zM454.29 1.71H484c17.06 0 24.94 8 24.94 19 0 7.37-4 12.22-10.6 15.05 7.77 2.52 13.23 7.78 13.23 16.46 0 13-10.2 20.2-26.16 20.2h-31.12zm28.48 29.49c7.17 0 10.81-3.53 10.81-8.78 0-5-3.64-8.49-10.81-8.49h-13.33V31.2zm2.33 29c6.86 0 11.21-3.13 11.21-9.29 0-6-4.45-9-11.21-9h-15.66v18.28zM522.67 1.71h51.51V15h-36.26v15.6h32.32v11.81h-32.32v16.67h36.66v13.33h-51.91zM615.08 53.93c6.26 3.73 13.74 6.36 20.81 6.36 7.57 0 11.51-3.13 11.51-7.67 0-13.24-38.18-4.35-38.18-31.11 0-11.62 9.6-21 26-21a58.2 58.2 0 0 1 25.45 6l-5.65 12a42.88 42.88 0 0 0-19.09-4.65c-6.77 0-10.81 3.23-10.81 7.48 0 13 38.18 3.83 38.18 31.1 0 11.92-9.09 21.21-27.27 21.21a56.48 56.48 0 0 1-28.18-7.77zM693.56 1.71h17.37l25.55 70.7h-16.36l-4.44-13.23h-26.87l-4.34 13.23H668zm-.91 45.65h19.09l-9.5-28.68H702zM745.17 1.71h23.23c25.25 0 38.88 13 38.88 35.05 0 22.52-12.72 35.65-38.88 35.65h-23.23zM769.51 60c14.85 0 22.32-8.79 22.32-23.13 0-13.84-8-22.73-22.32-22.73h-9.09V60z" style="fill:none;stroke:#fff;stroke-miterlimit:10" />
        </g>
      </g>
    </svg>
    <span class="title-arrow" v-html="titleArrow" ref="arrow" /> 
    <div class="title-canvas-container" @mouseenter="handleHover('enter')" @mouseleave="handleHover">
      <span v-html="memoir" />
      <NoiseCanvas ref="noiseCanvas" />
    </div>
  </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import TweenMax from 'gsap';
import sectionMixin from './../mixins/section-mixin';
import { SECTIONS } from '../core/config';
import titleArrow from '@/assets/svg/title-arrow.svg';
import NoiseCanvas from '@/components/noiseCanvas';
import memoir from '@/assets/svg/memoir.svg'


  export default {
    name: 'title-section',
    mixins: [sectionMixin],
    components: {
      NoiseCanvas
    },
    data: () => ({
      widthAdjustment: 1.5,
      sectionName: SECTIONS.title,
      canvas: null,
      timeouts: [],
      hasAnimated: false,
      hasMinWidth: true,
      minWidth: 900,
      titleArrow,
      memoir,
    }),
    computed: {
      ...mapState(['scrollPosition']),
      textPaths() {
        const parent = document.getElementById('copyPaths');
        return Array.from(parent.children);
      },
    },
    methods: {
      handleHover(type) {
        if (type === 'enter') {
          this.textPaths.forEach(path => {
            TweenMax.to(path, .3, { fill: 'rgba(255,255,255,0)' });
          })
          TweenMax.to(this.$refs.noiseCanvas.$el, .3, { opacity: 1 });
        } else {
          this.textPaths.forEach(path => {
            TweenMax.to(path, .3, { fill: 'rgba(255,255,255,1)' });
          });
          TweenMax.to(this.$refs.noiseCanvas.$el, .3, { opacity: 0 });
        }
      },
      setPathBases() {
        this.arrowPaths = Array.from(this.$refs.arrow.querySelectorAll('path'));
        this.arrowPaths.forEach(path => {
          TweenMax.set(path, { drawSVG:"0" });
        })
        this.textPaths.map(path => {
          TweenMax.set(path, { drawSVG: "0" });
          TweenMax.set(path, { fill: 'rgba(255,255,255,0)' });
        })
      },
      animateSVG() {
        TweenMax.staggerTo(this.arrowPaths, 1, {drawSVG: '100%'}, .9)
        this.arrowPaths.forEach((path, i) => {
          const time = i > 0 ? .4 : 1;
          const delay = i > 0 ? .9 : 0;
          const cb = i < 1 ? null : () => {
          this.textPaths.map(path => {
            TweenMax.to(path, 1, { drawSVG: "100%" });
            this.timeouts.push(setTimeout(() => {
              TweenMax.to(path, .5, { fill: 'rgba(255,255,255,1)' });
            }, 900));
          })
        }
          TweenMax.to(path, time, { drawSVG: '100%', delay, onComplete: cb })
        })
        // TweenMax.to(this.$refs.arrow.querySelector('path'), 1, { drawSVG:"100%", ease: Power1.easeInOut,});
      },
      animate() {
        if (!this.ctx) return; 
        this.noise();
        requestAnimationFrame(this.animate);
      }
    },
    watch: {
      scrollPosition() {
        const { width, x } = this.$refs.svgTitle.getBoundingClientRect();
        if (width < x * -4 && !this.hasAnimated) {
          this.hasAnimated = true;
          this.animateSVG();
        }
      }
    },
    mounted() {
      this.setPathBases();
    }
  }
</script>

<style lang="scss">
@import './../styles/_vars';
@keyframes dash {
  to {
    stroke-dashoffset: 0;
  }
}
.screen {
  &-title {
    z-index: 4;
  }
  .title-canvas-container {
    position: absolute;
    width: 45vw;
    top: 138%;
    left: 64%;
    span {
      display: block;
      width: 100%;
      height: 100%;
      z-index: 2;
      svg {
        height: 101%;
        display: block;
      }
    }
    .canvas-container {
      height: 99%;
      z-index: -1;
      opacity: 0;
    }
  }
  .title {
    &-text {
      position: relative;
      .svg-title {
        width: 130vw;
        height: 100%;
        top: 0;
        left: 0;
        z-index: 5;
        path, polygon {
          stroke-width: 1px;
          stroke: white;
        }
      }
      &-canvas {
        display: none;
        background-color: white;
        opacity: 0;
        transition: opacity 350ms $easeInOutCubic;
        &--visible {
          opacity: 1;
        }
      }
    }
    &-arrow {
      position: absolute;
      width: 30vw;
      top: 110%;
      left: 39%;
      z-index: 10;
    }
    &-svg-text {
      path {
        stroke: white;
        fill: white;
      }
    }
  }
}
</style>
