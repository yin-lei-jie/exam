/*
 * @Author: yinleijie 
 * @Date: 2020-08-17 11:37:04 
 * @Last Modified by: yinleijie
 * @Last Modified time: 2020-08-17 12:01:24
 */

import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import styles from './login.module.scss';
import useStore from '../../context/useStore';
import { useHistory } from 'react-router-dom';

function Login() {
  const { user } = useStore();
  const history = useHistory();

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 8 },
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 14 },
  };
  
  // 登录
  const onFinish = async (values: any) => {
    let result = await user.userLoginAction(values.username, values.password);
    if (result.code === 1) {
      history.replace('/main')
    }
  };
  
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      style={{marginTop: 100}}
    >
      <Form.Item
        label="账号"
        name="username"
        rules={[{ required: true, message: '请输入用户名!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="密码"
        name="password"
        rules={[{ required: true, message: '请输入密码!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>记住密码</Checkbox>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button className={styles.ant_btn_primary} type="primary" htmlType="submit">
          登录
        </Button>
      </Form.Item>
    </Form>
  )
}

export default Login;
