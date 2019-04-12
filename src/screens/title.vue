<template>
  <div 
    class="screen screen-title"
    :class="{
      'screen--active': this.sectionActive(this.sectionName),
    }"
    :style="sectionStyles"
  >
  <div class="title-text">
   <div class="title-text-canvas" :class="{'title-text-canvas--visible': isScrolling}">
      <canvas ref="canvas" class="title-canvas"/>
   </div>
   <div class="title-hide-border" />
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 820 132" class="svg-title" ref="svgTitle">
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path d="M390.3,40c-12.21,0-20.4,9.16-20.4,22.8,0,13.81,8.19,23.1,20.4,23.1s20.5-9.29,20.5-23.1C410.8,49.16,402.56,40,390.3,40Z"/>
          <path d="M491.9,68.3h-15V85.4h15c6.83,0,10.6-3.09,10.6-8.7C502.5,71.36,498.63,68.3,491.9,68.3Z"/>
          <path d="M499.8,48.5c0-5-3.82-7.9-10.2-7.9H476.9V56.7h12.7C496.08,56.7,499.8,53.71,499.8,48.5Z"/>
          <path d="M773.49,40.8H765V85.2h8.5c13.93,0,21.6-8,21.6-22.4C795.09,49,787,40.8,773.49,40.8Z"/>
          <path d="M0,0V132H820V0ZM70.2,98.5H54.1v-29H27.8v29H11.59v-71H27.8v28H54.1v-28H70.2Zm46.7,1.2c-21.33,0-36.81-15.52-36.81-36.9,0-21.15,15.48-36.51,36.81-36.51,21.66,0,36.8,15,36.8,36.51C153.7,84.52,138.56,99.7,116.9,99.7ZM238,98.5H221.72L208.3,52,194.77,98.5H178.53l-22.32-71h16.86L187.39,75,201,27.49h14.55L229.21,75l14.32-47.48h16.85ZM350.2,41.9H327V98.5H310.9V41.9H287.79V27.49H350.2Zm40.1,57.8c-21.33,0-36.81-15.52-36.81-36.9,0-21.15,15.48-36.51,36.81-36.51,21.67,0,36.8,15,36.8,36.51C427.1,84.52,412,99.7,390.3,99.7Zm101.9-1.2H460.89v-71H490.8C513.54,27.49,516,41,516,46.8c0,6.71-3.25,11.7-9.67,14.83,8,3,12.27,8.62,12.27,16.37C518.6,90.83,508.73,98.5,492.2,98.5Zm88.8,0H528.59v-71h52V41.7H544.69V56.1h32V68.8h-32V84.3H581Zm60.29,1.2c-9.57,0-20.63-3-28.17-7.78l-.41-.26L620.42,79l.43.26c6.73,4,13.95,6.23,20.34,6.23,6.83,0,10.9-2.66,10.9-7.1,0-5-6.32-6.67-13.63-8.57-10.77-2.8-24.17-6.29-24.17-22.23,0-12.55,10.77-21.31,26.2-21.31a58.28,58.28,0,0,1,25.42,6l.45.22-6,12.81-.46-.23a42.14,42.14,0,0,0-18.68-4.54c-6.1,0-10.2,2.77-10.2,6.9,0,4.88,6.21,6.45,13.41,8.27,10.87,2.75,24.39,6.17,24.39,22.53C668.79,91.46,658.25,99.7,641.29,99.7Zm83-1.2-4.41-13.1H694l-4.31,13.1H672.28l.24-.67,25.42-70.34h17.9l.12.33L741.51,98.5Zm48.15,0h-23.5v-71h23.5c24.79,0,39,12.84,39,35.21C811.39,86.12,797.91,98.5,772.39,98.5Z"/>
          <path d="M116.9,40c-12.21,0-20.41,9.16-20.41,22.8,0,13.81,8.2,23.1,20.41,23.1s20.5-9.29,20.5-23.1C137.4,49.16,129.16,40,116.9,40Z"/>
          <polygon points="698.08 72.7 715.6 72.7 706.8 46.09 698.08 72.7"/>
        </g>
      </g>
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 273.93 48.91" class="title-arrow">
      <g id="Layer_2-2" data-name="Layer 2-2">
        <path class="cls-1" d="M0,47.11S196,60.61,273,.61l-13.1,28,13.5-28V.72s-31-.5-32.5,0" ref="arrowPath" />
      </g>
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 644.77 50.69" class="title-svg-text">
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1" ref="copyPaths">
          <path class="cls-1" d="M17.71.84h12l17.72,49H36.12L33,40.67H14.42l-3,9.18H0Zm-.63,31.64H30.31L23.73,12.6h-.14Z"/>
          <path class="cls-1" d="M70.21.84h16.1c17.5,0,27,9,27,24.29,0,15.61-8.82,24.72-26.95,24.72H70.21ZM87.08,41.23c10.29,0,15.47-6.09,15.47-16,0-9.59-5.53-15.75-15.47-15.75h-6.3V41.23Z"/>
          <path class="cls-1" d="M120.82.84h10.64v49H120.82Z"/>
          <path class="cls-1" d="M164.57,0a29.46,29.46,0,0,1,18.06,6l-5.53,7.14A20.7,20.7,0,0,0,164.85,9c-9.17,0-15,6.79-15,16.1,0,10.15,5.6,16.66,15,16.66a17,17,0,0,0,8.54-2.1v-9.8H162.33V22.61h20.72V45a31.23,31.23,0,0,1-18.55,5.68C149,50.69,139,40.11,139,25.06,139,10.92,149,0,164.57,0Z"/>
          <path class="cls-1" d="M192.15.84h10.64v49H192.15Z"/>
          <path class="cls-1" d="M225.47,10.22H209.3V.84h43v9.38H236V49.85H225.47Z"/>
          <path class="cls-1" d="M267.75.84h12l17.71,49H286.16l-3.08-9.18H264.46l-3,9.18H250Zm-.63,31.64h13.23L273.77,12.6h-.14Z"/>
          <path class="cls-1" d="M303.52.84h10.64V40.67h24.36v9.18h-35Z"/>
          <path class="cls-1" d="M362.39.84H373L387.8,21.77,402.64.84h10.5v49H403.06V16L387.73,37.1,372.47,16V49.85H362.39Z"/>
          <path class="cls-1" d="M422.66.84h35.7v9.24H433.23V20.86h22.4v8.19h-22.4V40.6h25.41v9.25h-36Z"/>
          <path class="cls-1" d="M467,.84h10.65l14.77,20.93L507.29.84h10.5v49H507.71V16L492.38,37.1,477.12,16V49.85H467Z"/>
          <path class="cls-1" d="M550.83,0c14.91,0,25.41,10.5,25.41,25.2s-10.5,25.49-25.41,25.49S525.41,40,525.41,25.2,536,0,550.83,0Zm0,41.72c8.61,0,14.7-6.51,14.7-16.52,0-9.8-6-16.31-14.7-16.31S536.19,15.4,536.19,25.2C536.19,35.21,542.29,41.72,550.83,41.72Z"/>
          <path class="cls-1" d="M583.86.84H594.5v49H583.86Z"/>
          <path class="cls-1" d="M604,.84h21.56c14,0,18.84,7.7,18.84,15.54a14.12,14.12,0,0,1-9,13.51l9.38,20H633.36l-7.57-18.28h-11.2V49.85H604Zm21.42,23c5.61,0,8.34-3.15,8.34-7.28s-2.81-7.21-8.27-7.21H614.59V23.8Z"/>
        </g>
      </g>
    </svg>
  </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import TweenMax from 'gsap';
