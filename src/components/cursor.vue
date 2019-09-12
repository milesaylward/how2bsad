<template>
  <div class="cursor" :style="cursorStyles" :class="{visible}" />
</template>

<script>
import { mapState } from 'vuex';
import { TweenMax } from 'gsap';
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
      params: {
	      baseFrequencyX: 0.0,
        baseFrequencyY: 0.0,
        maxFrequency: 0.045,
        step: 0.0003,
      }
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
      elementHovered(val) {
        if (val) {
          this.stopAnimate();
          } else {
          this.animate();
        }
      }
    },
    methods: {
      handleMouseMove(e) {
        if (e) {
          this.clientX = e.clientX;
          this.clientY = e.clientY;
        }
        this.visible = true;
        const offset = 0;
        this.xPos = this.clientX;
        this.yPos = this.clientY + offset;
      },
      checkDirection() {
        const { baseFrequencyX, baseFrequencyY, step, maxFrequency } = this.params;
        if (!this.countDown) {
          if (baseFrequencyX < maxFrequency && baseFrequencyY < maxFrequency) {
            return false;
          } else {
            this.countDown = true;
            return true;
          }
        } else {
          if (baseFrequencyX > 0.01 && baseFrequencyY > 0.01) {
            return true;
          } else {
            this.countDown = false;
            return false;
          }
        }
      },
      stopAnimate() {
        cancelAnimationFrame(this.animationFrame);
        TweenMax.to(this.turbulence, 0.5, { attr:{"baseFrequency":"0,0"}, ease: Power1.easeInOut });
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
    },
    mounted() {
      this.animate();
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
.cursor {
  position: absolute;
  top: 40%;
  left: 40%;
  width: 65px;
  height: 65px;
  pointer-events: none;
  z-index: 100;
  border-radius: 50%;
  transform: translate(-50%,-50%);
  background-color: #fff;
  mix-blend-mode: difference;
  isolation: isolate;
  transition: opacity 300ms ease-in;
  filter: url('#filter');
  &.visible {
    opacity: 1;
  }
}
</style>