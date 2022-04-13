<template>
  <div class="threejs">
    <p class="introduce">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;对于这里的内容，需要你先去了解基础的webgl知识，了解矩阵、向量、透视投影、裁剪空间、视图变换、着色器原理、threejs框架等等内容。
      <br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;之前在研究webgl和threejs的时候在网上查到了很多资料（包括郭隆邦的很多资料觉得很好），在此对所有小伙伴们表示感谢。这里也把之前研究的内容拆解出来，分享给感兴趣的小伙伴们学习、研究和参考。也给大家推荐几本比较好的参考资料：OpenGL着色语言、OPENGL
      ES 3.0编程指南 第2版、3D游戏与计算机图形学中的数学方法 第3版。
      <br />
      <br />

      ● 雷达扫描
      <br />
      ● 3D中国地图
      <br />
      ● 流动
      <br />
      ● 生长
      <br />
      ● 光幕
      <br />
      ● 渐变
      <br />
      ● 飞线
      <br />
      ● 包围线
      <br />
      <br />

      <span class="address">仓库地址：</span
      ><a href="https://gitee.com/superzay/threejs-animate"
        >https://gitee.com/superzay/threejs-animate</a
      >
    </p>
    <div v-if="num >= 0" class="item">
      <p>雷达扫描</p>
      <iframe
        src="http://182.43.179.137:81/threejs/radar"
        frameborder="0"
      ></iframe>
    </div>
    <div v-if="num >= 1" class="item">
      <p>3D中国地图</p>
      <iframe
        src="http://182.43.179.137:81/threejs/chinaMap"
        frameborder="0"
      ></iframe>
    </div>
    <div v-if="num >= 2" class="item">
      <p>流动</p>
      <iframe
        src="http://182.43.179.137:81/threejs/belt"
        frameborder="0"
      ></iframe>
    </div>
    <div v-if="num >= 3" class="item">
      <p>生长</p>
      <iframe
        src="http://182.43.179.137:81/threejs/grow"
        frameborder="0"
      ></iframe>
    </div>
    <div v-if="num >= 4" class="item">
      <p>光幕</p>
      <iframe
        src="http://182.43.179.137:81/threejs/wall"
        frameborder="0"
      ></iframe>
    </div>
    <div v-if="num >= 5" class="item">
      <p>渐变</p>
      <iframe
        src="http://182.43.179.137:81/threejs/gradient"
        frameborder="0"
      ></iframe>
    </div>
    <div v-if="num > 6" class="item">
      <p>飞线</p>
      <iframe
        src="http://182.43.179.137:81/threejs/fly"
        frameborder="0"
      ></iframe>
    </div>
    <div v-if="num >= 7" class="item">
      <p>包围线</p>
      <iframe
        src="http://182.43.179.137:81/threejs/line"
        frameborder="0"
      ></iframe>
    </div>
  </div>
</template>
<script>
export default {
  props: ["title"],
  data() {
    return {
      num: 0,
      timer: null,
    };
  },
  created() {
    this.start();
  },
  methods: {
    start() {
      this.timer = setInterval(() => {
        if (this.num > 7) {
          clearInterval(this.timer);
          return;
        }
        this.num++;
      }, 3000);
    },
  },
};
</script>

<style lang='scss' scoped>
@import "src/assets/css/var.scss";

.threejs {
  padding-bottom: 50px;
  .introduce {
    padding-left: 15px;
    color: #999;
    font-size: 12px;
    margin-top: 10px;
    .address {
      font-weight: bold;
    }
  }
  .item {
    margin: 20px 10px 0 0;
    float: left;
    p {
      padding: 10px;
      color: #27b1a8;
    }
    iframe {
      width: calc((100vw - 240px) / 2);
      height: calc((100vw - 240px) / 2 / 1.5);
    }
  }

  @media screen and (max-width: 1000px) {
    .item {
      iframe {
        width: calc(100vw - 60px);
        height: calc((100vw - 60px) / 1.5);
      }
    }
  }
}
</style>