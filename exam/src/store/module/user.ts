import {observable, action} from 'mobx';
import { userLogin, userInfo } from '../../api/user';
import { setToken, removeToken } from '../../util/index';
import { useHistory } from 'react-router-dom';

class User{
    @observable
    isLogin: boolean = false;
    // @observable
    getUserInfo: any = window.localStorage.getItem('userInfo') || '';
    // @observable
    userInfo: any = JSON.parse(this.getUserInfo);

    // 登录
    @action
    async userLoginAction(username: string, password: string) {
        let result: any = await userLogin(username, password);
        if (result.code === 1) {
            setToken(result.token);
            this.isLogin = true;
        }
        return result;
    }

    // 退出登录
    @action
    async userLoginOutAction() {
        let history = useHistory();
        removeToken();
        this.isLogin = false;
        history.replace('/login')
    }

    // 获取当前用户信息
    @action
    async userInfoAction() {
        let result: any = await userInfo();
        if (result.code === 1) {
            window.localStorage.setItem('userInfo', JSON.stringify(result.data));
        }
        return result;
    }
}

export default User;