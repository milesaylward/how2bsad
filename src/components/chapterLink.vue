<template>
  <Appearable :threshold="0.85" @can-appear="handleAppear">
    <div class="chapter-link" :class="{[chapter.name] : true}" @mouseenter="handleHover('enter')" @mouseleave="handleHover('leave')">
      <img class="number" :src="chapter.number" alt="">
      <img class="photo" :src="chapter.photo" alt="" v-if="chapter.photo">
      <HandDrawn :svg="chapter.svg" :canDraw="canDraw" :chapterName="chapter.name" :drawHover="hoverAnimate" />
      <div v-html="chapter.svg.title" class="title" />
    </div>
  </Appearable>
</template>

<script>
import HandDrawn from './handDrawn';

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
      } else {
        this.hoverAnimate = false;
      }
    }
  }
}
</script>

<style lang="scss">
@import './../styles/_vars';

.chapter-link {
  position: relative;
  width: 620px;
  background-color: #555;
  padding: {
    top: 50px;
    left: 50px; 
    right: 50px;
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
  .number {
    position: absolute;
    left: 50px;
    top: 50px;
    @include breakpoint(small) {
     width: 80px; 
    }
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
    max-width: 400px;
    max-height: 134px;
    margin-left: auto;
    margin-right: 0;
  }
  &.family {
    .number {
      @include breakpoint(small) {
        width: 50px;
      }
    }
  }
  &.love {
    background: white;
    .title {
      max-width: 290px;
    }
  }
  &.work {
    background: #ddd;
    .title {
      max-width: 300px;
    }
    .number {
      @include breakpoint(small) {
        width: 70px;
      }
    }
  }
  &.now {
    background: #292929;
    .title {
      max-width: 260px;
    }
    .number {
      @include breakpoint(small) {
        width: 75px;
      }
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