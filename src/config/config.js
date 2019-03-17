// 获取ip
const domain = process.env.domain || 'production';

const config = {
    local: {
        API_URL: `http://ck-api.dev.lanxinka.com`, // 本地接口域名
    },
    development: {
        API_URL: `http://ck-api.dev.lanxinka.com`, // 开发环境接口域名
    },
    test: {// 开发环境接口
        API_URL: `http://ck-api.test.lanxinka.com`, // 测试环境接口域名
    },
    production: {
        API_URL: `http://ck-api.koubeigongzuo.com`, // 生产环境接口域名
    }
}[domain]

export default config
