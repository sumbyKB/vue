<template>
  <div class="my">
		<head-top :title="title" v-if="NavBool"></head-top>
		<router-link :to="{path:'user/info'}" class="my-msg">
			<van-row>
				<van-col span="7">
					<img :src="portrait" class="headpic">
				</van-col>
				<van-col span="16" class="headtxt">
					<div v-if="!loginMessage">
						<span>立即登录</span>
						<p>登录后可享受更多优惠权限</p>
					</div>
					<div v-if="loginMessage">
						<span>账户名</span>
						<p>手机号码</p>
					</div>
				</van-col>
				<van-col span="1"><van-icon name="arrow " class="headicon"/></van-col>
			</van-row>
		</router-link>
		<van-row class="my-links">
			<router-link :to="{path:'order'}">
				<van-col span="6">
					<van-icon name="pending-payment" />
					<span>全部订单</span>
				</van-col>
			</router-link>
			<router-link :to="{}">
				<van-col span="6">
					<van-icon name="pending-payment"/>
					<span>待付款</span>
				</van-col>
			</router-link>
			<router-link :to="{}">
				<van-col span="6">
					<van-icon name="pending-payment" />
					<span>待收货</span>
				</van-col>
			</router-link>
			<router-link :to="{}">
				<van-col span="6">
					<van-icon name="pending-payment" />
					<span>售后订单</span>
				</van-col>
			</router-link>
		</van-row>
		<div class="hr"></div>
		<van-row class="my-links">
			<router-link :to="{path:'wallet'}">
				<van-col span="6">
					<van-icon name="pending-payment" />
					<span>钱包</span>
				</van-col>
			</router-link>
			<router-link :to="{path:'user/packet'}">
				<van-col span="6">
					<van-icon name="pending-payment" />
					<span>红包</span>
				</van-col>
			</router-link>
			<router-link :to="{path:'coupon'}">
				<van-col span="6">
					<van-icon name="pending-payment"/>
					<span>优惠券</span>
				</van-col>
			</router-link>
			<router-link :to="{path:'user/confirmOrder'}">
				<van-col span="6">
					<van-icon name="pending-payment"/>
					<span>收货地址</span>
				</van-col>
			</router-link>
			<router-link :to="{path:'user/service'}">
				<van-col span="6">
					<van-icon name="pending-payment"/>
					<span>联系客服</span>
				</van-col>
			</router-link>
			<router-link :to="{path:'user/suggest'}">
				<van-col span="6">
					<van-icon name="pending-payment"/>
					<span>建议反馈</span>
				</van-col>
			</router-link>
			<router-link :to="{path:'user/share'}">
				<van-col span="6">
					<van-icon name="pending-payment"/>
					<span>分享</span>
				</van-col>
			</router-link>
		</van-row>
    <foot-bottom v-if="BarBool"></foot-bottom>
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
	props : {

	},
  data () {
    return {
			loginMessage : false,
			portrait : [require('../../../static/images/user/portrait.png')],
    };
  },

  components: { headTop, footBottom },

  computed: {
		...mapGetters({
		title: 'getTitle',
		NavBool: 'getNavBool',
		BarBool: 'getBarBool',
		})
	},

  mounted() {
		this.$nextTick(() => { 
		})
	},

  methods: {
		onSetting () {
				this.$router.push('my/setting')
		}
	}
}

</script>
<style scoped lang="less">
@import "../../assets/mixin.less";
// .router-slid-enter-active, .router-slid-leave-active {transition: all .4s;}
// .router-slid-enter, .router-slid-leave-active {transform: translate3d(2rem, 0, 0);opacity: 0;}

.my{ position: absolute; top: 50px;left: 0;right: 0;bottom:50px;background-color: #fff;z-index: 12;overflow: auto;
	.van-icon-setting{ color: @colors;}
	.hr{ height: 5px; background: @grayBg; width: 100%;}
	&-msg{ background: @grayBg; padding:.8rem;display: block; position: relative;
		.headpic{ border-radius: 100%; width: 2rem; height: 2rem;}
		.headtxt{ color:@colorDefault; padding: .3rem 0;
			span{ margin-bottom: .3rem; display: block;}
		}
		.headicon{ position: absolute; top: 50%; transform: translateY(-50%); color: @colorDefault;}
	}
	&-links { font-size:@rem_12;text-align: center; padding: .3rem 0;
			a{ color: @colorDefault;
				.van-icon{display: block;font-size: @rem_24;padding:.5rem 0;}
			}
	}
	&-foot{
		a{ color:@colorDefault;
			.van-icon{ display: block;font-size:  @rem_16; text-align: center; margin-bottom: .1rem;}
		}
	}
}
</style>