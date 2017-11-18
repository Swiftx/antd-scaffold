import {Actions, States} from "../widgets/LoginForm";

const ActionProcessor = {};
export default function(state = States.init, action) {
    if(ActionProcessor.hasOwnProperty(action.type))
        return ActionProcessor[action.type](action, state);
    return state;
};

/**
 * 提交登陆事件处理
 * @returns {{state: number}}
 */
ActionProcessor[Actions.types.LoginSubmit] = () => {
    return {state: States.options.state.Loading};
};

/**
 * 登陆成功事件处理
 * @param action
 * @returns {{state: number, info}}
 */
ActionProcessor[Actions.types.LoginSuccess] = (action) => {
    return {
        state : States.options.state.Success,
        info : action.data
    }
};