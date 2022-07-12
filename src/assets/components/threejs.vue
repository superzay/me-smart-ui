<template>
  <div class="threejs1">
    <!-- 介绍 -->
    <div class="introduce">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;对于这里的内容，需要你先去了解基础的webgl知识，了解矩阵、向量、透视投影、裁剪空间、视图变换、着色器原理、threejs框架等等内容。
      <br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;之前在研究webgl和threejs的时候在网上查到了很多资料（包括郭隆邦的很多资料觉得很好），在此对所有小伙伴们表示感谢。这里也把之前研究的内容拆解出来，分享给感兴趣的小伙伴们学习、研究和参考。也给大家推荐几本比较好的参考资料：OpenGL着色语言、OPENGL
      ES 3.0编程指南 第2版、3D游戏与计算机图形学中的数学方法 第3版。
      <br />
      <br />
      <!-- 案例title列表，分成左右两个列表 -->
      <div class="list">
        <!-- 左列表 -->
        <div v-if='titleList[0]' class="left">
          <div v-for='item in titleList[0]' :key='item.title'>
            ● {{item.title}}
            <a class="look" :href="item.url">查看 </a>
          </div>
        </div>
        <!-- 右列表 -->
        <div  v-if='titleList[1]' class="right">
          <div v-for='item in titleList[1]' :key='item.title'>
            ● {{item.title}}
            <a class="look" :href="item.url">查看 </a>
          </div>
        </div>
      </div>

      <br />
      <span class="address">仓库地址：</span><a href="https://gitee.com/superzay/threejs-animate">https://gitee.com/superzay/threejs-animate</a>
    </div>

    <!-- 案例展示列表 -->
    <div v-if="this.examples" class="display">
      <div v-for="(item,index) in examples" :key="item.title" :class="{}" class="item">
        <p>
          {{item.subtitle}}
          <a class="look" :href="item.url">查看</a>
        </p>
        <iframe v-if="index == 0 || (index ==1 && engineOver)" :src="item.url" frameborder="0"></iframe>
        <p v-if="!(index == 0 || (index ==1 && engineOver)) && startLoadPreview" class="tick">预览图</p>
        <img v-if="!(index == 0 || (index ==1 && engineOver))  && startLoadPreview" class="preview" :src="item.previewImage" frameborder="0" />
      </div>
    </div>
  </div>
</template>
<script>
import {getThreejsExamples} from '../api/index.js'
export default {
  props: ["title"],
  data() {
    return {
      engineOver:false, // 物理引擎展示结束
      startLoadPreview: false,
      examples:null,// 案例列表，通过接口从服务器获取，结构如下
      /* [{
       title: "物理引擎（碰撞检测）",
       subtitle: "物理引擎（碰撞检测）",
       previewImage: "http://182.43.179.137:81/threejs/engine/engin.png",
       url: "http://182.43.179.137:81/threejs/engine",
      }] */
    };
  },
  created() {
    this.getThreejsExamples().then(()=>{
      this.initPage()
    })
  },
  computed:{
    titleList(){
      const list = []
      if(!this.examples) return list
      const half = Math.ceil(this.examples.length / 2)
      if(half<5) half= 5
      list.push(this.examples.filter((item,index)=>index<half))
      list.push(this.examples.filter((item,index)=>index>=half))
      return list
    }
  },
  methods: {
    async getThreejsExamples(){
      const [state,rs,err] = await getThreejsExamples().then(rs=>[true,rs,null],err=>[false,null,err])
      if(!state) return promise.reject()
      this.examples = rs
    },
    initPage(){
      window.addEventListener("message", this.postMessage);
      setTimeout(() => {
        this.startLoadPreview = true;
      }, 2500);
    },
    postMessage(event) {
      if (event.data == "engineOver") {
        this.engineOver = true;
      }

      // 提前加载脚本
      if (event.data == "loaded") {
        setTimeout(() => {
          let script1 = document.createElement("script");
          script1.type = "module";
          script1.src = "https://cdn.skypack.dev/three@v0.129.0";
          document.body.appendChild(script1);
          let script2 = document.createElement("script");
          script2.type = "module";
          script2.src = "https://cdn.skypack.dev/three@v0.129.0/examples/jsm/controls/OrbitControls.js";
          document.body.appendChild(script2);
          let script3 = document.createElement("script");
          script3.type = "module";
          script3.src = "https://cdn.skypack.dev/three@v0.129.0/examples//jsm/loaders/GLTFLoader.js";
          document.body.appendChild(script3);
        }, 4000);
        setTimeout(() => {
          let script = document.createElement("script");
          script.type = "module";
          script.src = "https://cdn.skypack.dev/three@v0.129.0/examples//jsm/loaders/FBXLoader.js";
          document.body.appendChild(script);
        }, 12000);
      }
    },
  },
  beforeDestory() {
    window.removeEventListener("message", this.postMessage);
  },
};
</script>

<style lang="scss" scoped>
@import "src/assets/css/var.scss";

.threejs1 {
  min-height: 3000px;
  padding-bottom: 20px;
  &::after {
    display: block;
    content: "";
    clear: both;
  }
  .themeColor {
    color: $themeColor;
  }
  .look {
    transform: scale(0.7);
    display: inline-block;
    color: #27b1a8;
  }
  .introduce {
    // padding-left: 15px;
    color: #999;
    font-size: 12px;
    margin-top: 10px;
    .tip {
      display: inline-block;
      margin-bottom: 5px;
    }
    .list {
      display: flex;
      align-items: stretch;
      .left {
        width: 50%;
      }
      .right {
        width: 50%;
      }
    }
    .address {
      font-weight: bold;
    }
  }
  .item {
    position: relative;
    margin: 20px 10px 0px 0;
    float: left;
    width: calc((100vw - 240px) / 2);
    height: calc((100vw - 240px) / 2 / 1.5);
    p {
      padding: 10px;
      color: #27b1a8;
      a {
        position: relative;
        top: 2px;
      }
    }
    .tick {
      position: absolute;
      opacity: 0.5;
      top: 40px;
      left: 10px;
      font-size: 12px;
    }
    .preview {
      background: #fff;
    }
    iframe,
    .preview {
      width: 100%;
      height: calc(100% - 40px);
    }
  }

  @media screen and (max-width: 1000px) {
    .threejs {
      min-height: 1500px;
    }
    .item {
      width: calc(100vw - 60px);
      height: calc((100vw - 60px) / 1.5);
      margin: 15px 0 0 0;
      > p:first-child {
        padding-left: 5px;
      }
      iframe,
      .preview {
        width: 100%;
        height: calc(100% - 40px);
      }
      &.engine {
        margin-top: 20px;
      }
    }
  }
}
</style>
