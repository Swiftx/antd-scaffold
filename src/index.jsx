import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { push } from 'react-router-redux';
import history from './state/history';
import store from './state/store';
import Router from "./router";
import './style.less';
import "./mock";

// 派发页面跳转事件
store.dispatch(push('/login'));

// 渲染页面路由组件
ReactDOM.render(
    <Provider store={store}>
        <Router history={history}/>
    </Provider>,
    document.getElementById('root')
);