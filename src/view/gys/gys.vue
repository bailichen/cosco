<template>
    <section class="gys-list">
        <section class="index-top">
            <!--tab菜单组件-->
            <cosco-tabs :tabTop="tabTop"
                        @handleChooseParet="handleTopClick"
                        @handleChooseChild="handleChildClick"></cosco-tabs>
        </section>
        <section class="index-center">
            <div class="index-center-left">
                <!--<el-checkbox :indeterminate="isIndeterminate"-->
                             <!--v-model="checkAll"-->
                             <!--class="choose-all"-->
                             <!--@change="handleCheckAllChange">全选</el-checkbox>-->
                共计<span>{{total}}</span>家供应商
            </div>
            <div class="index-center-right">
                <el-input placeholder="请输入内容"
                          class="index-center-right-input"
                          v-model="filter.searchValue">
                    <i slot="prefix"
                       class="el-input__icon el-icon-search"></i>
                </el-input>
                <img src="@/assets/images/add.png"
                     class="btn-img" @click="handleEditor('add')"/>
                <img src="@/assets/images/refresh.png"
                     class="btn-img" />
                <img src="@/assets/images/printer.png"
                     class="btn-img" />
                <img src="@/assets/images/save.png"
                     class="btn-img" />
                <img src="@/assets/images/output.png"
                     class="btn-img" />
            </div>
        </section>
        <section class="table-list">
            <el-table :data="tableData"
                      ref="multipleTable"
                      @selection-change="handleSelectionChange"
                      style="width: 100%">
                <el-table-column type="selection"
                                 width="34">
                </el-table-column>
                <el-table-column type="index"
                                 label="序号"
                                 width="50">
                </el-table-column>
                <el-table-column label="供应商ID"
                                 prop="id">
                </el-table-column>
                <el-table-column label="供应商全称"
                                 prop="name"
                                 show-overflow-tooltip>
                </el-table-column>
                <el-table-column label="级别" prop="desc" show-overflow-tooltip>
                </el-table-column>
                <el-table-column type="expand"
                                 width="220">
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
                                <div class="edit"><span @click="handleEditor(props.row)">编辑</span></div>
                                <div class="delete"><span>删除</span></div>
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
    <editor-dialog v-model="isEdit"></editor-dialog>
    </section>
</template>
<script>
import CoscoTabs from '@/components/cosco-tabs.vue'
import EditorDialog from './editor-dialog.vue'
export default {
    components: {
        CoscoTabs,
        EditorDialog
    },
    data() {
        return {
            isEdit:false,
            currentPage: 0, // 当前页
            total: 4, // 总页数
            checkAll: false,
            isIndeterminate: false,
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
            tabTop: [
                {
                    lable: '员工信息库',
                    value: '0',
                    children: [
                        {
                            lable: '正式员工',
                            value: '0'
                        },
                        {
                            lable: '外聘员工',
                            value: '1'
                        }
                    ]
                },
                {
                    lable: '不动产信息库',
                    value: '1',
                    children: [

                    ]
                },
                {
                    lable: '客户信息库',
                    value: '2',
                    children: [

                    ],
                },
                {
                    lable: '资产信息库',
                    value: '3',
                    children: [
                        {
                            lable: '固定资产',
                            value: '0'
                        },
                        {
                            lable: '非固定资产',
                            value: '1'
                        }
                    ],
                },
                {
                    lable: '企业证书信息库',
                    value: '4',
                    children: [

                    ],
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
            let checkedCount = val.length;
            this.checkAll = checkedCount === this.tableData.length;
            this.isIndeterminate = checkedCount > 0 && checkedCount < this.tableData.length;
        },
        getDataList(val) {
            // 接口数据获取
        },
        handleTopClick(item) {
            console.log(item)
        },
        handleChildClick(item) {

            console.log(item)
        },
        handleEditor(val){
            this.isEdit = true;
        }
    },
    mounted() {

    },
}
</script>
<style lang="scss" scoped>
.table-expand {
    min-height: 100px;
    section {
        float: left;
        box-sizing: border-box;
        width: 25%;
        padding-left: 42px;
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
                font-size: 12px;
                display: block;
                font-style: normal;
            }
        }
    }
    .last-btn {
        position: absolute;
        right: 40px;
        height: 100px;
        div {
            width: 100%;
            text-align: right;
            span {
                display: inline-block;
                width: 130px;
                height: 45px;
                line-height: 45px;
                text-align: center;
                color: #fff;
                cursor: pointer;
            }
        }
        .edit {
            margin-bottom: 10px;
            span {
                background: #1f7ed0;
            }
            span:hover {
                background: #3a8ee6;
            }
            span:active {
                background: #1f7ed0;
            }
        }
        .delete {
            span {
                background: #f39800;
            }
            span:hover {
                background: #f39800;
            }
            span:active {
                background: #f39800ba;
            }
        }
    }
}
.index-center {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 40px 10px 14px;
    .index-center-left {
        span {
            color: #f39800;
        }
    }
    .choose-all {
        margin-right: 10px;
    }
}
.table-list {
    padding-right: 20px;

    .table-item {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        span {
            display: block;
            color: #000;
            font-weight: 700;
        }
        i {
            display: block;
            font-style: normal;
            font-size: 12px;
        }
    }
}
</style>

<style lang="scss">
.table-list .el-table td,
.el-table th.is-leaf {
    border-bottom: 8px solid #dcdcdc !important;
}
.table-list .el-table::before {
    height: 0;
}
.table-list .el-icon-arrow-right:before {
    content: "\e603";
}
.table-list .el-table__expand-icon--expanded {
    transform: rotate(180deg);
    .el-icon {
        margin-left: -8px;
    }
}
/*.table-list thead {*/
    /*display: none !important;*/
/*}*/
.table-list .el-table th,
.table-list .el-table tr {
    position: relative;
}
.gys-list {
    .index-top {
        background: #fff;
        .child-tabs {
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            .el-tabs__nav-wrap {
                margin-bottom: 0 !important;
            }
            .el-tabs__nav-wrap::after {
                background-color: #fff;
            }
            .el-tabs__item {
                font-size: 12px !important;
            }
        }
        .el-tabs__header {
            margin: 0 !important;
        }
        .el-tabs__nav-wrap {
            padding-left: 40px;
        }
        .el-tabs__item.is-active {
            color: #303133;
        }
        .el-tabs__item:hover {
            color: #f39800;
        }
        .el-tabs__active-bar {
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
.index-center .index-center-right {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    .btn-img {
        display: block;
        height: 20px;
        width: auto;
        cursor: pointer;
        margin-left: 10px;
    }
    .btn-img:active {
        box-shadow: 0px 0px 5px grey;
    }
    .index-center-right-input {
        .el-input__inner {
            background: #eee;
            border: 0;
        }
    }
}
</style>
