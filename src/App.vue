<template>
<div id="app">
  <div class="app-shell">
      <div class="app-view-wrapper" >
        <transition :name="'vux-pop-' + (direction === 'forward' ? 'in' : 'out')" >
          <keep-alive>
            <router-view v-if="$route.meta.keepAlive" class="router-view"></router-view>
          </keep-alive>
        </transition>
        <transition :name="'vux-pop-' + (direction === 'forward' ? 'in' : 'out')" >
          <router-view v-if="!$route.meta.keepAlive" class="router-view"></router-view>
        </transition>
        
      </div>
  </div>
</div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
    
    };
  },
  created(){

  },
  components: {
 
  },

  computed: {
    ...mapGetters({
	  direction: 'getDirection'
    })
  },
  mounted(){},
  methods: {
 
  }
}
</script>

<style scoped >

footer{position: fixed;z-index: 9999;bottom: 0;left: 0;right: 0;}
.app-shell{ position: absolute;top: 0;right: 0;bottom: 0;left: 0;width: 100%;height: 100%;z-index: 1; }
.app-view-wrapper{position: relative;overflow: hidden;width: 100%;height: 100%;max-width: 750px;margin: 0 auto;}
/* .vux-pop-out-enter-active,
.vux-pop-out-leave-active,
.vux-pop-in-enter-active,
.vux-pop-in-leave-active {
  will-change: transform;
  transition: all 400ms;
  width:100%;
  height: 100%;
  top: 0;
  position: absolute;
  backface-visibility: hidden;
  perspective: 1000;
}
.vux-pop-out-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
.vux-pop-out-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.vux-pop-in-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.vux-pop-in-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
} */

</style>

