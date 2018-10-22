<!-- 建议反馈 -->
<template>
  <div class="suggest">
		<head-top :title="title" v-if="NavBool" ></head-top>
		<van-cell-group>
			<van-field  type="textarea" placeholder="请输入反馈的内容" rows="5" class="suggest-textarea" clearable maxlength="200" @input="descInput" v-model="desc" autosize/>
			<span>{{ remnant }}/200</span>
		</van-cell-group>
		<div class="suggest-btn"><van-button type="default" :disabled="disabled">提交反馈</van-button></div>
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
			disabled : true,
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
		descInput(){
			 let txtVal = this.desc.length;
			 if( txtVal < 1){
				 this.disabled = true;
			 }else if( txtVal > 200 ){
				 this.remnant = 0;
			 }else{
				 this.remnant = txtVal;
				 this.disabled = false;
			 }
			 
		}
	}
}

</script>
<style scoped lang="less">

</style>
<style>
	
</style>