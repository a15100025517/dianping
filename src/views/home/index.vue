<template>
  <div>
    <WorkBench/>
    <el-row>
      <el-col :span="12"></el-col>
      <el-col :span="12"></el-col>
      <el-col :span="12"></el-col>
      <el-col :span="12"></el-col>
    </el-row>
  </div>
</template>

<script>
import WorkBench from './components/WorkBench'
export default {
    name:'home',
    components:{
      WorkBench
    }
}
</script>

<style>

</style>