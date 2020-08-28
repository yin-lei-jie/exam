import React from 'react'
import { IRouterItem } from '@/utils/interface';
import { Switch, Route, Redirect } from 'react-router-dom';
import useStore from '@/context/useStore';
import { getToken } from '@/utils/index';


interface IProps {
    routes: IRouterItem[]
}
const whiteList = ['/login', '/403', '/404'];
const RouterView: React.FC<IProps> = (props) => {
    let {user} = useStore();
    return <Switch>{
        props.routes.map((item) => {
            if (item.redirect){
                return <Redirect key={item.path}  from={item.path} to={item.redirect}></Redirect>
            }

            return <Route path={item.path} key={item.path} render={routeProps => {
                // 做导航守卫
                // 1. 登陆拦截
                let path = routeProps.match.path;
                if (!whiteList.includes(path) && !getToken()){
                    routeProps.history.replace(`/login?redirect=${encodeURIComponent(path)}`)
                }
                // 2. 获取用户信息
                if (getToken() && !Object.keys(user.userInfo).length){
                    // 获取用户基本信息
                    user.getUserInfoAction();
                    // 获取用户权限
                    user.getUserViewAuthorityAction();
                }

                if (item.children) {
                    return <item.component routes={item.children} {...routeProps} meta={item.meta}></item.component>
                } else {
                    return <item.component {...routeProps} meta={item.meta}></item.component>
                }
            }}></Route>
        })
    }</Switch>
}

export default RouterView;