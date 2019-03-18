<template>
    <section class="gys-list">
        <section class="index-top">
            <!--tab菜单组件-->
            <cosco-tabs :tabTop="tabTop"
                        @handleChooseParet="handleTopClick"
                        @handleChooseChild="handleChildClick"></cosco-tabs>
        </section>
        <div>
            <supplier-information-list v-if="menusChoose == 0"></supplier-information-list>
        </div>
    </section>
</template>
<script>
import CoscoTabs from '@/components/cosco-tabs.vue'
import SupplierInformationList from './supplierP-information-list.vue'

export default {
    components: {
        CoscoTabs,
        SupplierInformationList, // 供应商基础信息
    },
    data() {
        return {
            menusChoose: '0',
            tabTop: [
                {
                    lable: '供应商基础信息',
                    value: '0',
                    children: [
                    ]
                }
            ]
        }
    },
    methods: {
        handleTopClick(item) {
            console.log(item)
            this.menusChoose = item.value;
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
