<template>
    <aside class="lef-nav cosoco-nav">
        <el-menu :default-active="$route.path" router class="el-menu-vertical-demo" unique-opened text-color="#fff" active-text-color="#fff">
            <el-menu-item index="/gys" class="menu-index">
                <span slot="title">供应商管理</span>
            </el-menu-item>
            <el-menu-item index="/person-management" class="menu-index">
                <span slot="title">人员管理</span>
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
    },
    mounted() {
    },
    methods: {

    }
}
</script>

<style>

</style>

