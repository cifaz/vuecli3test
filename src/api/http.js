import axios from "axios";
import env from "./env";

const baseUrl = env.VUE_APP_API_BASE_URL;
const applicationJson = "application/json;charset=utf-8";

axios.defaults.baseURL = "http://localhost:4000/";
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
axios.defaults.timeout = 5000;

axios.interceptors.request.use(
    config => {
        return config;
    },
    err => {
        console.error("请求错误!");
        return Promise.reject(err)
    }
);

// 返回状态判断(添加响应拦截器)
axios.interceptors.response.use(
    res => {
        // 返回状态码, 这里取http
        if (res.status >= 200 && res.status < 300) {
            return res.data;
        } else {
            console.error("请求失败, ", res.data.msg);
        }
    },
    err => {
        console.error("请求失败，请稍后再试, ");
        let reData = {};
        reData.code = "997";
        reData.msg = "请求失败";
        return Promise.reject(reData)
    }
);

/**
 * for vue2.5
 * @type {{get: module.exports.get, post: module.exports.post, put: module.exports.put, delete: module.exports.delete}}
 */
export default {
    // 查询
    get: (url, params) => axios.get(url, params),

    // 新增
    post: (url, params) => axios.post(url, params),

    // 修改
    put: (url, params) => axios.put(url, params),

    // 删除
    delete: (url, params) => axios.delete(url, params),
};