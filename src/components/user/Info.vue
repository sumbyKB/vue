<!-- 个人信息 -->
<template>
  <div class="info">
		<head-top :title="title" v-if="NavBool" ></head-top>
		<van-cell-group class="info-group">
			<van-cell center>
				<span slot="title">头像</span>
				<van-uploader v-for="(images,index) in portrait" :key="index" :after-read="onRead" accept="image/gif, image/jpeg" multiple>
					<img :src="images"  class="info-headpic">
				</van-uploader>
			</van-cell>
			<router-link :to="{path:'info/ModifyUserName'}">
				<van-cell title="用户名" value="张三李四" is-link />
			</router-link>
			<router-link :to="{path:'info/ModifyPhone'}">
				<van-cell title="手机" value="15456456" is-link />
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
			portrait : [require('../../../static/images/user/portrait.png')]
    };
  },

  components: { headTop,footBottom },

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

  methods: {
		onRead(file) {
		  console.log(file)
		},
		onSetting () {
			this.$router.push('setting');
		}
	}
}

</script>
<style scoped lang="less">
@import "../../assets/mixin.less";
.info{position: absolute;top: 50px;left: 0;right: 0;bottom: 0;background-color: #fff;z-index: 12;overflow:auto;
	.van-icon-setting{ color: @colors;}
	&-headpic{border-radius: 100%; width:1.5rem; height:1.5rem;}
}
</style>