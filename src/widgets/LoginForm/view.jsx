import React from 'react';
import { Form, Icon, Input, Button } from 'antd';
import style from "./style.css";
const Item = Form.Item;

class View extends React.Component {


    render() {
        let userIcon = <Icon type="user" className={style.icon} />;
        let lockIcon = <Icon type="lock" className={style.icon} />;
        return (
            <Form className={style.box}>
                <Item>
                    <h1 className={style.title}>管理员登陆</h1>
                </Item>
                <Item>
                    <Input prefix={userIcon} placeholder="用户名" />
                </Item>
                <Item>
                    <Input prefix={lockIcon} type="password" placeholder="密码" />
                </Item>
                <Item className={style.buttonBox}>
                    <Button className={style.button} type="primary" htmlType="submit">登陆</Button>
                </Item>
            </Form>
        );
    }
}

export default View;