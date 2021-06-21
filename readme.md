

## me-smart-ui
问题交流，邮箱:369457642@qq.com

市面上流行的组件库有很多，但是有些特定功能有时还是找不到合适的插件，比如头像旋转缩放裁剪,拖拽排序等常用需求，这里开发了MeSmartUi库，把日常业务中遇到的一些特定需求整理成插件发布出来，给有需要的同学们使用


在线演示地址：手机，pc浏览器访问(http://47.110.129.207/vue-components/me-smart-ui/)


![输入图片说明](http://47.110.129.207/images/1234567.jpg)

## 演示
![输入图片说明](http://47.110.129.207/images/me-smart-ui/4.png)

![输入图片说明](http://47.110.129.207/images/me-smart-ui/5.png)

![输入图片说明](http://47.110.129.207/images/me-smart-ui/1.png)

![输入图片说明](http://47.110.129.207/images/me-smart-ui/2.png)

![输入图片说明](http://47.110.129.207/images/me-smart-ui/3.png)


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



