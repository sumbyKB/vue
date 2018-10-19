<template>
	<div class="about">
		<head-top :title="title" v-if="NavBool" ></head-top>
		<img src="../../../static/images/user/portrait.png" alt="" class="about-logo">
		<h2 class="about-number">V1.0</h2>
		<h3 class="about-title">用户协议</h3>
		<p class="about-txt">用户协议内容用户协议内容用户协议内容用户协议用户协议内容用户协议内容用户协议内容用户协议内容用户协议内容用户协议内容</p>
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
			remnant : 0,
			desc : '',
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
.about{position: absolute;top: 50px;left: 0;right: 0;bottom: 0;background-color: #fff;z-index: 12;overflow:auto;
	&-logo{ display: block; margin: auto; width: 2rem; margin-top: .5rem;}
	&-number{ font-weight: 500; text-align: center;}
	&-title{ font-weight: 500; text-align: center; font-size: 16px;}
	&-txt{ padding: .3rem; line-height: 24px;}
}
</style>
