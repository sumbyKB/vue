<!-- 修改用户名 -->
<template>
	<div class="UserName">
		<head-top :title="title" v-if="NavBool" ></head-top>
		<van-cell-group>
			<van-field v-model="username" clearable placeholder="修改用户名" />
		</van-cell-group>
	</div>
</template>

<script>
import headTop from '@/components/common/Header'
import footBottom from '@/components/common/Footer'
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
			username:'',
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

  methods: {}
}

</script>
<style scoped lang="less">
@import "../../assets/mixin.less";
.UserName{position: absolute;top: 50px;left: 0;right: 0;bottom: 0;background-color: #fff;z-index: 12;overflow:auto;
}
</style>
