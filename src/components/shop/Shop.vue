<!-- 购物 -->
<template>
  <div class="shop">
    <div class="shop-index"> 
        <div class="shop-cont">
          <div class="title">
            <span>金宇超市</span>
            <span>商城</span>
          </div>
          <div class="input-text">
            <input type="text">
          </div>
        </div>
    </div>
    <div class="shop-bottom">
        <!-- 内容 -->
        <van-tabs class="shop-details" :active="active">
          <!-- 侧边栏 -->
          <van-badge-group :active-key="activeKey">
            <van-badge v-for='(item,index) in tables.title' :title="item" @click="onClick" :key="index"/>
          </van-badge-group>
          <van-tab class="destion" v-for="index in tabs" :key="index" :title="index" >
            <div class="destion_">
              <span>综合排序</span>
              <span>按价格
                <i class="destion_up"></i>
                <i class="destion_down"></i>
              </span>
              <span>按销量</span>
            </div> 
          </van-tab>
        </van-tabs>
    </div>
  
    <foot-bottom></foot-bottom>
  </div>
  
</template>
<script>
import footBottom from '@/components/common/Footer'
export default {
  data () {
    return {
       active: 0,
       tables: {
         title:["侧边栏一", "侧边栏二","侧边栏三"]
       },
       tabs: ['生鲜', '粮油干货', '酒水饮料', '家庭日用'],
       activeKey: 0
    };
  },

  components: {
    footBottom
  },
  computed: {},
  mounted() {},
  methods: {
    onClick(key) {
      this.activeKey = key;
    },
    onClickDisabled(index, title) {
      this.$toast(title);
    },
    subscribeSticky(e) {
      console.log(e);
    }
  }
}

</script>
<style scoped lang="less">
@import "./../../assets/mixin.less";
.shop {
  position: absolute;top: 0;left: 0;right: 0;bottom: 0;
  overflow: auto;
  width: 100%;
  margin-bottom: 55px;
  &-index{
    position: fixed;
    width: 100%;
    z-index: 10;
    background: gray;
    color:white;
  }
  &-cont{
      width: 100%;
      height: 60px;
      background: grey;
  }
  &-sectitle{
    height: 30px;
    line-height: 30px;
    border-top:1px solid gray; 
    border-bottom:1px solid gray; 
    width: 100%;
    text-align: center
  }
  .van-badge-group{
    display: inline-block;
  }
  .title{
    width: 60%;
    margin: auto;
    height: 30px;
    span{
      color:white;
      width: 49%;
      line-height: 30px;
      display: inline-block;
      text-align: center;
    }
  }
  .input-text{
    width: 60%;
    margin: auto;
    input{
      border-radius: 10px;
      width: 100%;
      padding: 0px 5px;
    }
  }
  &-bottom{
    margin-top: 60px;
    position: relative;
  }
  &-details{
    position: absolute;
    display: inline-block;
    width:100%;
    .destion{
      display: inline-block;
      width: 7.2rem;
      float: right;
      &-up{
        width:0;
        height:0;
        border-right:5px solid transparent;
        border-left:5px solid transparent;
        border-bottom:5px solid red;
      }
      &-down{
        width:0;
        height:0;
        border-right:5px solid transparent;
        border-left:5px solid transparent;
        border-top:5px solid red;
      }
    }
  }
  
}
.van-badge--select{
  border-color:white; 
}
</style>