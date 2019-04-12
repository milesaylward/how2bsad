<template>
  <div class="screen screen-landing" :style="sectionStyles">
    <h1>landing page</h1>
  </div>
</template>

<script>
import sectionMixin from './../mixins/section-mixin';
import { SECTIONS } from '../core/config';
export default {
  name: 'landing',
  mixins: [sectionMixin],
  data: () => ({
    sectionName: SECTIONS.landing,
  }),
}
</script>

<style lang="scss">
.screen {
  text-align: center;
  display: flex;
  justify-content: center; 
  align-items: center;
  h1 {
    margin: 0;
  }
  &-landing {  
    z-index: 5;
  }
}
</style>
