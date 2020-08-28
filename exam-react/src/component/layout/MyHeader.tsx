import React, { useState, useEffect } from 'react';
// import styles from './MyHeader.module.scss';
import './MyHeader.module.scss';
import useStore from '@/context/useStore'
import { useObserver } from 'mobx-react-lite';
import { Layout, Dropdown, Menu, Modal, Form, Select, Button, Upload, Avatar, Input } from 'antd';

const { Header } = Layout;

const MyHeader: React.FC<any> = (props) => {
    let { user, consumer, lang } = useStore();
    let [visible, setVisible] = useState(false);
    let [avatar, setAvatar] = useState(user.userInfo.avatar);

    let logout = () => {
        user.logoutAction()
    }

    // 获取所有身份
    useEffect(() => {
        consumer.getIdentifyListAction()
    }, [consumer])

    const menu = (
        <Menu>
            <Menu.Item key="0" onClick={() => setVisible(true)}>
                个人中心
            </Menu.Item>
            <Menu.Item key="1">
                <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
                    我的班级
            </a>
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item key="2">
                设置
          </Menu.Item>
            <Menu.Item key="3">
                <span onClick={logout}>退出登陆</span>
            </Menu.Item>
        </Menu>
    );

    const langOverlay = (
        <Menu>
            <Menu.Item key="0" onClick={() => lang.changeLocal('zh')}>
               简体中文
            </Menu.Item>
            <Menu.Item key="1" onClick={() => lang.changeLocal('en')}>
                English
            </Menu.Item>
        </Menu>
    )

    function handleChange(e: any) {
        // console.log(e, '---e');
        // if(e.file.status === 'done') {
        //     let data = e.file.response.data;
        //     let index = data.findIndex((item: any) =>item.name = 'avatar');
        //     setAvatar(data[index].path);
        // }
    }

    return useObserver(()=> <Header className="header">
        <img style={{width: 120}} className="img" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551624718911&di=4a7004f8d71bd8da84d4eadf1b59e689&imgtype=0&src=http%3A%2F%2Fimg105.job1001.com%2Fupload%2Falbum%2F2014-10-15%2F1413365052_95IE3msH.jpg" alt=""/>
        <Dropdown overlay={langOverlay}>
            <span>{lang.local === 'zh' ? '简体中文' : 'English'}</span>
        </Dropdown>
        <Dropdown overlay={menu}>
            <div>
                <img className="avatar" src={user.userInfo.avatar} alt="" />
                <span>{user.userInfo.user_name} | {user.userInfo.identity_text}</span>
            </div>
        </Dropdown>
        <Modal
            title="个人中心"
            visible={visible}
            onCancel={()=> setVisible(false)}
            footer={null}
        >
            <Form initialValues={user.userInfo}>
                <Form.Item label="用户头像" name="avatar">
                    <Upload
                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        showUploadList={false}
                        // listType="pictur e-card"
                        // onPreview={}
                        onChange={handleChange}
                     >
                        <Avatar size={40} src={avatar}>头像</Avatar>
                    </Upload>.
                </Form.Item>
                <Form.Item label="用户昵称" name="user_name">
                    <Input placeholder="请输入您的用户名" />
                </Form.Item>
                <Form.Item label="用户ID" name="user_id">
                    <Input placeholder="请输入您的id" disabled />
                </Form.Item>
                <Form.Item label="用户身份" name="identity_id">
                    <Select>
                        {
                            consumer.identifyList.map((item, index) => {
                                return <Select.Option key={index} value={item.identity_id}>{item.identity_text}</Select.Option>
                            })
                        }
                    </Select>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">确定</Button>
                    <Button>取消</Button>
                </Form.Item>
            </Form>
        </Modal>
    </Header>)
}

export default MyHeader;