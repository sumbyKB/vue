<!-- 首页 -->
<template>
<div class="container">
  <head-top :title="title" v-if="NavBool" ></head-top>
  <form action="/">
      <van-search
        v-model="keyword"
        placeholder="请输入商品名称 version1.0 这是版本的1.0"
      />
  </form>
  <h4>this is dev branch</h4>
  <div class="banner">
    <van-swipe :autoplay="3000">
        <van-swipe-item>1</van-swipe-item>
        <van-swipe-item>2</van-swipe-item>
        <van-swipe-item>3</van-swipe-item>
        <van-swipe-item>4</van-swipe-item>
    </van-swipe>
  </div> 
  <div class="hometest">{{this.$route.params.ss}}</div>
  <foot-bottom v-if="BarBool"></foot-bottom>
</div>
</template>

<script>
import headTop from '@/components/common/Header'
import footBottom from '@/components/common/Footer'
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      keyword:''
    };
  },
  created(){
    // this.$axios.post(this.host+'/api.php',{}).then(res=>{
    //    console.log(res.data)
    // }).catch(error=>{})
  },
  components: {
    headTop,
    footBottom
  },

  computed: {
    ...mapGetters({
	  title: 'getTitle',
	  NavBool: 'getNavBool',
	  BarBool: 'getBarBool'
    })
  },

  mounted(){},

  methods: {
    onSearch(){

    }
  }
}

</script>
<style scoped lang="less">
.banner{width:100%;height:300px;background:#ccc;}
.banner .van-swipe{ width:100%;height:300px; }
</style>