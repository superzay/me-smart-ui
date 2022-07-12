import axios from "axios";
import { BASE_URL, TIMEOUT } from "./config.js";

// get
const get = axios.create({
  baseURL: BASE_URL,
  method: "get",
  timeout: TIMEOUT,
});

// 请求拦截
get.interceptors.request.use(
  function (config) {
    if (typeof config.header !== "object" || !config.header) config.header = {};
    //config.header.Authorization = "xxxx";
    // 默认给get请求挂上时间戳，除非readCache字段为true
    if (!config.readCache) {
      if (!config.params) config.params = {};
      if (!config.params.timestamp) config.params.timestamp = Date.now();
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 响应拦截
get.interceptors.response.use(
  (response) => {
    return Promise.resolve(response.data);
  },
  (error) => {
    return Promise.reject(error);
  }
);

// post
const post = axios.create({
  baseURL: BASE_URL,
  method: "post",
  timeout: TIMEOUT,
  headers: {
    "Content-Type": "application/json",
  },
});

// 请求拦截
post.interceptors.request.use(
  (config) => {
    if (typeof config.header !== "object" || !config.header) config.header = {};
    //config.header.Authorization = "xxxx";
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 响应拦截
post.interceptors.response.use(
  (response) => {
    return Promise.resolve(response.data);
  },
  (error) => {
    return Promise.reject(error);
  }
);

// uploadFile
const uploadFile = axios.create({
  baseURL: BASE_URL,
  method: "post",
  timeout: TIMEOUT,
  headers: {
    "Content-Type": "multipart/form-data",
  },
  transformRequest: [
    (data) => {
      if (data instanceof FormData) {
        return data;
      } else {
        let formData = new FormData();
        Object.keys(data).map((key) => {
          formData.append(key, data[key] instanceof File ? data[key] : String(data[key]));
        });
        return formData;
      }
    },
  ],
});

// 请求拦截
uploadFile.interceptors.request.use(
  (config) => {
    if (typeof config.header !== "object" || !config.header) config.header = {};
    //config.header.Authorization = "xxxx";
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 响应拦截
uploadFile.interceptors.response.use(
  (response) => {
    return Promise.resolve(response.data);
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 输出
export { get, post, uploadFile, axios };
