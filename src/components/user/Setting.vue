<!-- 设置 -->
<template>
  <div class="setting">
		<head-top :title="title" v-if="NavBool" ></head-top>
		<van-cell-group class="setting-group">
			<router-link :to="{path:'info/ModifyPhone'}">
				<van-cell title="钱包支付密码设置" is-link />
			</router-link>
			<router-link :to="{path:'about'}">
				<van-cell title="关于" is-link />
			</router-link>
			<router-link :to="{path:'suggest'}">
				<van-cell title="意见反馈" is-link />
			</router-link>
		</van-cell-group>
  	<transition name="router-slid" mode="in-out">
  			<router-view></router-view>
  	</transition>
  </div>
</template>

<script>
import headTop from '@/components/common/Header'
import footBottom from '@/components/common/Footer'
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
    };
  },

  components: { headTop, footBottom },

  computed: {
		...mapGetters({
		title: 'getTitle',
		NavBool: 'getNavBool',
		BarBool: 'getBarBool'
		})
	},

  mounted() {
		this.$nextTick(() => { 

		})
	},

  methods: {}
}

</script>
<style scoped lang="less">
.setting{position: absolute;top: 50px;left: 0;right: 0;bottom: 0;background-color: #fff;z-index: 12;overflow:auto;}
</style>