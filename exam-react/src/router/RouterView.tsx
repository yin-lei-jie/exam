import React from 'react'
import { IRouterItem } from '@/utils/interface';
import { Switch, Route, Redirect } from 'react-router-dom';
import useStore from '@/context/useStore';
import { getToken } from '@/utils/index';


interface IProps {
    routes: IRouterItem[]
}
const whiteList = ['/login', '/403', '/404', '/main'];
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
                if (!Object.keys(user.userInfo).length){
                    user.getUserInfoAction();
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