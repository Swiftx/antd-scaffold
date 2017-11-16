import Mock from "mockjs";
import apis from "../mock";

// 设置响应时间范围
Mock.setup({
    timeout: '500-3000'
});

// 自动加载 mock 接口
for(let api of apis) {
    Mock['mock'](
        api.url,
        api.method,
        api.data
    );
}