import { takeEvery, effects } from 'redux-saga';
import { Actions } from '../widgets/LoginForm';
import axios from 'axios';
const { types } = Actions;

// 执行登陆的操作
const postLoginAsync = function* (action) {
    let response = yield axios.post('/user/login',action.data);
    let data = response.data;
    console.log('执行表单提交: ', data);
};

// 监听登陆开始事件
export const watchLoginSubmitEvent = function* () {
    yield takeEvery(types.LoginSubmit, postLoginAsync);
};