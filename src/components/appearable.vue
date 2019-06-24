<template>
  <div :class="[
    'appearable',
    {
      'appearable--anim': anim,
      'appearable--text': text,
      'appearable--can-appear': canAppear,
      'appearable--halfway-visible': canAppear
    }
  ]">
        <Intersect @enter="slotHandleEnter" @leave="slotHandleLeave" :threshold="appearThresholdArray" :rootMargin="rootMargin">
          <Keepable>
            <slot />
          </Keepable>
        </Intersect>
  </div>
</template>

<script>
import Intersect from 'vue-intersect';
import Keepable from './keepable';

export default {
  name: 'Appearable',
  components: {
    Intersect,
    Keepable
  },
  data: () => ({
    halfwayThreshold: 0.5,
    fullyVisibleThreshold: 0.95,
    fullyVisibleThresholdMobile: 0.5,
    fullyVisibleThresholdMobileLandscape: 0.2,
    largerThanThreshold: 0.15,
    appearThresholdReached: false,
    rootMargin: "0px 0px 0px 0px",
    halfwayReached: false,
    fullyVisible: false,
    appearThresholdLocal: [], // container for our values
    appearThresholdFrequency: 0.05, // amount to increment by when populating threshold
  }),
  props: {
    anim: {
      type: Boolean,
      required: false
    },
    text: {
      type: Boolean,
      required: false
    },
    threshold: {
      type: Number,
      required: false,
      default: 0.95 // percentage of thumbnail in viewport needed before its ready to animate in
    },
    thresholdMobile: {
      type: Number,
      required: false,
      default: 0.5 // percentage of thumbnail in viewport needed before its ready to animate in on Mobile
    },
    debug: {
      type: Boolean,
      required: false,
      default: false
    },
    noAppear: {
      type: Boolean,
      required: false,
      default: false
    },
    resetOnLeave: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    slotWrapperComponent() {
      return !this.canAppear ? '' : 'div';
    },
    slotHandleEnter() {
      return this.handleEnter;
    },
    slotHandleLeave() {
      return this.handleLeave;
    },
    canAppear() {
      return this.appearThresholdReached;
    },
    isMobile() {
      return this.shouldUseMobile || this.shouldUseMobileLandscape;
    },
    halfwayVisible() {
      return this.halfwayReached;
    },
    isDefaultThreshold() {
      // These should always match defaults in props
      return (this.isMobile) ? this.thresholdMobile === this.fullyVisibleThresholdMobile : this.threshold === this.fullyVisibleThreshold;
    },
    appearThresholdArray() {
      return this.appearThresholdLocal;
    },
    parsedThreshold() {
      return (this.isMobile) ? this.thresholdMobile : this.threshold;
    },
    parsedFullThreshold() {
      let fully = (this.isMobile) ? this.thresholdMobile : this.threshold;
      if (this.shouldUseMobileLandscape) {
        fully = this.fullyVisibleThresholdMobileLandscape;
      }
      return fully;
    },
  },
  methods: {
    handleEnter(entries) {
      if (entries && entries[0]) {
        const {
          isIntersecting,
          intersectionRatio,
          // rootBounds,
          // boundingClientRect
        } = entries[0];
        // TODO add a better appear threshold seperate from halfway and full.
        if (this.debug) console.log(intersectionRatio, entries[0]);
        if (isIntersecting && intersectionRatio >= this.halfwayThreshold && !this.halfwayReached) {
          if (this.debug) console.log('halfway-visible', this.$el);
          if (this.debug) console.log('can-appear', this.$el);
          this.halfwayReached = true;
          this.$emit('halfway-visible', { el: this.$el });
        }
        if (this.debug) console.log(this.parsedFullThreshold, 'full thresh', intersectionRatio);
        if (isIntersecting && intersectionRatio >= this.parsedFullThreshold && !this.fullyVisible) {
          if (this.debug) console.log('fully-visible', this.$el);
          this.fullyVisible = true;
          this.$emit('fully-visible', { el: this.$el });
          if (this.debug) console.log('fully appeared');
          this.appearThresholdReached = true;
          this.$emit('can-appear', { el: this.$el });
        }
      }
    },
    handleLeave() {
      if (this.resetOnLeave) {
        this.fullyVisible = false;
        this.halfwayReached = false;
      }
      this.$emit('has-left', { el: this.$el });
    },
    emptyHandler() {}
  },
  created() {
    // Populate source threshold array automagically
    // this.appearThresholdLocal = [0.3, 0.7];
    this.rootMargin = '0px';
    for (let x = 0.00; x < 1; x += this.appearThresholdFrequency) {
      this.appearThresholdLocal.push(Math.round(x * 100) / 100);
    }
  }
};
</script>
