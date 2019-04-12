import Vue from 'vue';
import fastdom from 'fastdom';
import store from './store';
import * as mutationTypes from './mutation-types';

const mediaListeners = new Vue({
  data: () => ({
    isScrolling: false,
  }),
  created() {
    window.addEventListener('resize', this.handleResize);
    window.addEventListener('scroll', this.handleScroll);
    this.handleResize();
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
          width: innerWidth,
          height: innerHeight,
        });
      });
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
    }
  },
});

export default mediaListeners;