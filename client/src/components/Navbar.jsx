import React from 'react'
import { Button, Menu, Typography, Avatar } from 'antd';
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import icon from '../images/cryptocurrency.png';
import { MenuItem } from 'rc-menu';

const Navbar = () => {
    return (
        <div className="nav-container">
            <div className="logo-container">
                <Avatar src={icon} size="large"/>
                <Typography.Title level={2} className="logo">
                    <Link to="/">CryptoVerse</Link>
                </Typography.Title>
            </div>
            <Menu theme="dark">
                <MenuItem icon={<HomeOutlined />}>
                    <Link to="/">Home</Link>
                </MenuItem>
                <MenuItem icon={<FundOutlined />}>
                    <Link to="/cryptocurrencies"></Link>
                </MenuItem>
                <MenuItem icon={<MoneyCollectOutlined />}>
                    <Link to="/exchanges">Exchanges</Link>
                </MenuItem>
                <MenuItem icon={<BulbOutlined />}>
                    <Link to="/news">News</Link>
                </MenuItem>
            </Menu>
        </div>
    )
}

export default Navbar
