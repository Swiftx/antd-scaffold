import path from 'path';
export default {
    devtool : 'eval-source-map',                // 生成站点地图
    entry :  path.resolve("../src/index.js"),   // 唯一入口文件
    output : {
        path : path.resolve("../dist"),         // 打包后的文件存放的地方
        filename : "bundle.js"                  // 打包后输出文件的文件名
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        },{
            test: /\.css$/,
            loader: 'style-loader!css-loader'//添加对样式表的处理
        }]
    }
};