<template>
    <section class="login">
        <section class="login-box">
            <section class="title_logo">
                <img src="../../assets/images/cosco-logo.png" alt=""/>
            </section>
            <section class="title_text">上海海运物业管理有限公司</section>
            <section class="acc-pass">
                <section class="inp-box">
                    <section class="inpWrap">
                        <i class="icon iconfont icon-shoujihao"></i>
                        <input type="text" v-model.trim="form.mobile" @focus="showHighLight1();" @blur="hideHighLight1();" @keyup.enter="goLogin"
                            autofocus="autofocus" class="inp" :class="classArr1"
                            placeholder="请输入手机号" maxlength="11"/>
                        <span class='line'></span>
                    </section>
                </section>
                <section class="inp-box">
                    <section class="inpWrap">
                        <i class="icon iconfont icon-mima"></i>
                        <input type="password" v-model.trim="form.password" @focus="showHighLight2();" @blur="hideHighLight2();" @keyup.enter="goLogin"
                        class="inp" :class="classArr2"
                        placeholder="请输入密码" maxlength="16"/>
                    </section>
                </section>
            </section>
            <section class="login-btn sty1" @click="goLogin" v-if="loginSta">登录</section>
            <section class="login-btn sty2" v-else>登录中<i class="el-icon-loading" style="margin-left: 5px"></i></section>
            <!-- <section class="register">
                <a href="javascript:void(0)" @click="handleRegister">免费注册</a>
            </section> -->
        </section>
    </section>
</template>

<script>

export default {
    name: 'Login',
    data() {
        return {
            loginSta: true,
            classArr1:[],
            classArr2:[],
            form: {
                mobile: '',
                password: ''
            }
        }
    },
    created() {
        if (this.$route.query.mobile) {
            this.form.mobile = this.$route.query.mobile
        }
    },
    watch:{
        'form.mobile'(val){
            if(!val){
                this.classArr1=['active1'];
            };
        },
        'form.password'(val){
            if(!val){
                this.classArr2=['active1'];
            };
        }
    },
    methods: {
        showHighLight1(){
            if(!this.form.mobile){
                this.classArr1=['active1'];
            }else{
                this.classArr1=['active2'];
            };

        },
        hideHighLight1(){
            if(!this.form.mobile){
                this.classArr1=[];
            }else{
                this.classArr1=['active2'];
            };
        },
        showHighLight2(){
            if(!this.form.password){
                this.classArr2=['active1'];
            }else{
                this.classArr2=['active2'];
            };
        },
        hideHighLight2(){
            if(!this.form.password){
                this.classArr2=[];
            }else{
                this.classArr2=['active2'];
            };
        },
        goLogin() {
            if (!/^1(3|4|5|6|7|8|9)\d{9}$/.test(this.form.mobile)) {
                this.$message({ type: 'warning', message: '手机号格式不正确' })
                return false
            }
            if (this.form.password === '') {
                this.$message({ type: 'warning', message: '请输入登录密码' })
                return false
            }
            // 登录接口
            this.$router.push({name:'baseM'})
        },
        handleRegister() {
            this.$router.push({
                path: 'register',
                query: { mobile: this.form.mobile }
            })
        }
    }
}
</script>

<style scoped lang="scss">
@import "~@/assets/css/theme.scss";
.login {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    width: 100%;
    min-width: 900px;
    height: 323px;
    background:url('../../assets/images/login_bg.png') no-repeat;
    background-size: cover;
    background-position: center center;
}
.login .title_logo{
    margin-top:80px;
    text-align:center;
}
.login .title_logo img{
    width: 230px;
    height: 121px;
}
.login .title_text{
    margin-top:38px;
    width:100%;
    height:38px;
    font-size:37px;
    font-family:PingFangSC-Regular;
    font-weight:bold;
    color:rgba(255,255,255,1);
    line-height:30px;
    text-align:center;
}
.login .acc-pass {
    text-align: center;
    margin-top:150px;
}
.login .inp-box {
    font-size: 22px;
    color: #3d3d3d;
}
.login .inpWrap{
    position:relative;
    display:inline-block;
}
.login .inp-box .inp {
    width: 448px;
    height: 50px;
    border:1px solid rgba(204,204,204,1);
    border-radius:4px;
    padding-left:40px;
    font-size: 16px;
    margin-bottom:30px;
}
.login .inp-box .inp.active1{
    border:1px solid $theme-main-color ;
    box-shadow:0px 0px 5px $theme-main-color;
}
.login .inp-box .inp.active2{
    border:1px #67c23a solid;
    box-shadow:0px 0px 5px #67c23a;
}


.login .inp-box i{
    font-size:18px;
    color:rgba(204,204,204,1);
    position:absolute;
    left:10px;
    top:13px;
    height: 25px;
}
.login .login-btn {
    width:445px;
    height:54px;
    border-radius:4px;
    text-align: center;
    line-height: 54px;
    font-size: 22px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(255,255,255,1);
    margin:28px auto;
}

.login .sty1 {
    background-color: $theme-main-color;
    cursor: pointer;
}

.login .sty1:hover {
    background-color: $theme-main-color;
}

.login .sty2 {
    background-color: #c0c4cc;
}

.login .register {
    width: 445px;
    margin:0 auto;
    overflow:hidden;
}

.login .register a {
    color: $theme-main-color;
    text-decoration-line: underline;
    float:right;
}
</style>
