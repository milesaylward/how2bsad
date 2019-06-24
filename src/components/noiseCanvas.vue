<template>
<div class="canvas-container" ref="root">
  <canvas ref="canvas" />
</div>
</template>

<script>
  export default {
    name: 'noise-canvas',
    props: {
      whiteBg: {
        type: Boolean,
        default: false,
      }
    },
    computed: {
      rect() {
        return this.$refs.root.getBoundingClientRect();
      }
    },
    methods: {
      initCanvas() {
        const rect = this.$refs.root.getBoundingClientRect();
        this.canvas = this.$refs.canvas;
        this.canvas.width = Math.ceil(rect.width);
        this.canvas.height = Math.ceil(rect.height);
        this.ctx = this.$refs.canvas.getContext('2d');
        this.animateCanvas();
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
      animateCanvas() {
        if (!this.ctx) return; 
        this.noise();
        requestAnimationFrame(this.animateCanvas);
      },
    },
    mounted() {
      setTimeout(() => {
        this.initCanvas(); 
      }, 500);
    }
  }
</script>

<style lang="scss">
.canvas-container {
  background: white;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
}
</style>