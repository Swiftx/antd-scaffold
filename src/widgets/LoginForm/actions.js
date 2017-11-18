export const types = {};

// 提交登陆
types.LoginSubmit = Symbol('LoginSubmit');
export const loginSubmit = (values) =>{
    return {
        type : types.LoginSubmit,
        data : values
    };
};

// 登陆成功
types.LoginSuccess = Symbol('LoginSuccess');
export const loginSuccess = (info) => {
    return {
        type : types.LoginSuccess,
        data : info
    }
};