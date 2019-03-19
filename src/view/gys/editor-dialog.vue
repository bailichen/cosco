<template>
    <el-dialog :title="editorText"
               :visible.sync="currentValue"
               width="80%"
               center>
        <section class="editor-dialog-content">
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
                <el-col :span="8"></el-col>
                <el-col :span="8"></el-col>
                <el-col :span="8"></el-col>
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
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="供应商全称"
                                      prop="name">
                            <el-input size="small"
                                      v-model="ruleForm.name"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="供应商全称"
                                      prop="name">
                            <el-input size="small"
                                      v-model="ruleForm.name"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>

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
                        <el-form-item label="上传图片"
                                      prop="upLoadImg">
                            <el-upload action="http://onsite-api.ci.dev.lanxinka.com/1.0/admin/company/uploadpic"
                                       list-type="picture-card"
                                       :file-list="fileList"
                                       :on-remove="handleRemove">
                                <i class="el-icon-plus"></i>
                            </el-upload>
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
                        <el-form-item label="特殊资源"
                                      prop="resource">
                            <el-upload class="upload-demo"
                                       drag
                                       action="https://jsonplaceholder.typicode.com/posts/"
                                       multiple>
                                <i class="el-icon-upload"></i>
                                <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                                <div class="el-upload__tip"
                                     slot="tip">上传附件，文件不能超过2M</div>
                            </el-upload>
                        </el-form-item>

                    </el-col>
                </el-row>
            </el-form>
        </section>

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
            fileList: [
                {
                    id: '1',
                    url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
                },
                {
                    id: '2',
                    url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
                }
            ],
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
        handleRemove(file, fileList) {
            console.log(file);
            console.log(fileList);
        }
    },
    mounted() {
        console.log(this.editorStatus);
        console.log(this.editorData);

    }
}
</script>
<style lang="scss" scoped>
.editor-dialog-content {
    max-height: 360px;
    overflow-y: auto;
    padding-right: 10px;
}
.editor-dialog-content::-webkit-scrollbar {
    /*滚动条整体样式*/
    width: 5px; /*高宽分别对应横竖滚动条的尺寸*/
    height: 1px;
}
.editor-dialog-content::-webkit-scrollbar-thumb {
    /*滚动条里面小方块*/
    border-radius: 100px;
    -webkit-box-shadow: inset 0 0 5px rgba(210, 210, 210, 0.1);
    background: #d2d2d2;
}
.editor-dialog-content::-webkit-scrollbar-track {
    /*滚动条里面轨道*/
    -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.1);
    border-radius: 100px;
    background: #f2f2f2;
}
</style>

