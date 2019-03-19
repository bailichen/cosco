<template>
    <section>
        <section class="index-center">
            <div class="index-center-left">
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
                     class="btn-img"
                     @click="handleEditor('add')" />
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
                <el-table-column label="级别"
                                 prop="desc"
                                 show-overflow-tooltip>
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
                                <div class="delete"><span @click="isDetele = true">删除</span></div>
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
        <editor-dialog v-if="isEdit" v-model="isEdit"
                       :editorStatus="editorStatus"
                       :editorData="editorData"></editor-dialog>
        <delete-dialog v-if="isDetele" textCont="确认删除？"
                       v-model="isDetele" @handleQuery="handleQuery"></delete-dialog>
    </section>

</template>
<script>
import EditorDialog from './editor-dialog.vue'
import DeleteDialog from '@/components/delete-dialog.vue'
export default {
    name: "reale-state-list",
    components: {
        EditorDialog,
        DeleteDialog,
    },
    data() {
        return {
            isEdit: false,
            isDetele: false,
            editorStatus: null, // 编辑or新增传值
            editorData: {},
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
            filter: {
                searchValue: '', //搜索内容
            },
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
        },
        getDataList(val) {
            // 接口数据获取
        },
        handleEditor(val) {
            this.isEdit = true;
            val == "add" ? this.editorStatus = "add" : this.editorStatus = "editor"
            if (this.editorStatus == 'editor') {
                // 若是编辑，传id（信息）给子组件
                this.editorData = val
            }
        },
        handleQuery(){
            console.log('调取确认删除接口') 
        }
    },
    mounted() {
        console.log('员工信息库');
    }
}
</script>
<style lang="scss">
/*import '~/gys.scss'*/
@import "~@/view/gys/gys.scss";
</style>
