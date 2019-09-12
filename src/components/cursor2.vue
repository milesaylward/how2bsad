<template>
  <div>
    <div class="cursor" :style="cursorStyles" :class="{visible}" />
    <canvas ref="canvas" />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { TweenMax } from 'gsap';
import paper from 'paper';
import SimplexNoise from 'simplex-noise';
import dat from 'dat-gui';

  export default {
    name: 'custom-cursor',
    data: () => ({
      xPos: 0,
      yPos: 0,
      clientX: 0,
      clientY: 0,
      visible: false,
      countDown: false,
      lastX: 0,
      lastY: 0,
      isStuck: false,
      showCursor: false,
      group: null,
      stuckX: null,
      stuckY: null,
      fillOuterCursor: null,
    }),
    computed: {
      cursorStyles() {
        return {
          top: `${this.yPos}px`,
          left: `${this.xPos}px`
        };
      },
      turbulence() {
        return document.querySelectorAll('#filter feTurbulence')[0];        
      },
      ...mapState(['scrollPosition', 'elementHovered'])
    },
    watch: {
      scrollPosition() {
        this.handleMouseMove();
      },
      $route() {
        this.stopAnimate();
      },
    },
    methods: {
      handleMouseMove(e) {
        if (e) {
          this.clientX = e.clientX;
          this.clientY = e.clientY;
        }
        this.visible = true;
        const offset = this.$route.name === 'home' ? 0 : this.scrollPosition;
        this.xPos = this.clientX;
        this.yPos = this.clientY + offset;
      },
      checkDirection() {
        const { baseFrequencyX, baseFrequencyY, step, maxFrequency, minFrequency } = this.params;
        if (!this.countDown) {
          if (baseFrequencyX < maxFrequency && baseFrequencyY < maxFrequency) {
            return false;
          } else {
            this.countDown = true;
            return true;
          }
        } else {
          if (baseFrequencyX > 0.005 && baseFrequencyY > 0.005) {
            return true;
          } else {
            this.countDown = false;
            return false;
          }
        }
      },
      stopAnimate() {
        cancelAnimationFrame(this.animationFrame);
        TweenMax.to(this.turbulence, 0.5, { attr:{"baseFrequency":"0,0"} });
        this.params.baseFrequencyX = 0;
        this.params.baseFrequencyY = 0;
      },
      animate() {
        const { baseFrequencyX, baseFrequencyY, step, maxFrequency } = this.params;
        if (!this.turbulence) { 
          return;
        }
        if (this.checkDirection()) {
          this.params.baseFrequencyX -= step; 
          this.params.baseFrequencyY -= step;
        } else {
          this.params.baseFrequencyX += step;
          this.params.baseFrequencyY += step;
        }        
        this.turbulence.setAttribute('baseFrequency', `${baseFrequencyX}  ${baseFrequencyY}`);
        this.animationFrame = requestAnimationFrame(this.animate);
      },
      handleMouseLeave(e){
        if (e.clientY <= 0 || e.clientX <= 0 || (e.clientX >= window.innerWidth || e.clientY >= window.innerHeight)) {
          this.visible = false
        }
      },
      handleMouseEnter() {
        this.visible = true;
      },
      initCanvas() {
        const canvas = this.$refs.canvas;
        const shapeBounds = {
          width: 75,
          height: 75
        };
        paper.setup(canvas);
        const strokeColor = "rgba(255,255,255, 1)";
        const fillColor = "rgba(255, 255, 255, 1)";
        const strokeWidth = 1;
        const segments = 16;
        const radius = 45;
        const noiseScale = 150; 
        const noiseRange = 6;
        let isNoisy = false; 
  
  
        const polygon = new paper.Path.RegularPolygon(
          new paper.Point(0, 0),
          segments,
          radius
        );
        polygon.strokeColor = strokeColor;
        polygon.strokeWidth = strokeWidth;
        polygon.fillColor = fillColor;
        polygon.zIndex = 50;
        polygon.smooth();
        this.group = new paper.Group([polygon]);
        this.group.applyMatrix = false;
        const noiseObjects = polygon.segments.map(() => new SimplexNoise());
        let bigCoordinates = [];
  
  
        const lerp = (a, b, n) => {
          return (1 - n) * a + n * b;
        };
  
        const map = (value, in_min, in_max, out_min, out_max) => {
          return (
            ((value - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
          );
        };
  
        paper.view.onFrame = event => {
          this.lastX = lerp(this.lastX, this.clientX, 0.1);
          this.lastY = lerp(this.lastY, this.clientY, 0.1);
          this.group.position = new paper.Point(this.lastX, this.lastY);
          if (true) {
            isNoisy = true;
            // first get coordinates of large circle
            if (bigCoordinates.length === 0) {
              polygon.segments.forEach((segment, i) => {
                bigCoordinates[i] = [segment.point.x, segment.point.y];
              });
            }
            polygon.segments.forEach((segment, i) => {
              const noiseX = noiseObjects[i].noise2D(event.count / noiseScale, 0);
              const noiseY = noiseObjects[i].noise2D(event.count / noiseScale, 1);

              const distortionX = map(noiseX, -1, 1, -noiseRange, noiseRange);
              const distortionY = map(noiseY, -1, 1, -noiseRange, noiseRange);
              
              const newX = bigCoordinates[i][0] + distortionX;
              const newY = bigCoordinates[i][1] + distortionY;
              
              segment.point.set(newX, newY);
            });
            
          }
          polygon.smooth();
        }
      }
    },
    mounted() {
      this.initCanvas();
      document.addEventListener('mousemove', this.handleMouseMove);
      document.addEventListener('mouseleave', this.handleMouseLeave);
      document.addEventListener("mouseenter", this.handleMouseLeave);
    },
    beforeDestroy() {
      window.removeEventListener('mousemove', this.handleMouseMove);
    }
  }
</script>

<style lang="scss" scoped>
canvas {
  width: 100vw;
  height: 100vh;
  z-index: 12000;
  position: fixed;
  top: 0;
  left: 0;
}
.cursor {
  position: absolute;
  top: 40%;
  left: 40%;
  width: 30px;
  height: 30px;
  pointer-events: none;
  z-index: 100;
  border-radius: 50%;
  transform: translate(-50%,-50%);
  background-color: #fff;
  mix-blend-mode: difference;
  isolation: isolate;
  transition: opacity 300ms ease-in;
  z-index: 101;
  filter: url('#filter');
  &.visible {
    opacity: 1;
  }
}
</style>

initCanvas();