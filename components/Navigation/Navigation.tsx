import React, { useState } from 'react';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import styles from './Navigation.module.css';

interface NavigationProps {
    items: MenuProps['items'];
}

const Navigation: React.FC<NavigationProps> = ({ items }) => {
    const [current, setCurrent] = useState(items[0].key);

    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };

    return (
        <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items}/>
    );
};

export default Navigation;
