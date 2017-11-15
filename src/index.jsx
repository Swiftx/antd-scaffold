import React from "react";
import ReactDOM from "react-dom";
import {createStore, combineReducers, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import { routerReducer, routerMiddleware, push } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory'
import './style.less';
import Router from "./router";


import Mock from "mockjs";

Mock.setup({
    timeout: '1000-10000' // 表示响应时间介于 200 和 600 毫秒之间，默认值是'10-100'。
});
Mock['mock']('/user/login', 'get', {
    type: 'post',
    aaa : "ggggg"
});

// 创建浏览器History对象
const history = createHistory();
const middleware = routerMiddleware(history);

// 创建全局Store对象
const store = createStore(
    combineReducers({
        router: routerReducer
    }),
    applyMiddleware(middleware)
);

// 派发页面跳转事件
store.dispatch(push('/login'));

setTimeout(function () {
    console.log(store.getState());
},5000);


// 渲染页面路由组件
ReactDOM.render(
    <Provider store={store}>
        <Router history={history}/>
    </Provider>,
    document.getElementById('root')
);