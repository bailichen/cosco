<template>
    <header class="head">
        <section class="head-cont">
            <!-- <section class="lef" @click="$router.push('/MyCompany')" style="font-size:26px;">上海海运物业管理有限公司</section> -->
            <section class="lef" @click="$router.push('/MyCompany')" style="font-size:26px;">口碑工作</section>
            <section class="rig">Welcome {{name}}！
                <el-dropdown trigger="click" @command="handleCommand">
                  <span class="el-dropdown-link" style="color:white;cursor:pointer">
                    cto<i class="el-icon-arrow-down el-icon--right"></i>
                  </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item command="d">退出</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </section>
        </section>
    </header>
</template>
<script>
    export default {
        components: {},
        data() {
            return {
                name: '阿杜'
            }
        },
        mounted() {

        },
        methods: {
            handleCommand(command) {
                switch (command) {
                    case 'd':
                        this.$router.push("/login");
                        break;
                }
            }
        }
    }
</script>
<style>
    .lef {
        cursor: pointer;
    }

    .el-dropdown-menu__item:hover {
        background-color: #ffeeef !important;
        color: rgb(231, 67, 76) !important;
    }
</style>
