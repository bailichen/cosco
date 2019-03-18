<template>
    <section class="gys-list">
        <section class="index-top">
            <!--tab菜单组件-->
            <cosco-tabs :tabTop="tabTop"
                        @handleChooseParet="handleTopClick"
                        @handleChooseChild="handleChildClick"></cosco-tabs>
        </section>
        <div>
            <staff-information-list v-if="menusChoose == 0"></staff-information-list>
            <reale-state-list v-if="menusChoose == 1"></reale-state-list>
        </div>

    </section>
</template>
<script>
import CoscoTabs from '@/components/cosco-tabs.vue'
import StaffInformationList from './staff-information-list.vue'
import RealeStateList from './reale-state-list.vue' // 不动产信息库

export default {
    components: {
        CoscoTabs,
        StaffInformationList, // 员工信息库
        RealeStateList, // 不动产信息库
    },
    data() {
        return {
            menusChoose: '0',
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
                    children: []
                },
                {
                    lable: '客户信息库',
                    value: '2',
                    children: [],
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
                    children: [],
                }
            ]
        }
    },
    methods: {

        handleTopClick(item) {
            console.log(item)
            this.menusChoose = item.value
        },
        handleChildClick(item) {

            console.log(item)
        },
    },
    mounted() {

    },
}
</script>


