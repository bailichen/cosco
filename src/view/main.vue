<template>
    <section class="menu-nav">
        <v-header></v-header>
        <section class="main">
            <v-menu-nav></v-menu-nav>
            <section class="main-cont">
                <transition name="fade" mode="out-in">
                    <router-view></router-view>
                </transition>
                <div style="width:100%;height:45px;"></div>
            </section>
        </section>
        <v-update-pwd v-if="updatePwdDialog" @close="closeUpdatePwdDialog"></v-update-pwd>
        <!--<v-right-super></v-right-super>-->
    </section>
</template>
<script>
    import UpdatePwd from '@/components/update-pwd.vue'
    import Header from '@/components/header.vue'
    import MenuNav from '@/components/menu-nav.vue'
    import RightSuper from '@/components/right-supernatant.vue'

    export default {
        components: {
            vHeader: Header,
            vMenuNav: MenuNav,
            vUpdatePwd: UpdatePwd,
            vRightSuper: RightSuper
        },
        data() {
            return {
                updatePwdDialog: false,
                navflag: true
            }
        },
        mounted() {
            // this.$root.$on('updatePwd', () => (this.updatePwdDialog = true))
            // this.$root.$on('setCompanyId', () => (this.navflag = true))
            // this.$root.$on('removeCompanyId', () => {
            //     this.navflag = false
            //     this.$root.$data.company = ''
            // })
            // if (localStorage.getItem('companyId')) {
            //     this.navflag = true
            // }
        },
        methods: {
            closeUpdatePwdDialog() {
                this.updatePwdDialog = false
            }
        }
    }
</script>

<style lang="scss">
    @import "~@/assets/css/theme.scss";

    .menu-nav .el-menu-item:hover, .menu-nav .el-menu-item:focus {
        background-color: #01479d !important;
    }
    .menu-nav .el-menu-item.is-active{
        background-color: #01479d !important;
    }
    .menu-nav .main .main-cont.full_width {
        padding: 90px 20px 40px 20px;
    }

    .el-menu-item:focus,
    .el-menu-item:hover {
        outline: 0;
        background-color: #fef0f0;
    }

    .el-dropdown-menu__item:focus,
    .el-dropdown-menu__item:not(.is-disabled):hover {
        background-color: #ffecec;
        color: $theme-main-color ;
    }

    .menu-index .icon {
        color: $theme-main-color ;
    }

    .menu-nav .el-submenu__icon-arrow {
        transform: rotateZ(-90deg) !important;
    }

    .menu-nav .is-opened .el-submenu__icon-arrow {
        transform: rotateZ(0deg) !important;
    }

    .menu-nav .is-opened .is-active {
        background-color: $theme-main-color !important;
    }

    .menu-nav {
        margin: 0;
        padding: 0;
    }

    .menu-nav .head {
        z-index: 200;
        position: fixed;
        top: 0;
        width: 100%;
        height: 90px;
        background:url('../assets/images/login_bg.png') no-repeat;
        background-size: cover;
    }

    .menu-nav .head-cont {
        display: flex;
        padding: 0 20px;
        height: 90px;
        line-height: 60px;
        color: #fff;
    }

    .menu-nav .head-cont .lef {
        flex: 1 1 auto;
        font-size: 36px;
        margin-top: 5px;
        img{
            display: block;
            width: auto;
            height: 80px;
        }
    }

    .menu-nav .head-cont .rig {
        flex: 1 1 auto;
        text-align: right;
        font-size: 14px;
        align-items: center;
        display: flex;
        justify-content: flex-end;
    }

    .menu-nav .head-cont .tip1 {
        font-size: 16px;
        font-family: MicrosoftYaHei;
        margin-left: 10px;
    }

    .menu-nav .head-cont .tip2 {
        padding-left: 15px;
        text-decoration: underline;
        cursor: pointer;
    }

    .menu-nav .head-cont .tip2:hover {
        color: #e6e6e6;
    }

    .menu-nav .main .lef-nav {
        z-index: 100;
        position: fixed;
        top: 90px;
        left: 0;
        width: 240px;
        height: 100%;
        background-color: $theme-main-color;
        -webkit-box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
        -moz-box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
        box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
    }

    .menu-nav .main .user-box {
        display: flex;
        padding: 30px 20px 50px;
    }

    .menu-nav .main .user-box img {
        flex: 0 0 auto;
        width: 54px;
        height: 54px;
    }

    .menu-nav .main .user-box span {
        flex: 1 1 auto;
        padding-left: 15px;
        height: 54px;
        line-height: 54px;
    }

    .menu-nav .main .main-cont {
        height: auto;
        padding: 90px 0 20px 240px;
    }
</style>
