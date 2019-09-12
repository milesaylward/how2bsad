<template>
  <div class="page-content" :class="{mounted: mounted}" data-subsection="chapterContent">
    <div v-for="(content, i) in contentBlocks" :key="`content--${i}`">
      <div class="page-content__inner" :ref="`content${i}`">
        <div class="left">
          <Appearable v-if="content.title">
            <h1 class="ap-child">
              {{content.title}}
            </h1>
          </Appearable>
          <Appearable v-for="copy in content.copy" :key="copy">
            <p class="ap-child" v-html="copy" />
          </Appearable>
        </div>
        <div class="right">
          <Appearable v-if="content.floatingCopy && $refs[`content${i}`]">
            <ScrollingHeading
              class="ap-child"
              :copy="content.floatingCopy"
              :mounted="mounted"
              :container="$refs[`content${i}`][0]"
            />
          </Appearable>
        </div>
      </div>
      <div class="page-content__inner" v-if="content.image">
        <Appearable :threshold="0.4">
          <div class="full ap-child">
            <img :src="content.image" alt="some alt">
          </div>
        </Appearable>
      </div>
    </div>
  </div>
</template>

<script>
import ElementHoverMixin from '@/mixins/element-hover-mixin';
import ScrollingHeading from '@/components/ScrollingHeading';
import { mapState, mapGetters } from 'vuex';
import eventBus from '@/main';

export default {
  name: 'chapter',
  mixins: [ElementHoverMixin],
  components: {
    ScrollingHeading
  },
  computed: {
    contentBlocks() {
      return this.activeChapterContent.contentBlocks;
    },
    ...mapState(['heroAnimated']),
    ...mapGetters([
      'activeChapterContent'
    ])
  },
  data: () => ({
    mounted: false,
  }),
  watch: {
    heroAnimated(val) {
      if (val) {
        this.mounted = true;
      }
    },
    mounted() {
      eventBus.$emit('startAnimation');
    },
  },
  mounted() {
    if (this.heroAnimated) {
      setTimeout(() => {
        this.mounted = true;
      }, 500);
    }
  }
}
</script>

<style lang="scss">
.page-content {
  display: none;
  max-height: 0;
  padding-top: 180px;
  padding: 180px 140px;
  &.mounted {
    display: block;
    max-height: 100%;
  }
  &__inner {
    display: flex;
    justify-content: space-around;
    align-items: stretch;
    max-width: 1170px;
    margin: 0 auto;
    &:not(:first-child) {
      margin: 8rem auto;
    }
    .left, .right {
      position: relative;
      width: 38%;
      p {
        max-width: 455px;
        margin-top: 3rem;
      }
    }
    img {
      display: block;
      width: 100%;
      height: auto;
    }
    .full {
      width: 100%;
    }
  }
}
</style>