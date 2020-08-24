import Cookie from 'js-cookie';

const key = 'authorization';

// 获取cookie
export let getToken = () => {
    return Cookie.get(key);
}

// 设置cookie
export let setToken = (value: string)=>{
    Cookie.set(key, value, {expires: new Date(+new Date() + 5*60*60*1000)});
}

// 移除cookie
export let removeToken = ()=>{
    Cookie.remove(key);
}