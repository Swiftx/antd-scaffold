export const types = {};

// 开始状态
types.LoginSubmit = Symbol('LoginSubmit');
export const loginSubmit = (values) =>{
    return {
        type : types.LoginSubmit,
        data : values
    };
};