<template>
  <div class="sad-face" :style="faceStyles">
    <svg width="64" version="1.1" xmlns="http://www.w3.org/2000/svg" height="64" viewBox="0 0 64 64" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 64 64">
      <g>
        <g fill="inherit">
          <path d="M32,0C14.355,0,0,14.355,0,32s14.355,32,32,32s32-14.355,32-32S49.645,0,32,0z M32,60    C16.561,60,4,47.439,4,32S16.561,4,32,4s28,12.561,28,28S47.439,60,32,60z"/>
          <circle cx="20.518" cy="21.361" r="4.338"/>
          <circle cx="43.48" cy="21.361" r="4.338"/>
          <path d="m32,36.643c-9.732,0-14.355,6.859-15.441,10.484-0.316,1.055 0.281,2.16 1.334,2.48 0.193,0.061 0.389,0.088 0.582,0.088 0.854,0 1.646-0.553 1.912-1.41 0.098-0.312 2.488-7.643 11.613-7.643 9.107,0 11.504,7.299 11.611,7.641 0.262,0.861 1.055,1.418 1.914,1.418 0.189,0 0.383-0.027 0.572-0.084 1.059-0.316 1.66-1.432 1.344-2.488-1.084-3.627-5.707-10.486-15.441-10.486z"/>
        </g>
      </g>
    </svg>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import { THRESHHOLDS } from './../core/config';

export default {
  name: 'sad-face',
  computed: {
    ...mapState(['scrollPosition', 'bodyHeight', 'atPageBottom']),
    faceStyles() {
      if (this.scrollPosition < THRESHHOLDS.landingThresh) {
        return {
         transform: `translate(-50%, -50%) rotate(${(this.scrollPosition / (this.bodyHeight / 2) * 360)}deg)`
        } 
      } else {
        return {
          transform: `translate(-50%, -50%) rotate(${(this.scrollPosition / (this.bodyHeight / 2) * 410)}deg)`,
          top: '64px',
          left: '64px',
        } 
      }
    }
  },
}
</script>

<style lang="scss">
.sad-face {
  position: absolute;
  z-index: 8;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
  transition: 
    top 500ms ease,
    left 500ms ease,
    transform 50ms ease;
  svg {
    fill: white;
    stroke: none;
  }
}
</style>