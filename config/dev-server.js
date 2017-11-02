import path from 'path';
export default {
    contentBase: path.resolve("../public"),   // 部署的文件夹
    hostname : "localhost",                 // 设置监听域名
    port : 8888,                            // 设置监听端口
    inline: true,                           // 当源文件改变时会自动刷新页面
    historyApiFallback: true                // 所有的跳转将指向index.html
};