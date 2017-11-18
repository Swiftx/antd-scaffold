import { takeEvery } from 'redux-saga';
import { Actions } from '../widgets/LoginForm';
import { push } from 'react-router-redux';
import store from '../state/store';
import axios from 'axios';
const { types } = Actions;

// 执行登陆的操作
const postLoginAsync = function* (action) {
    let response = yield axios.post('/user/login',action.data);
    let data = response.data;
    if(data.error === 0) {
        store.dispatch(Actions.loginSuccess(data.info));
        store.dispatch(push('/index'));
    }
};

// 监听登陆开始事件
export const watchLoginSubmitEvent = function* () {
    yield takeEvery(types.LoginSubmit, postLoginAsync);
};