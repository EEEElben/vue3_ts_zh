export interface ColumnProps{
  id:number;
  description:string;
  title:string;
  avatar?:string;
}
export interface PostProps{
  id:number;
  title:string;
  content:string;
  image?:string;
  createdAt:string;
  columnId:number;
}
export const testData:ColumnProps[] = [
  {
    id:1,
    description:"这里是一些滋滋滋滋滋滋滋滋些滋滋滋滋滋滋些滋滋滋滋滋滋些滋滋滋滋滋滋滋滋滋",
    avatar:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605693891664&di=18b73e3c9df70d19a0d4819c2f5e5523&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fforum%2Fw%3D580%2Fsign%3D825d5c38c8fdfc03e578e3b0e43d87a9%2Fca80ea315c6034a8147e1247c01349540b2376f9.jpg",
    title:"标题1"
  },
  {
    id:2,
    description:"这里是一些滋滋滋滋滋滋滋滋滋滋滋2222",
    avatar:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605693891664&di=18b73e3c9df70d19a0d4819c2f5e5523&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fforum%2Fw%3D580%2Fsign%3D825d5c38c8fdfc03e578e3b0e43d87a9%2Fca80ea315c6034a8147e1247c01349540b2376f9.jpg",
    title:"标题2"
  },
  {
    id:3,
    description:"这里是一些滋滋滋滋滋滋滋滋滋滋滋",
    avatar:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605693891664&di=18b73e3c9df70d19a0d4819c2f5e5523&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fforum%2Fw%3D580%2Fsign%3D825d5c38c8fdfc03e578e3b0e43d87a9%2Fca80ea315c6034a8147e1247c01349540b2376f9.jpg",
    title:"标题1"
  },
  {
    id:4,
    description:"这里是一些滋滋滋滋滋滋滋滋滋滋滋2222",
    avatar:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605693891664&di=18b73e3c9df70d19a0d4819c2f5e5523&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fforum%2Fw%3D580%2Fsign%3D825d5c38c8fdfc03e578e3b0e43d87a9%2Fca80ea315c6034a8147e1247c01349540b2376f9.jpg",
    title:"标题2"
  }
]
export const testPosts: PostProps[] = [
  {
    id: 1,
    title: '这是我的第一篇文章',
    content: '"this is a new post you Very often we will need to map routes with the given pattern to the same component. For example we may have a User component which should be rendered for all users but with dif..."',
    image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605693891664&di=18b73e3c9df70d19a0d4819c2f5e5523&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fforum%2Fw%3D580%2Fsign%3D825d5c38c8fdfc03e578e3b0e43d87a9%2Fca80ea315c6034a8147e1247c01349540b2376f9.jpgvue-marker/5ee1980819f4ae08ac78d458.png?x-oss-process=image/resize,m_fill,m_pad,w_200,h_110',
    createdAt: '2020-06-11 10:34:22',
    columnId: 1
  },
  {
    id: 2,
    title: '这是我的第二篇文章',
    content: '"this is a new post you Very often we will need to map routes with the given pattern to the same component. For example we may have a User component which should be rendered for all users but with dif..."',
    createdAt: '2020-06-11 10:34:22',
    columnId: 1
  },
  {
    id: 3,
    title: '这是我的第三篇文章',
    content: '"this is a new post you Very often we will need to map routes with the given pattern to the same component. For example we may have a User component which should be rendered for all users but with dif..."',
    image: 'https://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5edcc2329f2b4e28352b75eb.jpg?x-oss-process=image/resize,m_fill,m_pad,w_200,h_110',
    createdAt: '2020-06-11 10:34:22',
    columnId: 1
  }
]