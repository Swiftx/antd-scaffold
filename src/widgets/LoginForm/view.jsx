import React from 'react';
import { Form, Icon, Input, Button } from 'antd';
import axios from "axios";
import style from "./style.css";
const Item = Form.Item;

class View extends React.Component {

    /**
     * 构造方法
     * @param props
     */
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    /**
     * 提交处理方法
     * @returns {function(*)}
     */
    handleSubmit (e) {
        e.preventDefault();
        const props = this.props;
        props.form.validateFields((err, values) => {
            console.log(err);
            if (!err) props.onSubmit(values);
            else props.onSubmit(err, values);
        });
    }

    /**
     * 构建用户输入表单
     */
    buildUsernameInput(){
        const { getFieldDecorator } = this.props.form;
        const userIcon = <Icon type="user" className={style.icon} />;
        return getFieldDecorator('username', {
            rules: [{ required: true, message: '请输入账号!' }]
        })(<Input prefix={userIcon} placeholder="用户名" />);
    }

    /**
     * 构建用户输入表单
     */
    buildPasswordInput(){
        const { getFieldDecorator } = this.props.form;
        const lockIcon = <Icon type="lock" className={style.icon} />;
        return getFieldDecorator('password', {
            rules: [{ required: true, message: '请输入密码！' }]
        })(<Input prefix={lockIcon} type="password" placeholder="密码" />);
    }

    /**
     * 渲染组件
     * @returns {XML}
     */
    render() {
        const UsernameInput = this.buildUsernameInput();
        const PasswordInput = this.buildPasswordInput();
        return (
            <Form className={style.box} onSubmit={this.handleSubmit}>
                <Item>
                    <h1 className={style.title}>管理员登陆</h1>
                </Item>
                <Item>{UsernameInput}</Item>
                <Item>{PasswordInput}</Item>
                <Item className={style.submit}>
                    <Button className={style.button} type="primary" htmlType="submit">登陆</Button>
                </Item>
            </Form>
        );
    }
}

View.defaultProps = {
    onSubmit(values) {
        axios.get('/user/login').then((response) => {
            return response.data;
        }).then((data) => {
            console.log(data);
        }).catch((error) => {
            console.log(error);
        });
        console.log('执行表单提交: ', values);
    },
    onValidError(error, values){
        console.log('表单验证未通过: ', error, values);
    }
};

export default Form.create()(View);