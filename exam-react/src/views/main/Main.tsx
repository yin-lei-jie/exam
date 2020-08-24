import React from 'react';
import './Main.module.scss';
import { Layout } from 'antd';
// 引入自定义组件
import MyHeader from '@/component/layout/MyHeader';
import MyMenu from '@/component/layout/MyMenu';
import MyBreadCrumb from 'src/component/layout/MyBreadCrumb';

// 引入路由配置
import RouterView from '@/router/RouterView';
import { IRouterItem } from '@/utils/interface';

const {Content} = Layout

interface IProps{
    routes: IRouterItem[]
}

const Main: React.FC<IProps> = (props) => {
    return <Layout>
        <MyHeader></MyHeader>
        <Layout style={{ padding: '0 24px 24px' }}>
            <MyMenu></MyMenu>
            <Layout>
                <MyBreadCrumb></MyBreadCrumb>
                <Content
                    className="site-layout-background"
                    style={{
                        padding: 24,
                        margin: 0,
                        minHeight: 280,
                    }}
                >
                    <RouterView routes={props.routes}></RouterView>
                </Content>
            </Layout>
        </Layout>
    </Layout>
}

export default Main;