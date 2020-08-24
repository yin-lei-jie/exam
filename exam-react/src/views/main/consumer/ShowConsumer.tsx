import React, { useState, useEffect } from 'react';
import { Tabs, Table } from 'antd';
import useStore from '@/context/useStore';
import { useObserver } from 'mobx-react-lite';
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
        consumer[tabs[active].action]()
    }, [active, consumer]);

    function callback(active: string){
        setActive(Number(active));
    }
    return useObserver(()=><React.Fragment>
        <h2>用户展示</h2>
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