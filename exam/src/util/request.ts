/*
 * @Author: yinleijie 
 * @Date: 2020-08-17 11:36:44 
 * @Last Modified by:   yinleijie 
 * @Last Modified time: 2020-08-17 11:36:44 
 */

import axios from 'axios';
import { message } from 'antd';
import { getToken } from './index';

const instance = axios.create({
    baseURL: 'http://127.0.0.1:7002',
    timeout: 3000
})

// 添加请求拦截器
instance.interceptors.request.use(function(config) {
    // 在发送请求之前做些什么
    config.headers = {
        ...config.headers,
        authorization: getToken() || ''
    }
    return config;
  }, function(error) {
    // 对请求错误做些什么
    return Promise.resolve(error);
  });

// 添加响应拦截器
instance.interceptors.response.use(function(response) {
    // 对响应数据做点什么
    // return response;
    if (response.status !== 200) {
        // 请求错误
        // console.log(response, '---200')
        message.warn(response.statusText);
        return Promise.resolve();
    } else if (response.data.code !== 1) {
        // console.log(response, '----1')
        message.warn(response.data.msg)
        // 业务逻辑错误
        return response.data;
    } else {
        return response.data;
    }
  }, function(error) {
    // 对响应错误做点什么
    message.error(error.toString());
    return Promise.resolve(error);
  });

export default instance;