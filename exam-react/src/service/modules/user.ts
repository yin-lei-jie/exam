import request from '@/utils/request';

// 登录接口
export let login = (user_name: string, user_pwd: string) =>{
    // console.log(user_name, user_pwd);
    return request.post('/user/login',{user_name, user_pwd})
}

// 获取用户信息
export let getUserInfo = ()=>{
    return request.get('/user/userInfo');
}

// 获取视图权限数据
export let getUserViewAuthority = ()=>{
    return request.get('/user/view_authority');
}

// 更新用户信息(用户名，用户密码，用户身份)
export let updateUserInfo = (data: any)=>{
    return request.put('/user/user', {data});
}