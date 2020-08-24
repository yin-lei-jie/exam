import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import useStore from '@/context/useStore'
import { useHistory } from 'react-router-dom';
import './login.module.scss';

export default function Login() {
    const {user} = useStore();
    const [form] = Form.useForm();
    const history = useHistory();

    const onFinish = async (values: any) => {
        let result = await user.loginAction(values.username, values.password);
        if (result){
            let qs:{[key:string]:string} = {};
            history.location.search.slice(1).split('&').forEach(item=>{
                let arrs = item.split('=');
                qs[arrs[0]] = arrs[1];
            });
            history.replace(qs.redirect? decodeURIComponent(qs.redirect): '/main');
        }
    }   
   
    return (
        <div className="login">
            <div className="tab">
                <Form
                    form={form}
                    name="normal_login"
                    className="login_form"
                    initialValues={{ remember: false }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="username"
                        validateTrigger="onBlur"
                        rules={[{ pattern: /^[a-z]{4,16}$/, required:true, message: '请输入你的用户名!'}]}
                    >
                        <Input prefix={<UserOutlined />} placeholder="输入用户名" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        validateTrigger="onBlur"
                        rules={[{ pattern: /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?\d)(?=.*?[#@*!&.]).*$/
                            , message: '请输入你的密码!', required: true}]}
                    >
                        <Input.Password
                            prefix={<LockOutlined />}
                            type="password"
                            placeholder="输入密码"
                        />
                    </Form.Item>
                    <Form.Item>
                        <div className="ant_form_item_control_input_content">
                            <Form.Item name="remember" valuePropName="checked" noStyle>
                                <Checkbox>记住密码</Checkbox>
                            </Form.Item>

                            <a className="login_form_forgot" href="/">
                                忘记密码
                            </a>
                        </div>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="ant_btn_primary">
                            登陆
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}