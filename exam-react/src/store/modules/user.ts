import { observable, action } from 'mobx';
import { login, getUserInfo, getUserViewAuthority } from '@/service';
import { setToken, removeToken } from '@/utils/index';
import { useHistory } from 'react-router-dom';

export default class User{
    // 判断是否登录
    @observable
    isLogin: boolean = false;
    @observable
    userInfo:any = {};
    isGetUserInfo = false;

    // 登录
    @action
    async loginAction(user_name: string, user_pwd: string) {
        let result: any = await login(user_name, user_pwd);
        console.log(result, '----result')
        if(result.data.code === 1) {
            setToken(result.data.token);
            this.isLogin = true;
        }
        return result;
    }

    // 退出登录
    @action
    async logoutAction() {
        let history = useHistory();
        removeToken();
        this.isLogin = false;
        history.replace('/user/login');
    }

    // 获取用户信息
    @action 
    async getUserInfoAction(){
        if (this.isGetUserInfo){
            return;
        }
        this.isGetUserInfo = true;
        let result = await getUserInfo();
        if (result.data){
            this.userInfo = result.data.data;
            this.isGetUserInfo = false;
        }
    }

    // 获取视图权限数据
    @action
    async getUserViewAuthorityAction() {
        return await getUserViewAuthority();
    }
}