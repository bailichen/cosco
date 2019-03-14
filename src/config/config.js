// 获取ip
const domain = process.env.domain || 'local';
const host = process.env.host || 'default';

const apiDevHosterName = host === 'default' ? 'ci' : host;
const apiTestHosterName = host === 'default' ? 'st1' : host;

const config = {
    local: {
        API_URL: `http://ck-api.${apiDevHosterName}.dev.lanxinka.com`,
    },
    development: {
        API_URL: `http://ck-api.${apiDevHosterName}.dev.lanxinka.com`,
    },
    test: {
        API_URL: `http://ck-api.${apiTestHosterName}.test.lanxinka.com`,
    },
    production: {
        API_URL: `http://ck-api.koubeigongzuo.com`,
    },
    demo: {
        API_URL: `http://demo-ck-api.koubeigongzuo.com`,
    }
}[domain]

export default config
