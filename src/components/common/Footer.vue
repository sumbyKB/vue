<template>
    <van-tabbar v-model="active"  >
        <router-link tag="div" class="van-tabbar-item"  active-class="router-active" icon="home" :to="{name:'home',path:'/home',params:{ss:item.id}}">
            <van-icon name="home" />首页
        </router-link >
        <router-link tag="div" class="van-tabbar-item"  active-class="router-active" icon="shop" :to="{name:'shop',path:'/shop',params:{yy:item.yy}}">
            <van-icon name="shop" />购物
        </router-link >
        <router-link tag="div" class="van-tabbar-item"  active-class="router-active" icon="gift" :to="{path:'/life'}">
            <van-icon name="gift" />生活
        </router-link >
        <router-link tag="div" class="van-tabbar-item"  active-class="router-active" icon="cart" :to="{path:'/cart'}">
            <van-icon name="cart" />购物车
        </router-link >
        <router-link tag="div" class="van-tabbar-item"  active-class="router-active" icon="contact" :to="{path:'/user'}">
            <van-icon name="contact" />我的
        </router-link >
    </van-tabbar>
</template>
<script>
    import {mapState, mapActions} from 'vuex'
    export default {
    	data(){
            return{
                active: 0,
                item:{id:'123',yy:'555'}
            }
        },
        mounted(){
        },
        computed: {
        },
        methods: {
        }

    }

</script>
<style>

.van-icon::before{font-size: 20px;}
</style>
<style scoped>
.footer { z-index: 103; }
.router-active {color:red;}
</style>
