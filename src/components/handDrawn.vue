<template>
  <div class="svg-container">
    <div class="svg svg__drawn" :class="chapterName" v-html="svg.drawn" v-if="svg.drawn" ref="draw" />
    <div class="svg svg__hover" :class="chapterName" v-html="svg.hover" ref="hover" />
  </div>
</template>

<script>
import { TweenMax } from 'gsap/all';

export default {
  name: 'hand-drawn',
  props: {
    svg: {
      type: Object,
      required: true,
    },
    chapterName: {
      type: String,
      required: true,
    },
    canDraw: {
      type: Boolean
    },
    drawTime: {
      type: Number,
      default: 0.5,
    },
    drawHover: {
      type: Boolean,
      default: false,
    }
  },
  computed: {
    drawRefs() {
      if (!this.$refs.draw) return;
      let refs = Array.from(this.$refs.draw.querySelectorAll('path'));
      refs.sort((a, b) => {
        if (!a.dataset || !b.dataset) return 0;
        return parseInt(a.dataset.order) - parseInt(b.dataset.order);
      });
      return refs;
    },
    hoverTime() {
      let time = .5;
      switch (this.chapterName) {
        case 'family':
          time = .15;
        case 'work':
          time = .3;
          break;
        default:
          break;
      }
      return time;
    },
    hasDelay() {
      if (this.chapterName === 'love' || this.chapterName === 'work' || this.chapterName === 'now') {
        return true;
      } 
      return false;
    },
     hoverRefs() {
      if (!this.$refs.hover) return;
      let refs = Array.from(this.$refs.hover.querySelectorAll('path'));
      refs.sort((a, b) => {
        if (!a.dataset || !b.dataset) return 0;
        return parseInt(a.dataset.order) - parseInt(b.dataset.order);
      });
      return refs;
    },
  },
  methods: {
    setRefs() {
      if (this.drawRefs) {
        this.drawRefs.forEach(path => {
          TweenMax.set(path, { drawSVG: '0%' });
        }); 
      }
      if (this.hoverRefs) {
        this.hoverRefs.forEach(path => {
          TweenMax.set(path, { drawSVG: '0%' });
        }); 
      }
    },
    animateDraw() {
      if (!this.drawRefs) return;
      this.drawRefs.forEach((ref, i) => {
        const time = this.chapterName === 'now' && i > 0 ? this.drawTime * 2 : this.drawTime;
        TweenMax.to(ref, time, { drawSVG: '100%', delay: i * this.drawTime });
      });
    },
    animateHover(type) {
      let delay = 0;
      
      if (type === 'in') {
        this.hoverRefs.forEach((ref, i) => {
          if (this.hasDelay) delay = (this.hoverTime - (this.hoverTime / 2)) * i;
          TweenMax.to(ref, this.hoverTime, { drawSVG: '100%', ease: Power4.easeOut, delay });
        });
      } else {
        this.hoverRefs.forEach((ref, i) => {
          TweenMax.killTweensOf(ref);
          TweenMax.to(ref, this.hoverTime, { drawSVG: '0%'});
        });
      }
    }
  },
  watch: {
    canDraw() {
      this.animateDraw()
    },
    drawHover(val) {
      if (val) {
        this.animateHover('in');
      } else {
        this.animateHover('out');
      }
    }
  },
  mounted() {
    this.setRefs();
    if (this.canDraw) {
      this.$nextTick(() => {
        this.animateDraw();
      })
    }
  }
};
</script>

<style lang="scss">
@import './../styles/_vars';
.svg-container {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  .svg {
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(-50%, -50%);
    &__drawn {
      &.family {
        width: 150px;
        bottom: -5%;
        left: 25%;
        top: auto;
      }
      &.work {
        top: auto;
        bottom: 1%;
        left: 40%;
        width: 23%;
        transform: translate(-50%, -50%);
      }
      &.now {
        width: 60%;
        top: 45%;
        left: 45%;
        
      }
    }
    &__hover {
      &.family {
        width: 23%;
        top: 41%;
        left: 44.5%;
        transform: translate(-50%, -50%);
      }
      &.love {
        width: 25%;
        top: 40%;
        left: 52%;
        transform: translate(-50%, -50%);
      }
      &.work {
        bottom: 7%; 
        width: 10%;
        top: auto;
        left: 50%;
        transform: translate(-50%, -50%);
      }
      &.now {
        top: auto;
        bottom: 8%;
        width: 5%;
        right: 2%;
        left: auto;
      }
    }
  }
}
</style>
