<template>
  <el-steps 
    :active="step" 
    finish-status="success" 
    class="card__header"
    align-center>

    <el-step 
      class="step" 
      title="Выбор аптеки">
    </el-step>

    <el-step 
      class="step" 
      title="Оформление">
    </el-step>

    <el-step 
      class="step" 
      title="Подтверждение">
    </el-step>
  </el-steps>
</template>

<script>
export default {
  name: 'OrderHeader',
  props: ['step'],
}
</script>

<style lang="scss" scoped>
.card__header { margin-bottom: 32px; }
</style>

<style lang="scss">
// Steps
.is-process {
  & .el-step__icon {
    color: #fff;
    background: #f36d01;
  }
}
.el-step__title.is-process {
  font-weight: 400;
  color: #f36d01;
}
.el-step__icon {
  width: 36px;
  height: 36px;
  background: #282828;
  border: none !important;
}
.el-step.is-horizontal .el-step__line {
  top: 18px;
}
.el-step.is-center .el-step__line {
  left: 70%;
  right: -50%;
  background: #343434;
}
.el-step.is-horizontal .el-step__line {
  height: 1px;
  width: 60%;
}
.el-step__line-inner { border-color: #f36d01 ; }
.el-step__title.is-success,
.el-step__head.is-success {
  color: #f36d01 !important;
}
</style>
