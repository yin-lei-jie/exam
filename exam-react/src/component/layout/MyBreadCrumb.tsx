import React from 'react';
import { Tag } from 'antd';
import useStore from '@/context/useStore';
import { ITag } from '@/utils/interface';
import { NavLink, useLocation } from 'react-router-dom';

const MyBreadCrumb: React.FC = () => {
    let { util } = useStore();
    let location = useLocation();
    return <section>
        {
            util.tags.map((item: ITag, index) => {
                return <Tag key={index} color={location.pathname === item.path ? 'red' : ''} closable onClose={() => util.removeTag(item)}>
                    <NavLink to={item.path}>{item.name}</NavLink>
                </Tag>
            })
        }
    </section>

}

export default MyBreadCrumb;