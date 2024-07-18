<template>
        <el-row class="home" :gutter="20">
            <el-row>
                <el-col :span="8" style="margin-top:20px ">
                <el-card class="box-card" style="height:400px">
               <div class="s-card1">
                <span>园区接入监控</span>
                <span>查看离线</span>
               </div>
               <ul class="b-card1">
                   <li><p>16</p><p>总数</p></li>
                   <li><p>16</p><p>在线</p></li>
                   <li><p>1</p><p>离线</p></li>
                   <li><p>93.75%</p><p>在线率</p></li>
               </ul>

                </el-card>
                </el-col>

                <el-col :span="8"></el-col>
            </el-row>
        </el-row>
</template>
<script>
import {getMenu} from '../../api/data' 
export default ({
   name:'homeName',
   data(){
    return {}
   },
   mounted(){
    getMenu().then(res=>{
        console.log(res);
    })

   }
})
</script>


<style lang="less" scoped>
.home {
    .s-card1 {
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;
        font-weight: bold;
        font-size: 16px;
    }
    .b-card1 {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        padding: 24px;
        list-style: none;
        li {
            width: 40%;
            height: 141px;
            margin-right: 5%;
            margin-bottom: 5%;
            background-color: #FBFBFD;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        li:nth-child(2n) {
            margin-right: 0; /* 移除每个第二个元素的右边距 */
        }
        .number {
            font-size: 24px;
            color: #333;
            font-weight: bold;
        }
        .label {
            font-size: 14px;
            color: #666;
        }
    }
}
</style>
