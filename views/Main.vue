<template>
    <div>
      <el-container> 
          <el-header width='auto' style="height:3vh">
            <common-header></common-header>
          </el-header>
      <el-container>
          <el-aside width="200px"  >
            <common-aside></common-aside>
          </el-aside>
          <el-main>
            <router-view></router-view>
          </el-main>
      </el-container>
      </el-container>

</div>
</template>
<script>
import CommonAside from '../src/components/CommonAside.vue'
import CommonHeader from '../src/components/CommonHeader.vue'
export default ({
   name:'homeName',
   components:{
    CommonAside,
    CommonHeader
   },
   data(){
    return {}
   }
})
</script>

<style lang="less" scope>

.el-aside{
  height: 97vh;

  }

</style>
