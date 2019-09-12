<template>
  <div 
    class="screen screen-about"
    :class="{
      'screen--active': this.sectionActive(this.sectionName),
      hidden: scrollToChapter
    }"
    :style="sectionStyles"
    ref="aboutContainer"
  >
  <div class="screen-about-container">
    <div class="chapter-callout" ref="callout">
      <div class="title-container" @mouseenter="elementHover" @mouseleave="elementLeave" @click="handleLinkClick" >
        <div class="copy-bg">
          <Appearable>
            <div v-html="callout" class="chapter-copy" />
          </Appearable>
        </div>
        <NoiseCanvas />
      </div>
      <Appearable>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 787.63 14.51" class="underline">
          <path ref="underline" d="M3.5 3.5C252.12 16.61 523.65 6.84 784.13 11" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="7" data-name="Layer 1"/>
        </svg>
      </Appearable>
    </div>
    <div class="screen-about-container--left" ref="left">
      <Appearable>
        <div>
          <div class="title ap-child ap-child--1" ref="title">
            <span class="header-svg" v-html="aboutHeader" />
          </div>
          <p class="ap-child ap-child--2">
            This is a digital memoir about my journey as a creative dealing with depression.
            Supplemented with posters and motion graphics, the project follows a series of
            self-reflective essays about how different parts of life—family, love, work—can
            shape a person’s identity and mental health. This project aims to destigmatize
            mental illness by talking about it publicly, openly, and honestly.
          </p>
        </div>
      </Appearable>
    </div>
    <div class="screen-about-container--right" ref="right">
      <Appearable>
        <div class="image-container" ref="image">
          <img class="ap-child" src="./../assets/imgs/portrait.png" alt="Photo of Cindy" />
          <div v-html="HeadScribble" class="scribbles" ref="scribbles" />
        </div>
      </Appearable>
    </div>
  </div>
  </div>
</template>

<script>
import sectionMixin from './../mixins/section-mixin';
import hoverMixin from './../mixins/element-hover-mixin';
import { SECTIONS } from '../core/config';
import NoiseCanvas from './../components/noiseCanvas';
import HeadScribble from './../assets/svg/head.svg';
import aboutHeader from '@/assets/svg/about-header.svg';
import callout from '@/assets/svg/callout-3.svg';

export default {
  name: 'about-section',
  mixins: [sectionMixin, hoverMixin],
  components: { NoiseCanvas },
  data: () => ({
    sectionName: SECTIONS.about,
    HeadScribble,
    aboutHeader,
    callout,
    hasMinHeight: true,
    minHeight: 850,
  }),
  methods: {
    handleLinkClick() {
      this.scrollToSection({ subsection: SECTIONS.chapters })
    }
  }
};
</script>

<style lang="scss">
@import '~@/styles/_vars.scss';
.screen {
  &-about {
    background: black;
    z-index: 3;
    &.hidden {
      opacity: 0;
    }
    &-container {
      position: relative;
      padding-top: 4rem;
      width: 80%;
      height: 100%;
      margin: 0 auto;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      @include breakpoint(small) {
        width: 100%;
        justify-content: flex-start;
      }
      h1 {
        font-size: 42px;
        font-family: $fontBold;
        text-transform: uppercase;
        line-height: 60px;
        color: white;
        -webkit-text-fill-color: black; /* Will override color (regardless of order) */
        -webkit-text-stroke-width: 0.01px;
        -webkit-text-stroke-color: rgba(255,255,255,.7);
      } 
      .chapter-callout {
        position: absolute;
        bottom: 5%;
        left: 50%;
        transform: translateX(-50%);
        width: auto;
        .title-container {
          position: relative;
          margin-bottom: 10px;
          .copy-bg {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 41px;
          }
          canvas {
            position: absolute;
            top: 0;
            left: 0;
          }
          .chapter-copy {
            height: 41px;
            width: 500px;
            stroke-width: 1px;
            z-index: 3;
            & svg {
              overflow: visible;
            }
            #DROPDOWN {
              .callout-2 {
                transition: transform 400ms $easeOutQuad, opacity 400ms $easeOutQuad;  
                transform: translateY(-35px);
                opacity: 0;
                @for $i from 1 through 15 {
                  &:nth-child(#{$i}) {
                    transition-delay: $i * 50ms;
                  } 
                }
              }
            }
          }
          .appearable {
            &--can-appear {
              .chapter-copy {
                #DROPDOWN {
                  .callout-2 {
                    opacity: 1;
                    transform: translateY(0);
                  }
                }
              }
            }
          }
          .canvas-container {
            opacity: 0;
            height: 41px;
            transition: opacity 500ms $easeOutQuad;
            z-index: -1;
          }
          &:hover {
            .canvas-container {
              opacity: 1;
            }
          }
        }
        .letters {
          fill: none;
          stroke: white;
          path {
            stroke-width: 1.5px;
          }
        }
        svg {
          &.underline {
            stroke: white;
            stroke-width: 3px;
            path {
              transition: stroke-dashoffset 750ms $easeOutQuad 1200ms;
              stroke-dashoffset: 790;
              stroke-dasharray: 790;
            }
          }
        }
        .appearable {
          &--can-appear {
            svg.underline path {
              stroke-dashoffset: 0;
            }
          }
        }
      }
      &--left, &--right {
        flex-basis: 1 1 auto;
        transform: translateY(-100px);
      }
      &--left {
        z-index: 2;
        text-align: left;
        margin-left: 100px;
        min-width: 446px;
        @include breakpoint(small) {
          margin-left: 5%;
        }
        .title {
          position: relative;
          z-index: 1;
          span {
            display: block;
          };
          .header-svg {
            z-index: 1;
            svg {
              display: block;
              height: 100%;
              width: 101%;
            }
          }
          .canvas-container {
            z-index: -1;
            opacity: 0;
            transition: opacity 300ms $easeOutQuad;
          }
          &:hover {
            .canvas-container { opacity: 1; }
          }
        }
        p {
          max-width: 420px;
          font-size: 18px;
          line-height: 33px;
          font-family: $font;
        }
      }
      &--right {
        transform: translate(-86px, -105px);
        z-index: 1;
        .image-container {
          position: relative;
        }
        .scribbles {
          z-index: 1000;
          position: absolute;
          top: 0;
          width: 100%;
          height: 100%;
          .head-scribble {
            transition: stroke-dashoffset 950ms $easeOutQuad;
            stroke-dasharray: 120;
            stroke-dashoffset: 120;
            @for $i from 1 to 5 {
              &.head--#{$i} {
                transition-delay: $i * 300ms;
              }
            }
          }
        }
        .appearable--can-appear {
          .scribbles .head-scribble {
            stroke-dashoffset: 0;
          }
        }
        svg {
          stroke: white;
          position: absolute;
          fill: none;
          left: 45%;
          transform: translate(-50%);
          top: -10%;
          width: 70%;
        }
      }
    }
  }
}
</style>
