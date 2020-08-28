import menus from './menu'
import { IMenuItem, IRouterItem } from '@/utils/interface';
// 引入路由
import Login from '../views/login/Login';
import Main from '../views/main/Main';

function geneRouter(menus: IMenuItem[]){
    let routes: IRouterItem[] = [];
    menus.forEach(item=>{
        item.children.forEach(value=>value.component = value.meta.component)
        routes = routes.concat(item.children as IRouterItem[]);
    })
    return routes;
}
function getFristChild(menus: IMenuItem[]){
    return menus[0].children[0].path;
}
const routerConfig =  {
    routes: [{
        path: '/login',
        component: Login
    },{
        path: '/main',
        component: Main,
        children: geneRouter(menus)
    },{
        path: '/',
        redirect: getFristChild(menus)
    }]
}

export default routerConfig;