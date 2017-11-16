import {types} from "../widgets/LoginForm/actions";

const initialState = {
    fetched: false,
    users: [{
        key: '1',
        name: '张三',
        email: 'zhangsan@126.com'
    }],
    posts: [{
        key: '1',
        id: '1',
        title: 'test'
    }],
    error: null
};

export default function(state = initialState, action){
    return state;
};