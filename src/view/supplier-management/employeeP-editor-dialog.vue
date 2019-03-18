<template>
    <el-dialog :title="editorText"
               :visible.sync="currentValue"
               width="30%"
               center>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="员工类型:" prop="emType">
                <el-input size="small" v-model="ruleForm.emType"></el-input>
            </el-form-item>
            <el-form-item label="工号:" prop="emNumber">
                <el-input size="small" v-model="ruleForm.emNumber"></el-input>
            </el-form-item>
            <el-form-item label="部门:" prop="emDepartment">
                <el-input size="small" v-model="ruleForm.emDepartment"></el-input>
            </el-form-item>
            <el-form-item label="姓名:" prop="emName">
                <el-input size="small" v-model="ruleForm.emName"></el-input>
            </el-form-item>
            <el-form-item label="性别:" prop="emSex">
                <el-input size="small" v-model="ruleForm.emSex"></el-input>
            </el-form-item>
            <el-form-item label="状态:" prop="emState">
                <el-input size="small" v-model="ruleForm.emState"></el-input>
            </el-form-item>
            <el-form-item label="基本工资:" prop="embasicMoney">
                <el-input size="small" v-model="ruleForm.embasicMoney"></el-input>
            </el-form-item>
            <el-form-item label="身份证号:" prop="emIdCard">
                <el-input size="small" v-model="ruleForm.emIdCard"></el-input>
            </el-form-item>
            <el-form-item label="出生年月:" prop="emBirthday">
                <el-input size="small" v-model="ruleForm.emBirthday"></el-input>
            </el-form-item>
            <el-form-item label="工作时间:" prop="emWorkDate">
                <el-input size="small" v-model="ruleForm.emWorkDate"></el-input>
            </el-form-item>
            <el-form-item label="毕业院校:" prop="emSchool">
                <el-input size="small" v-model="ruleForm.emSchool"></el-input>
            </el-form-item>
            <el-form-item label="毕业时间:" prop="emGraduationTime">
                <el-input size="small" v-model="ruleForm.emGraduationTime"></el-input>
            </el-form-item>
            <el-form-item label="所学专业:" prop="emProfessional">
                <el-input size="small" v-model="ruleForm.emProfessional"></el-input>
            </el-form-item>
            <el-form-item label="学位:" prop="emAcademic">
                <el-input size="small" v-model="ruleForm.emAcademic"></el-input>
            </el-form-item>
            <el-form-item label="学历:" prop="emDegress">
                <el-input size="small" v-model="ruleForm.emDegress"></el-input>
            </el-form-item>
            <el-form-item label="职称:" prop="emTitles">
                <el-input size="small" v-model="ruleForm.emTitles"></el-input>
            </el-form-item>
            <el-form-item label="职务:" prop="emOfficer">
                <el-input size="small" v-model="ruleForm.emOfficer"></el-input>
            </el-form-item>
            <el-form-item label="政治面貌:" prop="emPolitical">
                <el-input size="small" v-model="ruleForm.emPolitical"></el-input>
            </el-form-item>
            <el-form-item label="入团党时间:" prop="emThePartyTime">
                <el-input size="small" v-model="ruleForm.emThePartyTime"></el-input>
            </el-form-item>
            <el-form-item label="入民主党派时间:" prop="emPoliticalTime">
                <el-input size="small" v-model="ruleForm.emPoliticalTime"></el-input>
            </el-form-item>
            <el-form-item label="家庭住址:" prop="emAddress">
                <el-input size="small" type="textarea" v-model="ruleForm.emAddress"></el-input>
            </el-form-item>
            <el-form-item label="现居住地址:" prop="emNowAdderss">
                <el-input size="small" type="textarea" v-model="ruleForm.emNowAdderss"></el-input>
            </el-form-item>
            <el-form-item label="邮政编码:" prop="emPostcode">
                <el-input size="small" v-model="ruleForm.emPostcode"></el-input>
            </el-form-item>
            <el-form-item label="紧急联系人:" prop="emContactUser">
                <el-input size="small" v-model="ruleForm.emContactUser"></el-input>
            </el-form-item>
            <el-form-item label="手机号:" prop="emPhone">
                <el-input size="small" v-model="ruleForm.emPhone"></el-input>
            </el-form-item>
            <el-form-item label="邮箱:" prop="emEmail">
                <el-input size="small" v-model="ruleForm.emEmail"></el-input>
            </el-form-item>
            <el-form-item label="岗位:" prop="emPosition">
                <el-input size="small" v-model="ruleForm.emPosition"></el-input>
            </el-form-item>
            <el-form-item label="曾用名:" prop="emOldName">
                <el-input size="small" v-model="ruleForm.emOldName"></el-input>
            </el-form-item>
            <el-form-item label="民族:" prop="emNation">
                <el-input size="small" v-model="ruleForm.emNation"></el-input>
            </el-form-item>
            <el-form-item label="籍贯:" prop="emBorn">
                <el-input size="small" v-model="ruleForm.emBorn"></el-input>
            </el-form-item>
            <el-form-item label="出生地:" prop="emBornAddress">
                <el-input size="small" v-model="ruleForm.emBornAddress"></el-input>
            </el-form-item>
            <el-form-item label="婚姻状况:" prop="emMarriage">
                <el-input size="small" v-model="ruleForm.emMarriage"></el-input>
            </el-form-item>
            <el-form-item label="英语水平:" prop="emEnglishLevel">
                <el-input size="small" v-model="ruleForm.emEnglishLevel"></el-input>
            </el-form-item>
            <el-form-item label="计算机水平:" prop="emITlevel">
                <el-input size="small" v-model="ruleForm.emITlevel"></el-input>
            </el-form-item>
            <el-form-item label="特长爱好:" prop="emHobby">
                <el-input size="small" type="textarea" v-model="ruleForm.emHobby"></el-input>
            </el-form-item>
            <el-form-item label="奖惩情况:" prop="emAwardPenalty">
                <el-input size="small" type="textarea" v-model="ruleForm.emAwardPenalty"></el-input>
            </el-form-item>
            <el-form-item label="其它说明:" prop="emOtherInfor">
                <el-input size="small" type="textarea" v-model="ruleForm.emOtherInfor"></el-input>
            </el-form-item>
            <el-form-item label="来源公益社类型:" prop="emSource">
                <el-input size="small" v-model="ruleForm.emSource"></el-input>
            </el-form-item>
            <el-form-item label="社保类型:" prop="emHealthType">
                <el-input size="small" v-model="ruleForm.emHealthType"></el-input>
            </el-form-item>
            <el-form-item label="合同类型:" prop="emContract">
                <el-input size="small" v-model="ruleForm.emContract"></el-input>
            </el-form-item>
            <el-form-item label="合同开始日期:" prop="emContractStartDate">
                <el-input size="small" v-model="ruleForm.emContractStartDate"></el-input>
            </el-form-item>
            <el-form-item label="合同结束日期:" prop="emContractEndDate">
                <el-input size="small" v-model="ruleForm.emContractEndDate"></el-input>
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
    // props: ['editorStatus', 'editorData'],
    props:{
        editorStatus:{
            type:String,
            default:''
        },
        editorData:{
            type:Object,
            default:()=>{}
        }
    },
    data() {
        return {
            ruleForm: {
                    emType: "",
                    emNumber: "",
                    emDepartment: "",
                    emName: "",
                    emSex: "",
                    emState: "",
                    embasicMoney: "",
                    emIdCard: "",
                    emBirthday: "",
                    emWorkDate: "",
                    emSchool: "",
                    emGraduationTime: "",
                    emProfessional: "",
                    emAcademic: "",
                    emDegress: "",
                    emTitles: "",
                    emOfficer: "",
                    emPolitical: "",
                    emThePartyTime: "",
                    emPoliticalTime: "",
                    emAddress: "",
                    emNowAdderss: "",
                    emPostcode: "",
                    emContactUser: "",
                    emPhone: "",
                    emEmail: "",
                    emPosition: "",
                    emOldName: "",
                    emNation: "",
                    emBorn: "",
                    emBornAddress: "",
                    emMarriage: "",
                    emEnglishLevel: "",
                    emITlevel: "",
                    emHobby: "",
                    emAwardPenalty: "",
                    emOtherInfor: "",
                    emSource: "",
                    emHealthType: "",
                    emContract: "",
                    emContractStartDate: "",
                    emContractEndDate: ""
                },
                rules: {
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
                        this.$api.basicDatabase_personDb_saveEmployee(this.ruleForm).then(res => {
                             console.log(res);
                         });
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
