const apis = [];
export default apis;

const user = {
    username : 'root',
    password : '123456'
};

console.log("测试账号："+user.username+" 密码："+user.password);

const success = {
    error : 0,
    info : {
      username : 'root'
    },
    msg : "登陆成功"
};

const error = {
    error : 1,
    msg : "账号或密码不正确"
};

// 用户登陆API
apis.push({
    url : '/user/login',
    method : 'post',
    data :  (options) => {
        let data = JSON.parse(options.body);
        if (data.username !== user.username)
            return error;
        if (data.password !== user.password)
            return error;
        return success;
    }
});