<!--  -->
<template>
    <van-button @click="showImagePreview">{{  }}</van-button>
</template>

<script>
import { ImagePreview } from 'vant'
const images = [
  'https://img.yzcdn.cn/public_files/2017/09/05/3bd347e44233a868c99cf0fe560232be.jpg',
  'https://img.yzcdn.cn/public_files/2017/09/05/c0dab461920687911536621b345a0bc9.jpg',
  'https://img.yzcdn.cn/public_files/2017/09/05/4e3ea0898b1c2c416eec8c11c5360833.jpg',
  'https://img.yzcdn.cn/public_files/2017/09/05/fd08f07665ed67d50e11b32a21ce0682.jpg'
]
export default {
  data () {
    return {
    };
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {
    showImagePreview(position, timer) {
        const instance = ImagePreview({
          images,
          startPosition: typeof position === 'number' ? position : 0
        });
        if (timer) {
          setTimeout(() => {
            instance.close();
          }, timer);
        }
      }
  }
}

</script>
<style>
</style>