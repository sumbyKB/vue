<!-- 钱包明细 -->
<template>
  <div class="walletDetail">
		<head-top :title="title" v-if="NavBool" ></head-top>
		<van-cell-group>
			<van-cell v-for="(item,index) in detailCell" :key="index" :title="item.title" :value="item.value"/>
		</van-cell-group>
		<div class="walletDetail-footer" v-if="ishow">
			<router-link :to="{path:''}"><van-button size="small">查看消费</van-button></router-link>
			<router-link :to="{path:''}"><van-button size="small" type="danger">订单明细</van-button></router-link>
		</div>
	</div>
</template>

<script>
import headTop from '@/components/common/Header'
import footBottom from '@/components/common/Footer'
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
// 			detailCell : [],
// 			money:0,
			ishow:false,
			detailCell : [
        {
            "title" : "出账金额", 
            "value" : "-100.00"
        }, 
        {
            "title" : "类型", 
            "value" : "支出"
        }, 
        {
            "title" : "时间", 
            "value" : "2018-07-30   10:00"
        }, 
        {
            "title" : "钱包流水号", 
            "value" : "4156465456456465"
        }, 
        {
            "title" : "钱包余额", 
            "value" : "¥100"
        }, 
        {
            "title" : "备注", 
            "value" : "消费"
        }
    ], 
    };
  },

  components: { headTop, footBottom },

  computed: {
		...mapGetters({
			title: 'getTitle',
			NavBool: 'getNavBool',
			BarBool: 'getBarBool',
			
		}),
		
// 		way () {
// 			//接收参数id
// 			let detailId = this.$route.query.id;//获取id
// // 			var a = this.detailCell;//获取金额
// // 			a[0].value = this.$route.query.way
// 
// 			//console.log(this.detailCell[0].value);
// 			//底部按钮是否显示隐藏
// 			if( this.money < 0 ){
// 				return true;
// 			}else{
// 				return false;
// 			}
// 			
// 		}
		
	},
	created () {
// 
// 			this.$axios.post('http://localhost:3000/rest/user',{}).then( res => {
// 				this.detailCell = res.data.detailCell;
// 				//this.money = res.data.detailCell[0].value;
// 			}).catch( error => {})

	},
  mounted() {
		//接收参数id
		let detailId = this.$route.query.id;//获取id
		this.detailCell[0].value = this.$route.query.way //获取id
		if(this.detailCell[0].value < 0){
			this.ishow = true;
		}else{
			this.ishow = false;
		}
	},

  methods: {}
}

</script>
<style scoped lang="less">
@import "../../assets/mixin.less";
.walletDetail{position: absolute;top:50px;left: 0;right: 0;bottom:10px;background-color: #fff;z-index: 12;overflow:auto;
	&-footer{ margin: 1rem .5rem; text-align: right;}
}
</style>