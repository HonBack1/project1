<template>
    <header>
        <div class="l-left">
            <img src="../assets/logo.png">
            <span>视频智能应用运维平台</span>
        </div>
    </header>
</template>
<script>
export default ({
  data(){
    return{}
  }
})
</script>
<style lang="less" scoped>
header{
    background-color: #171246;
    color: #fff;
    .l-left{
        display: flex;
        justify-content: flex-start;
        width: 30vh;
        img{
            width: 22px;
            margin-right: 10px;
        }
    }
}
</style>
