import Cookie from 'js-cookie';

const key = 'authorization';
// 设置cookie
export const setToken = (value: string) => {
    Cookie.set(key, value, {expires: new Date(+new Date() + 5*60*60*1000)});
}

// 读取cookie
export const getToken = () => {
    return Cookie.get(key);
}

// 清空cookie
export const removeToken = () => {
    return Cookie.remove(key);
}