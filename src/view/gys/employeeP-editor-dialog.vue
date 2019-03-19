<template>
    <el-dialog :title="editorText"
               :visible.sync="currentValue"
               width="80%"
               center>
    <section class="editor-dialog-content">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-row type="flex"
                    class="row-bg"
                    justify="center">
                <el-col :span="8">
                    <el-form-item label="员工类型:" prop="emtype">
                    <el-input size="small" v-model="ruleForm.emtype"></el-input>
                    </el-form-item>
                    <el-form-item label="姓名:" prop="emname">
                        <el-input size="small" v-model="ruleForm.emname"></el-input>
                    </el-form-item>
                    <el-form-item label="职称:" prop="emtitles">
                        <el-input size="small" v-model="ruleForm.emtitles"></el-input>
                    </el-form-item>
                    <el-form-item label="身份证号:" prop="emidcard">
                        <el-input size="small" v-model="ruleForm.emidcard"></el-input>
                    </el-form-item>
                    <el-form-item label="曾用名:" prop="emoldname">
                        <el-input size="small" v-model="ruleForm.emoldname"></el-input>
                    </el-form-item>
                    <el-form-item label="出生地:" prop="embornaddress">
                        <el-input size="small" v-model="ruleForm.embornaddress"></el-input>
                    </el-form-item>
                    <el-form-item label="工作时间:" prop="emworkdate">
                        <el-date-picker v-model="ruleForm.emworkdate"
                                            type="date"
                                            value-format="yyyy-MM-dd"
                                            placeholder="选择日期">
                            </el-date-picker>
                    </el-form-item>
                    <el-form-item label="所学专业:" prop="emprofessional">
                        <el-input size="small" v-model="ruleForm.emprofessional"></el-input>
                    </el-form-item>
                    <el-form-item label="政治面貌:" prop="empolitical">
                        <el-input size="small" v-model="ruleForm.empolitical"></el-input>
                    </el-form-item>
                    <el-form-item label="紧急联系人:" prop="emcontactuser">
                        <el-input size="small" v-model="ruleForm.emcontactuser"></el-input>
                    </el-form-item>
                    <el-form-item label="英语水平:" prop="emenglishlevel">
                        <el-input size="small" v-model="ruleForm.emenglishlevel"></el-input>
                    </el-form-item>
                    <el-form-item label="奖惩情况:" prop="emawardpenalty">
                        <el-input size="small" type="textarea" v-model="ruleForm.emawardpenalty"></el-input>
                    </el-form-item>
                    <el-form-item label="合同类型:" prop="emcontract">
                        <el-input size="small" v-model="ruleForm.emcontract"></el-input>
                    </el-form-item>
                    <el-form-item label="状态:" prop="emstate">
                        <el-input size="small" v-model="ruleForm.emstate"></el-input>
                    </el-form-item>
                    
                </el-col>
                <el-col :span="8">
                    <el-form-item label="工号:" prop="emnumber">
                        <el-input size="small" v-model="ruleForm.emnumber"></el-input>
                    </el-form-item>
                    <el-form-item label="性别:" prop="emsex">
                        <el-input size="small" v-model="ruleForm.emsex"></el-input>
                    </el-form-item>
                    <el-form-item label="职务:" prop="emofficer">
                        <el-input size="small" v-model="ruleForm.emofficer"></el-input>
                    </el-form-item>
                    <el-form-item label="手机号:" prop="emphone">
                        <el-input size="small" type="number" v-model="ruleForm.emphone"></el-input>
                    </el-form-item>
                    <el-form-item label="民族:" prop="emnation">
                        <el-input size="small" v-model="ruleForm.emnation"></el-input>
                    </el-form-item>
                    <el-form-item label="现居住地址:" prop="emnowadderss">
                        <el-input size="small" type="textarea" v-model="ruleForm.emnowadderss"></el-input>
                    </el-form-item>
                    <el-form-item label="毕业院校:" prop="emschool">
                        <el-input size="small" v-model="ruleForm.emschool"></el-input>
                    </el-form-item>
                    <el-form-item label="学位:" prop="emacademic">
                        <el-input size="small" v-model="ruleForm.emacademic"></el-input>
                    </el-form-item>
                    <el-form-item label="入团党时间:" prop="emthepartytime">
                        <el-input size="small" type="date" v-model="ruleForm.emthepartytime"></el-input>
                    </el-form-item>
                    <el-form-item label="婚姻状况:" prop="emmarriage">
                        <el-input size="small" v-model="ruleForm.emmarriage"></el-input>
                    </el-form-item>
                    <el-form-item label="计算机水平:" prop="emitlevel">
                        <el-input size="small" v-model="ruleForm.emitlevel"></el-input>
                    </el-form-item>
                    <el-form-item label="社保类型:" prop="emhealthtype">
                        <el-input size="small" v-model="ruleForm.emhealthtype"></el-input>
                    </el-form-item>
                    <el-form-item label="合同开始日期:" prop="emcontractstartdate">
                        <el-input size="small" type="date" v-model="ruleForm.emcontractstartdate"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="部门:" prop="emdepartment">
                        <el-input size="small" v-model="ruleForm.emdepartment"></el-input>
                    </el-form-item>
                    <el-form-item label="出生年月:" prop="embirthday">
                        <el-input size="small" type="date" v-model="ruleForm.embirthday"></el-input>
                    </el-form-item>
                    <el-form-item label="岗位:" prop="emposition">
                        <el-input size="small" v-model="ruleForm.emposition"></el-input>
                    </el-form-item>
                    <el-form-item label="邮箱:" prop="ememail">
                        <el-input size="small" type="email" v-model="ruleForm.ememail"></el-input>
                    </el-form-item>
                    <el-form-item label="籍贯:" prop="emborn">
                        <el-input size="small" v-model="ruleForm.emborn"></el-input>
                    </el-form-item>
                    <el-form-item label="家庭住址:" prop="emaddress">
                        <el-input size="small" type="textarea" v-model="ruleForm.emaddress"></el-input>
                    </el-form-item>
                    <el-form-item label="毕业时间:" prop="emgraduationtime">
                        <el-input size="small" type="date" v-model="ruleForm.emgraduationtime"></el-input>
                    </el-form-item>
                    <el-form-item label="学历:" prop="emdegress">
                        <el-input size="small" v-model="ruleForm.emdegress"></el-input>
                    </el-form-item>
                    <el-form-item label="入民主党时间:" prop="empoliticaltime">
                        <el-input size="small" type="date" v-model="ruleForm.empoliticaltime"></el-input>
                    </el-form-item>
                    <el-form-item label="基本工资:" prop="embasicmoney">
                        <el-input size="small" v-model="ruleForm.embasicmoney"></el-input>
                    </el-form-item>
                    <el-form-item label="特长爱好:" prop="emhobby">
                        <el-input size="small" type="textarea" v-model="ruleForm.emhobby"></el-input>
                    </el-form-item>
                    <el-form-item label="其它说明:" prop="emotherinfor">
                        <el-input size="small" type="textarea" v-model="ruleForm.emotherinfor"></el-input>
                    </el-form-item>
                    <el-form-item label="合同结束日期:" prop="emcontractenddate">
                        <el-input size="small" type="date" v-model="ruleForm.emcontractenddate"></el-input>
                    </el-form-item>
                    <el-form-item label="来源公益社类型:" prop="emsource">
                        <el-input size="small" v-model="ruleForm.emsource"></el-input>
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
                default: () => {
                }
            }
        },
        data() {
            return {
                ruleForm: {
                    emtype: "",
                    emnumber: "",
                    emdepartment: "",
                    emname: "",
                    emsex: "",
                    emstate: "",
                    embasicmoney: "",
                    emidcard: "",
                    embirthday: "",
                    emworkdate: "",
                    emschool: "",
                    emgraduationtime: "",
                    emprofessional: "",
                    emacademic: "",
                    emdegress: "",
                    emtitles: "",
                    emofficer: "",
                    empolitical: "",
                    emthepartytime: "",
                    empoliticaltime: "",
                    emaddress: "",
                    emnowadderss: "",
                    empostcode: "",
                    emcontactuser: "",
                    emphone: "",
                    ememail: "",
                    emposition: "",
                    emoldname: "",
                    emnation: "",
                    emborn: "",
                    embornaddress: "",
                    emmarriage: "",
                    emenglishlevel: "",
                    emitlevel: "",
                    emhobby: "",
                    emawardpenalty: "",
                    emotherinfor: "",
                    emsource: "",
                    emhealthtype: "",
                    emcontract: "",
                    emcontractstartdate: "",
                    emcontractenddate: ""
                },
                rules: {}
            }
        },
        computed: {
            editorText() {
                return this.editorStatus == 'add' ? '新增员工信息' : '编辑员工信息'
            }
        },
        methods: {
            submitForm(formName) {
                let vueThis = this;
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        if (this.editorStatus == 'add') {
                            this.$api.basicDatabase_personDb_saveEmployee(this.ruleForm).then(res => {
                                if (res.code == 0) {
                                    vueThis.currentValue = false;
                                } else {
                                    alert(res.msg);
                                }
                            });
                        } else {
                            this.$api.basicDatabase_personDb_updateEmployee(this.ruleForm).then(res => {
                                if (res.code == 0) {
                                    vueThis.currentValue = false;
                                } else {
                                    alert(res.msg);
                                }
                            });
                        }
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
        },
        mounted() {
            /*console.log(this.editorStatus);
            console.log(this.editorData);*/
            if (this.editorData != null) {
                this.ruleForm = this.editorData;
            }
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
