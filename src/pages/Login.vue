<template>
  <div class="login">
    <HmHeader>登录</HmHeader>
    <HmLogo></HmLogo>
    <HmInput
      type="text"
      placeholder="请输入用户名"
      v-model="username"
      :rule="/^1\d{4,10}$/"
      message="用户名格式不对"
      ref="username"
    ></HmInput>
    <HmInput
      type="password"
      placeholder="请输入密码"
      v-model="password"
      :rule="/^\d{3,12}$/"
      message="用户密码格式错误"
      ref="password"
    ></HmInput>

    <HmButton @click="login">登录</HmButton>
  </div>
</template>
<script>
// import axios from 'axios'
export default {
  methods: {
    login() {
      const result1 = this.$refs.username.validate(this.username)
      const result2 = this.$refs.password.validate(this.password)
      if (!result1 || !result2) {
        return
      }
      this.$axios({
        url: '/login',
        method: 'POST',
        data: {
          username: this.username,
          password: this.password
        }
      }).then(res => {
        // console.log(res.data)
        if (res.data.statusCode === 200) {
          this.$toast.success('登录成功')
          this.$router.push('/user')
        } else {
          this.$toast.fail('登录失败')
        }
      })
    }
  },
  data() {
    return {
      username: '',
      password: ''
    }
  }
}
</script>
<style lang="less">
</style>


