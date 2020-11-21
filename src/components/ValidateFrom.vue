<template>
  <form class="validate-form-container">
    <slot name="default"></slot>
    <div class="submit-area" @click.prevent="submitForm">
      <slot name="submit">
        <button type="submit" class="btn btn-primary">提交</button>
      </slot>
    </div>
  </form>
</template>

<script lang="ts">
import mitt from 'mitt'
import { defineComponent, onUnmounted } from 'vue'
export const emitter = mitt()
type ValidateFunc = () => boolean  //因为子组件里的validateInput方法返回布尔值
export default defineComponent({
  emits:['from-submit'],
  setup(props,context){
    let funcArr:ValidateFunc[] = []
    const submitForm = () => {
      // 循环执行数组 得到最后的验证结果
      const result = funcArr.map(func => func()).every(result => result)
      //先用map对每一个input框进行判断是否符合规则(回调函数中执行func)，然后根据全部true  则every返回true
      context.emit('from-submit', result)
    }
    const callback = (func:any) => {
      //接收到2个input传来的validateInput
      funcArr.push(func)
    }
    emitter.on('form-item-created', callback)
    onUnmounted(()=>{
      emitter.off('form-item-created',callback)
      funcArr=[]
    })
    return {submitForm}
    
  }
  
})
</script>

<style scoped>
.submit-area{
  display: flex;
  justify-content: center;
}
</style>