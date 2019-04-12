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
      <h1 ref="chapterTitle">
        <span v-for="(letter, i) in chapterTitleArray" :key="letter + i" v-html="getCharHTML(letter)"></span>
      </h1>
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 137.91 18.05"  class="scribble1">
        <g id="Layer_2" data-name="Layer 2">
          <path ref="scribble0" class="cls-1" d="M137.7,13.74c-3.14-1.45-6.44-2.84-9.91-4.13A147.85,147.85,0,0,0,73.29.53L58.08,9.7l8.13,8A23.44,23.44,0,0,0,60.08,12C40.48-.82,2.32,11.25.16,12" stroke="inherit" />
        </g>
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60.27 79.46" class="scribble2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path ref="scribble1" class="cls-1" d="M59.78,79.41A103.53,103.53,0,0,0,58.12,69C53.63,47.79,43.21,31.68,34.18,20.84l1,1A52.93,52.93,0,0,1,22,18.13,54.44,54.44,0,0,1,1.34,2.44L1.7,3.5l8.77,22.7"/>
        </g>
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9.85 69.72" class="scribble3">
        <g id="Layer_1-2" data-name="Layer 1">
          <path ref="scribble2" class="cls-1" d="M4.27,69.53A55,55,0,0,1,2,62.64,55.61,55.61,0,0,1,.57,54.29l1.29.33,7.24.69.21-.08Q8.24,46.16,7.42,36.49C6.32,23.56,5.72,11.37,5.47,0"/>
        </g>
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 53.14 51.27" class="scribble4">
        <g id="Layer_1-2" data-name="Layer 1">
          <path ref="scribble3" class="cls-1" d="M.29,50.87l16-11.45,20.1-7.93-.26-.16H2.56l.11-.16,26-7.53v-.76A92.17,92.17,0,0,1,52.87.42"/>
        </g>
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 77.85 46.35" class="scribble5">
        <g id="Layer_1-2" data-name="Layer 1">
          <path ref="scribble4" class="cls-1" d="M1.05,46.21a15,15,0,0,1-.42-6c1.15-8.5,10-13.39,14.15-15.72a40.16,40.16,0,0,1,14.69-4.73l-.66.24L41.1,18.07h0a1,1,0,0,1,.11.28c.08.42,2.88,4.86,1.95,7.33-.83,2.2-4.76,3.22-7.2,1.92a4.45,4.45,0,0,1-.58-.38c-2.81-2.22-2.79-10,1.36-13.91a9.57,9.57,0,0,1,4-2.21L39,11.49,77.71.48"/>
        </g>
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 213.96 170.58" class="scribble6">
        <g id="Layer_1-2" data-name="Layer 1">
          <path ref="scribble5" class="cls-1" d="M131.09.42,43.9,56.79l90.49-42.52-120.88,80L123.82,30.14.3,122.62,180.63,6.53,62.39,129.89S168.74,41,167.42,45.82s-91.16,80.76-91.16,80.76l91.16-66.71L74.28,139.8,192.52,51.28,82.87,161.59l87.85-72-74.31,72L213.66,81,98.06,170.18"/>
        </g>
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 116.27 157.84" class="scribble7">
        <g id="Layer_1-2" data-name="Layer 1">
          <polyline ref="scribble6" class="cls-1" points="0.33 51.39 55.79 2.51 24.08 55.35 51.16 40.16 14.83 88.38 69.66 35.53 26.06 104.89 88.15 35.53 44.24 98.28 88.15 53.7 60.44 100.27 115.9 53.7 69.66 104.89 112.83 67.24 77.58 108.85 115.9 86.39 67.59 127.27 47.2 144.52 112.83 96.3 69.66 155.92 105.99 131.97 72.96 131.31"/>
        </g>
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 144.24 117.73" class="scribble8">
        <g id="Layer_1-2" data-name="Layer 1">
          <polyline ref="scribble7" class="cls-1" points="10.84 32.72 67.65 1.68 33.96 42.63 94.07 10.27 3.58 65.62 84.16 41.31 39.91 65.62 122.47 28.63 28.02 84.91 116.4 39.33 54.11 82.27 112.57 57.16 26.03 112.63 140.31 57.15 64.9 116.61 103.98 96.8 86.8 116.61 131.06 100.76"/>
        </g>
      </svg>
     </div>
    </div>
  </div>
  </div>
</template>

