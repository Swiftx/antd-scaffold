import React from "react";
import {createStore, combineReducers, applyMiddleware} from 'redux';
import * as reducers from './reducers';
import {middleware, saga} from './middleware';
import sagas from '../sagas';

// 创建 Store 空间
export default createStore(
    combineReducers(reducers),
    applyMiddleware(...middleware)
);

// 运行 Saga 监听
for(let listen of sagas)
    saga.run(listen);