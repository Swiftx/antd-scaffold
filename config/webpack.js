import path from 'path';

export default {
    devtool : 'eval-source-map',                // 生成站点地图
    entry :  path.resolve("../src/index.jsx"),   // 唯一入口文件
    output : {
        path : path.resolve("../dist"),         // 打包后的文件存放的地方
        filename : "bundle.js"                  // 打包后输出文件的文件名
    },
    resolve:{
        extensions: ['.tsx','.jsx', '.js']
    },
    module: {
        loaders: [{
            test: /\.tsx?$/,
            loader:'ts-loader!babel-loader'
        },{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        },{
            test: /\.css$/,
            loader: 'style-loader!css-loader?modules'//添加对样式表的处理
        },{
            test: /\.less$/,
            loader: 'style-loader!css-loader!less-loader'
        },{
            test: /\.(png|jpg|gif)$/,
            loader: 'url-loader?limit=8192&name=./static/img/[hash].[ext]',
        }]
    }
};