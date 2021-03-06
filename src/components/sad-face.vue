<template>
  <div class="sad-face" :style="containerStyle" :class="{ fixed: isFixed, hidden: scrollToChapter, isBlack: isBlack  }">
    <div class="sad-face__container" :style="faceStyles" @click="handleFaceClick">
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 64 64">
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
     <div class="chapter-name" v-if="chapterName && isFixed" :class="{ visible: nameVisible }">
      <p>
        Chapter <span v-html="chapterMap[chapterName]" />:
        <span class="name">{{chapterName}}</span>
      </p>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import { THRESHHOLDS } from './../core/config';

export default {
  name: 'sad-face',
  data: () => ({
    chapterMap: {
      family: '&#8544;',
      love: '&#8545;',
      work: '&#8546;',
      now: '&#8547;',
    },
    nameVisible: false,
    showBlack: false,
  }),
  computed: {
    isFixed() {
      return this.$route.name !== 'home'
    },
    isBlack() {
      return this.$route.name === 'love' && this.showBlack;
    },
    chapterName() {
      if (!this.activeChapter) return '';
      return this.activeChapter.name;
    },
    containerStyle() {
      if (this.easedPosition < THRESHHOLDS.landingThresh && this.$route.name === 'home') {
        return { };
      } else if (!this.isFixed) {
        return { top: '64px', left: '64px', }
      } else return { top: '0px', left: '0px', }
    },
    faceStyles() {
      if (this.easedPosition < THRESHHOLDS.landingThresh && this.$route.name === 'home') {
        return {
         transform: `translate(0, -50%) rotate(${(this.easedPosition / (this.bodyHeight / 10.2) * 360)}deg)`
        } 
      } else if (this.$route.name === 'home') {
        return {
          transform: `translate(0%, -50%) rotate(${(this.easedPosition / (this.bodyHeight / 10.2) * 360)}deg)`,
        }
      } else {
        return {
          transform: `translate(-50%, -50%) rotate(${(this.easedPosition / (this.bodyHeight / 10.2) * 360)}deg)`,
        } 
      }
    },
    ...mapState(['easedPosition', 'bodyHeight', 'atPageBottom', 'activeChapter', 'scrollToChapter']),
  },
  watch: {
    isFixed: {
      handler() {
        if (this.chapterName) {
          setTimeout(() => {
            this.nameVisible = true;
          }, 500);
        }
      },
      immediate: true,
    },
    easedPosition(val) {
      if (this.showBlack && val + 64 > window.innerHeight) {
        this.showBlack = false;
      } else if (!this.showBlack && val + 64 < window.innerHeight) {
        this.showBlack = true;
      }
    },
    '$route': {
      handler(val) {
        if (val === 'love') {
          this.setShowBlack();
        }
      }
    }
  },
  methods: {
    handleFaceClick() {
      this.$router.push('/');
    },
    setShowBlack() {
      this.showBlack = !this.showBlack;
    }
  },
  mounted() {
    if (this.$route.name === 'love') {
      this.setShowBlack();
    }
  }
}
</script>

<style lang="scss">
.sad-face {
  position: absolute;
  top: 50%;
  left: 50%;
  height: 70px;
  padding-top: 64px;
  transform: translate(-50%, -50%);
  transform-origin: center center;
  display: flex;
  width: 100%;
  align-items: center;
  z-index: 20;
  &.hidden {
    opacity: 0;
  }
  transition: 
    top 500ms ease,
    left 500ms ease,
    transform 250ms ease;
    &__container {
      transform-origin: center center;
      width: 70px;
      height: 70px;
      margin: 0 auto;
      svg {
        fill: white;
        stroke: none;
        transition: color 300ms $easeOutQuad;
      }
    }
  
  &.fixed {
    position: fixed;
    top: 0;
    transform: translate3d(0,0,0);
    left: 0;
    transition:
      transform 50ms ease;
      z-index: 20;
    .sad-face__container {
      top: 50%;
      transform: translate(0, -50%);
      transform-origin: center center;
      position: absolute;
      left: 64px;
    }
    .chapter-name {
      top: 50%;
      transform: translate(0, -50%);
      position: absolute;
      right: 64px;
      opacity: 0;
      transition: opacity 300ms $easeOutQuad 200ms, color 300ms $easeOutQuad;
      &.visible {
        opacity: 1;
      }
    }
  }
  &.isBlack {
    .sad-face {
      &__container {
        svg {
          fill: black;
        }
      }
      
    }
    .chapter-name {
      p {
        color: black;
      }
    }
  }
}
</style>
