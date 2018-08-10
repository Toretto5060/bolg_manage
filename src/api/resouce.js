import Vue from 'vue'
import Axios from 'axios';



//封装Axios
let axiosIns = Axios.create({
  timeout: 30000,
  headers: {},
  // transformRequest: [function (data) {
    // if(data){
    //   if(data.typ){
    //     if(data.typ='json'){
    //       return data.data;
    //     }else{
    //       return data;
    //     }
    //   }else{
    //     return qs.stringify(data);
    //   }
    // }
  // }]
});

// http request 拦截器
axiosIns.interceptors.request.use(
  config => {
    // config.headers.language = "";
    // config.headers.token = "";
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);
// 添加响应拦截器
axiosIns.interceptors.response.use(function (response) {
  // 对响应数据做点什么
 
  return response.data;
}, function (error) {
  // 对响应错误做点什么
  let msg= '';
  if(error.request.status){
    msg = error.request.status + ': ' +  error.request.statusText;
  }else{
    msg = 'Time out'
  }
  if(error.response && error.response.data && error.response.data.code == "ERROR"){
    msg += ' - ' + error.response.data.error.message;
  }
  Vue.prototype.$message.error(msg);
  return Promise.reject(error);
});
// Vue.prototype.$Axios = axiosIns;


export default axiosIns;
// export default{
//   methods:{
//     requestLogin(){
//       let that = this;
//       return that.$Axios.get(`manage/login`, params).then(res => res.data) 
//     } 
//   }
  
// }







