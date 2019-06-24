<template>
  <div class="cursor" :style="cursorStyles" :class="{visible}" />
</template>

<script>
  export default {
    name: 'custom-cursor',
    data: () => ({
      xPos: 0,
      yPos: 0,
      visible: false,
    }),
    computed: {
      cursorStyles() {
        return {
          top: `${this.yPos}px`,
          left: `${this.xPos}px`
        };
      }
    },
    methods: {
      handleMouseMove(e) {
        this.visible = true;
        this.xPos = e.clientX;
        this.yPos = e.clientY;
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
      window.addEventListener('mousemove', this.handleMouseMove);
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
  top: 0;
  left: 0;
  width: 80px;
  height: 80px;
  pointer-events: none;
  z-index: 100;
  border-radius: 50%;
  transform: translate(-50%,-50%);
  background-color: #fff;
  mix-blend-mode: difference;
  isolation: isolate;
  opacity: 0;
  transition: opacity 300ms ease-in;
  &.visible {
    opacity: 1;
  }
}
</style>