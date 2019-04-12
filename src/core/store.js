import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './mutation-types';
import { SECTIONS } from './config';


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    windowHeight: null,
    windowWidth: null,
    bodyHeight: 0,
    scrollPosition: 0,
    atPageBottom: false,
    isScrolling: false,
    animateSection: {
      about: false,
      chapters: false,
    },
    activeSections: {
      [SECTIONS.landing]: true,
      [SECTIONS.title]: false,
      [SECTIONS.about]: false,
      [SECTIONS.chapters]: false,
    }
  },
  mutations: {
    [types.SET_WINDOW_SIZE](state, { width, height }) {
      state.windowHeight = height;
      state.windowWidth = width;
    },
    [types.SET_SCROLL_POSITION](state, { position }) {
      state.scrollPosition = position;
    },
    [types.SET_INACTIVE_SECTION](state, { section }) {
      state.activeSections[section] = false;
    },
    [types.SET_ACTIVE_SECTION](state, { section }) {
      state.activeSections[section] = true;
    },
    [types.SET_BODY_HEIGHT](state, { height }) {
      state.bodyHeight = height;
    },
    [types.SET_AT_PAGE_BOTTOM](state, atBottom) {
      state.atPageBottom = atBottom;
    },
    [types.SET_USER_SCROLLING](state, scrolling) {
      state.isScrolling = scrolling;
    },
    [types.SET_ANIMATE_SECTION](state, { section }) {
      state.animateSection[section] = true;
    },
  },
  getters: {
    containerStyle(state) {
      return { width: `${state.windowWidth}px`, height: `${state.windowHeight}px` };
    },
    sectionActive: (state) => (section) => {
      return state.activeSections[section];
    },
  }
});
