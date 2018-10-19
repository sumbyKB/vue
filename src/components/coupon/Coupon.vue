<!--我的优惠卷-->
<template>
  <div class="coupon">
	<head-top :title="title" v-if="NavBool" ></head-top>
	<van-tabs v-model="active" swipeable sticky >
		<van-tab v-for=" (item,index) in TabNav " :key="index" centered>
			<div slot="title">
				{{ item.name }}({{ item.num }}) 
			</div>
			<van-list v-model="loading" :finished="finished" @load="onLoad">
				<van-card v-for=" (item,idx) in TabList" :key="idx">
					<div slot="thumb" class="coupon-thumb">
						<div class="coupon-thumb-txt">
							<span>&yen;{{ item.num }}</span>
							<p>满{{ item.price }}元可用</p>
						</div>
					</div>
					<div slot="title" class="coupon-title">
						<h3>{{ item.title + index }}</h3>
						<p>{{ item.subtitle + index}}</p>
						<p> {{ item.start }}至{{ item.end}}</p>
					</div>
					<div slot="desc" class="coupon-desc">
						<van-collapse v-model="activeNames">
							<van-collapse-item :name=idx>
								<div slot="title">详细信息<van-icon name="question" /></div>
								<p>{{item.desc}}</p>
							</van-collapse-item>
						</van-collapse>
					</div>
					<div slot="tags" class="coupon-btn">
						<router-link :to="{path:'/coupon/gouponGood'}"><van-button size="small">立即使用</van-button></router-link>
					</div>
				</van-card>
			</van-list>
		</van-tab>
	</van-tabs>
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
 			activeNames: [],
 			active: 0,
			loading: false,
			finished: false,
			TabNav : [
				{
					name:"未使用",
					num:2,
				},
				{
					name:"已使用",
					num:5,
				},
				{
					name:"已过期",
					num:9,
				},
			],
			TabList : [
				{
					price : 100,
					num : 30,
					title : '店铺名称',
					subtitle : '优惠券名称',
					desc : '限品类，仅购买水果可用',
					start : '2018-07-28',
					end : '2018-8-28',
				},
			],
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

  methods: {
		//加载更多
		onLoad() {
			setTimeout(() => {
				for (let i = 0; i < 10; i++) {
					this.TabList.push(
						{
							price : 100,
							num : 30,
							title : '店铺名称',
							subtitle : '优惠券名称',
							desc : '限品类，仅购买水果可用',
							start : '2018-07-28',
							end : '2018-8-28',
						},
					);
				}
				this.loading = false;

				if (this.TabList.length >= 40) {
					this.finished = true;
				}
			}, 500);
		}
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
.coupon{position: absolute;top: 0;left: 0;right: 0;bottom: 0;background-color: #fff;z-index: 12; overflow: auto;
	&-thumb{ text-align: center; background:@grayBg; width: 100%; height: 100%; position: relative;
		&-txt{ font-size:@rem_12; position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%); width: 100%;}
	}
	&-title{ 
		h3{font-weight: 500; font-size:@rem_18; margin: 5px 0;color:@colors;}
		p{font-size:@rem_12; margin: 0;color:@colorGray; margin-bottom: .2rem;}
	}
	&-btn{ position: absolute; right:.5rem; top: .3rem; }
	&-desc{font-size:@rem_12;}
}
</style>
