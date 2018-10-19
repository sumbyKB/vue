<template>
    <div class="goods">
        <van-swipe class="goods-swipe" :autoplay="3000">
            <van-swipe-item v-for="thumb in goods.thumb" :key="thumb">
                <img :src="thumb">
            </van-swipe-item>
        </van-swipe>
        <van-cell-group>
            <van-cell>
                <div class="goods-title">{{goods.title}}</div>
                <div class="goods-subhead">{{goods.subhead}}</div>
                <div class="goods-price">
                    <span>{{ formatPrice(goods.price) }} </span>
                    <span class="shop-price">门店价¥{{goods.shopPrice}}</span>
                </div>
            </van-cell>
            <van-cell class="goods-express">
                <van-col span="10">运费：{{ goods.express }}</van-col>
            </van-cell>
            <van-cell>
                <span class="detail-img">{{ goods.text }}</span>
                <span class="detail-text" v-for="image in goods.image" :key="image">
                    <img :src="image">
                </span>
            </van-cell>
        </van-cell-group>
        
        <Sku></Sku>
    </div>
</template>

<script>
import Sku from '@/components/common/sku'
export default {
    components: {
        Sku
    },
    data() {
        return {
            goods: {
                title: "首标题首标题首标题首标题首标题首标题首标题首标题首标题首标题首标题首标题首标题",
                subhead: "副标题",
                price: 2680,
                express: "免运费",
                shopPrice: 60,
                thumb: [
                    "https://img.yzcdn.cn/public_files/2017/10/24/e5a5a02309a41f9f5def56684808d9ae.jpeg",
                    "https://img.yzcdn.cn/public_files/2017/10/24/1791ba14088f9c2be8c610d0a6cc0f93.jpeg"
                ],
                text: "这是商品文字",
                image: [
                    "https://img.yzcdn.cn/public_files/2017/10/24/e5a5a02309a41f9f5def56684808d9ae.jpeg",
                    "https://img.yzcdn.cn/public_files/2017/10/24/1791ba14088f9c2be8c610d0a6cc0f93.jpeg"
                ]
            },
            
        }
    },

    methods: {
        formatPrice() {
            return "¥" + (this.goods.price / 100).toFixed(2);
        },
        onClickCart() {
            this.$router.push("cart");
        },
        sorry() {
            Toast("还没添加功能");
        }
    }
};
</script>
<style scoped lang="less">
@import "./../../assets/mixin.less";
.goods {
    position: absolute;top: 0;left: 0;right: 0;bottom: 0;
    overflow: auto;
    padding-bottom: 50px;
    &-swipe {
        img {
            width: 100%;
            display: block;
        }
    }
    &-title {
        font-size: @rem_16;
        word-break:break-all;
        display:-webkit-box;
        -webkit-line-clamp:2; 
        -webkit-box-orient:vertical;
        overflow:hidden;
    }
    &-subhead {
        font-size: @rem_12;
        color: gray;
    }
    &-price {
        color: #f44;
        .shop-price {
            text-decoration: line-through;
            color: gray;
        }
    }
    &-express {
        color: #999;
        font-size: 12px;
        padding: 5px 15px;
    }
    &-cell-group {
        margin: 15px 0;
        .van-cell__value {
            color: #999;
        }
    }
    &-detail-img{
        width: 100%;
    }
    &-detail-text{
        color:gray;
        font-size:@rem_12;
        width: 100%;
    }
}

</style>
