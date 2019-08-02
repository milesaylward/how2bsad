import { mapActions } from 'vuex';

export default ({
  methods: {
    elementHover() { this.setElementHovered(true) },
    elementLeave() { this.setElementHovered(false) },
    ...mapActions(['setElementHovered'])
  }
});