import sectionMixin from './../mixins/section-mixin';
import { SECTIONS } from '../core/config';
import Title from './../assets/title.svg';


  export default {
    name: 'title-section',
    mixins: [sectionMixin],
    data: () => ({
      widthAdjustment: 2,
      sectionName: SECTIONS.title,
      timeouts: [],
      hasAnimated: false,
    }),
    computed: {
      ...mapState(['scrollPosition']),
      textPaths() {
        return Array.from(this.$refs.copyPaths.children);
      },
    },
    methods: {
      initCanvas() {
        this.$refs.canvas.width = this.windowWidth * 1.3;
        this.$refs.canvas.height = this.windowWidth / 4.81;
        this.ctx = this.$refs.canvas.getContext('2d');
        this.animate();
      },
      noise() {
        const w = this.ctx.canvas.width,
            h = this.ctx.canvas.height,
            idata = this.ctx.createImageData(w, h),
            buffer32 = new Uint32Array(idata.data.buffer),
            len = buffer32.length;
        let i = 0;
        for(; i < len;)
            buffer32[i++] = ((255 * Math.random())|0) << 24;
        this.ctx.putImageData(idata, 0, 0);
      },
      setPathBases() {
        TweenMax.set(this.$refs.arrowPath, { drawSVG:"0" });
        this.textPaths.map(path => {
          TweenMax.set(path, { drawSVG: "0" });
          TweenMax.set(path, { fill: 'rgba(255,255,255,0)' });
        })
      },
      animateSVG() {
        TweenMax.to(this.$refs.arrowPath, 2, { drawSVG:"100%", ease: Power1.easeInOut, onComplete: () => {
          this.textPaths.map(path => {
            TweenMax.to(path, 1, { drawSVG: "100%" });
            this.timeouts.push(setTimeout(() => {
              TweenMax.to(path, .5, { fill: 'rgba(255,255,255,1)' });
            }, 1200));
          })
        }});
      },
      animate() {
        if (!this.ctx) return; 
        this.noise();
        requestAnimationFrame(this.animate);
      }
    },
    watch: {
      windowWidth(val) {
        if (val) this.initCanvas();
      },
      scrollPosition() {
        const { width, x } = this.$refs.canvas.getBoundingClientRect();
        if (width < x * -4 && !this.hasAnimated) {
          this.hasAnimated = true;
          this.animateSVG();
        }
      }
    },
    mounted() {
      if (this.windowWidth) this.initCanvas(); 
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
  .title {
    &-text {
      
      position: relative;
      .svg-title {
        position: absolute;
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
        background-color: white;
        opacity: 0;
        transition: opacity 350ms $easeInOutCubic;
        &--visible {
          opacity: 1;
        }
      }
    }
    &-hide-border {
      position: absolute;
      height: 99%;
      width: calc(100% + 3px);
      border: 3px solid black;
      top: -1px;
      left: 0;
      z-index: 6;
    }

    &-arrow {
      position: absolute;
      width: 500px;
      transform: rotate(20deg);
      top: 100%;
      left: 39%;
      z-index: 10;
      path {
        fill: none;
        stroke: white;
        stroke-width: 2px;
      }
    }
    &-svg-text {
      position: absolute;
      width: 800px;
      top: 116%;
      left: 63%;
      path {
        stroke: white;
        fill: white;
      }
    }
  }
}
</style>
