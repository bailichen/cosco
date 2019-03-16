<template>
    <section class="cosco-tabs">
        <ul class="tabs-ul-one clear">
            <li v-for="item in tabTop"
                :key="item.value"
                class="tabs-li-one">
                <span class="tabs-span-one"
                      @click="handleChooseParet(item)"
                      :class="{'tabs-span-one-choose':chooseTop == item.value}">{{item.lable}}</span>
                <section class="children-item" ref="childrenItem"
                         :class="{'children-item-none': !(chooseTop == item.value),'children-item-center':posionControl}">
                    <ul class="tabs-ul-two clear">
                        <li class="tabs-li-two"
                            v-for="childitem in item.children"
                            :key="childitem.value">
                            <span @click="handleChooseChild(childitem)" class="tabs-span-two"
                                  :class="{'tabs-span-two-choose':chooseChild == childitem.value}">{{childitem.lable}}</span>
                        </li>
                    </ul>
                </section>
            </li>
        </ul>
    </section>
</template>
<script>
export default {
    props: ['tabTop'],

    data() {
        return {
            chooseTop: 0,
            chooseChild: 0,
            posionControl:false,
        }
    },
    methods: {
        handleChooseParet(item) {
            this.chooseTop = item.value
            if(item.value > 1){
                this.posionControl = true;
            }else{
                this.posionControl = false;
            }
            this.$emit('handleChooseParet',item)
        },
        handleChooseChild(item) {
            this.chooseChild = item.value
            this.$emit('handleChooseChild',item)
        }
    }
}
</script>
<style lang="scss" scoped>
.cosco-tabs {
    height: 76px;
    background: #fff;
    .tabs-ul-one {
        height: 40px;
        position: relative;
        .tabs-li-one {
            float: left;
            position: relative;
            padding-left: 20px;
            .tabs-span-one {
                display: block;
                line-height: 40px;
                cursor: pointer;
                text-align: center;
            }
            .tabs-span-one:hover {
                color: #f39800;
            }
            .tabs-span-one-choose {
                border-bottom: 3px solid #f39800;
            }
            .children-item {
                min-width: 600px;
                position: absolute;
                left: 0;
                .tabs-ul-two {
                    .tabs-li-two {
                        float: left;
                        padding-left: 20px;
                        .tabs-span-two {
                            display: block;
                            line-height: 30px;
                            font-size: 12px;
                            cursor: pointer;
                            text-align: center;
                        }
                        .tabs-span-two-choose {
                            border-bottom: 3px solid #f39800;
                        }
                    }
                }
            }
            .children-item-center{
                left: 50%;
                transform: translateX(-30%);
            }
            .children-item-none {
                display: none;
            }
        }
    }
    .tabs-ul-one::before {
        content: "";
        position: absolute;
        bottom: -3px;
        display: block;
        width: 100%;
        height: 1px;
        background: #dcdcdc;
    }
}
</style>

