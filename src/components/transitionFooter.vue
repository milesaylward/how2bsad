<template>
  <div class="transition-footer" :class="nextChapter.name" v-if="nextChapter" ref="container" :style="styles">
    <div class="transition-footer__inner" ref="root" :class="nextChapter.name">
       <div class="transition-footer__content">
        <div ref="image" class="image">
          <img :src="nextChapter.photo" alt="chapter photo">
        </div>
        <div class="svg-title" v-html="nextChapter.svg.title" ref="copy" />
      </div>
      <div class="next-chapter">
        <a @click="handleNextClick">
          CHAPTER {{nextChapter.chapterNumber}}
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import { TweenMax } from 'gsap';
import { CHAPTER_CONFIG } from '@/core/config';
import { SET_ACTIVE_CHAPTER, SET_NEXT_ACTIVE_CHAPTER } from '@/core/mutation-types';
export default {
  name: 'transition-footer',
  data: () => ({
    rect: null,
    transformTop: 0,
    animating: false,
  }),
  props: {
    hidden: {
      type: Boolean,
      default: false,
    }
  },
  computed: {
    styles() {
      return {
        transform: `translateY(-${this.transformTop}px)`
      }
    },
    ...mapState([
      'nextChapter',
      'easedPosition',
      'bodyHeight'
    ])
  },
  watch: {
    easedPosition(val) {
      if (!this.hidden && this.rect && !this.animating) {
        if (val > (this.bodyHeight - this.rect.height) - window.innerHeight) {
          this.transformTop = val - ((this.bodyHeight - this.rect.height) - window.innerHeight)
        } else {
          this.transformTop = 0;
        }
      }
    },
    nextChapter: {
      handler(val) {
        if (val && !this.rect) {
          this.$nextTick(() => {
            this.setRectHeight();
          });
        }
      }
    }
  },
  methods: {
    handleNextClick() {
      this.animating = true;
      const topDiff = this.$refs.container.getBoundingClientRect().top;
      TweenMax.set(this.$refs, { position: 'fixed' });
      TweenMax.to(this.$refs.image, 0.4, { y: -42 });
      TweenMax.to(this.$refs.copy, 0.3, { opacity: 0 });
      TweenMax.to(this.$refs.container, 0.5,{ 
        top: 0, 
        bottom: 'auto',
        height: '100vh', 
        padding: 0,
        y: 0,
        onComplete: () => {
          this.animating = false;
          const chapterIndex = CHAPTER_CONFIG.findIndex(chapter => chapter.name === this.nextChapter.name);
          const newNextChapter = CHAPTER_CONFIG[(chapterIndex + 1) % CHAPTER_CONFIG.length];
          TweenLite.to(window, 0, { scrollTo:0 });
          this.$router.push(this.nextChapter.name);
          this.setActiveChapter(this.nextChapter);
          TweenMax.to(this.$refs.container, 0.3, { opacity: 0, zIndex: -1, delay: 0.8, onComplete: () => {
            TweenMax.set(this.$refs.image, { display: 'none' });
            TweenMax.set(this.$refs.container, { clearProps: 'all' });
            setTimeout(() => {
              TweenMax.set(this.$refs.copy, { clearProps: 'all' });
              TweenMax.set(this.$refs.image, { clearProps: 'all' });
            }, 1000);
          }});
        }
      });
    },
    setRectHeight() {
      this.rect = this.$refs.container.getBoundingClientRect();
    },
    ...mapMutations({
      setActiveChapter: SET_ACTIVE_CHAPTER,
      setNextChapter: SET_NEXT_ACTIVE_CHAPTER,
    })
  },
  mounted() {
    if (this.nextChapter) {
      setTimeout(() => {
        this.setRectHeight();
      }, 1000); 
    }
  }
};
</script>

<style lang="scss">
.transition-footer {
  position: fixed;
  width: 100%;
  top: 100%;
  height: 679px;
  z-index: 5;
  &.hidden {
    opacity: 0;
    z-index: 1;
  }
  &__inner {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    &.love { background: white; }
    &.work { background: #ddd; }
    &.now { background: #292929; }
  }

  &__content {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    max-width: 620px;
    max-height: 724px;
    .svg-title {
      position: absolute;
      display: block;
      width: 80%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      path {
        stroke: white;
      }
    }
    .image {
      display: block;
      width: 100%;
      margin: 0 auto;
      max-height: 540px;
      overflow: hidden;
      img {
        display: block;
        width: 100%;
        height: 100%;
        max-height: 540px;
      }
    }
  }
  .next-chapter {
    position: absolute;
    right: 20px;
    bottom: 20px;
    a {
      color: #000;
    }
  }
}
</style>