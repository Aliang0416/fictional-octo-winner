<template>
  <div class="layout-header-container d-flex justify-content-between align-items-center p-3">
    <!-- 左侧 logo 和 标题区域 -->
    <div class="layout-header-left d-flex align-items-center user-select-none">
      <!-- logo -->
      <img class="layout-header-left-img" src="../../assets/u=1819248061,230866778&fm=193&f=GIF.jpg" alt="">
      <!-- 标题 -->
      <h4 class="layout-header-left-title ml-3">Aliang后台管理系统</h4>
    </div>

    <!-- 右侧按钮区域 -->
    <div class="layout-header-right">
      <button type="button" class="btn btn-light" @click="unlogin">退出登录</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyHeader',
  methods: {
    unlogin () {
      // 1.清空token
      localStorage.removeItem('token')
      // 2.返回登陆界面
      this.$router.replace('/login')
    }
  }
}
</script>

<style lang="less" scoped>
.layout-header-container {
  height: 60px;
  border-bottom: 1px solid #eaeaea;
}

.layout-header-left-img {
  height: 50px;
  width: 150px;
}
</style>
