import { createStore } from 'vuex'
import {testData,testPosts,ColumnProps,PostProps} from '../common/testData'
interface UserProps{
  isLogin:boolean;
  name?:string;
  id?:number;
}
export interface GlobalDataProps{
  column:ColumnProps[];
  posts:PostProps[];
  user:UserProps;
}
export default createStore<GlobalDataProps>({
  state: {
    column:testData,
    posts:testPosts,
    user:{isLogin:false}
  },
  mutations: {
    login(state){
      state.user = {...state.user,isLogin:true,name:'elben'}
    }
  },
  getters:{
    getColumnById:(state)=>(id:number)=>{
      return state.column.find(c=>c.id === id)
    },
    getPostsById:(state)=>(cid:number)=>{
      return state.posts.filter(post=>post.columnId===cid)
    }
  },
  actions: {
  },
  modules: {
  }
})
