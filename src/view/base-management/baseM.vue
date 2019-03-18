<template>
    <section class="gys-list">
        <section class="index-top">
            <!--tab菜单组件-->
            <cosco-tabs :tabTop="tabTop"
                        @handleChooseParet="handleTopClick"
                        @handleChooseChild="handleChildClick"></cosco-tabs>
        </section>
        <div>
            <employee-information-list v-if="menusChoose == 0"></employee-information-list>
            <customer-information-list v-if="menusChoose == 2"></customer-information-list>
        </div>
    </section>
</template>
<script>
import CoscoTabs from '@/components/cosco-tabs.vue'
import EmployeeInformationList from './employeeP-information-list.vue'
import CustomerInformationList from './customerP-information-list.vue'

export default {
    components: {
        CoscoTabs,
        EmployeeInformationList, // 员工信息库
        CustomerInformationList //  客户信息库
    },
    data() {
        return {
            menusChoose: '0',
            tabTop: [
                {
                    lable: '员工信息库',
                    value: '0',
                    routerName: '/employee',
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
                    routerName: '/customer',
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
