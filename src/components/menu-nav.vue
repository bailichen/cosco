<template>
    <aside class="lef-nav cosoco-nav">
        <el-menu :default-active="$route.path" router class="el-menu-vertical-demo" unique-opened text-color="#fff" active-text-color="#fff">
            <el-menu-item index="/base-management" class="menu-index">
                <span slot="title">基础信息库</span>
            </el-menu-item>
            <el-menu-item index="/supplier-management" class="menu-index">
                <span slot="title">供应商</span>
            </el-menu-item>
        </el-menu>

    </aside>
</template>

<script>
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

