/*
 * @Author: yinleijie 
 * @Date: 2020-08-17 11:36:53 
 * @Last Modified by:   yinleijie 
 * @Last Modified time: 2020-08-17 11:36:53 
 */

import React, { useEffect } from 'react';
import styles from './main.module.scss';
import { Layout } from 'antd';
import useStore from '../../context/useStore';
import { useHistory } from 'react-router-dom';

const { Header, Sider, Content } = Layout;

function Main() {
    const { user } = useStore();
    const history = useHistory();
    const userInfo = JSON.parse(user.getUserInfo);

    useEffect(() => {
        user.userInfoAction();
    }, [user])

    return (
        <Layout className={styles.main}>
            <Header style={{background: "#fff"}} className={styles.main_header}>
                <div className={styles.main_header_left}>
                    <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551624718911&di=4a7004f8d71bd8da84d4eadf1b59e689&imgtype=0&src=http%3A%2F%2Fimg105.job1001.com%2Fupload%2Falbum%2F2014-10-15%2F1413365052_95IE3msH.jpg" alt=""/>
                </div>
                <div className={styles.main_header_right}>
                    <span>欢迎您：{userInfo.identity_text}</span> | 
                    <span>{userInfo.user_name}</span>
                </div>
            </Header>
            <Layout>
                <Sider>Sider</Sider>
                <Content>Content</Content>
            </Layout>
        </Layout>
    )
}

export default Main;