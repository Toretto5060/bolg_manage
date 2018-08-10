import Mock from 'mockjs'

Mock.setup({
  timeout: '350-600'
})

let loginDate={
  code:0,
  msg:'数据获取成功',
  token:'@natural(10000)'
}

Mock.mock('manage/login','get',loginDate)




export default Mock