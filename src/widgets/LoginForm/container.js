import { loginSubmit } from './actions';

const mapStateToProps = (state, ownProps) => {
    return {
        tableIndex:state.tableIndex
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        // 表单提交事件, 发送 LoginSubmit 行为
        onSubmit :(values) => dispatch(loginSubmit(values))
    }
};

export {
    mapStateToProps,
    mapDispatchToProps
};