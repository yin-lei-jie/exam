/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import useStore from '@/context/useStore';
import { Table, Button, Space, Modal, Form, Input, message } from 'antd';
import { useObserver } from 'mobx-react-lite';
import { ExclamationCircleOutlined } from '@ant-design/icons';

const styles = require('./class.module.scss');
const { confirm } = Modal;


function StudentManager() {
    const { grade } = useStore();
    const columns = [
        {
            title: '姓名',
            dataIndex: 'student_name',
        },
        {
            title: '学号',
            dataIndex: 'student_id',
        },
        {
            title: '班级',
            dataIndex: 'grade_name',
        },
        {
            title: '教室',
            dataIndex: 'room_text',
        },
        {
            title: '密码',
            dataIndex: 'student_pwd',
        },
        {
            title: '操作',
            dataIndex: 'action',
            render: (text: any, record: any) => (
                <Space size="middle">
                  <a onClick={() => deleteStudent(record.student_id)}>删除</a>
                </Space>
              )
        },
    ];

    useEffect(() => {
        grade.mangerStudentAction();
    }, [grade]);

    // 删除学生
    function deleteStudent(id: string) {
        confirm({
            icon: <ExclamationCircleOutlined />,
            content: '确定删除此教室吗?',
            async onOk() {
              let result: any = await grade.mangerStudentDeleteAction(id);
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
            <h1 className="style_h1">学生管理</h1>
            <div className="main">
                <div className={styles.top}>
                    <Input placeholder="输入学生姓名" />
                    <Input placeholder="请选择教室号" />
                    <Input placeholder="班级" />
                    <Button className={styles.button}>搜索</Button>
                    <Button className={styles.button}>重置</Button>
                </div>
                <Table rowKey="student_id" columns={columns} dataSource={grade.studentList} size="middle" />
            </div>
            {/* <Modal
                title="添加班级"
                visible={visibl}
                onOk={handleOk}
                onCancel={handleCancel}
                >
                <Form>
                    <Form.Item
                        label="班级名"
                        name="grade_name"
                        rules={[{ required: true, message: '请输入班级名!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="教室号"
                        name="subject_text"
                        rules={[{ required: true, message: '请输入教室号!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="课程名"
                        name="room_text"
                        rules={[{ required: true, message: '请输入课程名!' }]}
                    >
                        <Input />
                    </Form.Item>
                </Form>
            </Modal> */}
        </div>
    )
}

export default StudentManager;