<template>
  <nav class="navbar navbar-dark bg-primary justify-content-between mb-4 px-4">
    <a class="navbar-brand" href="#">知知知乎</a>
    <ul v-if="!user.isLogin" class="list-inline mb-0">
      <li class="list-inline-item"><a href="#" class="btn btn-outline-light my-2">登陆</a></li>
      <li class="list-inline-item"><a href="#" class="btn btn-outline-light my-2" path='/login'>注册</a></li>
    </ul>
    <ul v-else class="list-inline mb-0">
      <!-- <li class="list-inline-item"><a href="#" class="btn btn-outline-light my-2">你好 {{user.name}}</a></li> -->
      <dropdown :title="`你好 ${user.name}`">
        <dropdown-item><a href="#" class="dropdown-item">新建文章</a></dropdown-item>
        <dropdown-item><a href="#" class="dropdown-item">新建文章</a></dropdown-item>
        <dropdown-item><a href="#" class="dropdown-item">新建文章</a></dropdown-item>
      </dropdown>
    </ul>
  </nav>
</template>

<script lang="ts">
import {defineComponent,PropType} from 'vue'
import DropdownItem from './DropdownItem.vue'
import Dropdown from './Dropdown.vue'
export interface userProps{
  isLogin:boolean;
  name?:string;
  id?:number;
}
export default defineComponent({
  name:'Header',
  components:{
    Dropdown,
    DropdownItem
  },
  props:{
    user:{
      type:Object as PropType<userProps>,
      require:true
    }
  },
  setup(props){
  }
})
</script>

<style scoped>
</style>