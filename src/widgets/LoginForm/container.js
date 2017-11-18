import { loginSubmit } from './actions';
import { options } from './states';

/**
 * 映射状态到组件
 * @param state {{user}}
 * @returns {{}}
 */
const mapStateToProps = (state) => {
    return  {
        loading : state.user.state === options.state.Loading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        // 表单提交事件, 发送 LoginSubmit 行为
        onSubmit :(values) => dispatch(loginSubmit(values))
    }
};

export {
    mapStateToProps,
    mapDispatchToProps
};