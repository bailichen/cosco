<template>
	<header class="head">
        <section class="head-cont">
            <section class="lef" @click="$router.push('/MyCompany')" style="font-size:26px;">口碑工作创客版</section>
            <section class="rig">Welcome {{name}}！
                <el-dropdown trigger="click" @command="handleCommand">
                  <span class="el-dropdown-link" style="color:white;cursor:pointer">
                    {{this.$root.$data.company ? this.$root.$data.company.name : '未选择企业'}}<i class="el-icon-arrow-down el-icon--right"></i>
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="a">切换企业</el-dropdown-item>
                    <el-dropdown-item command="b">新手指引</el-dropdown-item>
                    <el-dropdown-item command="c">修改密码</el-dropdown-item>
                    <el-dropdown-item command="d">退出</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
            </section>
        </section>
    </header>
</template>
<script>
	export default {
		components:{
		},
		data () {
            return {
                name: ''
            }
        },
        mounted () {
            if(localStorage.getItem('userInfo')){
                this.name = JSON.parse(localStorage.getItem('userInfo')).name
            }
            if(localStorage.getItem('company')){
                this.$root.$data.company = JSON.parse(localStorage.getItem('company'))
            }
        },
		methods: {
            handleCommand(command) {
                switch(command){
                    case 'a':
                        this.$router.push("/MyCompany");
                    break;
                    case 'b':
                        this.$router.push('/guidance');
                    break;
                    case 'c':
                    	this.$root.$emit('updatePwd');
                    break;
                    case 'd':
                        this.$ajax.post('/1.0/company/home/logout').then(res => {
                            this.$root.company = ''
                            this.$router.push("/login");
                        })
                    break;
                }
            }
        }
	}
</script>
<style>
.lef{
    cursor: pointer;
}
.el-dropdown-menu__item:hover{
    background-color:#ffeeef!important;
    color:rgb(231, 67, 76)!important;
}
</style>
