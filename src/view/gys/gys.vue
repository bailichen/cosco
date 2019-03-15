<template>
    <section class="gys-list">
        <section class="index-top">
            <el-tabs v-model="topActive" @tab-click="handleTopClick">
                <el-tab-pane v-for="item in tabTop" :key="item.value" :label="item.lable"
                             :name="item.value">

                </el-tab-pane>
            </el-tabs>
            <el-tabs v-model="topChild" @tab-click="handleChildClick">
                <el-tab-pane v-for="item in tabChild" :key="item.value" :label="item.lable"
                             :name="item.value">

                </el-tab-pane>
            </el-tabs>
        </section>
        <section class="index-center">
            <div class="index-center-left">
                共计<span>{{total}}</span>家供应商
            </div>
            <div class="index-center-right">
                <el-input
                    placeholder="请输入内容"
                    class="index-center-right-input"
                    v-model="filter.searchValue">
                    <i slot="prefix" class="el-input__icon el-icon-search"></i>
                </el-input>
                <img src="@/assets/images/add.png" class="btn-img"/>
                <img src="@/assets/images/refresh.png" class="btn-img"/>
                <img src="@/assets/images/printer.png" class="btn-img"/>
                <img src="@/assets/images/save.png" class="btn-img"/>
                <img src="@/assets/images/output.png" class="btn-img"/>
            </div>
        </section>
        <section class="table-list">
            <el-table :data="tableData"
                      @selection-change="handleSelectionChange"
                      style="width: 100%">
                <el-table-column type="selection"
                                 width="55">
                </el-table-column>
                <el-table-column type="index"
                                 label="序号"
                                 width="50">
                </el-table-column>
                <el-table-column label="供应商ID"
                                 prop="id"
                                 width="120">
                </el-table-column>
                <el-table-column label="供应商全称"
                                 prop="name"
                                 width="200">
                </el-table-column>
                <el-table-column label="级别"
                                 prop="desc">
                </el-table-column>
                <el-table-column type="expand">
                    <template slot-scope="props">
                        <section class="table-expand clear">
                            <section>
                                <p class="clear">
                                    <span>公司联系人</span>
                                    <i>{{props.row.category}}</i>
                                </p>
                                <p class="clear">
                                    <span>注册地址</span>
                                    <i>张三张三张三张三张三</i>
                                </p>
                            </section>
                            <section>
                                <p class="clear">
                                    <span>公司联系人</span>
                                    <i>张三</i>
                                </p>
                            </section>
                            <section>
                                <p class="clear">
                                    <span>公司联系人</span>
                                    <i>张三</i>
                                </p>
                            </section>
                            <section class="last-btn">
                                <div class="edit">编辑</div>
                                <div class="delete">删除</div>
                            </section>
                        </section>
                    </template>
                </el-table-column>
            </el-table>
            <el-pagination @size-change="handleSizeChange"
                           @current-change="handleCurrentChange"
                           :current-page="currentPage"
                           :page-sizes="[10, 20, 30, 40]"
                           :page-size="10"
                           layout="total, sizes, prev, pager, next, jumper"
                           :total="total">
            </el-pagination>
        </section>

    </section>
