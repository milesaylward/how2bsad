<template>
  <div class="screen screen-landing" :style="sectionStyles">
    <p :class="{hidden}">Scroll</p>
  </div>
</template>

<script>
import sectionMixin from './../mixins/section-mixin';
import { SECTIONS } from '../core/config';
export default {
  name: 'landing',
  mixins: [sectionMixin],
  data: () => ({
    sectionName: SECTIONS.landing,
  }),
  computed: {
    hidden() {
      return this.scrollPosition > this.thresholds.landingThresh;
    }
  },
}
</script>

<style lang="scss">
@import './../styles/_vars';
.screen {
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  &-landing {
    z-index: 5;
    p {
      transition: opacity 300ms $easeOutQuint;
      margin: 0;
      font-family: $font;
      color: white;
      margin: {
        top: 130px;
        left: 10px;
      }
      font-size: 16px;
      line-height: 33px;
      letter-spacing: 5px;
      text-transform: uppercase;
      &.hidden {
        opacity: 0;
      }
    }
  }
}
</style>
