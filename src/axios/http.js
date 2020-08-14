import axios from 'axios';
import Qs from 'qs';


var vue_app_url = process.env.VUE_APP_URL;

axios.defaults.baseURL = vue_app_url;

axios.defaults.timeout = 60000;

axios.defaults.withCredentials = true;

//请求拦截器
axios.interceptors.request.use(
  config =>{
    return config;
  },
  error => {
    return Promise.error(error);
  }
)
//响应拦截器
axios.interceptors.response.use(
  response =>{
    console.log(response);
    return Promise.resolve(response.data);
  },
  error => {
    return Promise.error(error);
  }
)

/* 统一封装get请求 */
export  function get(url,params,headers) {
  return new Promise((resolve, reject) => {
    axios.get(url,{
      params:params,
      headers:headers?headers:{
        'Cache-Control':'no-cahce'
      }
    }).then(res=>{
      resolve(res.data);
    }).catch(err=>{
      reject(err.data)
    })
  })
}

/* 统一封装post请求  */
export function post(url,params,data) {
  var ContentType = 'application/x-www-form-urlencoded;charset=UTF-8';
  var params = Qs.stringify(params);
  if(data && data != undefined){
    if(params){
      url += '?' +params;
      params = data;
    }
    ContentType = 'application/json;charset=UTF-8';
  }
  return new Promise((resolve, reject) => {
    axios.post(url, params, {
      headers:{
        'Content-Type': ContentType
      }
    }
    ).then(res=>{
      resolve(res.data);
    }).catch(err=>{
      reject(err.data);
    })
  })
}