</template>
<script>
    export default {
        data() {
            return {
                currentPage: 0, // 当前页
                total: 4, // 总页数
                tableData: [{
                    id: '12987122',
                    name: '好滋好味鸡蛋仔',
                    category: '江浙小吃、小吃零食',
                    desc: '荷兰优质淡奶，奶香浓而不腻',
                    address: '上海市普陀区真北路',
                    shop: '王小虎夫妻店',
                    shopId: '10333'
                }, {
                    id: '12987123',
                    name: '好滋好味鸡蛋仔',
                    category: '江浙小吃、小吃零食',
                    desc: '荷兰优质淡奶，奶香浓而不腻',
                    address: '上海市普陀区真北路',
                    shop: '王小虎夫妻店',
                    shopId: '10333'
                }, {
                    id: '12987125',
                    name: '好滋好味鸡蛋仔',
                    category: '江浙小吃、小吃零食',
                    desc: '荷兰优质淡奶，奶香浓而不腻',
                    address: '上海市普陀区真北路',
                    shop: '王小虎夫妻店',
                    shopId: '10333'
                }, {
                    id: '12987126',
                    name: '好滋好味鸡蛋仔',
                    category: '江浙小吃、小吃零食',
                    desc: '荷兰优质淡奶，奶香浓而不腻',
                    address: '上海市普陀区真北路',
                    shop: '王小虎夫妻店',
                    shopId: '10333'
                }],
                multipleSelection: [], // 选择数组
                typeList: [
                    {
                        label: '哈哈哈',
                        value: '1'
                    }
                ],
                filter: {
                    searchValue: '', //搜索内容
                    infoType: '', // 信息库类型
                    gysValue: '', // 供应商
                },
                topActive: '0',
                topChild:'0',
                tabTop: [
                    {
                        lable: '员工信息库',
                        value: '0'
                    },
                    {
                        lable: '不动产信息库',
                        value: '1'
                    }
                ],
                tabChild:[
                    {
                        lable: '临时供应商',
                        value: '0'
                    },
                    {
                        lable: '合格供应商',
                        value: '1'
                    }
                ]
            }
        },
        methods: {
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
            },
            handleSelectionChange(val) {
                this.multipleSelection = val;
                console.log(val);
            },
            getDataList(val) {
                // 接口数据获取
            },
            handleTopClick() {
                console.log(this.topActive)
            },
            handleChildClick(){
                console.log(this.topChild)
            }
        },
        mounted() {

        },
    }
</script>
<style lang="scss" scoped>


    .table-expand {
        section {
            float: left;
            box-sizing: border-box;
            width: 25%;
            padding-left: 66px;
            p {
                display: block;
                width: 100%;
                margin-bottom: 10px;
                span {
                    display: block;
                    font-weight: 700;
                    color: #000;
                    float: left;
                    width: 40%;
                }
                i {
                    width: 60%;
                    float: left;
                    display: block;
                    font-style: normal;
                }
            }
        }
        .last-btn{
            div{
                width: 130px;
                height: 45px;
                line-height: 45px;
                text-align: center;
                color: #fff;
                cursor: pointer;

            }
            .edit{
                background: #1f7ed0;
                margin-bottom: 10px;
            }
            .delete{
                background: #f39800;
            }
        }
    }
    .index-center{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0px 40px 10px;
        .index-center-left{
            span{
                color: #f39800;
            }
        }
    }
    .table-list{
        padding-right: 20px;
    }
</style>

<style lang="scss">
    .table-list .el-table td, .el-table th.is-leaf{
        border-bottom: 8px solid #dcdcdc !important;
    }
    .table-list .el-table::before{
        height: 0;
    }
    .table-list .el-icon-arrow-right:before{
        content: "\e603";
    }
    .table-list .el-table__expand-icon--expanded{
        transform: rotate(180deg);
        .el-icon{
            margin-left: -8px;
        }
    }
    .gys-list {
        .index-top {
            background: #fff;
            margin-bottom: 10px;
            .el-tabs__header {
                margin: 0 !important;
            }
            .el-tabs__nav-wrap {
                padding-left: 40px;
            }
            .el-tabs__item.is-active{
                color: #303133;
            }
            .el-tabs__item:hover{
                color: #f39800;
            }
            .el-tabs__active-bar{
                background: #f39800;
            }
        }
    }
    .demo-table-expand {
        font-size: 0;
    }

    .demo-table-expand label {
        width: 90px;
        color: #99a9bf;
    }

    .demo-table-expand .el-form-item {
        margin-right: 0;
        margin-bottom: 0;
        width: 50%;
    }
    .index-center .index-center-right{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        .btn-img{
            display: block;
            height: 20px;
            width: auto;
            margin-left: 10px;
        }
        .index-center-right-input{
            .el-input__inner{
                background: #eee;
                border: 0;
            }

        }
    }
</style>
