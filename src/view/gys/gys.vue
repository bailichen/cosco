<template>
    <section class="gys-list">
        <section class="index-top">
            <!--tab菜单组件-->
            <cosco-tabs :tabTop="tabTop"
                        @handleChooseParet="handleTopClick"
                        @handleChooseChild="handleChildClick"></cosco-tabs>
        </section>

        <main-list></main-list>
        <editor-dialog v-model="isEdit"></editor-dialog>
    </section>
</template>
<script>
    import CoscoTabs from '@/components/cosco-tabs.vue'
    import EditorDialog from './editor-dialog.vue'
    import MainList from './main-list.vue'

    export default {
        components: {
            CoscoTabs,
            EditorDialog,
            MainList
        },
        data() {
            return {
                isEdit: false,

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
            },
            handleChildClick(item) {

                console.log(item)
            },
            handleEditor(val) {
                this.isEdit = true;
            }
        },
        mounted() {

        },
    }
</script>


