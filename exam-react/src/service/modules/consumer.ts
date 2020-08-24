import request from '@/utils/request';

// 展示用户数据
export let getConsumerList = ()=>{
    return request.get('/user/user');
}

// 展示身份数据
export let getIdentifyList = ()=>{
    return request.get('/user/identity');
}

// 展示api接口权限数据
export let getApiAuthority = ()=>{
    return request.get('/user/api_authority');
}

// 展示视图权限数据
export let getViewAuthority = ()=>{
    return request.get('/user/view_authority');
}

// 展示身份和api权限关系
export let getIdentityApiAuthorityRelation = ()=>{
    return request.get('/user/identity_api_authority_relation');
}

// 展示身份和视图权限关系
export let getIdentityViewAuthorityRelation = ()=>{
    return request.get('/user/identity_view_authority_relation');
}

// 添加用户
export let addConsumer = (user_name: string, user_pwd: string, identity_id: string) => {
    return request.post('/user', {user_name, user_pwd, identity_id});
}