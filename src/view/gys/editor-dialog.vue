<template>
    <el-dialog :title="editorText"
               :visible.sync="currentValue"
               width="80%"
               center>
        <el-form :model="ruleForm"
                 :rules="rules"
                 ref="ruleForm"
                 label-width="100px"
                 class="demo-ruleForm">

            <!-- 布局：
            两列
            <el-row type="flex"
                    class="row-bg"
                    justify="center">
                <el-col :span="12"></el-col>
                <el-col :span="12"></el-col>
            </el-row>
            三列
            <el-row type="flex"
                    class="row-bg"
                    justify="center">
                <el-col :span="6"></el-col>
                <el-col :span="6"></el-col>
                <el-col :span="6"></el-col>
            </el-row> -->

            <el-row type="flex"
                    class="row-bg"
                    justify="center">
                <el-col :span="8">
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
                </el-col>
                <el-col :span="8">
                    <el-form-item label="活动区域"
                                  prop="region">
                        <el-select v-model="ruleForm.region"
                                   placeholder="请选择活动区域">
                            <el-option label="区域一"
                                       value="shanghai"></el-option>
                            <el-option label="区域二"
                                       value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="日期"
                                  prop="date2">
                        <el-date-picker v-model="ruleForm.date2"
                                        type="date"
                                        value-format="yyyy-MM-dd"
                                        placeholder="选择日期">
                        </el-date-picker>
                    </el-form-item>
                    <el-form-item label="时间"
                                  prop="date1">
                        <el-date-picker v-model="ruleForm.date1"
                                        type="datetime"
                                        value-format="yyyy-MM-dd HH:mm:ss"
                                        placeholder="选择时间">
                        </el-date-picker>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="特殊资源"
                                  prop="resource">
                        <el-radio-group v-model="ruleForm.resource">
                            <el-radio label="线上品牌商赞助"></el-radio>
                            <el-radio label="线下场地免费"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="描述"
                                  prop="desc">
                        <el-input size="small"
                                  type="textarea"
                                  v-model="ruleForm.desc"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
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
    // props: ['editorStatus', 'editorData'],
    props: {
        editorStatus: {
            type: String,
            default: ''
        },
        editorData: {
            type: Object,
            default: () => { }
        }
    },
    data() {
        return {
            ruleForm: {
                name: '',
                desc: '',
                region: '',
                resource: '',
                date2: '',
                date1: '',
            },
            rules: {
                name: [
                    { required: true, message: '请输入活动名称', trigger: 'blur' },
                    { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                ],
                desc: [
                    { required: true, message: '请填写活动形式', trigger: 'blur' }
                ],
                region: [
                    { required: true, message: '请选择活动区域', trigger: 'change' }
                ],
                resource: [
                    { required: true, message: '请选择活动资源', trigger: 'change' }
                ],
                date2: [
                    { required: true, message: '请选择时间', trigger: 'change' }
                ],
                date1: [
                    { required: true, message: '请选择日期', trigger: 'change' }
                ],
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
