<template>
    <section class="register">
        <section class="login-box" ref="loginPart">
            <section class="title_logo">
                <img src="../../assets/images/login_logo.png" alt="">
            </section>
            <section class="title_text">创客，降低企业成本的新利器</section>
            <section class="acc-pass">
                <section class="inp-box">
                    <section class="phoneWrap">
                        <i class="icon iconfont icon-shoujihao"></i>
                        <input type="input" autofocus="autofocus" maxlength="11" v-model="form.mobile" ref="mobile" class="inp" @focus="showHighLight1();" @blur="hideHighLight1();" :class="classArr1" placeholder="请输入手机号" />
                    </section>
                </section>
                <section class="inp-box inp-code">
                    <section class="phoneWrap">
                        <i class="icon iconfont icon-shoujiyanzhengma"></i>
                        <input type="input" class="inp" maxlength="6" v-model="form.code" @focus="showHighLight2();" @blur="hideHighLight2();" :class="classArr2" placeholder="请输入短信验证码" />
                        <el-button :disabled="countDown != 60" v-model="form.code" class="get-code" @click="handleSendMsg()">{{ msg }}</el-button>
                    </section>
                </section>
                <section class="inp-box">
                    <section class="phoneWrap">
                        <i class="icon iconfont icon-mima"></i>
                        <input type="password" class="inp" v-model="form.password" @focus="showHighLight3();" @blur="hideHighLight3();" :class="classArr3" placeholder="请输入密码，6-16位数字或字母" maxlength="16" />
                    </section>
                </section>
                <section class="inp-checks">
                    <el-checkbox v-model="check"></el-checkbox>
                    <span class="xieyi">我已阅读并同意<a href="javascript:;" @click="dialogVisible = true">《口碑工作平台注册服务协议》</a></span>
                </section>
            </section>
            <section class="login-btn sty1" @click="handleRegister">完成注册</section>
            <section class="go-login">
                已有账号？<a href="javascript:void(0)" @click="handleLogin">直接登录</a>
            </section>
        </section>
        <el-dialog title="口碑工作平台注册服务协议" :visible.sync="dialogVisible" width="80%" center>
            <v-xie-yi></v-xie-yi>
        </el-dialog>
    </section>
</template>

<script>
import { loginSuccess } from '@/utily/login.js'
// import { login, register, checkRegister, sendMsg } from '@/api/index.js'
import XieYi from './xieyi'

