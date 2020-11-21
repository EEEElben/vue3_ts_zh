<template>
  <div class="column-detail-page w-75 mx-auto">
    <div class="column-info row mb-4 border-bottom pb-4 align-items-center">
      <div class="col-3 text-center">
        <img :src="column.avatar" :alt="column.title" class="rounded-circle border w-100">
      </div>
      <div class="col-9">
        <h4>{{column.title}}</h4>
        <p class="text-muted">{{column.description}}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {computed, defineComponent} from 'vue'
import {useRoute} from 'vue-router'
import {testData,testPosts} from '../common/testData'
import {useStore} from 'vuex'
export default defineComponent({
  setup(){
    const route = useRoute()
    const store = useStore()
    const currentId = +route.params.id
    console.log(currentId)
    const column = computed(()=>store.getters.getgetColumnById(currentId))
    const list = computed(()=>store.getters.getPostsById(currentId))
    return {column,list}
  }
})
</script>

<style scoped>
</style>