<template>
    <section class="cont">
        <div class="robot">
            <el-popover placement="left-start" width="200" trigger="click">
                <span>客服电话：<b>400 101 5559</b></span>
                <div class="kf" slot="reference">
                    <!-- <img class="robot-img" src="../assets/images/icon_service.svg"/> -->
                    <span>客服</span>
                </div>
            </el-popover>
            <el-popover placement="left-start" width="200" trigger="click">
                <div class="code-img" style="padding-left: 19px;">
                    <!-- <img src="../assets/images/erweima.png" height="138" width="140"/> -->
                    <p>请使用微信扫描二维码</p>
                    <p>下载口碑工作-创客版</p>
                </div>
                <div class="down-load" slot="reference">
                    <!-- <img class="robot-img" src="../assets/images/erweima.svg" /> -->
                    <span>下载</span>
                </div>
            </el-popover>
        </div>
    </section>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
.robot {
    position: fixed;
    width: 45px;
    height: 100px;
    top: 78%;
    right: 0;
    z-index: 10;
    text-align: center;
    color: #fff;
    font-size: 10px;
    line-height: 14px;
}
.robot .kf {
    cursor: pointer;
    background-color: #f05962;
    margin-bottom: 10px;
    height: 45px;
}
.robot .down-load {
    cursor: pointer;
    height: 45px;
    background-color: #f05962;
    position: relative;
    .code-img {
        position: absolute;
        background-size: 100% 100%;
        width: 260px;
        height: 290px;
        right: 26px;
        bottom: -58px;
        box-sizing: border-box;
        padding: 43px 0 0 43px;
        img {
            display: block;
            width: 160px;
            height: 160px;
            margin-bottom: 6px;
        }
        p {
            display: block;
            text-align: center;
            width: 160px;
            color: #131313;
            margin: 0;
            font-size: 12px;
            line-height: 18px;
        }
    }
}
.robot .robot-img {
    width: 18px;
    margin: 6px 12px 0;
}
</style>