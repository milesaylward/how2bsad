<template>
  <div 
    class="screen screen-about"
    :class="{
      'screen--active': this.sectionActive(this.sectionName),
    }"
    :style="sectionStyles"
    ref="aboutContainer"
  >
  <div class="screen-about-container">
    <div class="chapter-callout">
      <div class="title-container" @mouseenter="titleEnter" @mouseleave="titleLeave">
        <div class="copy-bg">
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 820 61.25" class="chapter-copy">
            <g id="box" data-name="Layer 1">
              <polygon points="538.29 16.95 531.22 38.53 545.59 38.53 538.44 16.95 538.29 16.95"/>
              <polygon points="132.3 16.95 125.23 38.53 139.6 38.53 132.45 16.95 132.3 16.95"/>
              <path d="M32.51,13.37H20.73V29.11H32.44c6.08,0,9-3.42,9-7.91S38.44,13.37,32.51,13.37Z"/>
              <path d="M593,13.37H582.29V29.11h10.64c6.23,0,9.12-3.42,9.12-7.91S599.09,13.37,593,13.37Z"/>
              <path d="M183.07,13.52h-6.84V48h6.84c11.17,0,16.8-6.61,16.8-17.41C199.87,20.21,193.86,13.52,183.07,13.52Z"/>
              <path d="M743.79,13.37H732V29.11h11.7c6.08,0,9-3.42,9-7.91S749.72,13.37,743.79,13.37Z"/>
              <path d="M0,0V61.25H820V0ZM41.1,57.38,32.89,37.54H20.73V57.38H9.18V4.18H32.59C47.79,4.18,53,12.54,53,21.05a15.33,15.33,0,0,1-9.72,14.67L53.49,57.38Zm60.35,0H62.38V4.18h38.76v10H73.86v11.7H98.18v8.9H73.86V47.35h27.59Zm44.46,0-3.35-10H122.34l-3.26,10H106.69l19.23-53.2H139l19.23,53.2Zm36.32,0H164.75V4.18h17.48c19,0,29.26,9.8,29.26,26.37C211.49,47.5,201.92,57.38,182.23,57.38Zm99.11-43H263.7v43H252.23v-43H234.67V4.18h46.67Zm50.84,43H320.7v-22H300v22H288.4V4.18H300V25.46H320.7V4.18h11.48Zm49.4,0H342.51V4.18h38.77v10H354v11.7h24.32v8.9H354V47.35h27.59Zm52.59.91c-16.26,0-27.36-11.63-27.36-27.82,0-15.73,11.48-27.21,27.74-27.21A30.19,30.19,0,0,1,453.86,10l-6.24,7.9C443.9,15,440,13,434.78,13c-9.88,0-16.34,6.92-16.34,17.48,0,11,6.31,18.09,16.34,18.09A18.14,18.14,0,0,0,447.93,43l6.84,7.3A28.7,28.7,0,0,1,434.17,58.29Zm72.05-.91H494.74v-22H474v22H462.44V4.18H474V25.46h20.75V4.18h11.48Zm45.67,0-3.34-10H528.33l-3.27,10H512.67L531.9,4.18H545l19.23,53.2Zm41.19-19.31H582.29V57.38H570.74V4.18H593c15.27,0,20.52,8.36,20.52,16.87S608.21,38.07,593.08,38.07Zm72.13-23.71H647.58v43H636.1v-43H618.54V4.18h46.67Zm46.13,43H672.27V4.18H711v10H683.75v11.7h24.32v8.9H683.75V47.35h27.59Zm41,0-8.21-19.84H732V57.38H720.46V4.18h23.4c15.21,0,20.45,8.36,20.45,16.87a15.33,15.33,0,0,1-9.73,14.67l10.19,21.66Zm39.75.91a42.53,42.53,0,0,1-21.21-5.85l5.47-9c4.71,2.81,10.34,4.79,15.66,4.79,5.7,0,8.66-2.36,8.66-5.78,0-9.95-28.73-3.27-28.73-23.41,0-8.74,7.23-15.81,19.54-15.81a43.86,43.86,0,0,1,19.15,4.49l-4.26,9a32.28,32.28,0,0,0-14.36-3.49c-5.09,0-8.13,2.43-8.13,5.62,0,9.81,28.73,2.89,28.73,23.41C812.65,51.3,805.81,58.29,792.13,58.29Z"/>
            </g>
            <g class="letters" ref="chapterTitle">
              <path class="cls-1" d="M9.18,4.28H32.59C47.79,4.28,53,12.64,53,21.15a15.32,15.32,0,0,1-9.72,14.67L53.49,57.48H41.1L32.89,37.65H20.73V57.48H9.18ZM32.44,29.21c6.08,0,9-3.42,9-7.9,0-4.64-3-7.83-9-7.83H20.73V29.21Z"/>
              <path class="cls-1" d="M62.38,4.28h38.76v10H73.86V26H98.18v8.89H73.86V47.45h27.59v10H62.38Z"/>
              <path class="cls-1" d="M125.92,4.28H139l19.23,53.2H145.91l-3.35-9.95H122.34l-3.26,9.95H106.69Zm-.69,34.36H139.6l-7.15-21.59h-.15Z"/>
              <path class="cls-1" d="M164.75,4.28h17.48c19,0,29.26,9.81,29.26,26.38,0,16.94-9.57,26.82-29.26,26.82H164.75Zm18.32,43.86c11.17,0,16.8-6.62,16.8-17.41,0-10.41-6-17.1-16.8-17.1h-6.84V48.14Z"/>
              <path class="cls-1" d="M252.23,14.47H234.67V4.28h46.67V14.47H263.7v43H252.23Z"/>
              <path class="cls-1" d="M288.4,4.28H300V25.56H320.7V4.28h11.48v53.2H320.7v-22H300v22H288.4Z"/>
              <path class="cls-1" d="M342.51,4.28h38.77v10H354V26h24.32v8.89H354V47.45h27.59v10H342.51Z"/>
              <path class="cls-1" d="M434.55,3.37a30.24,30.24,0,0,1,19.31,6.76L447.62,18c-3.72-3-7.67-4.94-12.84-4.94-9.88,0-16.34,6.91-16.34,17.48,0,10.94,6.31,18.09,16.34,18.09a18.14,18.14,0,0,0,13.15-5.55l6.84,7.3a28.7,28.7,0,0,1-20.6,8c-16.26,0-27.36-11.63-27.36-27.82C406.81,14.85,418.29,3.37,434.55,3.37Z"/>
              <path class="cls-1" d="M462.44,4.28H474V25.56h20.75V4.28h11.48v53.2H494.74v-22H474v22H462.44Z"/>
              <path class="cls-1" d="M531.9,4.28H545l19.23,53.2H551.89l-3.34-9.95H528.33l-3.27,9.95H512.67Zm-.68,34.36h14.36l-7.14-21.59h-.15Z"/>
              <path class="cls-1" d="M570.74,4.28H593c15.27,0,20.52,8.36,20.52,16.87s-5.32,17-20.45,17H582.29v19.3H570.74Zm22.19,24.93c6.23,0,9.12-3.42,9.12-7.9s-3-7.83-9-7.83H582.29V29.21Z"/>
              <path class="cls-1" d="M636.1,14.47H618.54V4.28h46.67V14.47H647.58v43H636.1Z"/>
              <path class="cls-1" d="M672.27,4.28H711v10H683.75V26h24.32v8.89H683.75V47.45h27.59v10H672.27Z"/>
              <path class="cls-1" d="M720.46,4.28h23.4c15.21,0,20.45,8.36,20.45,16.87a15.33,15.33,0,0,1-9.73,14.67l10.19,21.66H752.38l-8.21-19.83H732V57.48H720.46Zm23.25,24.93c6.08,0,9-3.42,9-7.9,0-4.64-3-7.83-9-7.83H732V29.21Z"/>
              <path class="cls-1" d="M776.39,43.57a31.63,31.63,0,0,0,15.66,4.79c5.7,0,8.66-2.35,8.66-5.77,0-10-28.73-3.27-28.73-23.41,0-8.74,7.23-15.81,19.54-15.81a43.85,43.85,0,0,1,19.15,4.48l-4.26,9a32.16,32.16,0,0,0-14.36-3.5c-5.09,0-8.13,2.43-8.13,5.63,0,9.8,28.73,2.88,28.73,23.41,0,9-6.84,16-20.52,16a42.43,42.43,0,0,1-21.21-5.86Z"/>
            </g>
          </svg>
        </div>
        <NoiseCanvas />
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400.33 20.35">
        <g id="Layer_1-2" data-name="Layer 1" class="underline">
          <path ref="underline" class="cls-1" d="M0,15.71C106.31,23.46,174.53,19,218,13.07A1225,1225,0,0,1,385.8.52c6.15,0,11.21,0,14.53,0"/>
        </g>
      </svg>
    </div>
    <div class="screen-about-container--left">
      <h1 ref="title">“HOW TO BE SAD” <br>IS ABOUT WHY I AM THE WAY THAT I AM.</h1>
      <p ref="copy">
        This is a digital memoir about my journey as a creative dealing with depression.
        Supplemented with posters and motion graphics, the project follows a series of
        self-reflective essays about how different parts of life—family, love, work—can
        shape a person’s identity and mental health. This project aims to destigmatize
        mental illness by talking about it publicly, openly, and honestly.
      </p>
    </div>
    <div class="screen-about-container--right">
     <div class="image-container" ref="image">
      <img src="./../assets/imgs/portrait.png" alt="Photo of Cindy" />
      <div v-html="HeadScribble" class="scribbles" ref="scribbles" />
     </div>
    </div>
  </div>
  </div>
