<template>
	<el-dialog title="修改密码" :before-close="handleClose" :visible="true">
	  <el-form :model="form" :rules="rules" ref="form">
	    <el-form-item label="手机号" :label-width="formLabelWidth">
	      <el-input v-model="form.mobile" autocomplete="off" :disabled="true"></el-input>
	    </el-form-item>
	    <el-form-item label="原密码" :label-width="formLabelWidth" prop="oldPassword">
	      <el-input v-model="form.oldPassword" type="password" autocomplete="off" maxlength="16" placeholder="请输入原密码"></el-input>
	    </el-form-item>
	    <el-form-item label="新密码" :label-width="formLabelWidth" prop="newPassword">
	      <el-input v-model="form.newPassword" type="password" autocomplete="off" maxlength="16" placeholder="请输入6-16位数字或字母"></el-input>
	    </el-form-item>
	    <el-form-item label="确认新密码" :label-width="formLabelWidth" prop="confPwd">
	      <el-input v-model="form.confPwd" type="password" autocomplete="off" maxlength="16" placeholder="请输入6-16位数字或字母"></el-input>
	    </el-form-item>
	  </el-form>
	  <div slot="footer" class="dialog-footer">
	    <el-button @click="handleClose">取 消</el-button>
	    <el-button type="primary" @click="submitForm">确 定</el-button>
	  </div>
	</el-dialog>
</template>
<script>
	import * as Validate from './validate.js'
	export default {
		data() {
			return {
        		formLabelWidth: '120px',
        		dialogVisible:true,
        		form : {
        			mobile : '',
        			oldPassword : '' ,
        			newPassword : '' ,
        			confPwd : ''
        		},
        		rules: {
		          oldPassword: [
		            { required: true, validator: Validate.pass, trigger: 'blur' }
		          ],newPassword: [
		            { required: true, validator: Validate.pass, trigger: 'blur' }
		          ],confPwd: [
		            { required: true, validator: Validate.pass2.bind(this), trigger: 'blur' }
		          ],
		        }
			}
		},
		mounted(){
			if(localStorage.getItem('userInfo')){
                this.form.mobile = JSON.parse(localStorage.getItem('userInfo')).mobile

            }
		},methods: {
			handleClose() {
				this.$emit('close')
			},submitForm(){
				this.$refs['form'].validate((valid) => {
						if (valid) {
								console.log(this.form)
								this.$ajax.post('/1.0/company/home/changePassword',this.form).then(res => {
									this.$message({
									message: '修改成功',
									type: 'success'
								});
								this.handleClose();
								this.$router.replace('updatePwdTips');
								})
						}
					});
					
			}
		}
	}

</script>
