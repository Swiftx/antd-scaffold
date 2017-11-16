import React from 'react';
import Form from '../../widgets/LoginForm';
import style from './style.css';

export default class extends React.Component {

    /**
     * 构造函数
     * @param props
     */
    constructor(props){
        super(props);
    }

    /**
     * 渲染页面
     */
    render () {
        return (
            <div className={style.box}>
                <div className={style.main}>
                    <div className={style.header}>

                    </div>
                    <div className={style.body}>
                        <div className={style.title}>
                            <h1>微信小程序行业解决方案</h1>
                            <p>为您实现：微信开店，客源更多，成本更低！</p>
                        </div>
                        <div className={style.form}>
                            <Form/>
                        </div>
                    </div>
                    <div className={style.footer}>
                        Copyright © 2017-{new Date().getFullYear()}  厦门店宝宝网络科技有限公司 dianbaobao.top 版权所有
                    </div>
                </div>
            </div>
        );
    }

}