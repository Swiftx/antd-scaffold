import React from 'react';
import { Menu } from 'antd';
import style from './style.css';

export default class extends React.Component {

    state = {
        current: 'home',
    };

    handleClick = (e) => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    };

    render() {
        return (
            <Menu
                className={style.menu}
                onClick={this.handleClick}
                selectedKeys={[this.state.current]}
                mode="horizontal">
                <Menu.Item key="home">主页</Menu.Item>
                <Menu.Item key="transaction">交易</Menu.Item>
                <Menu.Item key="goods">商品</Menu.Item>
            </Menu>
        );
    }
}