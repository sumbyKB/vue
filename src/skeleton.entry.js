import Vue from 'vue'
import Skeleton from './Skeleton.vue'

console.log('Skeleton...')

export default new Vue({
  components: {
    Skeleton
  },
  template: `
  <div>
      <Skeleton id="skeletonhome" style="display:none;"></Skeleton>
  </div>
  `
})
