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


  export default {
    name: 'title-section',
    mixins: [sectionMixin],
    data: () => ({
      widthAdjustment: 2,
      sectionName: SECTIONS.title,
      canvas: null,
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
        this.canvas = this.$refs.canvas;
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
        TweenMax.to(this.$refs.arrowPath, 1, { drawSVG:"100%", ease: Power1.easeInOut, onComplete: () => {
          this.textPaths.map(path => {
            TweenMax.to(path, 1, { drawSVG: "100%" });
            this.timeouts.push(setTimeout(() => {
              TweenMax.to(path, .5, { fill: 'rgba(255,255,255,1)' });
            }, 900));
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
  .title {
    &-text {
      margin-left: 25%;
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
      transform: rotate(20deg);
      min-width: 307px;
      top: 110%;
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
      width: 45vw;
      min-width: 461px;
      top: 138%;
      left: 64%;
      path {
        stroke: white;
        fill: white;
      }
    }
  }
}
</style>
