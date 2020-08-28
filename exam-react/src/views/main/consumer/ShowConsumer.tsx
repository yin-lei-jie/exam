import React, { useState, useEffect } from 'react';
import { Tabs, Table, Space, Button } from 'antd';
import useStore from '@/context/useStore';
import { useObserver } from 'mobx-react-lite';
import XLSX from 'xlsx';

const { TabPane } = Tabs;

const tabs = [{
    title: '用户数据',
    list: 'consumerList',
    key: 'user_id',
    action: 'getConsumerListAction',
    columns: [{
        title: '姓名',
        dataIndex: 'user_name',
    },{
        title: '密码',
        dataIndex: 'user_pwd',
    },{
        title: '身份',
        dataIndex: 'identity_text',
    }]
},{
    title: '身份数据',
    list: 'identifyList',
    key: 'identity_id',
    action: 'getIdentifyListAction',
    columns: [{
        title: '身份名称',
        dataIndex: 'identity_text'
    }]
},{
    title: 'api接口权限',
    list: 'apiAuthorityList',
    key: 'api_authority_id',
    action: 'getApiAuthorityAction',
    columns: [{
        title: 'api权限名称',
        dataIndex: 'api_authority_text',
    },{
        title: 'api权限url',
        dataIndex: 'api_authority_url',
    },{
        title: 'api权限方法',
        dataIndex: 'api_authority_method',
    }]
},{
    title: '视图接口权限',
    list: 'viewAuthorityList',
    key: 'view_authority_id',
    action: 'getViewAuthorityAction',
    columns: [{
        title: '视图权限名称',
        dataIndex: 'view_authority_text',
    },{
        title: '视图id',
        dataIndex: 'view_id',
    }]
},{
    title: '身份和api接口关系',
    list: 'identityApiAuthorityRelation',
    key: 'identity_api_authority_relation_id',
    action: 'getIdentityApiAuthorityRelationAction',
    columns: [{
        title: '身份名称',
        dataIndex: 'identity_text',
    },{
        title: 'api权限名称',
        dataIndex: 'api_authority_text',
    },{
        title: 'api权限url',
        dataIndex: 'api_authority_url',
    },{
        title: 'api权限方法',
        dataIndex: 'api_authority_method',
    }]
},{
    title: '身份和视图权限关系',
    list: 'identityViewAuthorityRelation',
    key: 'identity_view_authority_relation_id',
    action: 'getIdentityViewAuthorityRelationAction',
    columns: [{
        title: '身份',
        dataIndex: 'identity_text',
    },{
        title: '视图名称',
        dataIndex: 'view_authority_text',
    },{
        title: '视图id',
        dataIndex: 'view_id',
    }]
}]

const ShowConsumer: React.FC = () => {
    const {consumer} = useStore();
    let [active, setActive] = useState<number>(0);

    // 进入页面请求第一项数据
    useEffect(()=>{
        consumer[tabs[active].action]();
    }, [active, consumer]);

    function callback(active: string){
        setActive(Number(active));
    }

    // 导出数据
    function exportExcel() {
        // 1.生成workSheet
        let ws = XLSX.utils.json_to_sheet(consumer[tabs[active].list]); //要导出的表格内容
        // 2. 创建workSheet
        let wb = XLSX.utils.book_new();
        // 3. 添加workSheet到workbook中
        XLSX.utils.book_append_sheet(wb, ws, tabs[active].title);
        // 4. 导出workbook到本地文件夹
        XLSX.writeFile(wb, `${tabs[active].title}.xlsx`);
    }

    // 导入数据
    function importExcel() {
        console.log(11111)
        // if(e.target.files) {
        //     let file = e.target.files[0];
        //     let reader = new FileReader();
        //     reader.readAsArrayBuffer(file);
        //     reader.onload = function (e) {
        //         let buffer = new Uint8Array(e.target?.result as unknown as number);
        //         var workbook = XLSX.read(buffer, {type: 'array'});
        //         console.log(workbook, '-----workbook')
        //     }
        // }
    }
    return useObserver(()=><React.Fragment>
        <h2>用户展示</h2>

        {/* 表格操作 */}
        <Space>
            <Button type="primary" onClick={exportExcel}>导出数据</Button>
            <Button type="primary" onClick={importExcel}>
                <input type="file" placeholder="导入数据" />
            </Button>
        </Space>

        <Tabs defaultActiveKey="0" onChange={callback}>{
            tabs.map((item, index)=>{
                return <TabPane tab={item.title} key={index}></TabPane>
            })
        }</Tabs>

        {/* 分类数据 */}
        <Table rowKey={tabs[active].key} dataSource={consumer[tabs[active].list]} columns={tabs[active].columns} />;
    </React.Fragment>)
}

export default ShowConsumer;