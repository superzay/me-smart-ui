

## me-smart-ui
问题交流，邮箱:369457642@qq.com

在线演示地址：手机，pc浏览器访问(http://47.110.129.207/vue-components/me-smart-ui/)


![输入图片说明](http://47.110.129.207/images/1234567.jpg)
![输入图片说明](http://47.110.129.207/images/12345678.png)

## 安装

```bash
$ npm install --save me-smart-ui

```
## 使用

```js
全量使用
import MeSmartUi from "me-smart-ui";
import 'me-smart-ui/lib/css/index.css';
Vue.use(MeSmartUi )

按需使用，以me-dragger拖拽插件为例
import MeDragger from "me-smart-ui/meDragger";
import 'me-smart-ui/lib/css/meDreager.css';
Vue.use(MeDragger )
```

```html
<template>
  <me-dragger></me-dragger>
</template>
 ```


## DMEO
 项目源码目录下有插件使用的完整demo。以me-dragger组件为例：/src/package/components/me-dragger/demo/index.vue


## 运行
克隆项目到本地，执行npm install安装依赖，然后运行npm run dev即可查看



