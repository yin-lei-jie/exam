import React, { useState } from 'react';
// import styles from './MyHeader.module.scss';
import './MyMenu.module.scss';
import { Layout, Menu } from 'antd';
import menus from '@/router/menu';
import { Link, useLocation } from 'react-router-dom';
import useStore from '@/context/useStore';
import { injectIntl } from 'react-intl';

const { Sider } = Layout;
const { SubMenu } = Menu;

const MyMenu: React.FC<any> = (props) => {
  let { formatMessage } = props.intl;
  let { util } = useStore();

  let [openKey, setOpenKey] = useState<string>('');
  let [selectKey, setSelectKey] = useState<string>('');

    let location = useLocation();
    let index = menus.findIndex(item => {
      return item.children.some((value: any) => {
        return value.path === location.pathname
      });
    })+'';
    if(index !== openKey) {
      setOpenKey(index);
    } 
    if (location.pathname !== selectKey) {
      setSelectKey(location.pathname);
    }
    return <Sider width={200} className="site-layout-background">
    <Menu
      mode="inline"
      theme="dark"
      defaultSelectedKeys={['0_0']}
      defaultOpenKeys={['0']}
      style={{ height: '100%', borderRight: 0 }}
    >{
        menus.map((item: any, index: number) => {
          return <SubMenu key={index} icon={<item.meta.icon/>} title={formatMessage({id: item.name, defaultMessage: item.name})}>{
            item.children.map((value: any, key: number) => {
              return value.meta.show && <Menu.Item key={`${value.path}`} onClick={()=>util.addTag({name: value.meta.title, path: value.path})}>
                <Link to={value.path}>{formatMessage({id: value.name, defaultMessage: value.name})}</Link>
              </Menu.Item>
            })
          }
          </SubMenu>
        })
      }
    </Menu>
  </Sider>
}

export default injectIntl(MyMenu);