export default {
    name: 'Login',
    components: {
        vXieYi: XieYi
    },
    data() {
        return {
            classArr1:[],
            classArr2:[],
            classArr3:[],
            dialogVisible: false,
            check: true,
            form: {
                mobile: '',
                code: '',
                password: ''
            },
            countDown: 60,
            msg: '获取验证码'
        }
    },
    created() {
        if (this.$route.query.mobile) {
            this.form.mobile = this.$route.query.mobile
        }
    },
    watch: {
        screenWidth(val) {
            this.reSize(val)
        },
        'form.mobile'(val){
            if(!val){
                this.classArr1=['active1'];
            };
        },
        'form.code'(val){
            if(!val){
                this.classArr2=['active1'];
            };
        },
        'form.password'(val){
            if(!val){
                this.classArr3=['active1'];
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
            if(!this.form.code){
                this.classArr2=['active1'];
            }else{
                this.classArr2=['active2'];
            };
        },
        hideHighLight2(){
            if(!this.form.code){
                this.classArr2=[];
            }else{
                this.classArr2=['active2'];
            };
        },
        showHighLight3(){
            if(!this.form.password){
                this.classArr3=['active1'];
            }else{
                this.classArr3=['active2'];
            };
        },
        hideHighLight3(){
            if(!this.form.password){
                this.classArr3=[];
            }else{
                this.classArr3=['active2'];
            };
        },
        handleSendMsg() {
            if (this.form.mobile === '') {
                this.$message({ type: 'warning', message: '请输入手机号' })
                return false
            }

            if (!/^1(3|4|5|6|7|8|9)\d{9}$/.test(this.form.mobile)) {
                this.$message({
                    type: 'warning',
                    message: '手机号格式输入错误'
                })
                return false
            }
            // Promise.resolve(this.form)
            //     .then(checkRegister) //检查是否注册
            //     .then(res => {
            //         if (res.data.toString() == 'true') {
            //             this.$message({
            //                 type: 'warning',
            //                 message: '手机号已注册，请重新输入'
            //             })
            //             return Promise.reject(false)
            //         }
            //         return this.form
            //     })
            //     .then(sendMsg) //发送验证码
            //     .then(res => {
            //         this.$message({
            //             message: '短信发送成功.',
            //             type: 'success'
            //         })
            //         this.sendMsgCountDown()
            //     })
        },
        sendMsgCountDown() {
            if (this.countDown === 0) {
                this.msg = '获取验证码'
                this.countDown = 60
                return false
            } else {
                this.msg = '重新发送(' + this.countDown + ')'
                this.countDown--
            }
            setTimeout(() => this.sendMsgCountDown(), 1000)
        },
        handleLogin() {
            this.$router.push({
                path: 'login',
                query: { mobile: this.form.mobile }
            })
        },
        handleRegister() {
            if (this.form.mobile === '') {
                this.$message({ type: 'warning', message: '请输入手机号' })
                return false
            }
            if (!/^1(3|4|5|7|8|6)\d{9}$/.test(this.form.mobile)) {
                this.$message({
                    type: 'warning',
                    message: '手机号格式输入错误'
                })
                return false
            }
            if (this.form.code == '') {
                this.$message({
                    message: '请输入短信验证码',
                    type: 'warning'
                })
                return false
            }
            if (!this.check) {
                this.$message({
                    message: '请勾选同意注册服务协议',
                    type: 'warning'
                })
                return false
            }
            if (this.form.password === '') {
                this.$message({
                    message: '请输入密码',
                    type: 'warning'
                })
                return false
            }

            if (
                this.form.password.length < 6 ||
                this.form.password.length > 16
            ) {
                this.$message({
                    type: 'warning',
                    message: '请输入6-16位数字或字母'
                })
                return false
            }

            if (!/^[0-9a-zA-Z]*$/g.test(this.form.password)) {
                this.$message({
                    type: 'warning',
                    message: '密码格式不正确，只能含有数字和字母'
                })
                return false
            }

            // Promise.resolve(this.form)
            //     .then(register)
            //     .then(() => {
            //         return this.form
            //     })
            //     .then(login)
            //     .then(loginSuccess.bind(this))
        }
    }
}
</script>

<style scoped>
.agreement_wrap {
    overflow: hidden;
}

.agreement_wrap h4 {
    text-align: center;
    font-size: 16px;
    padding: 5px 0;
    padding-bottom: 15px;
}

.agreement_wrap p {
    text-indent: 10px;
    text-indent: 30px;
    text-align: justify;
    line-height: 1.7;
}

.agreement_wrap h5 {
    font-weight: bold;
    font-size: 14px;
    padding: 3px 0;
}

.register {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    width: 100%;
    min-width: 900px;
    height: 323px;
    background: #fff url('../../assets/images/login_bg.png') no-repeat;
    background-size: cover;
    background-position: center center;
}

.register .title_logo {
    margin-top: 111px;
    text-align: center;
}
.register .title_logo img {
    width: 100px;
    height: 100px;
}
.register .title_text {
    margin-top: 38px;
    width: 100%;
    height: 38px;
    font-size: 37px;
    font-family: PingFangSC-Regular;
    font-weight: bold;
    color: rgba(255, 255, 255, 1);
    line-height: 30px;
    text-align: center;
}

.register .acc-pass {
    padding: 50px 0 37px;
    text-align: center;
    width: 448px;
    margin: 0 auto;
}

.register .inp-box {
    color: #3d3d3d;
}
.register .inp-box .phoneWrap{
    position:relative;
}
.register .inp-box .phoneWrap i{
    position:absolute;
    left:10px;
    top:35px;
    font-size:18px;
    color:rgba(204,204,204,1);
    height:25px;
}

.register .inp-code {
    position: relative;
}

.register .inp-code .get-code {
    position: absolute;
    width: 120px;
    background: #f05962;
    top: 20px;
    right: 0;
    color: #fff;

    height: 50px;
    border: 0;
    border-radius: 3px;
}

.register .inp-code .get-code:hover {
    background: #f48a90;
}

.register .inp-checks {
    text-align: left;
    margin-top: 37px;
}

.register .inp-checks .xieyi {
    margin-left: 21px;
}

.register .inp-checks .xieyi a:hover {
    color: #f05962;
    text-decoration: underline;
}

.register .inp-box .inp {
    width: 448px;
    height: 50px;
    /* line-height: 50px; */
    margin-top: 20px;
    border: 1px solid rgba(204, 204, 204, 1);
    border-radius: 4px;
    padding: 10px;
    font-size: 16px;
    padding-left:35px;
}

.register .inp-box .inp.active1{
    border:1px #f05962 solid;
    box-shadow:0px 0px 5px #f05962;
}
.register .inp-box .inp.active2{
    border:1px #67c23a solid;
    box-shadow:0px 0px 5px #67c23a;
}


.register .login-btn {
    margin: 0 auto;
    text-align: center;
    width: 448px;
    height: 55px;
    line-height: 55px;
    border-radius: 4px;
    color: #fff;
    font-size:22px;
}

.register .sty1 {
    background-color: #f05962;
    cursor: pointer;
}

.register .sty1:hover {
    background-color: #f48a90;
}

.register .sty2 {
    background-color: #c0c4cc;
}

.register .go-login {
    width: 448px;
    margin: 34px auto 0;
    text-align: right;
    font-size: 14px;
    color: #252020;
}

.register .go-login a {
    cursor: pointer;
    font-style: normal;
    display: inline-block;
    color: #f05962;
}

.register .go-login a:hover {
    text-decoration: underline;
}
</style>
