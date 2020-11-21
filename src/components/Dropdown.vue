<template>
<div class="dropdown" ref="dropdownRef">
  <a href="#" class="btn btn-outline-light my-2 dropdown-toggle" @click.prevent="toggleOpen">
    {{title}}
  </a>
  <ul class="dropdown-menu" :style="{display: 'block'}" v-if="isOpen">
    <slot></slot>
  </ul>
</div>
</template>

<script lang="ts">
import { defineComponent, ref,onMounted,onUnmounted } from 'vue'
// import {useClickOutside} from '../common/useClickOutside.ts'
export default defineComponent({
  name: 'Dropdown',
  props: {
    title: {
      type: String,
      required: true
    }
  },
  setup() {
    const isOpen = ref(false)
    const dropdownRef = ref<null | HTMLElement>(null)
    const toggleOpen = () => {
      isOpen.value = !isOpen.value
      console.log(isOpen.value)
    }
    const handler = (e:MouseEvent)=>{
      console.log(e)
      if(dropdownRef.value){
        if(!dropdownRef.value.contains(e.target as HTMLElement) && isOpen.value){
          //如果dropdownRef.value包含点击的dom 则true  取反后就是false 不执行
          //如果点击空白处  切下拉框是打开状态则执行
          isOpen.value=false
          console.log(1)
        }
      }
    }
    onMounted(() => {
      document.addEventListener('click', handler)
    })
    onUnmounted(() => {
      document.removeEventListener('click', handler)
    })
    //这个调用封装的方法有点问题  
    // const isClickOutside = useClickOutside(dropdownRef)
    // watch(isClickOutside,()=>{
    //   if(isOpen.value && isClickOutside.value){
    //     isOpen.value = false
    //   }
    // })
    return {
      isOpen,
      toggleOpen,
      dropdownRef
    }
  }
})
</script>

<style scoped>
</style>