import React from 'react';
import style from './style.css';


console.log(style);

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
                <div className={style.mainBox}>
                    <div className={style.titleBox}>
                        <h1>微信小程序行业解决方案</h1>
                        <p>为您实现：微信开店，客源更多，成本更低！</p>

                    </div>
                    <div className={style.loginFormBox}>

                    </div>
                </div>
            </div>
        );
    }

}