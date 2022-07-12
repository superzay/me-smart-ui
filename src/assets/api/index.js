import { get, post, uploadFile, axios } from "./http.js";

/**
 * 获取threejs案例列表
 * @param data {Object} 待序列化键值对
 */
export function getThreejsExamples(data) {
  return get({
    url: "/threejs/config.json",
    params: data,
  });
}
