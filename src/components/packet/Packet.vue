<!--  -->
<template>
    <div class="packet">
        <headertop :title="title" :textright="zzz" :icon="icon"></headertop>
        <!-- tab切换 -->
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
            <van-tabs v-model="active">
                <van-tab v-for='(item,index) in titlespan' :key="index">
                    <div @click='clicktap(index)' :type='index' slot="title">{{nav[index].name+'('+(item.num)+')'}} </div>
                    <div class="packet-index">
                        <div>
                            <div>{{item.menony[0].name}}</div>
                            <div>{{item.menony[0].state_time}}至{{item.menony[0].end_time}}</div>
                            <div v-if='item.menony[0].type==0'>适用平台:1</div>
                            <div v-else>适用平台:2</div>
                        </div>
                    </div>
                </van-tab>
            </van-tabs>
        </van-pull-refresh>
        <footertop></footertop>
    </div>
    
</template>
<script>
import headertop from '@/components/common/Header'
import footertop from '@/components/common/Footer'
import {mapGetters} from 'vuex'
export default {
//type 适用什么平台的参数
//use 参数说明  0未使用  1已使用  2已过期
  data () {
    return {
        active: 0,
        nav:[
            {name:"未使用"},
            {name:"已使用"},
            {name:"已过期"}
        ],
        type:this.type,//适用什么平台的参数
        titlespan:'',
        zzz:'红包说明',
        icon:true,//去掉icon
        count: 0,
        isLoading: false
    };
  },
  created:function(){
      this.creat()
  },

  components: {
      headertop,
      footertop
  },

  computed: {
    ...mapGetters({
	  title: 'getTitle'
    })
  },

  mounted() {},

  methods: {
      clicktap:function(index){
          console.log(index);
      },
      click:function(type){
          if( type==1 ){//pc端
                this.$toast({
                    message: "不适用移动端，请重新选择",
                })
          }else{//移动端跳转路由
            
          }
      },
      creat:function(){
            this.$axios.post('http://localhost:3000/rest/user',{}).then(res=>{
                this.titlespan = res.data.tables.titlespan[0].list;
                console.log(res.data)
            }).catch(error=>{})
      },
      onRefresh() {
        setTimeout(() => {
            this.$toast('刷新成功');
            this.isLoading = false;
            this.count++;
        }, 500);
      }
  }
}
</script>
<style>

.van-pull-refresh{
    height: 100%;
}
</style>
<style scoped lang="less">
    @import "./../../assets/mixin.less";
    .packet{
        width: 100%;
        height: 100%;
        margin-top:45px;
        &-tab{
            font-size:@rem_15;
            width: 100%;
        }
        &-index{
            width: 80%;
         
            display: block;
            margin: auto;
            border: 1px solid
        }
    }
</style>