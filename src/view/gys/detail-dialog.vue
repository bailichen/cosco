<template>
    <el-dialog class="detail-dialog"
               :title="detailText"
               append-to-body
               :visible.sync="currentValue"
               width="80%"
               center>
        <slot name="detailBtn"></slot>
        <el-table class="detail-dialog-table"
                  :data="detailData"
                  border
                  style="width: 100%">
            <el-table-column prop="date"
                             label="日期"
                             width="180">
            </el-table-column>
            <el-table-column prop="name"
                             label="姓名"
                             width="180">
            </el-table-column>
            <el-table-column prop="address"
                             label="地址">
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
    </el-dialog>
</template>
<script>
import TwoWay from '@/mixins/two-way/two-way'
export default {
    mixins: [TwoWay],
    props: {
        detailText: {
            type: String,
            default: ''
        },
        total: {
            type: Number,
            default: 0
        },
        detailData: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {
            currentPage: 0, // 当前页
        }
    },
    methods: {
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
        },
    }
}
</script>
<style lang="scss">
.detail-dialog-table {
    margin-top: 10px;
}
.detail-dialog .detail-dialog-table {
    .el-table td,
    .el-table th.is-leaf {
        border-bottom: 1px solid #dcdcdc !important;
    }
}
</style>

