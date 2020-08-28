import axios from 'axios'
import { getToken } from './index';

let instance = axios.create({
    // baseURL: "http://120.53.2.185",
    baseURL: "http://127.0.0.1:7002",
    timeout: 3000
});
// 添加请求拦截器
instance.interceptors.request.use(function (config: any) {
    // 在发送请求之前做些什么
    let writePath = ['/user/login'];
    if (!writePath.includes(config.url) && getToken()) {
        config.headers.authorization = getToken();
    }
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject({code:undefined});
});


// 添加响应拦截器
instance.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
}, function (error) {
   
    // if(error.response.data.code !== 1) {
    //     if(error.response.data.code !== 1) {
    //         return Promise.resolve({data: undefined})
    //     }
    // } else {
    //     return Promise.resolve({data: undefined})
    // }
    // switch (error.response.status) {
    //     case 401:
    //         // window.location.href="/user/login"
    //         break;
    //     case 500:
    //         console.log("服务器有误");
    //         break;
    //     default:
    //         break;
    // }
    // 对响应错误做点什么
    return Promise.resolve({});
});

export default instance;