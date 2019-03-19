<template>
    <el-dialog title="删除"
               :visible.sync="currentValue"
               width="30%"
               center>
        <p class="delete-text">{{textCont}}</p>
        <span slot="footer"
              class="dialog-footer">
            <el-button @click="currentValue = false">取 消</el-button>
            <el-button type="primary"
                       @click="handleQuery">确 定</el-button>
        </span>
    </el-dialog>

</template>
<script>
import TwoWay from '@/mixins/two-way/two-way'

export default {
    mixins: [TwoWay],
    props: ['textCont'],
    data() {
        return {

        }
    },
    methods: {
        handleQuery() {
            this.$emit('handleQuery')
            this.currentValue = false;
            
        },
    }
}
</script>
<style lang="scss">
.delete-text{
    text-align: center;
    font-size: 20px;
    color: #000;
}
</style>

