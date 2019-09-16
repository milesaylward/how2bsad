import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home.vue';
import Chapter from '@/views/Chapter.vue';
import store from '../store';
import {
  CHAPTER_CONFIG,
  SUB_PAGES,
  SUB_PAGE_ARRAY,
  SECTIONS
} from '@/core/config';
import { 
  SET_ACTIVE_CHAPTER, 
  SET_NEXT_ACTIVE_CHAPTER, 
  SET_SCROLL_POSITION, 
  SET_EASED_POSITION,
  SCROLL_TO_CHAPTER
} from '@/core/mutation-types';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/family',
      name: `${SUB_PAGES.FAMILY}`,
      component: Chapter,
    },
    {
      path: '/love',
      name: `${SUB_PAGES.LOVE}`,
      component: Chapter,
    },
  ]
})

router.beforeEach((to, from, next) => {
  if (to.name !== 'home' && ((store.state.activeChapter && store.state.activeChapter.name !== to.name) || !store.state.activeChapter)) {
    const chapter = CHAPTER_CONFIG.filter(chapter => chapter.name === to.name)[0];
    const chapterIndex = CHAPTER_CONFIG.findIndex(chapter => chapter.name == to.name);
    store.commit(SET_ACTIVE_CHAPTER, chapter);
    if (!store.state.nextChapter) {
      const nextChapter = CHAPTER_CONFIG[(chapterIndex + 1) % CHAPTER_CONFIG.length];
      setTimeout(() => {
        store.commit(SET_NEXT_ACTIVE_CHAPTER, nextChapter);
      }, 1000);
    }
  } else if (to.name !== 'home' && !store.state.nextChapter) {
    const chapterIndex = CHAPTER_CONFIG.findIndex(chapter => chapter.name == to.name);
    const nextChapter = CHAPTER_CONFIG[(chapterIndex + 1) % CHAPTER_CONFIG.length];
  }
  if (to.name === 'home') {
    store.commit(SET_ACTIVE_CHAPTER, null);
    store.commit(SET_NEXT_ACTIVE_CHAPTER, null);
    if (SUB_PAGE_ARRAY.indexOf(from.name) > -1) {
      store.commit(SCROLL_TO_CHAPTER, true);
    }
  } else {
    document.documentElement.scrollTop = 0;
    store.commit(SET_SCROLL_POSITION, { position: 0 });
    store.commit(SET_EASED_POSITION, 0);
  }
  next();
});

export default router;