<script>
import sectionMixin from './../mixins/section-mixin';
import { SECTIONS } from '../core/config';

  export default {
    name: 'about-section',
    mixins: [sectionMixin],
    data: () => ({
      sectionName: SECTIONS.about,
      animIn: false,
      svgAnimated: false,
      scribbleRefs: [
        '0', '1', '2',
        '3', '4', '5',
        '6', '7',
      ]
    }),
    watch: {
      scrollPosition() {
        this.checkAnimIn();
      },
      shouldAnimate(val) {
        if (val) this.checkArtAnim();
      }
    },
    computed: {
      chapterTitleArray() {
        const title = 'read the chapters';
        return title.split('');
      },
      chapterTitle () {
        return Array.from(this.$refs.chapterTitle.children);
      }
    },
    methods: {
      getCharHTML(letter) {
        return letter !== ' ' ? letter : '&nbsp;'
      },
      animate() {
        TweenMax.to(this.$refs.title, 1, { y: 0, opacity: 1, ease: Quint.easeOut });
        TweenMax.to(this.$refs.copy, 1, { y: 0, opacity: 1, ease: Quint.easeOut, delay: .2 });
        TweenMax.to(this.$refs.image, 1, { y: 0, opacity: 1, ease: Quint.easeOut, delay: .4, onComplete: () => {
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
        if (this.animIn && this.shouldAnimate && !this.svgAnimated) {
          this.svgAnimated = true;
          this.animateSvg();
        }
      },
      animateSvg() {
        this.scribbleRefs.map((s, i) => {
          const time = i < 5 ? .75 : 1.25
          const delay = i < 5 ? i * .25 : i * .5
          const onCompleteFunc = i === this.scribbleRefs.length - 1 ? this.animateChapterTitle : null;
          TweenMax.to(this.$refs[`scribble${i}`], time, { drawSVG: '100%', delay, ease: Power1.easeInOut, onComplete: onCompleteFunc });
        })
      },
      animateChapterTitle() {
        TweenMax.staggerFromTo(this.chapterTitle, .3, { y: '-20px', opacity: 0 }, { y: 0, opacity: 1, ease: Quint.easeOut }, .05, () => {
          TweenMax.to(this.$refs.underline, .5, { drawSVG: '100%', ease: Power1.easeInOut });
        });
        
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
          TweenMax.set(this.$refs[`scribble${i}`], { drawSVG: '0' });
        })
      }
    },
    mounted() {    
      this.setBasePositions();
      this.checkAnimIn();
    }
  }
</script>

<style lang="scss">
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
      h1 {
        font-size: 42px;
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
        svg {
          stroke: white;
          stroke-width: 3px;
        }
        span {
          display: inline-block;
        }
      }
      &--left, &--right {
        width: 50%;
        position: absolute;
        top: 50%;
        transform: translateY(-60%);
        flex-basis: 1 1 auto;
      }
      &--left {
        left: 12%;
        z-index: 2;
        text-align: left;
        h1 {
          max-width: 446px;
        }
        p {
          max-width: 420px;
          font-size: 18px;
          line-height: 33px;
        }
      }
      &--right {
        right: 10%;
        .image-container {
          position: relative;
        }
        svg {
          stroke: white;
          position: absolute;
          fill: none;
          
          &.scribble1 {
            width: 120px;
            left: 16%;
            top: 8%;
            stroke-width: 1px;
            transform: rotate(12deg);
            stroke-width: 4px;
          }
          &.scribble2 {
            width: 70px;
            left: 21%;
            top: -1%;
            transform: rotate(0deg);
            stroke-width: 3px;
          }
          &.scribble3 {
            width: 10px;
            left: 55%;
            top: -6%;
            transform: rotate(12deg);
            stroke-width: 4px;
          }
          &.scribble4 {
            width: 80px;
            left: 59%;
            top: -3%;
            transform: rotate(12deg);
            stroke-width: 2px;
          }
          &.scribble5 {
            width: 100px;
            left: 66%;
            top: 8%;
            transform: rotate(12deg);
            stroke-width: 2px;
          }
          &.scribble6 {
            width: 200px;
            left: 32%;
            top: 18%;
            transform: rotate(12deg);
            stroke-width: 4px;
          }
          &.scribble7 {
            width: 150px;
            left: 36%;
            top: 15%;
            transform: rotate(12deg);
            stroke-width: 4px;
          }
          &.scribble8 {
            width: 180px;
            left: 35%;
            top: 18%;
            transform: rotate(12deg);
            stroke-width: 5px;
          }

        }
      }
    }
  }
}
</style>
