<template>
  <div>
    <el-container class="base-layout">
      <HeaderBar/>
      <el-container>
       <MenuAside/>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import HeaderBar from './components/HeaderBar'
import MenuAside from './components/MenuAside'
export default {
  name: "base-layout",
  components:{
    HeaderBar,
    MenuAside
  }
};
</script>

<style lang='scss' scoped>
 .base-layout{
   @include wh (100vw,100vh);
   display: block;
   overflow: hidden;
 }
</style>