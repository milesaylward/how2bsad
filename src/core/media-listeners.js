import Vue from 'vue';
import fastdom from 'fastdom';
import store from './store';
import * as mutationTypes from './mutation-types';
import { THRESHHOLDS } from './config';

const mediaListeners = new Vue({
  data: () => ({
    isScrolling: false,
    timeouts: [],
  }),
  computed: {
    windowWidth() {
      return store.state.windowWidth
    },
    windowHeight() {
      return store.state.windowHeight
    },
    sectionsSizes() {
      return {
        landing: this.windowWidth,
        title: this.windowWidth * 2,
        about: this.windowHeight,
        chapters: this.windowHeight * 2.2, 
        thresh: THRESHHOLDS.default * 3,
      }
    },
  },
  created() {
    window.addEventListener('resize', this.handleResize);
    window.addEventListener('scroll', this.handleScroll);
    this.handleResize();
    this.setBodyHeight();
  },
  methods: {
    handleResize() {
      let innerWidth = 0;
      let innerHeight = 0;

      fastdom.measure(() => {
        ({ innerHeight, innerWidth } = window);
      });

      fastdom.mutate(() => {
        store.commit(mutationTypes.SET_WINDOW_SIZE, {
          width: innerWidth > 1024 ? innerWidth : 1024,
          height: innerHeight,
        });
        this.setBodyHeight();
      });
    },
    setBodyHeight() {
      let height = 0;
      Object.keys(this.sectionsSizes).map((key) => {
        height += this.sectionsSizes[key];
      });
      document.body.style.height = `${height}px`;
      store.commit(mutationTypes.SET_BODY_HEIGHT, { height });
    },
    handleScroll(e) {
      let scrollY, 
          pageYOffset;
      window.clearTimeout( this.isScrolling );
      this.isScrolling = setTimeout(function() {
        store.commit(mutationTypes.SET_USER_SCROLLING, false);
      }, 66);
      fastdom.measure(() => {
        ({ scrollY, pageYOffset } = window);
      });
      
      fastdom.mutate(() => {
        store.commit(mutationTypes.SET_USER_SCROLLING, true);
        store.commit(mutationTypes.SET_SCROLL_POSITION, {
          position: scrollY || pageYOffset,
        });
      });
      if ((window.innerHeight + Math.ceil(window.pageYOffset)) >= document.body.offsetHeight) {
        store.commit(mutationTypes.SET_AT_PAGE_BOTTOM, true);
      } else {
        store.commit(mutationTypes.SET_AT_PAGE_BOTTOM, false);
      }
    },
  },
});

export default mediaListeners;