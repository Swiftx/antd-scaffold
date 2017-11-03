import gulp from 'gulp';
import webpack from 'webpack';
import gutil from 'gulp-util';
import htmlReplace from "gulp-html-replace";
import WebpackDevServer from 'webpack-dev-server';
import webpackConfig from './webpack';
import devServerConfig from './dev-server';

/**
 * 部署入口文件
 */
gulp.task('html', () => {
    gulp.src('../src/index.html')
        .pipe(htmlReplace({
            'js': 'bundle.js'
        }))
        .pipe(gulp.dest('../dist'));
});

/**
 * 开启开发环境
 */
gulp.task("dev", ['html'], () => {
    // 读取配置
    let listen = {
        hostname : devServerConfig.hostname,
        port : devServerConfig.port
    };
    delete devServerConfig.hostname;
    delete devServerConfig.port;
    // 生成服务器
    let compiler = webpack(webpackConfig);
    let server = new WebpackDevServer(compiler, devServerConfig);

    // 监听服务器
    server.listen(listen.port, listen.hostname, (err) => {
        if(err) throw new gutil.PluginError("webpack-dev-server", err);
        let url = "http://";
        url += listen.hostname;
        url += ':'+listen.port;
        url += "/webpack-dev-server/index.html"
        gutil.log("[webpack-dev-server]", url);
    });
});