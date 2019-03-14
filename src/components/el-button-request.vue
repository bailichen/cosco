<template>
    <el-button class="el-button-request"
               :class="{'on-loading':loading}"
               :type="type"
               :size="size"
               :disabled="loading"
               @click="handleClick">
        <i class="el-icon-loading"
           v-if="loading"></i>
        <slot></slot>
    </el-button>
</template>
<script>
    export default {
        props: ['type', 'size', 'request'],
        data() {
            return {
                loading: false
            }
        },
        methods: {
            handleClick() {
                if (!this.loading) {
                    if (typeof this.request === 'function') {
                        this.loading = true;
                        try {
                            this.request().finally(() => {
                                this.loading = false;
                            })
                        }
                        catch (err) {
                            console.warn('this binding requset does not returns a Pormise')
                            this.loading = false;
                        }
                    }
                }
                else {
                    return false;
                }
            }
        }
    }
</script>
