<template>
  <div class="scroll-marker">
    <div class="scroll-marker__marker" :style="styles" />
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'scroll-marker',

  computed: {
    styles() {
      const height = (this.easedPosition / this.bodyHeight) * 100;
      return {
        height: `${height || 0}%`
      }
    },
    ...mapState([
      'easedPosition',
      'bodyHeight'
    ])
  },
}
</script>

<style lang="scss">
.scroll-marker {
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  width: 100%;
  height: 100%;
  z-index: 20;
  &__marker {
    position: fixed;
    left: 0;
    top: 0;
    width: 3px;
    background: white;
  }
}
</style>