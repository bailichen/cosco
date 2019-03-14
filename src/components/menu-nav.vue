<template>
    <aside class="lef-nav">
        <el-menu :default-active="$route.path" router class="el-menu-vertical-demo" unique-opened text-color="#4B4B4B" active-text-color="#E7434C">
            <el-menu-item index="/index" class="menu-index">
                <i class="icon iconfont icon-xiangmuguanli"></i>
                <span slot="title" style="">供应商管理</span>
            </el-menu-item>
            <el-menu-item index="/job" class="menu-index">
                <i class="icon iconfont icon-xiangmuguanli"></i>
                <span slot="title" style="">任务管理</span>
            </el-menu-item>
            <el-menu-item index="/apply" class="menu-index">
                <i class="icon iconfont icon-renwu"></i>
                <span slot="title" style="">报名管理</span>
                <span class="num-badge1" v-if="waitInterviewTotal>0">{{waitInterviewTotal}}</span>
            </el-menu-item>
            <el-menu-item index="/commission" class="menu-index">
                <i class="icon iconfont icon-qian-copy"></i>
                <span slot="title" style="">发佣金</span>
            </el-menu-item>
            <el-menu-item index="/account" class="menu-index">
                <i class="icon iconfont icon-zhanghuh"></i>
                <span slot="title" style="">资金账户</span>
            </el-menu-item>
        </el-menu>
    </aside>
</template>

<script>
// import { applyList } from '@/api'
export default {
    name: 'MenuNav',
    data() {
        return {
            waitInterviewTotal: ''
        }
    },
    created() {
        // this.subLastestBadge()
    },
    mounted() {
        // this.getBadgeNumbers()
    },
    methods: {
        /**
         * 订阅最新徽标数
         */
        // subLastestBadge () {
        //     this.$root.$on('on-badge-publish', this.getBadgeNumbers)
        // },
        
        /**
         * 获取徽标数
         */
        // getBadgeNumbers() {
        //     // applyList({
        //     //     params: {
        //     //         status: '1'
        //     //     }
        //     // }).then(res => {
        //     //     if (res.code === 0) {
        //     //         this.waitInterviewTotal = res.data.allTotal.waitInterviewTotal
        //     //     }
        //     // })
        // }
    }
}
</script>

<style>
.num-badge1 {
    position: absolute;
    display: block;
    top: 50%;
    right: 50px;
    width: 37px;
    height: 18px;
    line-height: 18px;
    margin-top: -9px;
    background-color: #f05962;
    border-radius: 10px;
    text-align: center;
    font-size: 14px;
    color: #fff;
}
</style>

