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
  const scrollPos = store.state.scrollPosition,
        windowWidth = store.state.windowWidth,
        windowHeight = store.state.windowHeight,
        activeSections = store.state.activeSections,
        titleFinalX = THRESHHOLDS.landingThresh + (windowWidth * 2),
        titleFinalY = titleFinalX + windowHeight + THRESHHOLDS.default,
        aboutFinalY = titleFinalY + windowHeight + THRESHHOLDS.default,
        chapterFinalY = aboutFinalY + (windowHeight / 3.3);


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
      scrollStyles.transform = `translate3d(-${scrollPos - THRESHHOLDS.landingThresh}px, 0, 0) `;
    } else if (scrollPos < titleFinalY) {
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
    }
  }
  if (SECTIONS[section] === SECTIONS.chapters && activeSections.chapters) {
    if (scrollPos > aboutFinalY - windowHeight && scrollPos < chapterFinalY) {
      scrollStyles.transform = `translate3d(0, -${scrollPos - (aboutFinalY - windowHeight)}px, 0)`;
    } else if (scrollPos > aboutFinalY) {
      scrollStyles.transform = `translate3d(0, -${chapterFinalY - (aboutFinalY - windowHeight)}px, 0)`;
    }
  }
  return {
    ...scrollStyles,
    ...baseStyles,
  };
}