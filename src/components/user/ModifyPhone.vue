<!-- 更换手机 -->
<template>
	<div class="UserPhone">
		<head-top :title="title" v-if="NavBool" ></head-top>
		<van-cell-group>
			<van-field v-model="username" clearable placeholder="输入原手机号码" type="tel" >
				<van-button slot="button" size="small" type="primary" @click="show=true">获取验证码</van-button>
			</van-field>
			<van-field v-model="code" clearable placeholder="输入验证码" />
		</van-cell-group>
		<div class="UserPhone-btn"><van-button size="normal">确定</van-button></div>
		<!--验证码弹窗开始-->
		<van-dialog v-model="show" show-cancel-button :before-close="beforeClose" >
			<van-field center clearable placeholder="输入图形验证码" >
				<van-button slot="button" size="small" type="primary">获取验证码</van-button>
			</van-field>
		</van-dialog>
		<!--验证码弹窗结束-->
	</div>
</template>

<script>
import headTop from '@/components/common/Header'
import footBottom from '@/components/common/Footer'
import { mapGetters } from 'vuex'	
export default {
  data () {
    return {
			show: false,
			username:'',
			code:'',
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
		 beforeClose(action, done) {
      if (action === 'confirm') {
        setTimeout(done, 1000);
      } else {
        done();
      }
    }
  }
}

</script>
<style scoped lang="less">
@import "../..//assets/mixin.less";
.UserPhone{position: absolute;top: 50px;left: 0;right: 0;bottom: 0;background-color: #fff;z-index: 12;overflow:auto;
	&-btn{ margin: auto; text-align: center; }
}
</style>