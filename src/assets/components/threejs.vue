<template>
  <div class="threejs1">
    <div class="introduce">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;对于这里的内容，需要你先去了解基础的webgl知识，了解矩阵、向量、透视投影、裁剪空间、视图变换、着色器原理、threejs框架等等内容。
      <br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;之前在研究webgl和threejs的时候在网上查到了很多资料（包括郭隆邦的很多资料觉得很好），在此对所有小伙伴们表示感谢。这里也把之前研究的内容拆解出来，分享给感兴趣的小伙伴们学习、研究和参考。也给大家推荐几本比较好的参考资料：OpenGL着色语言、OPENGL
      ES 3.0编程指南 第2版、3D游戏与计算机图形学中的数学方法 第3版。
      <br />
      <br />
      <div class="list">
        <div class="left">
          ● 物理引擎
          <a class="look" href="http://182.43.179.137:81/threejs/engine">查看 </a>
          <br />
          ● 自由行走
          <a class="look" href="http://182.43.179.137:81/threejs/walk">查看</a>
          <br />
          ● 抖音挤地铁小游戏
          <a class="look" href="http://182.43.179.137:81/threejs/train">查看</a>
          <br />
          ● 3D图表<a class="look" href="http://182.43.179.137:81/threejs/charts/pie/">查看</a>
          <br />
          ● 雷达扫描
          <a class="look" href="http://182.43.179.137:81/threejs/radar">查看</a>
          <br />
          ● 透明光幕&nbsp;<a class="look" href="http://182.43.179.137:81/threejs/wall">查看</a>
          <br />
          ● 3D中国地图&nbsp;<a class="look" href="http://182.43.179.137:81/threejs/map">查看</a>
          <br />
          ● 粒子系统 (星空)<a class="look" href="http://182.43.179.137:81/threejs/star">查看</a>
          <br />
          ● 粒子系统 (烟雾)<a class="look" href="http://182.43.179.137:81/threejs/smoke">查看</a>
          <br />
        </div>
        <div class="right">
          ● 色彩流动<a class="look" href="http://182.43.179.137:81/threejs/flow">查看</a>
          <br />
          ● 课堂助手(圆锥曲线)<a class="look" href="http://182.43.179.137:81/threejs/math/boneCurve/">查看</a>
          <br />
          ● 360º实景&nbsp;<a class="look" href="http://182.43.179.137:81/threejs/scenery">查看</a>
          <br />
          ● 骨骼系统&nbsp;<a class="look" href="http://182.43.179.137:81/threejs/bone">查看</a>
          <br />

          ● 流动&nbsp;<a class="look" href="http://182.43.179.137:81/threejs/belt">查看</a>
          <br />
          ● 生长&nbsp;<a class="look" href="http://182.43.179.137:81/threejs/grow">查看</a>
          <br />
          ● 渐变&nbsp;<a class="look" href="http://182.43.179.137:81/threejs/gradient ">查看 </a>
          <br />
          ● 飞线&nbsp;<a class="look" href="http://182.43.179.137:81/threejs/fly">查看</a>
          <br />
        </div>
      </div>

      <br />

      <span class="address">仓库地址：</span><a href="https://gitee.com/superzay/threejs-animate">https://gitee.com/superzay/threejs-animate</a>
    </div>

    <div class="item engine">
      <p>
        物理引擎（碰撞检测）
        <a class="look" href="http://182.43.179.137:81/threejs/engine">查看</a>
      </p>
      <iframe v-if="num >= 0" src="http://182.43.179.137:81/threejs/engine" frameborder="0"></iframe>
    </div>
    <div class="item walk">
      <p>
        自由行走（点击地面行走）
        <a class="look" href="http://182.43.179.137:81/threejs/walk">查看</a>
      </p>
      <iframe v-if="num >= 1" src="http://182.43.179.137:81/threejs/walk/" frameborder="0"></iframe>
      <p v-if="num < 1 && startLoadPreview" class="tick">预览图</p>
      <img v-if="num < 1 && startLoadPreview" class="preview" src="http://182.43.179.137:81/threejs/walk/walk.png" frameborder="0" />
    </div>
    <div class="item train">
      <p>
        抖音挤地铁小游戏
        <a class="look" href="http://182.43.179.137:81/threejs/train/">查看</a>
      </p>
      <p v-if="startLoadPreview" class="tick">预览图</p>
      <img v-if="startLoadPreview" class="preview" src="http://182.43.179.137:81/threejs/train/train.png" frameborder="0" />
    </div>
    <div class="item">
      <p>
        3D图表
        <a class="look" href="http://182.43.179.137:81/threejs/charts/pie">查看</a>
      </p>
      <p v-if="startLoadPreview" class="tick">预览图</p>
      <img v-if="startLoadPreview" class="preview" src="http://182.43.179.137:81/threejs/charts/pie/pie.png" frameborder="0" />
    </div>
    <div class="item">
      <p>
        雷达扫描
        <a class="look" href="http://182.43.179.137:81/threejs/radar">查看</a>
      </p>
      <p v-if="startLoadPreview" class="tick">预览图</p>
      <img v-if="startLoadPreview" class="preview" src="http://182.43.179.137:81/threejs/radar/radar.png" frameborder="0" />
    </div>
    <div class="item">
      <p>
        透明光幕
        <a class="look" href="http://182.43.179.137:81/threejs/wall">查看</a>
      </p>
      <p v-if="startLoadPreview" class="tick">预览图</p>
      <img v-if="startLoadPreview" class="preview" src="http://182.43.179.137:81/threejs/wall/wall.png" frameborder="0" />
    </div>
    <div class="item">
      <p>
        3D中国地图
        <a class="look" href="http://182.43.179.137:81/threejs/chinaMap">查看</a>
      </p>
      <p v-if="startLoadPreview" class="tick">预览图</p>
      <img v-if="startLoadPreview" class="preview" src="http://182.43.179.137:81/threejs/chinaMap/chinaMap.png" frameborder="0" />
    </div>
    <div class="item">
      <p>
        粒子系统（星空）
        <a class="look" href="http://182.43.179.137:81/threejs/star">查看</a>
      </p>
      <p v-if="startLoadPreview" class="tick">预览图</p>
      <img v-if="startLoadPreview" class="preview" src="http://182.43.179.137:81/threejs/star/star.png" frameborder="0" />
    </div>
    <div class="item">
      <p>
        粒子系统（烟雾）
        <a class="look" href="http://182.43.179.137:81/threejs/smoke/">查看</a>
      </p>
      <p v-if="startLoadPreview" class="tick">预览图</p>
      <img v-if="startLoadPreview" class="preview" src="http://182.43.179.137:81/threejs/smoke/smoke.png" frameborder="0" />
    </div>
    <div class="item">
      <p>
        色彩流动
        <a class="look" href="http://182.43.179.137:81/threejs/flow">查看</a>
      </p>
      <p v-if="startLoadPreview" class="tick">预览图</p>
      <img v-if="startLoadPreview" class="preview" src="http://182.43.179.137:81/threejs/flow/flow.png" frameborder="0" />
    </div>

    <div class="item">
      <p>
        课堂助手（圆锥曲线3D图解）
        <a class="look" href="http://182.43.179.137:81/threejs/math/boneCurve">查看</a>
      </p>
      <p v-if="startLoadPreview" class="tick">预览图</p>
      <img v-if="startLoadPreview" class="preview" src="http://182.43.179.137:81/threejs/math/boneCurve/boneCurve.png" frameborder="0" />
    </div>
    <div class="item">
      <p>
        360º实景
        <a class="look" href="http://182.43.179.137:81/threejs/scenery">查看</a>
      </p>
      <p v-if="startLoadPreview" class="tick">预览图</p>
      <img v-if="startLoadPreview" class="preview" src="http://182.43.179.137:81/threejs/scenery/scenery.png" frameborder="0" />
    </div>
    <div class="item">
      <p>
        骨骼系统
        <a class="look" href="http://182.43.179.137:81/threejs/bone">查看</a>
      </p>
      <p v-if="startLoadPreview" class="tick">预览图</p>
      <img v-if="startLoadPreview" class="preview" src="http://182.43.179.137:81/threejs/bone/bone.png" frameborder="0" />
    </div>
    <div class="item">
      <p>
        流动
        <a class="look" href="http://182.43.179.137:81/threejs/belt">查看</a>
      </p>
      <p v-if="startLoadPreview" class="tick">预览图</p>
      <img v-if="startLoadPreview" class="preview" src="http://182.43.179.137:81/threejs/belt/belt.png" frameborder="0" />
    </div>
    <div class="item">
      <p>
        生长
        <a class="look" href="http://182.43.179.137:81/threejs/grow">查看</a>
      </p>
      <p v-if="startLoadPreview" class="tick">预览图</p>
      <img v-if="startLoadPreview" class="preview" src="http://182.43.179.137:81/threejs/grow/grow.png" frameborder="0" />
    </div>

    <div class="item">
      <p>
        渐变
        <a class="look" href="http://182.43.179.137:81/threejs/gradient">查看</a>
      </p>
      <p v-if="startLoadPreview" class="tick">预览图</p>
      <img v-if="startLoadPreview" class="preview" src="http://182.43.179.137:81/threejs/gradient/gradient.png" frameborder="0" />
    </div>
    <div class="item">
      <p>
        飞线
        <a class="look" href="http://182.43.179.137:81/threejs/fly">查看</a>
      </p>
      <p v-if="startLoadPreview" class="tick">预览图</p>
      <img v-if="startLoadPreview" class="preview" src="http://182.43.179.137:81/threejs/fly/fly.png" frameborder="0" />
    </div>
  </div>
</template>
<script>
export default {
  props: ["title"],
  data() {
    return {
      num: 0,
      showNum: 0,
      startLoadPreview: false,
    };
  },
  created() {
    //this.start();
    this.showNum = 1;
    window.addEventListener("message", this.postMessage);
    setTimeout(() => {
      this.startLoadPreview = true;
    }, 2500);
  },
  methods: {
    start() {
      if (this.num >= this.showNum) return;
      this.num++;
      setTimeout(() => {
        this.start();
      }, 6000);
    },
    postMessage(event) {
      if (event.data == "engineOver") {
        this.start();
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
