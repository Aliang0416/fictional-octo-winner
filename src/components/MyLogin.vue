<template>
  <div class="login-container">
    <div class="login-box">

      <!-- 头像区域 -->
      <div class="text-center avatar-box">
        <img src="../assets/logo.png" class="img-thumbnail avatar" alt="">
      </div>

      <!-- 表单区域 -->
      <div class="form-login p-4">
        <!-- 登录名称 -->
        <div class="form-group form-inline">
          <label for="username">登录名称</label>
          <input v-model.trim="username" type="text" class="form-control ml-2" id="username" placeholder="请输入登录名称" autocomplete="off">
        </div>
        <!-- 登录密码 -->
        <div class="form-group form-inline">
          <label for="password">登录密码</label>
          <input v-model.trim="passward" type="password" class="form-control ml-2" id="password" placeholder="请输入登录密码">
        </div>
        <!-- 登录和重置按钮 -->
        <div class="form-group form-inline d-flex justify-content-end">
          <button type="button" class="btn btn-secondary mr-2" @click="clear">重置</button>
          <button type="button" class="btn btn-primary" @click="login">登录</button>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'MyLogin',
  data () {
    return {
      username: '',
      passward: ''
    }
  },
  methods: {
    clear () {
      this.username = ''
      this.passward = ''
    },
    login () {
      if (this.username === 'admin' && this.passward === '666666') {
        // 登录成功
        // 1．存储 token
        localStorage.setItem('token', 'Bearer xxx')
        // 2．跳转到后台主页
        this.$router.push('/home')
      } else {
        // 登陆失败
        localStorage.removeItem('token')
        alert('登录失败')
      }
    }
  }

}
</script>

<style lang="less" scoped>
.login-container {
  background-image: url('../assets/bg1.jpg');
  background-position: -600px -150px;
  // background-repeat:no-repeat;
  height: 100%;
  .login-box {
    width: 400px;
    height: 250px;
    background-color: #fff;
    border-radius: 3px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 0 6px rgba(255, 255, 255, 0.5);
    .form-login {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      box-sizing: border-box;
    }
  }
}

.form-control {
  flex: 1;
}

.avatar-box {
  position: absolute;
  width: 100%;
  top: -65px;
  left: 0;
  .avatar {
    width: 120px;
    height: 120px;
    border-radius: 50% !important;
    box-shadow: 0 0 6px #efefef;
  }
}
</style>
