<template>
  <div 
    class="screen screen-title"
    :class="{
      'screen--active': this.sectionActive(this.sectionName),
      'hidden': scrollToChapter,
    }"
    :style="sectionStyles"
  >
  <div class="title-text">
    <div class="svg-title" v-html="title" ref="svgTitle" />
    <span class="title-arrow" :class="{ animate }" v-html="titleArrow" ref="arrow" /> 
    <div class="title-canvas-container">
      <span v-html="memoir" class="memoir" :class="{ animate }" />
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
import title from '@/assets/svg/title.svg';
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
      animate: false,
      timeouts: [],
      hasAnimated: false,
      hasMinWidth: true,
      minWidth: 900,
      titleArrow,
      title,
      memoir,
    }),
    watch: {
      scrollPosition() {
        const { width, x } = this.$refs.svgTitle.getBoundingClientRect();
        if (width < x * -4 && !this.hasAnimated) {
          this.hasAnimated = true;
          this.animate = true;
        }
      }
    },
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
    justify-content: flex-start !important;
    padding-left: 5px;
    &.hidden {
      opacity: 0;
    }
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
        path {
          fill: rgba(255,255,255,0);
          transition: stroke-dashoffset 2s $easeOutQuad 1500ms, fill 500ms $easeOutQuad 3.5s;
          stroke-dashoffset: 260;
          stroke-dasharray: 260;
        }
      }
      &.animate {
        svg {
          path {
            stroke-dashoffset: 0;
            fill: white;
          }
        }
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
      transition: stroke-dashoffset 1s $easeOutQuad;
      .title-arrow {
        stroke-dasharray: 35;
        stroke-dashoffset: 35;
        transition: stroke-dashoffset 500ms $easeOutQuad 0.9s;
        &:first-child {
          stroke-dasharray: 400;
          stroke-dashoffset: 400;
          transition: stroke-dashoffset 1s $easeOutQuad;
        }
      }
       &.animate {
         .title-arrow {
           stroke-dashoffset: 0;
         }
      }
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
