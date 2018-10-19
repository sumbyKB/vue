<!--优惠券商品-->
<template>
  <div class="couponGood">
		<head-top :title="title" v-if="NavBool" ></head-top>
		<h4 class="couponGood-tle">限时促销：以下商品可以使用满100减30的优惠券</h4>
		<van-list  v-model="loading" :finished="finished" @load="onLoad" >
				<van-card centered v-for=" (item,index) in TabList" :key="index">
					<div slot="thumb" class="couponGood-thumb" >
						<img :src="item.src" alt="">
					</div>
					<div slot="title" class="couponGood-title">
						<h3>{{ '商品名称' + index}}</h3>
						<p>{{ '商品副标题' + index}}</p>
						<p>{{ item.price | formatPrice }}</p>
						<!-- {{ item.num*item.price | formatPrice }} -->
					</div>
					<div slot="tags" class="couponGood-btn">
							<van-stepper integer v-model="item.num" @change="change" />
					</div>
				</van-card>
		</van-list>
		<van-submit-bar :price="totalPrice"  button-text="去购物车">
			<!-- <van-checkbox v-model="checked">全选</van-checkbox> -->
			<!-- <span slot="tip">
				您的收货地址不支持同城送, <span>修改地址</span>
			</span> -->
		</van-submit-bar>
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
		nowIndex : 0,
		totalPrice:0,
		loading: false,
    finished: false,

		TabList : [],
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
			this.calcTotalPrice();
		})
	},
	
	filters:{
		//局部过滤器，
		formatPrice(value){
			return (value/100).toFixed(2);//价格处理，保留两位小数点
		},
	},
	methods: {
		//总价计算
		calcTotalPrice () {
			this.totalPrice = 0;
			this.TabList.forEach((value,index)=>{   
				this.totalPrice += value.num* value.price;
			});
		},
		//通过改变购买数量重新计算总价
		change () {
			this.calcTotalPrice();
		},
		//加载更多
		onLoad() {
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.TabList.push(
						{
							price:2680,
							num:5,
							src:require('../../../static/images/user/1.jpg'),
						},
						{
							price:3520,
							num:8,
							src:require('../../../static/images/user/2.png'),
						},
						{
							price:4125,
							num:3,
							src:require('../../../static/images/user/portrait.png'),
						},
					);
					this.change();
        }
        this.loading = false;

        if (this.TabList.length = 20) {
          this.finished = true;
        }
      }, 500);
    },
	}
}
</script>
<style scoped lang="less">
@import "../../assets/mixin.less";

.router-slid-enter-active, .router-slid-leave-active {
    transition: all .4s;
}
.router-slid-enter, .router-slid-leave-active {
    transform: translate3d(2rem, 0, 0);
    opacity: 0;
}
.couponGood{position: absolute;top: 50px;left: 0;right: 0;bottom: 50px;background-color: #fff;z-index: 12;overflow:auto;
	.van-card{border-bottom: 1px @grayBg solid;}
	&-tle{ font-weight: 500; padding: .3rem;}
	&-thumb img{ width:2rem; overflow: hidden;}
	&-title{ 
		h3{font-weight: 500; font-size:@rem_15; margin:.3rem 0;color:@colors;}
		p{font-size:@rem_12; margin: 0;color:@colorGray;}
	}
	&-desc{font-size:@rem_12;}
	&-btn{ position: absolute; right: .5rem; top: 50%; transform: translateY(-50%);}
	
}
</style>
