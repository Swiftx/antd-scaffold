import React from 'react';
import { Menu} from 'antd';
import style from './style.css';

export default class extends React.Component {

    constructor(props){
        super(props);
        this.props = props;
    }

    handleClick = (e) => {
        console.log('click ', e);
    };

    render() {
        return (
            <Menu
                className={this.props.className}
                onClick={this.handleClick}
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline">
                <Menu.ItemGroup key="g1" title="最近使用">
                    <Menu.Item key="1">订单管理</Menu.Item>
                    <Menu.Item key="2">添加商品</Menu.Item>
                    <Menu.Item key="2">库存管理</Menu.Item>
                    <Menu.Item key="2">用户管理</Menu.Item>
                </Menu.ItemGroup>
                <Menu.ItemGroup key="g2" title="快捷入口">
                    <Menu.Item key="3">添加商品</Menu.Item>
                    <Menu.Item key="4">商品库存</Menu.Item>
                </Menu.ItemGroup>
            </Menu>
        );
    }
}