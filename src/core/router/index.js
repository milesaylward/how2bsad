import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home.vue';
import Family from '@/views/Family.vue';
import store from '../store';
import { CHAPTER_CONFIG } from '@/core/config';
import { SET_ACTIVE_CHAPTER } from '@/core/mutation-types';

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
      name: 'family',
      component: Family,
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.name !== 'home' && !store.state.activeChapter) {
    const chapter = CHAPTER_CONFIG.filter(chapter => chapter.name === to.name)[0];
    store.commit(SET_ACTIVE_CHAPTER, chapter);
  }
  if (to.name === 'home') {
    store.commit(SET_ACTIVE_CHAPTER, null);
  }
  next();
});

export default router;
