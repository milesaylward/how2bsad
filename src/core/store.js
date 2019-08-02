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
    elementHovered: false,
    heroAnimated: false,
    activeChapter: null,
    breakpoints: {
      mediaLg: false,
      mediaMd: false,
      mediaSm: false,
      mediaXs: false,
    },
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
    [types.MEDIA_SET_LARGE](state, { matches }) {
      state.breakpoints.mediaLg = matches;
    },
    [types.MEDIA_SET_MED](state, { matches }) {
      state.breakpoints.mediaMd = matches;
    },
    [types.MEDIA_SET_SMALL](state, { matches }) {
      state.breakpoints.mediaSm = matches;
    },
    [types.MEDIA_SET_XSMALL](state, { matches }) {
      state.breakpoints.mediaXs = matches;
    },
    [types.SET_ACTIVE_CHAPTER](state, payload) {
      state.activeChapter = payload;
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
    [types.SET_ELEMENT_HOVERED](state, bool) {
      state.elementHovered = bool;
    },
    [types.SET_HERO_ANIMATED](state, bool) {
      state.heroAnimated = bool;
    }
  },
  actions: {
    setElementHovered({ commit }, bool) {
      commit(types.SET_ELEMENT_HOVERED, bool);
    }
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
