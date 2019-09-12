<template>
  <Appearable :threshold="0.35" @can-appear="handleAppear">
    <div class="chapter-link" :class="{[chapter.name] : true}" @mouseenter="handleHover('enter')" @mouseleave="handleHover('leave')" ref="root">
      <img class="number" :src="chapter.number" alt="">
      <img class="photo" :src="chapter.photo" alt="" v-if="chapter.photo">
      <div class="noise-bg" />
      <HandDrawn :svg="chapter.svg" :canDraw="canDraw" :chapterName="chapter.name" :drawHover="hoverAnimate || activeChapter" />
      <div v-html="chapter.svg.title" class="title" />
    </div>
  </Appearable>
</template>

<script>
import HandDrawn from './handDrawn';
import { mapActions } from 'vuex';
export default {
  name: 'chapterLink',
  components: {
    HandDrawn
  },
  props: {
    chapter: {
      type: Object,
      required: true,
    },
    index: {
      type: Number
    },
    activeChapter: {
      type: Boolean,
      deafult: false
    }
  },
  data: () => ({
    canDraw: false,
    hoverAnimate: false,
  }),
  computed: {
    delay() {
      return this.index % 2 ? 300 : 400
    }
  },
  methods: {
    handleAppear() {
      setTimeout(() => {
        this.canDraw = true;
      }, this.delay);
    },
    handleHover(type) {
      if (type === 'enter') {
        this.hoverAnimate = true;
        this.setElementHovered(true);
      } else {
        this.hoverAnimate = false;
        this.setElementHovered(false);
      }
    },
    ...mapActions(['setElementHovered']),
  }
}
</script>

<style lang="scss">
@import './../styles/_vars';

.chapter-link {
  position: relative;
  width: 620px;
  height: 100%;
  max-height: 650px;
  background-color: #555;
  overflow: hidden;
  padding: {
    top: 50px;
    left: 50px; 
    right: 50px;
  }
  .noise-bg {
    position: absolute;
    left: -20%;
    top: -20%;
    display: block;
    width: 150%;
    height: 150%;
    z-index: -1;
    opacity: 0;
    will-change: transform;
    transition: opacity 300ms $easeOutQuad;
  }
  &:hover {
    .noise-bg {
      opacity: 1;
      animation: noiseAnimation 500ms steps(20) infinite;
    }
  }
  @include breakpoint(large) {
    width: 520px;
  }
  @include breakpoint(medium) {
    width: 420px;
    max-height: 470px;
  }
  @include breakpoint(small) {
    width: 320px;
    max-height: 370px;
  }
  @include breakpoint(xsmall) {
    width: 200px;
    max-height: 250px;
  }
  .number {
    position: absolute;
    left: 50px;
    top: 50px;
    @include breakpoint(small) {
     width: 80px; 
    }
    @include breakpoint(xsmall) { width: 50px ;}
  }
  &:hover {
  }
  .photo {
    display: block;
    width: 100%;
    margin: 0 auto;
    max-height: 540px;
    @include breakpoint(large) {
      max-height: 520px;
    }
    @include breakpoint(medium) {
      max-height: 366px;
    }
  }
  .no-photo {
    background: black;
    width: 100%;
    height: 100%;
    max-height: 540px;
    @media screen and ( max-width: 1439px ) {
      max-height: 454px;
    }
  }
  .title {
    display: block;
    width: 80%;
    max-width: 400px;
    max-height: 134px;
    margin-left: auto;
    margin-right: 0;
    padding: 10px 0;
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
  &.family, &.now {
    .noise-bg {
      background: url('./../assets/imgs/grey-noise.png')
    }
  }
  &.work, &.love {
    .noise-bg {
      background: url('./../assets/imgs/white-noise.png')
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
.appearable {
  .chapter-link {
    transform: translateY(10%);
    opacity: 0;
    transition: transform 300ms $easeOutQuad, opacity 300ms $easeOutQuad;
    &.love, &.now {
      transition-delay: 100ms;
    }
  }
  &--can-appear {
    .chapter-link { opacity: 1; transform: translateY(0) };
  }

}
</style>