<template>
   <div>
    <el-menu default-active="1-4-1" class="el-menu-vertical-demo" background-color="" text-color=""  active-text-color="#018ffb"  @open="handleOpen" @close="handleClose" >
        <el-menu-item @click="clickMenu(item)" v-for="item in noChildren" :key="item.path" :index="item.path">
            <i :class="'el-icon-'+item.icon"></i>
            <span slot="title">{{item.label}}</span>
        </el-menu-item>
  <el-submenu v-for="item in hasChildren" :key="item.path"  :index="item.path">
    <template slot="title">
      <i :class="'el-icon-'+item.icon"></i>
      <span slot="title">{{item.label}}</span>
    </template>
     <el-menu-item-group v-for="(subItem,subIndex) in item.children" :key="subIndex"> 
        <el-menu-item :index="subItem.label">{{subItem.label}}</el-menu-item>
    </el-menu-item-group>
  </el-submenu>

 
</el-menu>
   </div>
</template>
<style>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>

<script>
  export default {
    data() {
      return {
       menu:[
        {
            path:'/',
            name:'home',
            label:'首页',
            icon:'s-home',
            url:'Home/Home'
        },
        {
            path:'/mall',
            name:'mall',
            label:'商品管理',
            icon:'video-lpay',
            url:'Mal1Manage/Ma11Manage'
        },    
        {
            path:'/user',
            name:'user',
            label:'用户管理',
            icon:'user',
            url:'UserManage/UserManage'
        },    
        {
            path:'其他',
            name:'location',
            label:'其他',
            children:[
               {
                    path:'/page1',
                    name:'page1',
                    label:'页面1',
                    icon:'setting',
                    url:'Other/PageOne'
                 },  
                {
                    path:'/page2',
                    name:'page2',
                    label:'页面3',
                    icon:'setting',
                    url:'Other/PageTwo'
                 },  
            ]
        }
       ]
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      clickMenu(item){
        this.$router.push({
            name:item.name
        })
      }
    },
    computed:{
        noChildren(){
           return this.menu.filter(item =>!item.children) 
        },
        hasChildren(){
           return this.menu.filter(item =>item.children) 
        }
    }
  }
</script>