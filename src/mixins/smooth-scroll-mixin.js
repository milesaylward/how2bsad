import { mapState, mapMutations } from "vuex";
import { SET_EASED_POSITION, SET_BODY_HEIGHT } from '@/core/mutation-types';

 const body = document.body;
 // and recalculate on resize
 export default {
  data: () => ({
    translationY: {
      previous: 0, 
      current: 0, 
      ease: 0.5,
    },
    animationFrame: null,
   }),
  computed: {
    main() {
      return document.querySelector('#app');
    },
    scrollable() {
      return this.main.querySelector('.scrollable');
    },
    ...mapState([
      'scrollPosition',
      'windowWidth',
      'windowHeight',
      'bodyHeight'
    ]),
  },
  methods: {
    lerp(a, b, n) { 
      return (1 - n) * a + n * b 
    },
    init() {
      this.setSize();
      this.update();
      this.style();
      this.animationFrame = requestAnimationFrame(() => this.render());
    },
    update() {
      this.translationY.current = this.scrollPosition;
    },
    layout() {
      this.setEasedposition(this.translationY.previous);
    },
    startAnimation() {
      this.animationFrame = requestAnimationFrame(() => this.render());
    },
    stopAnimation() {
      cancelAnimationFrame(this.animationFrame);
      this.translationY.previous = 0;
      this.translationY.current = 0;
    },
    setSize() {
      const height = this.scrollable.scrollHeight || this.bodyHeight;
      this.setBodyHeight({ height });
      body.style.height = `${height}px`;
    },
    style() {
      this.main.style.position = 'fixed';
      this.main.style.width = this.main.style.height = '100%';
      this.main.style.top = this.main.style.left = 0;
      this.main.style.overflow = 'hidden';
    },
    initEvents() {
      window.addEventListener('resize', this.setSize);
    },
    render() {
      this.translationY.current = this.scrollPosition;
      this.translationY.previous = this.lerp(this.translationY.previous, this.translationY.current, this.translationY.ease);
      this.layout();
      this.animationFrame = requestAnimationFrame(() => this.render());
    },
    ...mapMutations({
      setEasedposition: SET_EASED_POSITION,
      setBodyHeight: SET_BODY_HEIGHT
    })
  },
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.init();
      }, 1000);      
    })
  },
};