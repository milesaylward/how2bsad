import { TweenMax, Power4, ScrollToPlugin } from 'gsap/all';
const scrollTo = ScrollToPlugin
import store from './store';
import * as types from './mutation-types';
import { 
  THRESHHOLDS,
  SECTIONS
} from './config';



function setInactiveSection(section) {
  store.commit(types.SET_INACTIVE_SECTION, { section });
}
function setActiveSection(section) {
  store.commit(types.SET_ACTIVE_SECTION, { section });
}
function setAnimateSection(section) {
  store.commit(types.SET_ANIMATE_SECTION, { section });
}

export function scrollHelper({ baseStyles, section }) {
const titleSize = store.state.windowWidth * 1.6 > 900 ? store.state.windowWidth * 1.6 : 900;
const aboutSize = store.state.windowHeight > 850 ? store.state.windowHeight : 850;
const chapterSize = store.state.windowHeight * 2 > 1750 ? (store.state.windowHeight * 2) : 1750;
const scrollPos = store.state.easedPosition,
      windowWidth = store.state.windowWidth,
      windowHeight = store.state.windowHeight,
      activeSections = store.state.activeSections,
      titleFinalX = THRESHHOLDS.landingThresh + (titleSize),
      titleFinalY = titleFinalX + windowHeight + THRESHHOLDS.default,
      aboutFinalY = titleFinalY + aboutSize + THRESHHOLDS.default,
      chapterFinalY = titleFinalY + aboutSize + chapterSize;

  if (scrollPos < 1) {
    return {
      ...baseStyles,
    };
  }
  let scrollStyles = {};
  
  if (SECTIONS[section] === SECTIONS.landing) {
    if (scrollPos > THRESHHOLDS.landingThresh && activeSections[section]) {
      if (!activeSections[SECTIONS.title]) setActiveSection(SECTIONS.title);
      if (scrollPos - THRESHHOLDS.landingThresh > windowWidth) {
        scrollStyles.transform = `translate3d(-${windowWidth}px, 0, 0) `;
      } else {
        scrollStyles.transform = `translate3d(-${scrollPos - THRESHHOLDS.landingThresh}px, 0, 0) `;
      }
    }
  } 
  
  if (SECTIONS[section] === SECTIONS.title && activeSections.title) {
    if (scrollPos < titleFinalX) {
      if (scrollPos > THRESHHOLDS.landingThresh) {
        scrollStyles.transform = `translate3d(-${scrollPos - THRESHHOLDS.landingThresh}px, 0, 0) `;
      }
    } else if (scrollPos < titleFinalY || scrollPos > titleFinalX + THRESHHOLDS.default && !activeSections.about) {
      if (scrollPos < titleFinalX + THRESHHOLDS.default) {
        scrollStyles.transform = `translate3d(-${titleFinalX - THRESHHOLDS.landingThresh}px, 0, 0) `;
      } else {
        if (!activeSections[SECTIONS.about]) setActiveSection(SECTIONS.about);
        scrollStyles.transform = `translate3d(-${titleFinalX - THRESHHOLDS.landingThresh}px, -${scrollPos - (titleFinalX + THRESHHOLDS.default)}px, 0) `;
      }
      
    }
  }

  if (SECTIONS[section] === SECTIONS.about && activeSections.about) {
    if (scrollPos < aboutFinalY && scrollPos > titleFinalX) {
      if (scrollPos > titleFinalY) {
        if (!store.state.animateSection[section]) setAnimateSection(section);
        scrollStyles.transform = `translate3d(0, -${windowHeight}px, 0)`;
        if (scrollPos > titleFinalY + THRESHHOLDS.default) {
          scrollStyles.transform = `translate3d(0, -${scrollPos - (titleFinalX + (THRESHHOLDS.default * 2))}px, 0)`;
        }
      } else {
        if (!activeSections[SECTIONS.chapters]) setActiveSection(SECTIONS.chapters);
        scrollStyles.transform = `translate3d(0, -${scrollPos - (titleFinalX + THRESHHOLDS.default)}px, 0)`;
      }
    } else {
      if (!activeSections[SECTIONS.chapters]) setActiveSection(SECTIONS.chapters);
    }
  }

  if (SECTIONS[section] === SECTIONS.chapters && activeSections.chapters) {
    if (scrollPos > (aboutFinalY - windowHeight) && scrollPos < chapterFinalY) {
      scrollStyles.transform = `translate3d(0, -${scrollPos - (aboutFinalY - windowHeight)}px, 0)`;
    } else if (scrollPos > aboutFinalY) {
      scrollStyles.transform = `translate3d(0, -${chapterFinalY - (aboutFinalY - windowHeight)}px, 0)`;
    }
  } else if (scrollPos > aboutFinalY - windowHeight && scrollPos < chapterFinalY && !activeSections.chapters) setActiveSection(SECTIONS.chapters);
  return {
    ...scrollStyles,
    ...baseStyles,
  };
};

export function scrollToSection({ subsection, fast = false, cb, offset = 0 }) {
  const element = document.querySelector(`[data-subsection=${subsection}]`);
  const titleSize = store.state.windowWidth * 1.6 > 900 ? store.state.windowWidth * 1.6 : 900;
  const scrollPos = store.state.scrollPosition,
        windowHeight = store.state.windowHeight,
        titleFinalX = THRESHHOLDS.landingThresh + (titleSize),
        titleFinalY = titleFinalX + windowHeight + THRESHHOLDS.default;
  if (!element) return;
  let innerOffset = offset;
  if (subsection === 'chapters' && !(scrollPos >  titleFinalY + THRESHHOLDS.default)) {
    innerOffset = (titleFinalY + THRESHHOLDS.default) - scrollPos;
  }
  const finalY = (element.getBoundingClientRect().top + (window.scrollY || window.pageYOffset));
  TweenMax.killTweensOf(window);
  TweenMax.to(window, fast ? 0 : 1, {
    scrollTo: { x: 0, y: finalY + innerOffset, autoKill: false },
    ease: Power4.easeOut,
    onComplete: () => {
      if (cb) cb(finalY + innerOffset);
    },
  });
};
