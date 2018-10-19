<!-- 钱包账单 -->
<template>
  <div class="walletBill">
	<head-top :title="title" v-if="NavBool" ></head-top>
	<van-pull-refresh v-model="isLoading" @refresh="onRefresh" >
		<van-list v-model="loading" :finished="finished"  @load="onLoad" loading-text="加载更多" :offset="10">
			<van-cell v-for="(item,index) in list" :key="index" class="walletBill-list">
				<router-link :to="{path:'/wallet/walletDetail',query:{ id:item.id,way:item.way }}">
					<h4>{{ item.title+index }}</h4>
					<p>{{ item.time }}</p>
					<span>{{ item.way }}</span>
				</router-link>
			</van-cell>
			<p class="noMore" v-if="finished">没有更多内容！</p>
		</van-list>
	</van-pull-refresh>
</div>
</template>

<script>
import headTop from '@/components/common/Header'
import footBottom from '@/components/common/Footer'
import { mapGetters } from 'vuex'
export default {
	data () {
		return {
			loading: false, //是否处于加载状态
			finished: false, //是否已加载完所有数据
			isLoading: false, //是否处于下拉刷新状态
			list: [],
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
	created () {
		this.$axios.post('http://localhost:3000/rest/user',{}).then( res => {
			this.list = res.data.list;
		}).catch( error => {})
	},
	mounted() {
		
	},

  methods: {
	//上拉加载更多
	onLoad() {
		setTimeout(() => {
			for (let i = 0; i < 5; i++) {
				this.list.push(
					{
						title : this.list[i].title,
						time : this.list[i].time,
						way : this.list[i].way,
					},
				);
			}
			this.loading = false;
			if (this.list.length >= 20) {
				this.finished = true;
			}
      }, 500);
    },
	onRefresh() {//下拉刷新
		setTimeout(() => {
			this.finished = false;
			this.isLoading = false;
			// this.onLoad()
			for (let i = 0; i < 5; i++) {
				this.list.unshift(
					{
						title : this.list[i].title + 1,
						time : this.list[i].time,
						way : this.list[i].way,
					},
				);
			}
			this.loading = false;
			if (this.list.length >= 20) {
				this.finished = true;
			}
		}, 500);
	}
  }
}

</script>
<style scoped lang="less">
@import "../../assets/mixin.less";
.walletBill{position: absolute;top: 50px;left: 0;right: 0;bottom: 0;background-color: #fff;z-index: 12;overflow:auto;
	&-list{ margin: 0; padding: 0; border-bottom: 1px @grayBg solid;
		a{ padding:.5rem; font-size:@rem_18; position: relative; display: block; color:@colorDefault;
			h4{ margin: 0;}
			p{ color: @colorGray; font-size: @rem_15;}
			span{ position: absolute; right:.5rem; bottom:.5rem;}
		}
	}
	.noMore{ text-align: center; font-size: @rem_12; margin: .5rem 0;}
}
</style>