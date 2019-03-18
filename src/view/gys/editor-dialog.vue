<template>
    <el-dialog :title="editorText"
               :visible.sync="currentValue"
               width="30%"
               center>
        <el-form :model="ruleForm"
                 :rules="rules"
                 ref="ruleForm"
                 label-width="100px"
                 class="demo-ruleForm">
            <el-form-item label="供应商全称"
                          prop="name">
                <el-input size="small"
                          v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="描述"
                          prop="desc">
                <el-input size="small"
                          type="textarea"
                          v-model="ruleForm.desc"></el-input>
            </el-form-item>
        </el-form>
        <span slot="footer"
              class="dialog-footer">
            <el-button @click="currentValue = false">取 消</el-button>
            <el-button type="primary"
                       @click="submitForm('ruleForm')">确 定</el-button>
        </span>
    </el-dialog>

</template>
<script>
import TwoWay from '@/mixins/two-way/two-way'

export default {
    mixins: [TwoWay],
    props: ['editorStatus', 'editorData'],
    data() {
        return {
            ruleForm: {
                name: '',
                desc: ''
            },
            rules: {
                name: [
                    { required: true, message: '请输入活动名称', trigger: 'blur' },
                    { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                ],
                desc: [
                    { required: true, message: '请填写活动形式', trigger: 'blur' }
                ]
            }
        }
    },
    computed: {
        editorText() {
            return this.editorStatus == 'add' ? '新增' : '编辑'
        }
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    alert('submit!');
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
    },
    mounted() {
        console.log(this.editorStatus);
        console.log(this.editorData);

    }
}
</script>
<style>
</style>