</template>

<script>
import sectionMixin from './../mixins/section-mixin';
import { SECTIONS } from '../core/config';
import NoiseCanvas from './../components/noiseCanvas';
import HeadScribble from './../assets/svg/head.svg';

export default {
  name: 'about-section',
  mixins: [sectionMixin],
  components: { NoiseCanvas },
  data: () => ({
    sectionName: SECTIONS.about,
    animIn: false,
    svgAnimated: false,
    HeadScribble,
  }),
  watch: {
    scrollPosition() {
      this.checkAnimIn();
    },
  },
  computed: {
    chapterTitleArray() {
      const title = 'read the chapters';
      return title.split('');
    },
    scribbleRefs() {
      return Array.from(this.$refs.scribbles.querySelectorAll('.head-scribble'));
    },
    chapterTitle () {
      return Array.from(this.$refs.chapterTitle.children);
    }
  },
  methods: {
    getCharHTML(letter) {
      return letter !== ' ' ? letter : '&nbsp;'
    },
    titleEnter() {
      TweenMax.to(this.$refs.underline, .5, { drawSVG: '100%', ease: Power1.easeInOut });
    },
    titleLeave() {
      TweenMax.to(this.$refs.underline, .5, { drawSVG: '0', ease: Power1.easeInOut });
    },
    animate() {
      TweenMax.to(this.$refs.title, 1, { y: 0, opacity: 1, ease: Quint.easeOut });
      TweenMax.to(this.$refs.copy, 1, { y: 0, opacity: 1, ease: Quint.easeOut, delay: .2 });
      TweenMax.to(this.$refs.image, .7, { y: 0, opacity: 1, ease: Quint.easeOut, delay: .4, onComplete: () => {
        this.checkArtAnim();
      }});
    },
    checkAnimIn() {
      if (!this.animIn) {
        const { top, height } = this.$refs.aboutContainer.getBoundingClientRect();
        if (top < height / 3) {
          this.animIn = true;
          this.animate();
        }
      }
    },
    checkArtAnim() {
      if (!this.svgAnimated) {
        this.svgAnimated = true;
        this.animateSvg();
      }
    },
    animateSvg() {
      TweenMax.staggerTo(this.scribbleRefs, .5, { drawSVG: '100%' }, .3, () => {
        this.animateChapterTitle();
      });
    },
    animateChapterTitle() {
      TweenMax.staggerFromTo(this.chapterTitle, .3, { y: '-20px', opacity: 0 }, { y: 0, opacity: 1, ease: Quint.easeOut }, .05);
    },
    setBasePositions() {
      TweenMax.set(this.$refs.title, { y: 30, opacity: 0 });
      TweenMax.set(this.$refs.copy, { y: 30, opacity: 0 });
      TweenMax.set(this.$refs.image, { y: 30, opacity: 0 });
      this.chapterTitle.map(letter => {
        TweenMax.set(letter, { y: '-20px', opacity: 0 });
      });
      TweenMax.set(this.$refs.underline, { drawSVG: '0' });
      
      this.scribbleRefs.map((s, i) => {
        TweenMax.set(s, { drawSVG: '0' });
      })
    }
  },
  mounted() {    
    this.setBasePositions();
    setTimeout(() => {
      this.checkAnimIn();
    }, 500);
  }
};
</script>

<style lang="scss">
@import '~@/styles/_vars.scss';
.screen {
  &-about {
    background: black;
    z-index: 3;
    &-container {
      position: relative;
      width: 80%;
      height: 100%;
      margin: 0 auto;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
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
          }
          canvas {
            position: absolute;
            top: 0;
            left: 0;
          }
          .chapter-copy {
            width: 500px;
            stroke-width: 1px;
            z-index: 3;
          }
          .canvas-container {
            opacity: 0;
            transition: opacity 500ms $easeOutQuad;
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
          stroke: 1px;
        }
        svg {
          .underline {
            stroke: white;
            stroke-width: 3px;
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
        h1 {
          max-width: 446px;
        }
        p {
          max-width: 420px;
          font-size: 18px;
          line-height: 33px;
          font-family: $font;
        }
      }
      &--right {
        transform: translate(-100px, -100px);
        .image-container {
          position: relative;
        }
        svg {
          stroke: white;
          position: absolute;
          fill: none;
          left: 45%;
          transform: translate(-50%);
          top: -10%;
          width: 70%;

          path {
          }
        }
      }
    }
  }
}
</style>
