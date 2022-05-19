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

      ● 物理引擎
      <a class="look" href="http://182.43.179.137:81/threejs/engine">查看 </a>
      <br />
      ● 自由行走
      <a class="look" href="http://182.43.179.137:81/threejs/walk">查看</a>
      <br />
      ● 雷达扫描
      <a class="look" href="http://182.43.179.137:81/threejs/radar">查看</a>
      <br />
      ● 3D中国地图&nbsp;<a
        class="look"
        href="http://182.43.179.137:81/threejs/map"
        >查看</a
      >
      <br />
      ● 粒子系统（星空）<a
        class="look"
        href="http://182.43.179.137:81/threejs/star"
        >查看</a
      >
      <br />
      ● 粒子系统（烟雾）<a
        class="look"
        href="http://182.43.179.137:81/threejs/smoke"
        >查看</a
      >
      <br />
      ● 骨骼系统&nbsp;<a
        class="look"
        href="http://182.43.179.137:81/threejs/bone"
        >查看</a
      >
      <br />
      ● 流动&nbsp;<a class="look" href="http://182.43.179.137:81/threejs/belt"
        >查看</a
      >
      <br />
      ● 生长&nbsp;<a class="look" href="http://182.43.179.137:81/threejs/grow"
        >查看</a
      >
      <br />
      ● 光幕&nbsp;<a class="look" href="http://182.43.179.137:81/threejs/wall"
        >查看</a
      >
      <br />
      ● 渐变&nbsp;<a
        class="look"
        href="http://182.43.179.137:81/threejs/gradient "
        >查看
      </a>
      <br />
      ● 飞线&nbsp;<a class="look" href="http://182.43.179.137:81/threejs/fly"
        >查看</a
      >
      <br />
      <br />

      <span class="address">仓库地址：</span
      ><a href="https://gitee.com/superzay/threejs-animate"
        >https://gitee.com/superzay/threejs-animate</a
      >
    </p>

    <div class="item">
      <p>
        物理引擎

        <span style="font-size: 12px"
          >&nbsp;&nbsp;demo较多，gpu会有些卡顿，移动端限制了数量，pc端可以查看全部demo</span
        >
      </p>
      <iframe
        v-if="num >= 0"
        src="http://182.43.179.137:81/threejs/engine"
        frameborder="0"
      ></iframe>
    </div>
    <div class="item walk">
      <p>自由行走（点击地面行走）</p>
      <iframe
        v-if="num >= 1"
        src="http://182.43.179.137:81/threejs/walk"
        frameborder="0"
      ></iframe>
    </div>
    <div class="item">
      <p>雷达扫描</p>
      <iframe
        v-if="num >= 2"
        src="http://182.43.179.137:81/threejs/radar"
        frameborder="0"
      ></iframe>
    </div>
    <div class="item">
      <p>3D中国地图</p>
      <iframe
        v-if="num >= 3"
        src="http://182.43.179.137:81/threejs/chinaMap"
        frameborder="0"
      ></iframe>
    </div>
    <div class="item">
      <p>粒子系统（星空）</p>
      <iframe
        v-if="num >= 4"
        src="http://182.43.179.137:81/threejs/star"
        frameborder="0"
      ></iframe>
    </div>
    <div class="item">
      <p>粒子系统（烟雾）</p>
      <iframe
        v-if="num >= 5"
        src="http://182.43.179.137:81/threejs/smoke"
        frameborder="0"
      ></iframe>
    </div>
    <div class="item">
      <p>骨骼系统</p>
      <iframe
        v-if="num >= 6"
        src="http://182.43.179.137:81/threejs/bone"
        frameborder="0"
      ></iframe>
    </div>
    <div class="item">
      <p>流动</p>
      <iframe
        v-if="num >= 7"
        src="http://182.43.179.137:81/threejs/belt"
        frameborder="0"
      ></iframe>
    </div>
    <div class="item">
      <p>生长</p>
      <iframe
        v-if="num >= 8"
        src="http://182.43.179.137:81/threejs/grow"
        frameborder="0"
      ></iframe>
    </div>
    <div class="item">
      <p>光幕</p>
      <iframe
        v-if="num >= 9"
        src="http://182.43.179.137:81/threejs/wall"
        frameborder="0"
      ></iframe>
    </div>
    <div class="item">
      <p>渐变</p>
      <iframe
        v-if="num >= 10"
        src="http://182.43.179.137:81/threejs/gradient"
        frameborder="0"
      ></iframe>
    </div>
    <div class="item">
      <p>飞线</p>
      <iframe
        v-if="num >= 11"
        src="http://182.43.179.137:81/threejs/fly"
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
      showNum: 0,
    };
  },
  created() {
    //this.start();
    this.showNum = window.innerWidth < 1200 ? 7 : 11;
    window.addEventListener("message", this.postMessage);
  },
  methods: {
    start() {
      if (this.num >= this.showNum) return;
      this.num++;
      setTimeout(() => {
        this.start();
      }, 3000);
    },
    postMessage(event) {
      if (event.data == "engineOver") {
        this.start();
      }
    },
  },
  beforeDestory() {
    window.removeEventListener("message", this.postMessage);
  },
};
</script>

<style lang='scss' scoped>
@import "src/assets/css/var.scss";

.threejs {
  min-height: 3000px;
  padding-bottom: 50px;
  .introduce {
    padding-left: 15px;
    color: #999;
    font-size: 12px;
    margin-top: 10px;
    .address {
      font-weight: bold;
    }
    .look {
      transform: scale(0.7);
      display: inline-block;
      color: #27b1a8;
    }
  }
  .item {
    margin: 20px 10px 10px 0;
    float: left;
    width: calc((100vw - 240px) / 2);
    height: calc((100vw - 240px) / 2 / 1.5);
    p {
      padding: 10px;
      color: #27b1a8;
    }
    iframe {
      width: 100%;
      height: calc(100% - 20px);
    }
  }

  @media screen and (max-width: 1000px) {
    .threejs {
      min-height: 1500px;
    }
    .item {
      width: calc(100vw - 60px);
      height: calc((100vw - 60px) / 1.5);
      iframe {
        width: 100%;
        height: calc(100% - 20px);
      }
    }
    .walk {
      margin-top: 40px;
    }
  }
}
</style>