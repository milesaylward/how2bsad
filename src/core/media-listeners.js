import Vue from 'vue';
import fastdom from 'fastdom';
import store from './store';
import router from './router';
import * as mutationTypes from './mutation-types';
import { THRESHHOLDS, MEDIA_QUERIES } from './config';
import { ifError } from 'assert';


const mediaListeners = new Vue({
  data: () => ({
    isScrolling: false,
    timeouts: [],
    mql: {
      lg: null,
      md: null,
      sm: null,
      xs: null,
    },
  }),
  computed: {
    windowWidth() {
      return store.state.windowWidth
    },
    currentRoute() {
      return router.currentRoute;
    },
    windowHeight() {
      return store.state.windowHeight
    },
    sectionsSizes() {
      const titleSize = this.windowWidth * 1.5 > 900 ? this.windowWidth * 1.5 : 900;
      const aboutSize = this.windowHeight > 850 ? this.windowHeight : 850;
      const chaptersSize = this.windowHeight * 2 > 1750 ? this.windowHeight * 2 : 1750;
      return {
        landing: this.windowWidth,
        title: titleSize,
        about: aboutSize,
        chapters: chaptersSize, 
        thresh: THRESHHOLDS.default * 3,
      }
    },
  },
  created() {
    this.mql.lg = window.matchMedia(MEDIA_QUERIES.lg);
    this.mql.md = window.matchMedia(MEDIA_QUERIES.md);
    this.mql.sm = window.matchMedia(MEDIA_QUERIES.sm);
    this.mql.xs = window.matchMedia(MEDIA_QUERIES.xs);

    this.mql.lg.addListener(this.setMediaLarge);
    this.mql.md.addListener(this.setMediaMed);
    this.mql.sm.addListener(this.setMediaSmall);
    this.mql.xs.addListener(this.setMediaXSmall);

    this.setMediaLarge(this.mql.lg);
    this.setMediaMed(this.mql.md);
    this.setMediaSmall(this.mql.sm);
    this.setMediaXSmall(this.mql.xs);

    window.addEventListener('resize', this.handleResize);
    window.addEventListener('scroll', this.handleScroll);
    this.handleResize();
    this.setBodyHeight();
  },
  methods: {
    setMediaLarge({ matches }) {
      store.commit(mutationTypes.MEDIA_SET_LARGE, { matches });
    },
    setMediaMed({ matches }) {
      store.commit(mutationTypes.MEDIA_SET_MED, { matches });
    },
    setMediaSmall({ matches }) {
      store.commit(mutationTypes.MEDIA_SET_SMALL, { matches });
    },
    setMediaXSmall({ matches }) {
      store.commit(mutationTypes.MEDIA_SET_XSMALL, { matches });
    },
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
        this.setBodyHeight();
      });
    },
    setBodyHeight() {
      let height = 0;
      Object.keys(this.sectionsSizes).map((key) => {
        height += this.sectionsSizes[key];
      });
      if (this.windowWidth < 1390 && this.windowWidth > 1239 && this.windowHeight > 799) {
        height = 7550;
      }
      if (this.windowWidth < 1239 && this.windowHeight > 700) {
        height = height + 100;
      }
      if (this.windowWidth < 1050 && this.windowHeight > 700) {
        height = height + 200;
      }
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
  }
});

export default mediaListeners;