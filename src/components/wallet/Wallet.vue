<!-- 钱包 -->
<template>
  <div class="wallet">
		<head-top :title="title" v-if="NavBool" ></head-top>
		<div class="wallet-msg">
				<h2>100.00</h2>
				<p>账户余额(元)</p>
		</div>
		<div class="title"><span>我要充值</span></div>
		<van-row class="wallet-money" >
			<van-col span="12" v-for="(item,index) in moneyList" :key="index"><span  @click="addClass(index)" :class="{ active : index == nowIndex}">{{item}}</span></van-col>
		</van-row>
	
		<div class="title"><span>充值方式</span></div>
		<van-radio-group v-model="radio">
			<van-cell-group>
				<van-cell title="支付宝" clickable @click="radio = '1'">
					<van-radio name="1" />
				</van-cell>
				<van-cell title="微信" clickable @click="radio = '2'">
					<van-radio name="2" />
				</van-cell>
			</van-cell-group>
		</van-radio-group>
		<div class="gray-bg">
				<div class="wallet-recharge"><van-button size="normal" @click="moneyShow=true">充值</van-button></div>
				<div class="wallet-tips">
					<dl>
						<dt>充值说明</dt>
						<dd>1、钱包暂不支持提现</dd>
						<dd>2、解释权归七子优生活所有</dd>
					</dl>
				</div>
		</div>
		<!--首次使用钱包弹窗开始-->
		<van-dialog v-model="moneyShow" show-cancel-button :before-close="beforeClose">
			<div class="wallet-txt">
				<p>首次使用钱包需要设置支付密码！</p>
			</div>
		</van-dialog>
		<!--首次使用钱包弹窗结束-->
		
		<!--钱包支付密码设置弹窗开始-->
		<van-dialog v-model="phoneShow" :before-close="beforeClose" confirm-button-text="验证">
			<van-field center clearable placeholder="输入手机号码" >
				<van-button slot="button" size="small" type="primary">获取验证码</van-button>
			</van-field>
			<van-field placeholder="输入验证码"/>
		</van-dialog>
		<!--钱包支付密码设置弹窗结束-->
		
		<!--设置支付密码设置弹窗开始-->
		<van-dialog v-model="pwdShow" :before-close="beforeClose">
				<!-- 密码输入框 --> 
				<van-password-input  @focus="showKeyboard = true" :value="value" />
				<!-- <van-field type="text"  :value="value" @focus="showKeyboard = true"/> -->
				<div class="wallet-pwdIcon">
					<van-icon name="password-view" />
					<van-icon name="password-not-view" v-if="false" />
				</div>
		</van-dialog>
		<!-- 数字键盘 -->
		<van-number-keyboard :show="showKeyboard" @input="onInput" @delete="onDelete" @blur="showKeyboard = false" />
		<!--设置支付密码设置弹窗结束-->
		
		<!--充值成功弹窗开始-->
		<van-dialog v-model="walletShow" :before-close="beforeClose" >
			<div class="wallet-icon"><van-icon name="success" /></div>
			<div class="wallet-txt">
				<b>充值成功</b>
				<h4>&yen;100</h4>
			</div>
		</van-dialog>
		<!--充值成功弹窗结束-->
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
		radio: '1',
		value: '12',
		showKeyboard: false,
		moneyShow : false,
		phoneShow : false,
		pwdShow : false,
		walletShow : false,
		active : false,
		nowIndex : 0,
		moneyList : [],
		error:false,
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
  created () {
	this.$axios.post('http://localhost:3000/rest/user',{}).then( res => {
		this.moneyList = res.data.moneyList;
	}).catch( error => {})
  },
  mounted() {
		this.$nextTick(() => {
		})
	},
  methods: {
		//点击出来密码输入弹窗
		beforeClose(action, done) {
			if (action === 'confirm') {
				this.phoneShow = true ;
				setTimeout(done, 1000);
			} else {
				done();
			}
		},
		//输入密码
		onInput(key) {
		  this.value = (this.value + key).slice(0, 6);
		},
		//删除密码
		onDelete() {
		  this.value = this.value.slice(0, this.value.length - 1);
		},
		//点击导航账单跳转到账单列表页
		walletBill () {
			this.$router.push('wallet/walletBill')
		},
		//点击切换充值数值高亮状态
		addClass (index) {
			this.nowIndex = index;
		},
	}
}

</script>
<style scoped lang="less">
@import "../../assets/mixin.less";
h2{ font-size: 1rem; margin: .3rem 0;}
.wallet{position: absolute;top: 50px;left: 0;right: 0;bottom: 0;background-color: #fff;z-index: 12;overflow:auto;
	&-msg{background:@grayBg; padding:.8rem; margin-bottom:.3rem; display: block;}
	.title{ padding:.3rem .6rem;}
	&-money{
		.van-col{ text-align: center;
			span{background:@grayBg; display: block; width: 75%; margin:.1rem auto; padding: .3rem 0;}
			.active{background: @colors; color: #fff;}
		}
	}
	&-recharge{ margin: .3rem auto; text-align: center;}
	&-tips{ padding:.5rem; line-height: 24px;}
	.gray-bg{background:@grayBg; padding: .3rem 0 0 0;}
	&-icon{ text-align: center; margin: .3rem 0; font-size:@rem_12; color:@colorDefault;}
	&-txt{ text-align: center;
		p{ padding: .8rem; text-align: center;}
		b{ font-weight: 500;}
		h4{ color:@colors;}
	}
	.van-number-keyboard{ z-index: 2004!important;}
	&-pwdIcon{ text-align: right; padding-right: .3rem;}
	.errorPic{ width: 100%;  margin: auto;}
}
</style>