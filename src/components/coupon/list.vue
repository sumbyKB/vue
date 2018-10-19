<template>
    <div>
        <van-nav-bar fixed title="数据列表"/>
        <div class="list-content" id="list-content">
            <van-pull-refresh v-model="isLoading" @refresh="onRefresh" >
                <van-list v-model="loading" :finished="finished" @load="onLoad" :offset="10">
                    <div class="list-item" >
                        <van-cell v-for="(item,index) in list" :key="index" :title="item + ''" />
                    </div>

                </van-list>
            </van-pull-refresh>
        </div>

    </div>
</template>

<script>
    export default {
        data(){
            return {
                list: [],
                loading: false,   //是否处于加载状态
                finished: false,  //是否已加载完所有数据
                isLoading: false,   //是否处于下拉刷新状态
            }
        },
        methods:{
            onLoad() {//上拉加载
                setTimeout(() => {
                    for (let i = 0; i < 15; i++) {
                        this.list.push(this.list.length + 1);
                    }
                    this.loading = false;
                    if (this.list.length >= 60) {
                        this.finished = true;
                    }
                }, 500);
            },
            onRefresh() {//下拉刷新
                setTimeout(() => {
                    this.finished = false;
                    this.isLoading = false;
                    this.list = []
                    this.onLoad()
                }, 500);
            }
        },
        mounted(){
            let winHeight = document.documentElement.clientHeight                          //视口大小
            document.getElementById('list-content').style.height = (winHeight - 46) +'px'  //调整上拉加载框高度
        }
    }
</script>

<style scoped>
.list-content{ margin-top:46px; overflow:scroll; }
 .list-item{ text-align:center; }
</style>