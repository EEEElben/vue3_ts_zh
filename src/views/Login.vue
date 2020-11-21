<template>
  <ValidateFrom @from-submit='onFromSubmit' class="loginFrom">
    <div class="mb-3">
      <label class="form-label" >邮箱地址</label>
      <validate-input :rules="emailRules" v-model="emailVal" ref="inputRef"
      placeholder="please enter a valid email address" type="text"></validate-input>
    </div>
    <div class="mb-3">
      <label class="form-label">密码</label>
      <validate-input :rules="passwordRules" v-model="passwordVal"
      placeholder="please enter password" type="password"></validate-input>
    </div>
    <template #submit>
      <span class="btn btn-danger">Submit</span>
    </template>
  </ValidateFrom>
</template>

<script lang="ts">
import {defineComponent,reactive,ref} from 'vue'
import ValidateInput,{RulesProp} from '../components/ValidateInput.vue'
import ValidateFrom from '../components/ValidateFrom.vue'
import { useRouter } from 'vue-router'
import {useStore} from "vuex"
export default defineComponent({
  name:'login',
  components:{
    ValidateInput,
    ValidateFrom
  },
  setup(){
    const inputRef = ref<any>('')
    const emailVal = ref('')
    const passwordVal = ref('')
    const store = useStore();
    const emailRules:RulesProp=[
      {type:'required',message:'电子邮箱地址不能为空'},
      {type:'email',message:'请输入正确的电子邮箱格式'}
    ]
    const passwordRules:RulesProp=[
      {type:'required',message:'密码不能为空'},
      {type:'password',message:'密码至少包含 数字和英文，长度6-20'}
    ]
    const router = useRouter()
    const onFromSubmit = (result:boolean) =>{
      if(result){
        router.push('/')
        store.commit('login')
      }
    }
    return {
      emailRules,
      emailVal,
      passwordRules,
      onFromSubmit,
      inputRef,
      passwordVal
    }
  } 
})
 </script>

<style scoped>
.loginFrom{
  width:20%;
  margin:0 auto;
}

</style>