<template>
<div class="header">
<van-nav-bar :title="title" :right-text="textright" @click-left="onClickLeft" @click-right="onClickRight">
    <van-icon name="arrow-left" slot="left" v-if = "!goBack"  />
    <van-icon name="search" slot="right" v-if = "!icon"/>
</van-nav-bar>

</div>

</template>


<script>



import {mapState, mapActions,mapGetters} from 'vuex'
export default {
    data(){
        return{

        }
    },
    mounted(){
        //获取用户信息
        // this.getUserInfo();
    },
    props: ['signinUp','title','textright', 'goBack','icon'],
    computed: {
        ...mapState([
                // 'userInfo'
            ])
    },
    methods: {
        onClickLeft() {
            this.$router.go(-1);
            // this.$router.isBack = true;  //箭头返回事件
        },
        onClickRight:function(){
          this.$toast('1')
        },
    },

}

</script>
<style scoped>
.header{position: fixed;z-index: 9999;top: 0;left: 0;right: 0;}
</style>
