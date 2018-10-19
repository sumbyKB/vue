<template>
  <div class="skuWrap">
		<van-button type="primary" size="small" @click="showBase = true">选规格</van-button>
		<van-sku v-model="showBase" :sku="sku" :goods="goods" :goods-id="goodsId" :hide-stock="sku.hide_stock" :quota="quota" :quota-used="quotaUsed" :reset-stepper-on-hide="resetStepperOnHide" :reset-selected-sku-on-hide="resetSelectedSkuOnHide" :close-on-click-overlay="closeOnClickOverlay" :disable-stepper-input="disableStepperInput" :message-config="messageConfig" @buy-clicked="onBuyClicked" @add-cart="onAddCartClicked"/>
	</div>
</template>

<script>
export default {
  data () {
    return {
			showBase:false, //是否显示sku,默认为false
			goodsId : 1, //商品id
			quota:20,//限购数(0表示不限购)
			quotaUsed:0,//已经购买过的数量
			resetStepperOnHide:false,//窗口隐藏时重置选择的商品数量,默认为false
			resetSelectedSkuOnHide:false,//窗口隐藏时重置已选择的sku,默认为false
			closeOnClickOverlay:true,//点击遮罩层是否关闭弹窗,默认为false
			disableStepperInput:false,//是否禁用sku中stepper的input框,默认为false
			
			sku: {
				// 所有sku规格类目与其值的从属关系，比如商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
				// 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
				tree: [
					{
						k: '颜色', // skuKeyName：规格类目名称
						v: [
							{
								id: '1', // skuValueId：规格值 id
								name: '红色', // skuValueName：规格值名称
								imgUrl: require('../../../static/images/user/1.jpg'),// 规格类目图片，只有第一个规格类目可以定义图片
							},
							{
								id: '2',
								name: '蓝色',
								imgUrl: require('../../../static/images/user/2.png'),
							}
						],
						k_s: 's1', // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
					},
					{
						k: '尺寸', // skuKeyName：规格类目名称
						v: [
							{
								id: '3', // skuValueId：规格值 id
								name: 'S', // skuValueName：规格值名称
							},
							{
								id: '4',
								name: 'M',
							}
						],
						k_s: 's2', // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
					}
				],
				// 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
				list: [
					//红色对应两个尺寸
					{
						id: 1, // skuId，下单时后端需要
						price: 100, // 价格（单位分）
						s1: '1', // 规格类目 k_s 为 s1 的对应规格值 id
						s2: '3', // 规格类目 k_s 为 s2 的对应规格值 id
						stock_num: 50 // 当前 sku 组合对应的库存
					},
					{
						id: 2, // skuId，下单时后端需要
						price: 100, // 价格（单位分）
						s1: '1', // 规格类目 k_s 为 s1 的对应规格值 id
						s2: '4', // 规格类目 k_s 为 s2 的对应规格值 id
						stock_num: 60 // 当前 sku 组合对应的库存
					},
					{
						id: 3, // skuId，下单时后端需要
						price: 200, // 价格（单位分）
						s1: '2', // 规格类目 k_s 为 s1 的对应规格值 id
						s2: '3', // 规格类目 k_s 为 s2 的对应规格值 id
						stock_num: 70 // 当前 sku 组合对应的库存
					},
					//蓝色对应两个尺寸
					{
						id: 4, // skuId，下单时后端需要
						price: 200, // 价格（单位分）
						s1: '2', // 规格类目 k_s 为 s2 的对应规格值 id
						s2: '4', // 规格类目 k_s 为 s2 的对应规格值 id
						stock_num: 80 // 当前 sku 组合对应的库存
					}
				],
				price: '1.00', // 默认价格（单位元）
				stock_num: 227, // 商品总库存
				collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
				none_sku: false, // 是否无规格商品
				messages: [
					{
						// 联系人
						datetime: '0', // 留言类型为 time 时，是否含日期。'1' 表示包含
						multiple: '0', // 留言类型为 text 时，是否多行文本。'1' 表示多行
						name: '联系人', // 留言名称
						type: 'text', // 留言类型，可选: id_no（身份证）, text, tel, date, time, email
						required: '1', // 是否必填 '1' 表示必填,
					},
					{
						// 商品留言
						datetime: '0', // 留言类型为 time 时，是否含日期。'1' 表示包含
						multiple: '1', // 留言类型为 text 时，是否多行文本。'1' 表示多行
						name: '留言', // 留言名称
						type: 'text', // 留言类型，可选: id_no（身份证）, text, tel, date, time, email
						required: '0', // 是否必填 '1' 表示必填,
					},
					{
						// 联系人身份证
						datetime: '0', // 留言类型为 time 时，是否含日期。'1' 表示包含
						multiple: '0', // 留言类型为 text 时，是否多行文本。'1' 表示多行
						name: '身份证', // 留言名称
						type: 'id_no', // 留言类型，可选: id_no（身份证）, text, tel, date, time, email
						required: '0' // 是否必填 '1' 表示必填
					},
					{
						// 联系人电话
						datetime: '0', // 留言类型为 time 时，是否含日期。'1' 表示包含
						multiple: '0', // 留言类型为 text 时，是否多行文本。'1' 表示多行
						name: '联系人电话', // 留言名称
						type: 'tel', // 留言类型，可选: id_no（身份证）, text, tel, date, time, email
						required: '0' // 是否必填 '1' 表示必填
					},
					{
						// 联系人邮箱
						datetime: '0', // 留言类型为 time 时，是否含日期。'1' 表示包含
						multiple: '0', // 留言类型为 text 时，是否多行文本。'1' 表示多行
						name: '留言', // 留言名称
						type: 'email', // 留言类型，可选: id_no（身份证）, text, tel, date, time, email
						required: '0' // 是否必填 '1' 表示必填
					}
				],
				hide_stock: false // 是否隐藏剩余库存
			},
			goods: {//初始化商品信息
				title: '测试商品标题',// 商品标题
				picture: require('../../../static/images/user/1.jpg'),// 默认商品 sku 缩略图,
			},
			customStepperConfig: { //步进器（数量加减）相关自定义配置Object{}
				quotaText: '每次限购xxx件', // 自定义限购文案
				handleOverLimit: (data) => { // 自定义步进器超过限制时的回调
					const { action, limitType, quota, quotaUsed } = data;
					if (action === 'minus') {
						Toast('至少选择一件商品');
					} else if (action === 'plus') {
							if (limitType === LIMIT_TYPE.QUOTA_LIMIT) {
							let msg = `单次限购${quota}件`;
							if (quotaUsed > 0) msg += `，您已购买${quotaUsed}`;
							Toast(msg);
						} else {
							Toast('库存不够了~~');
						}
					}
				}
			},
			messageConfig: {//留言相关配置Object{}
				uploadImg: () => {// 图片上传回调，需要返回一个promise，promise正确执行的结果需要是一个图片url
					return new Promise((resolve) => {
						setTimeout(() => resolve('https://img.yzcdn.cn/upload_files/2017/02/21/FjKTOxjVgnUuPmHJRdunvYky9OHP.jpg!100x100.jpg'), 1000);
					});
				},
				uploadMaxSize: 3,// 最大上传体积 (MB)
				placeholderMap: {// placehold配置,
					text1: '张三',
					text2: '包装要大气',
					id_no:45646546,
					tel:14564646,
					email:626369685+'@qq.com',
			 }
			},
			skuData: {
				goodsId: '1',// 商品 id
				messages: {// 留言信息
					message_0: '12',
					message_1: ''
				},
				cartMessages: {// 另一种格式的留言，key 不同
					'留言1': 'xxxx'
				},
				selectedNum: 1,// 选择的商品数量
				selectedSkuComb: {// 选择的 sku 组合
					id: 2257,
					price: 100,
					s1: '1',
					stock_num: 111
				}
			},
	 };
	},


  components: {},

  computed: {},

  mounted() {},

  methods: {
		//sku
		onBuyClicked (){},
		onAddCartClicked () {
			console.log(this.skuData);
		},
	}
}

</script>
<style>
</style>