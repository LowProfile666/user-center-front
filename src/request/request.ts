import axios from "axios";

/**
 baseURL: 设置基础 URL，所有请求将会以此 URL 为基础。这里设置为 http://localhost:8080。
 timeout: 设置请求超时时间为 10000 毫秒（10 秒）。
 withCredentials: 允许跨域请求时携带凭证（如 Cookies）。
 */
const myAxios = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  timeout: 10000,
  withCredentials: true,
});

// 请求拦截器
myAxios.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// 响应拦截器
myAxios.interceptors.response.use(
  function (response) {
    const { data } = response;
    // 未登录
    if (data.code === 40100) {
      // 不是获取用户信息接口，或者不是登录页面，则跳转到登录页面
      if (
        !response.request.responseURL.includes("user/current") &&
        !window.location.pathname.includes("/user/login")
      ) {
        window.location.href = `/user/login?redirect=${window.location.href}`;
      }
    }
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default myAxios;
