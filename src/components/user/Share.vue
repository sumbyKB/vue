<template>
    <div class="share">
			<van-list v-model="loading" :finished="finished"  @load="onLoad" >
				<van-cell v-for="item in list" :key="item" :title="item + ''" />
			</van-list>
			<p class="noMore" v-if="finished">没有更多内容！</p>
    </div>
</template>
 
<script>
export default {
  data() {
    return {
      list: [],
      loading: false,
      finished: false,
    };
  },
	 mounted() {
			this.$nextTick(() => {

			});
		},
  methods: {
    onLoad() {
      setTimeout(() => {
        for (let i = 0; i < 30; i++) {
          this.list.push(this.list.length + 1);
        }
        this.loading = false;

        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 500);
    },

  }
}
</script>
 
 
<style scoped lang="less">
@import "../../assets/mixin.less";
.share{position: absolute;top: 0px;left: 0;right: 0;bottom: 0;background-color: #fff;z-index: 12;overflow:auto;
	
}
.noMore{ text-align: center; font-size: @rem_12; margin: .5rem 0;}
</style>