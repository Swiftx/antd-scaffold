export const options = {};
export const init = {};

// 组件状态
options.state = {
    Init : 0,       // 初始状态
    Loading : 1,    // 正在请求
    Success : 2,    // 登录成功
    Failed : 3,     // 登录失败
};
// 设置初始状态
init.state = options.state.Init;