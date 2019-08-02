<template>
  <div class="transition-hero" :class="[chapterName, { visible }]" ref="root">
    <div class="chapter-name">
      <p>
        Chapter <span v-html="chapterMap[chapterName]" />:
        <span class="name">{{chapterName}}</span>
      </p>
    </div>
    <div class="photo-container" v-if="activeChapter && activeChapter.photo" :class="chapterName" :style="{maxWidth: `${this.rect.width - 100}px`}">
      <img :src="activeChapter.photo" alt="">
      <HandDrawn :svg="activeChapter.svg" :canDraw="true" :chapterName="activeChapter.name" noOffset />
      <div v-html="activeChapter.svg.title" class="title" />
    </div>
    <div class="scroll-cta">
      <p>Scroll</p>
      <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 1.40622L6.00014 7.40608L0.000272689 1.40622L1.40649 -4.63057e-07L6.00014 4.59364L10.5938 -6.14677e-08L12 1.40622Z" fill="white"/>
      </svg>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import HandDrawn from '@/components/handDrawn';
import { TweenMax } from 'gsap';
import { SET_HERO_ANIMATED } from '../core/mutation-types';

export default {
  name: 'transition-hero',
  components: {
    HandDrawn
  },
  data: () => ({
    chapterName: null,
    visible: false,
    mounted: false,
    rect: {},
    chapterMap: {
      family: '&#8544;',
      love: '&#8545;',
      work: '&#8546;',
      now: '&#8547;',
    }
  }),
  computed: {
    baseRect() {
      let width = 720, height = 724;
      if (this.breakpoints.lg) width = 620, height = 639;
      if (this.breakpoints.md) width = 520, height = 497;
      if (this.breakpoints.sm) width = 420, height = 411;
      if (this.breakpoints.xs) width = 300, height = 279;
      const left = (window.innerWidth * 0.5) - (width * 0.5);
      const top = (window.innerHeight * 0.5) - (height * 0.5);
      return {
        height,
        width,
        left,
        top
      };
    },
    ...mapState(['activeChapter', 'breakpoints'])
  },
  methods: {
    setPosition() {
      this.setHeroAnimated(false);
      this.rect = this.activeChapter.top ? this.activeChapter : this.baseRect;
      this.chapterName = this.activeChapter.name;
      TweenMax.set(this.$refs.root, { width: `${this.rect.width}px`, height: `${this.rect.height}px`, top: `${this.rect.top}px`, left: `${this.rect.left}px` })
      this.visible = true;
      setTimeout(() => {
        this.animateIn();
      }, 300);
    },
    animateIn() {
      TweenMax.to(this.$refs.root, .5, {
        left: 0, top: 0,
        width: '100%', height: '100vh',
        ease: Power1.easeOut, onComplete: () => {
          this.visible = true;
          TweenMax.set(this.$refs.root, { position: 'relative' });
          this.setHeroAnimated(true);
        }
      });
    },
    ...mapMutations({
      setHeroAnimated: SET_HERO_ANIMATED
    }),
  },
  watch: {
    activeChapter: {
      handler(val) {
        if (val) {
          this.visible = false;
          this.setPosition();
        }
      },
      deep: true,
    },
    '$route': {
      handler(val) {
        if (val.name === 'home') {
          this.visible = false;
          TweenMax.set(this.$refs.root, { clearProps:"all" });
        }
      }
    }
  },
  mounted() {
    if (this.activeChapter && this.$route.name !== 'home') {
      this.setPosition();
    }
  }
}
</script>

<style lang="scss">
@keyframes arrowBounce {
  0% { transform: translateY(0%) }
  15% { transform: translateY(50%) }
  30% { transform: translateY(0%) }
  45% { transform: translateY(50%) }
  60% { transform: translateY(0%) }
  75% { transform: translateY(50%) }
  90% { transform: translateY(0%) }
  100% { transform: translateY(0%) }
}
.transition-hero {
  position: absolute;
  background: #555;
  opacity: 0;
  z-index: 5;
  display: flex;
  justify-content: center;
  transition: opacity 500ms $easeOutQuad;
  pointer-events: none;
  &.love { background: white; }
  &.work { background: #ddd; }
  &.now { background: #292929; }
  &.visible {
    opacity: 1;
  }
  .scroll-cta {
    position: absolute;
    top: auto;
    bottom: 7%;
    display: flex;
    width: 100px;
    flex-direction: column;
    text-align: center;
    color: white;
    font-family: $font;
    svg {
      margin: 0 auto;
      animation: arrowBounce 3s ease infinite;
    }
    p {
      text-transform: uppercase;
    }
  }
  .chapter-name {
    position: fixed;
    color: white;
    right: 64px;
    top: 64px;
    transform: translateY(-50%);
    font-family: $font;
    text-transform: uppercase;
  }
  .photo-container {
    width: 100%;
    height: 100%;
    max-height: 724px;
    position: relative;
    padding: 0 50px;
    img {
      display: block;
      width: 100%;
      margin: 0 auto;
      max-height: 540px;
      margin-top: 50px;
      @include breakpoint(large) {
        max-height: 520px;
      }
      @include breakpoint(medium) {
        max-height: 366px;
      }
    }
    .title {
      display: block;
      width: 80%;
      max-width: 400px;
      max-height: 134px;
      margin-left: auto;
      margin-right: 0;
      @include breakpoint(large) {
        max-width: 308px;
      }
      @include breakpoint(medium) {
        max-width: 230px;
      }
      @include breakpoint(small) {
        max-width: 180px;
      }
      @include breakpoint(xsmall) {
        max-width: 120px;
      }
    }
    &.family {
      .number {
        @include breakpoint(small) {
          width: 50px;
        }
        @include breakpoint(xsmall) { width: 30px ;}
      }
    }
    &.love {
      background: white;
      .title {
        max-width: 290px;
        @include breakpoint(large) {
          max-width: 230px;
        }
        @include breakpoint(medium) {
          max-width: 171px;
        }
        @include breakpoint(small) {
          max-width: 135px;
        }
        @include breakpoint(xsmall) {
          max-width: 90px;
        }
      }
    }
    &.work {
      background: #ddd;
      .title {
        max-width: 300px;
        @include breakpoint(large) {
          max-width: 250px;
        }
        @include breakpoint(medium) {
          max-width: 191px;
        }
        @include breakpoint(small) {
          max-width: 150px;
        }
        @include breakpoint(xsmall) {
          max-width: 105px;
        }
      }
      .number {
        @include breakpoint(small) {
          width: 70px;
        }
        @include breakpoint(xsmall) { width: 40px ;}
      }
    }
    &.now {
      background: #292929;
      .title {
        max-width: 260px;
        @include breakpoint(large) {
          max-width: 213px;
        }
        @include breakpoint(medium) {
          max-width: 161px;
        }
        @include breakpoint(small) {
          max-width: 128.5px;
        }
        @include breakpoint(xsmall) {
          max-width: 90px;
        }
      }
      .number {
        @include breakpoint(small) {
          width: 75px;
        }
        @include breakpoint(xsmall) { width: 45px ;}
      }
    }
  }
}
</style>