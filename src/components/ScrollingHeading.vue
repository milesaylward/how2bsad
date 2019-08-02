<template>
  <div class="scrolling-heading" ref="root" :style="transformStyles">
    <h1 v-html="copy" />
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'scrolling-heading',
  props: {
    copy: {
      type: String, 
      required: true,
    },
    debug: {
      type: Boolean,
      default: false,
    },
    mounted: {
      type: Boolean, 
      required: true,
    },
    container: {
      required: true,
    }
  },
  data: () => ({
    topPosition: 0,
    transform: 0,
    containerRect: null,
  }),
  watch: { 
    scrollPosition: {
      handler(val) {
        const value = (val || this.scrollPosition) + 40;
        if (this.debug) console.log(value, this.topPosition, this.bottomPosition);
        if (value > this.topPosition && value < this.bottomPosition) {
          this.transform = value - this.topPosition;
        }
      },
      immediate: true,
    },
    mounted(val) {
      if (val) this.setTopPosition();
    }
  },
  computed: { 
    ...mapState(['scrollPosition', 'windowHeight']),
    transformStyles() {
      if (!this.transform) return;
      return {
        transition: 'none',
        transform: `translateY(${this.transform}px)`
      }
    }
  },
  methods: {
    setTopPosition() {
      setTimeout(() => {
        this.rect = this.$refs.root.getBoundingClientRect();
        const body = document.body.getBoundingClientRect();
        this.containerRect = this.container.getBoundingClientRect();
        this.bottomPosition = (this.containerRect.bottom + this.scrollPosition) - this.rect.height;
        this.topPosition = this.rect.top + this.scrollPosition;
        if (this.debug) {
          console.log('\n\n', this.rect, 'this.rect');
          console.log(this.topPosition, 'this.topPosition');
          console.log(this.bottomPosition, 'this.bottomPosition');
          console.log(this.containerRect, 'this.containerRect ');
        }
      }, 500);
    }
  },
  mounted() {
    if (this.mounted) this.setTopPosition();
  }
}
</script>

<style lang="scss">
.scrolling-heading {
  position: absolute;
  top: 30%;
}
</style>