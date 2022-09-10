import { Menu } from 'antd';
import type { MenuProps } from 'antd';
import { FC, useEffect, useState } from 'react';
import { FormOutlined, UserOutlined } from '@ant-design/icons';
import { Link, useLocation } from 'react-router-dom';

const menuItems: MenuProps['items'] = [
    { label: <Link to="user">User</Link>, key: '/user', icon: <UserOutlined /> },
    { label: <Link to="form">Form</Link>, key: '/form', icon: <FormOutlined /> },
];
export const Header: FC = () => {
    const [current, setCurrent] = useState('user');

    const { pathname } = useLocation();
    useEffect(() => {
        setCurrent(pathname);
    }, [pathname]);

    return <Menu selectedKeys={[current]} mode="horizontal" items={menuItems} />;
};
