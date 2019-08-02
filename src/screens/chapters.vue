<template>
  <div 
    class="screen screen-chapters"
    :class="{
      'screen--active': this.sectionActive(this.sectionName),
    }"
    :style="sectionStyles"
  >
    <div class="screen-chapters__container">
      <ChapterLink 
        v-for="(link, index) in chapters"
        :index="index"
        :key="link.name"
        :chapter="link"
        :ref="link.name"
        :activeChapter="selectedChapter === link.name"
        @click.native="handleChapterSelect(link)"
      />
      <div class="final-link-container" ref="final">
        <Appearable>
          <div class="container">
            <div v-html="whatSVG" class="what-svg" />
            <div v-html="boxSVG" class="box-svg" />
            <NoiseCanvas />
          </div>
        </Appearable>
      </div>
    </div>
  </div>
</template>

<script>
import { TweenMax } from 'gsap';
import sectionMixin from '@/mixins/section-mixin';
import { SECTIONS, CHAPTER_CONFIG } from '@/core/config';
import { SET_ACTIVE_CHAPTER } from '@/core/mutation-types';
import ChapterLink from '@/components/chapterLink';
import NoiseCanvas from '@/components/noiseCanvas';
import whatSVG from '@/assets/svg/what.svg'
import boxSVG from '@/assets/svg/box.svg'
import { mapMutations } from 'vuex';

  export default {
    name: 'chapter-section',
    mixins: [sectionMixin],
    components: {
      ChapterLink,
      NoiseCanvas,
    },
    data: () => ({
      sectionName: SECTIONS.chapters,
      heightAdjustment: 1,
      hasMinHeight: true, 
      minHeight: 1750,
      selectedChapter: null,
      chapters: CHAPTER_CONFIG,
      whatSVG,
      boxSVG
    }),
    watch: {
      windowWidth: {
        handler(val) {
          if (val < 840) {
            this.minHeight = 900;
          } else if (val < 1040) {
            this.minHeight = 1000;
          } else if (val < 1240) {
            this.minHeight = 1350;
          }
        }
      }
    },
    methods: {
      handleChapterSelect(link) {
        this.selectedChapter = link.name;
        const rect = this.getRectAsObject(this.$refs[link.name][0].$el);
        this.setActiveChapter({ ...link, ...rect });
        this.$emit('changeChapter', link.name);
      },
      getRectAsObject(element) {
        const { top, right, bottom, left, width, height, x, y } = element.getBoundingClientRect();
        return { top, right, bottom, left, width, height, x, y };
      },
      animOut(cb) {
        const elements = Array.from(this.$refs);
        const { family, love, now, work, final } = this.$refs;
        const els = [family[0].$el, love[0].$el, work[0].$el, now[0].$el, final];
        TweenMax.staggerTo(els, 0.3, { opacity: 0 }, 0.1, () => {
          if (cb) cb();
        });
      },
      ...mapMutations({
        setActiveChapter: SET_ACTIVE_CHAPTER,
      })
    }
  }
</script>

<style lang="scss">
.screen {
  &-chapters {
    background: black;
    z-index: 2;
    &__container {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      justify-content: center;
      // height: 100%;
    }
  }
  .final-link-container {
    width: 100%;
    .container {
      position: relative;
      width: 60%;
      margin: 8% auto 0 auto;
      .what-svg {
        display: block;
        width: calc(100% + 2px);
        margin-left: -1px;
        height: 100%;
        outline: 1px solid black;
      }
      .box-svg {
        position: absolute;
        width: 110%;
        top: 60%;
        left: 50%;
        transform: translate(-50%, -50%);
        path {
          stroke-dashoffset: 2490;
          stroke-dasharray: 2490;
          transition: stroke-dashoffset 1.5s $easeOutQuad;
        }
      }
      .canvas-container {
        z-index: -1;
        width: 100%;
        height: 93%;
        margin-top: 2px;
        opacity: 0;
        transition: opacity 400ms $easeOutQuad;
      }
      &:hover {
        .canvas-container {
          opacity: 1;
        }
      }
    }
    .appearable {
      &--can-appear {
        .box-svg {
          path {
            stroke-dashoffset: 0;
          }
        }
      }
    }
  }
}
</style>
