<template>
  <div class="hm-input">
    <input
      :type="type"
      :placeholder="placeholder"
      :value="value"
      @input="inputFn"
      :class="{ success: status === 'success', error: status === 'error' }"
    >
    <div class="tips" v-show="status === 'error'">{{ message }}</div>
  </div>
</template>
<script>
export default {
  props: {
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
      default: '请输入...'
    },
    value: String,
    rule: RegExp,
    message: String
  },
  methods: {
    inputFn(e) {
      let value = e.target.value
      this.$emit('input', value)
      this.validate(value)
    },
    validate(value) {
      if (this.rule) {
        if (this.rule.test(value)) {
          this.status = 'success'
          return true
        } else {
          this.status = 'error'
          return false
        }
      }
    }
  },
  data() {
    return {
      status: ''
    }
  }
}
</script>
<style lang="less" scoped>
.hm-input {
  margin: 0 10px;
  height: 50px;
  input {
    height: 30px;
    outline: none;
    line-height: 30px;
    border: none;
    border-bottom: 1px solid #ccc;
    width: 100%;
    font-size: 16px;
    color: #666;
    &.success {
      border-color: green;
    }
    &.error {
      border-color: red;
    }
  }
  .tips {
    color: red;
    font-size: 12px;
    height: 20px;
    line-height: 20px;
  }
}
</style>
