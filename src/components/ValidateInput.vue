<template>
  <div class="validate-input-container pb-3">
    <input
      class="form-control"
      :class="{'is-invalid': inputRef.error}"
      :value="inputRef.val"
      @blur="validateInput"
      @input="updateValue"
      v-bind="$attrs"
      autocomplete
    >
    <span v-if="inputRef.error" class="invalid-feedback">{{inputRef.message}}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, PropType, onMounted } from 'vue'
import {emitter} from './ValidateFrom.vue'
const emailReg = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
const pswReg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/;
interface RuleProp {
  type: 'required' | 'email' | 'password';
  message: string;
}
export type RulesProp = RuleProp[]
export default defineComponent({
  props: {
    rules: Array as PropType<RulesProp>,
    modelValue: String
    //modelValue实现vue3双向绑定
  },
  setup(props,context) {
    const inputRef = reactive({
      val: props.modelValue || '',
      error: false,
      message: ''
    })
    // v-model在vue3中的使用
    const updateValue = (e:KeyboardEvent)=>{
      const targetValue = (e.target as HTMLInputElement).value;
      //获取键盘输入的值
      inputRef.val = targetValue;
      context.emit('update:modelValue', targetValue)
      //调用setup 的context.emit将值传回login
    }
    const validateInput = () => {
      console.log('执行validateInput')
      //判断输入内容是否合法
      if (props.rules) {
        const allPassed = props.rules.every(rule => {
          //用every方法判断是否每一项都为true
          let passed = true
          inputRef.message = rule.message
          switch (rule.type) {
            case 'required':
              passed = (inputRef.val.trim() !== '')
              break
            case 'email':
              passed = emailReg.test(inputRef.val)
              break
            case 'password':
              passed = pswReg.test(inputRef.val)
              break
            default:
              break
          }
          return passed
        })
        inputRef.error = !allPassed
        return allPassed
      }
      return true
    }
    onMounted(()=>{
      emitter.emit('form-item-created',validateInput)
    })
    return {
      inputRef,
      validateInput,
      updateValue
    }
  }
})
</script>

<style scoped>

</style>