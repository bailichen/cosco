<template>
    <section>
        <el-form :inline="true"
                 @submit.native.prevent>
            <el-form-item>
                <el-select v-model="filter.type"
                           @change="getDataList(1)"
                           filterable
                           size="small"
                           clearable
                           placeholder="请选择信息库类型">
                    <el-option value="">全部</el-option>
                    <el-option v-for="item in typeList"
                               :key="item.value"
                               :label="item.label"
                               :value="item.value"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-select v-model="filter.gysValue"
                           @change="getDataList(1)"
                           filterable
                           size="small"
                           clearable
                           placeholder="请选择供应商">
                    <el-option value="">全部</el-option>
                    <el-option v-for="item in typeList"
                               :key="item.value"
                               :label="item.label"
                               :value="item.value"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-input placeholder="请输入搜索内容"
                          v-model="searchValue"
                          size="small"
                          @keyup.enter.native="getDataList(1)"
                          clearable>
                </el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" size="small">新增</el-button>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" size="small">批量删除</el-button>
            </el-form-item>
        </el-form>
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
            typeList:[
                {
                    label:'哈哈哈',
                    value:'1'
                }
            ],
            filter: {
                searchValue: '', //搜索内容
                infoType:'', // 信息库类型
                gysValue:'', // 供应商
            }

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
        width: 33.33%;
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
}
</style>

<style>
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
</style>
