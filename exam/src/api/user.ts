/*
 * @Author: yinleijie 
 * @Date: 2020-08-17 11:36:58 
 * @Last Modified by: yinleijie
 * @Last Modified time: 2020-08-17 11:43:16
 */

import axios from '../util/request';

// 讲师/管理员登录
export const userLogin = (user_name: string, user_pwd: string) => {
    return axios.post('/user/login',{user_name, user_pwd})
}

// 获取当前用户信息
export const userInfo = () => {
    return axios.get('/user/userInfo');
}