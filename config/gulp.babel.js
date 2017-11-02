import gulp from 'gulp';
import webpack from 'webpack';
import gutil from 'gulp-util';
import WebpackDevServer from 'webpack-dev-server';
import webpackConfig from './webpack';
import devServerConfig from './dev-server';

gulp.task("dev", function() {
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
    server.listen(listen.port, listen.hostname, function(err) {
        if(err) throw new gutil.PluginError("webpack-dev-server", err);
        //gutil.log("[webpack-dev-server]", "http://localhost:8080/webpack-dev-server/index.html");
    });
});