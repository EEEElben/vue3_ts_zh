<template>
  <Header :user="user"></Header>
  <!-- <Column-list :list="list"></Column-list> -->
  <router-view/>  
</template>

<script lang="ts">
import "bootstrap/dist/css/bootstrap.min.css"
import { computed, defineComponent } from 'vue'
import ColumnList from './components/ColumnList.vue'
import Header,{userProps} from './components/Header.vue'
import Login from './views/Login.vue'
import {useStore} from 'vuex'

export default defineComponent({
  components:{
    ColumnList,
    Header,
    Login
  },
  setup(){
    const store = useStore();
    const user = computed(()=> store.state.user)
    return{
      user
    }
  }
})
</script>

<style lang="scss">
#app {
}
</style>
