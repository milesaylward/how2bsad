import { mapState, mapGetters } from 'vuex';
import { SECTIONS, THRESHHOLDS } from './../core/config';
import { scrollHelper, scrollToSection } from './../core/utils';

export default {
  data: () => ({
    widthAdjustment: 1,
    heightAdjustment: 1,
    sectionName: null,
    thresholds: THRESHHOLDS,
    hasMinWidth: false,
    minWidth: 0,
    hasMinHeight: false,
    minHeight: 0,
  }),
  computed: {
    ...mapState([
      'windowWidth', 'windowHeight', 
      'isScrolling', 'scrollPosition',
      'animateSection', 'scrollToChapter'
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
      let width = this.windowWidth * this.widthAdjustment;
      let height = this.windowHeight * this.heightAdjustment;
      if (this.hasMinWidth && width < this.minWidth) {
        width = this.minWidth;
      }
      if (this.hasMinHeight && height < this.minHeight) {
        height = this.minHeight
      }
      return {
        width: `${width}px`,
        height: `${height}px`,
        left: `${this.defaultPosition.left}px`,
        top: `${this.defaultPosition.top}px`,
      }
    },
    sectionStyles() {
      return scrollHelper({ section: this.sectionName, baseStyles: this.baseStyles });
    }
  },
  methods: {
    scrollToSection(params) {
      scrollToSection(params);
    }
  },
  mounted() {
    scrollHelper({ section: this.sectionName, baseStyles: this.baseStyles });
  }
}