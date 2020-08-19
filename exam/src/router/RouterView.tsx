import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { RouterItem } from './config';

interface Item{
    routes: RouterItem[]
}

const RouterView = ({routes}: Item) => {
    const componentArr = routes.filter(item => item.component);
    const redirectArr = routes.filter(item => item.redirect);
    return <Switch>
        {
            componentArr.map((item:RouterItem) =>{
                return <Route key={item.path} path={item.path} render={(routesProps) =>{
                    return <item.component {...routesProps} routes={item.children}></item.component>
                }}></Route>
            })
        }
        {
            redirectArr.map((item:RouterItem) =>{
                return <Redirect key={item.path} from={item.path} to={item.redirect as string}></Redirect>
            })
        }
    </Switch>
}

export default RouterView;