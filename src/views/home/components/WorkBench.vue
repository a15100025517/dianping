<template>
  <div class="work">
    <el-row :gutter="50">
      <el-col :span="12">
        <h1 class="title">河南贝程教育</h1>
      </el-col>
    </el-row>
    <el-row :gutter="50">
      <el-col :span="12">
        <h2 class="samll-title">快捷验劵</h2>
        <el-input placeholder="请输入内容" v-model="input2">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </el-col>
      <el-col :span="12">
          <h2 class="samll-title">常用功能</h2>
          <div class="serve">
              <router-link to="/home">
               <img src="" alt="">
              </router-link>
          </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "work-bench",
};
</script>

<style lang="scss" scoped>
 .work{
     background: url(https://awp-assets.meituan.net/dianpingbmw/merchant-workbench/img/head-bg.a0c46567.png);
     height: 305px;
     background-size: cover;
     padding: 25px;
     .title{
         font-size: 24px;
         color: #fff;
         padding: 15px 0 25px;
         line-height: 44px;
     }
     .samll-title{
         font-size: 14px;
         color: #fff;
         margin-top: 20px;
         margin-bottom: 20px;
     }
 }
</style>