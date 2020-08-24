import React, { useEffect } from 'react';
import { Tabs, Form, Input, Select, Button, Row, Col } from 'antd';
import useStore from '@/context/useStore';
import { useObserver } from 'mobx-react-lite';
import { Store } from 'antd/lib/form/interface';

const styles = require('./consumer.module.scss');
const { TabPane } = Tabs;
const { Option } = Select;
const { useForm } = Form;

const AddConsumer: React.FC = () => {
    const { consumer } = useStore();

    // 创建form实例
    const [addConsumerForm] = useForm();
    
    useEffect(() => {
        consumer.getConsumerListAction();
        consumer.getApiAuthorityAction();
        consumer.getIdentifyListAction();
        consumer.getIdentityApiAuthorityRelationAction();
        consumer.getIdentityViewAuthorityRelationAction();
        consumer.getViewAuthorityAction();
    }, [consumer])

    return useObserver(() => <div className={styles.consumer}>
        <h1>添加用户</h1>
        <div>
            <Row>
                <Col span={8}>
                    <Tabs defaultActiveKey="1">
                        <TabPane tab={ <span>添加用户</span> } key="1">
                            <Form onFinish={consumer.addConsumerAction as unknown as (values:Store)=>void} form={addConsumerForm}>
                                <Form.Item
                                    name="user_name"
                                    rules={[{ required: true, message: '请输入用户名' }]} >
                                    <Input placeholder="请输入用户名" />
                                </Form.Item>
                                <Form.Item
                                    name="user_pwd"
                                    rules={[{ required: true, message: '请输入密码' }]} >
                                    <Input placeholder="请输入密码" />
                                </Form.Item>
                                <Form.Item name="identity_id">
                                    <Select defaultValue="请选择身份id">{
                                        consumer.identifyList.map((item: any, index) => {
                                            return <Option key={index} value={item.identity_id}>{item.identity_text}</Option>
                                        })
                                    }
                                    </Select>
                                </Form.Item>
                                <Form.Item>
                                    <Button type="primary" htmlType="submit" style={{marginRight: 20, width: 100, backgroundImage: `linear-gradient(90deg, #023AFD, #4E75FF)`}}>确定</Button>
                                    <Button htmlType="reset" onClick={()=>addConsumerForm.resetFields()}>重置</Button>
                                </Form.Item>
                            </Form>
                        </TabPane>
                        <TabPane tab={ <span>更新用户</span> } key="2">
                            <Form>
                                <Form.Item name="old_identity_id">
                                    <Select defaultValue={consumer.identifyList.length && (consumer.identifyList[0] as any).identity_id}>{
                                        consumer.identifyList.map((item: any, index) => {
                                            return <Option key={index} value={item.identity_id}>{item.identity_text}</Option>
                                        })
                                    }
                                    </Select>
                                </Form.Item>
                                <Form.Item
                                    name="user_name"
                                    rules={[{ required: true, message: '请输入用户名' }]} >
                                    <Input placeholder="请输入用户名" />
                                </Form.Item>
                                <Form.Item
                                    name="user_pwd"
                                    rules={[{ required: true, message: '请输入密码' }]} >
                                    <Input placeholder="请输入密码" />
                                </Form.Item>
                                <Form.Item name="new_identity_id">
                                    <Select defaultValue={consumer.identifyList.length && (consumer.identifyList[0] as any).identity_id}>{
                                        consumer.identifyList.map((item: any, index) => {
                                            return <Option key={index} value={item.identity_id}>{item.identity_text}</Option>
                                        })
                                    }
                                    </Select>
                                </Form.Item>
                            </Form>
                        </TabPane>
                    </Tabs>
                </Col>
            </Row>
        </div>
    </div>)
}

export default AddConsumer;