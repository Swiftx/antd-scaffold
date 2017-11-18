import React from 'react';
import { Layout, Row, Col , Avatar } from 'antd';
import TopMenu from '../../components/TopMenu/component';
import LeftMenu from  '../../components/LeftMenu/component';
const { Header, Sider, Content } = Layout;
import style from './style.css';

/**
 * 控制台页面组件
 */
export default class extends React.Component {
    render () {
        return (
            <Layout className={style.layout}>
                <Header className={style.header}>
                    <div className={style.box}>
                        <h1 className={style.title}>卖家工作台</h1>
                        <div className={style.menu}>
                            <Row >
                                <Col offset={1} span={18}>
                                    <TopMenu />
                                </Col>
                                <Col span={5}>
                                    <Avatar  size="large" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                                </Col>
                            </Row>
                        </div>
                        <div className={style.clear} />
                    </div>
                </Header>
                <Layout className={style.box}>
                    <Sider className={style.sider}>
                        <LeftMenu className={style.leftMenu} />
                    </Sider>
                    <Content style={{height:"100%"}}>
                        sdasd<br/>
                        sdasd<br/>
                        sdasd<br/>
                        sdasd<br/>
                        sdasd<br/>
                        sdasd<br/>
                        sdasd<br/>
                        sdasd<br/>
                    </Content>
                </Layout>

            </Layout>
        );
    }
}