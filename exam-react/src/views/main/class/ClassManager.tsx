/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import useStore from '@/context/useStore';
import { Table, Button, Space, Modal, Form, Input, Select } from 'antd';
import { ClassList } from '../../../utils/interface';
import { useObserver } from 'mobx-react-lite';
import '@/App.scss';

const styles = require('./class.module.scss');
const { Option } = Select;

function Grade() {
    const { grade } = useStore();
    const columns = [
        {
            title: '班级名',
            dataIndex: 'grade_name',
        },
        {
            title: '课程名称',
            dataIndex: 'subject_text',
        },
        {
            title: '教室号',
            dataIndex: 'room_text',
        },
        {
            title: '操作',
            dataIndex: 'action',
            render: (text: any, record: ClassList) => (
                <Space size="middle">
                  <a onClick={() => editGreade(record)}>修改</a>
                  <a>删除</a>
                </Space>
              )
        },
    ];

    // 声明输入状态
    let [visibl, changeVisibl] = useState(false);
    // let [inputValue, changeInput] = useState("");

    // 声明修改的内容
    // let [editRecord, changeGrade] = useState("");

    // console.log(grade.mangerGradeUpdateAction);

    async function  editGreade(record: ClassList){
        // console.log(record, '-----record');
        changeVisibl(true);
        const result = await grade.mangerGradeUpdateAction(record.grade_id, record.grade_name, record.subject_id, record.room_id);
        return result;
    }

    useEffect(() => {
        grade.managerGradeAction();
        grade.mangerGradetNewAction();
    }, [grade])


    function handleChange(value: any) {
        console.log(`selected ${value}`);
    }

    // 添加班级
    async function addGrade() {
        changeVisibl(true);
        // let result = await grade.managerGradeAddAction();
    }
    
    const  handleOk = () => {
        changeVisibl(false);
    }
    
    const handleCancel = () => {
        changeVisibl(false);
    }

    return useObserver(() =>
        <div className={styles.class}>
            <h1 className="style_h1">班级管理</h1>
            <div className={styles.main}>
                <Button onClick={addGrade} className={styles.button} type="primary" htmlType="submit">+ 添加班级</Button>
               <Table className={styles.tabRoom} rowKey="grade_id" columns={columns} dataSource={grade.classList} size="middle" />
            </div>
            <Modal
                title="添加班级"
                visible={visibl}
                onOk={handleOk}
                onCancel={handleCancel}
                >
                <Form>
                    <Form.Item
                        label="班级名"
                        rules={[{ required: true, message: '请输入班级名!' }]}
                    >
                        <Select defaultValue="请选择班级" style={{ width: 200 }} onChange={handleChange}>
                            {
                                grade.gradeListNew.map((item: any) =><Option value={item.grade_name} key={item.grade_id}>{item.grade_name}</Option>)
                            }
                        </Select>
                    </Form.Item>

                    <Form.Item
                        label="教室号"
                        rules={[{ required: true, message: '请输入教室号!' }]}
                    >
                        
                    </Form.Item>
                    <Form.Item
                        label="课程名"
                        name="room_text"
                        rules={[{ required: true, message: '请输入课程名!' }]}
                    >
                        <Input />
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    )
}

export default Grade;