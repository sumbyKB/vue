<template>
    <div class="sku-contaioner">
        <van-sku v-model="showStepper" :sku="sku" :goods="goods_info" :goods_id="goods_id" :close-on-click-overlay="true" />
        <van-goods-action>
                <van-goods-action-mini-btn icon="cart">购物车</van-goods-action-mini-btn>
 
                <van-goods-action-big-btn primary type="primary" @click="showStepper=true" block>立即购买</van-goods-action-big-btn>
                <van-goods-action-big-btn type="primary" @click="showStepper=true" block>加入购物车</van-goods-action-big-btn>
        </van-goods-action>
    </div>
</template>
<script>

    export default{
        data(){
            return{
                sku:{
                    tree:[{
                        k:'颜色',
                        v:[{
                            id:'30349',
                            name:'蓝色',
                            imgUrl:'https://img.yzcdn.cn/upload_files/2017/02/21/FjKTOxjVgnUuPmHJRduvYky9OHP.jpg!100x100.jpg'
                        }],
                        k_s:'s1',
                    }]
                }
            }
        }
    }
</script>
<style>

</style>
