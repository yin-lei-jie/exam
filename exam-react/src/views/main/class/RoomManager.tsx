/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import useStore from '@/context/useStore';
import { Table, Button, Space, Modal, Form, Input, message } from 'antd';
import { ClassList } from '@/utils/interface';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { useObserver } from 'mobx-react-lite';
const styles = require('./class.module.scss');

const { confirm } = Modal;

function Room() {
    const { grade } = useStore();
    const columns = [
        {
            title: '教室号',
            dataIndex: 'room_text',
        },
        {
            title: '操作',
            dataIndex: 'action',
            render: (text: any, record: ClassList) => (
                <Space size="middle">
                  <a onClick={() => deleteClass(record.room_id)}>删除</a>
                </Space>
              )
        },
    ];

    function  addRoom(){
        changeVisibl(true);
    }

    // 声明输入状态  添加
    let [visibl, changeVisibl] = useState(false);
    let [inputValue, changeInput] = useState("");

    useEffect(() => {
        grade.mangerRoomAction();
    }, [grade])

    const  handleOk = async (e: any) => {
        changeVisibl(false);
        let result: any = await grade.mangerRoomAddAction(inputValue);
        // console.log(result, '----views-room');
        if(result.code === 1){
            message.success(result.msg);
        } else {
            message.error(result.msg);
        }
    }
    
    const handleCancel = () => {
        changeVisibl(false);
    }

    function inputChange(e: any) {
        changeInput(e.target.value);
    }

    // 删除
    function deleteClass(id: string) {
        confirm({
            icon: <ExclamationCircleOutlined />,
            content: '确定删除此教室吗?',
            async onOk() {
              let result: any = await grade.mangerRoomDeleteAction(id);
              console.log(result, '-----');
              if(result.code === 1){
                message.success(result.msg);
              } else {
                message.error(result.msg);
              }
            }
        });
    }

    return useObserver(() =>
        <div className={styles.class}>
            <h1 className="style_h1">教室管理</h1>
            <div className={styles.main}>
                <Button className={styles.button} type="primary" htmlType="submit" onClick={addRoom}>+ 添加类型</Button>
                <Table className={styles.tabRoom} rowKey="room_id" columns={columns} dataSource={grade.roomList} size="middle" />
            </div>
            <Modal
                title="添加教室"
                visible={visibl}
                onOk={handleOk}
                onCancel={handleCancel}
                >
                <Form name="basic">
                    <Form.Item
                        label="教室号"
                        name="room_text"
                        rules={[{ required: true, message: '请输入教室号!' }]}
                    >
                        <Input onChange={inputChange} />
                    </Form.Item>
                </Form>
            </Modal>
            <Space>
                
            </Space>
        </div>
    )
}

export default Room;