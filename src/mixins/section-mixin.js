import { mapState, mapGetters } from 'vuex';
import { SECTIONS, THRESHHOLDS } from './../core/config';
import { scrollHelper } from './../core/utils';

export default {
  data: () => ({
    widthAdjustment: 1,
    heightAdjustment: 1,
    sectionName: null,
    thresholds: THRESHHOLDS
  }),
  computed: {
    ...mapState([
      'windowWidth', 'windowHeight', 
      'isScrolling', 'scrollPosition',
      'animateSection'
    ]),
    ...mapGetters(['sectionActive']),
    shouldAnimate() {
      return this.animateSection[this.sectionName];
    },
    defaultPosition() {
      switch (this.sectionName) {
        case SECTIONS.title:
          return {
            left: this.windowWidth,
            top: 0,
          }
        case SECTIONS.about:
          return {
            left: 0,
            top: this.windowHeight,
          }
        case SECTIONS.chapters:
          return {
            left: 0,
            top: this.windowHeight,
          }
        default:
          return {
            left: 0,
            top: 0
          };
      }
      
    },
    baseStyles() {
      return {
        width: `${this.windowWidth * this.widthAdjustment}px`,
        height: `${this.windowHeight * this.heightAdjustment}px`,
        left: `${this.defaultPosition.left}px`,
        top: `${this.defaultPosition.top}px`,
      }
    },
    sectionStyles() {
      return scrollHelper({ section: this.sectionName, baseStyles: this.baseStyles });
    }
  }, 
  mounted() {
    scrollHelper({ section: this.sectionName, baseStyles: this.baseStyles });
  }
}