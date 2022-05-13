<template>
  <div class="cesium">
    <p class="introduce">
      最近在研究GIS地理信息系统时，接触到了Cesium框架，轻巧方便，易于上手。隧边研究边实践，写了几个简单的demo，算作是对Cesium基本机制、用法
      和api的熟悉。这里分享给有同样诉求的小伙伴们参考。喜欢的同学可以去仓库拉源码。
      <br />
      <br />

      <!--  ● 环球飞行
      <br /> -->

      <span class="address">仓库地址：</span
      ><a href="https://gitee.com/superzay/cesium"
        >https://gitee.com/superzay/cesium</a
      >
    </p>
    <div class="item firework">
      <p>环球飞行</p>
      <iframe
        src="http://182.43.179.137:81/cesium/fly/index.html"
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

.cesium {
  padding-bottom: 50px;
  .introduce {
    color: #999;
    font-size: 12px;
    margin-top: 10px;
    padding-left: 20px;
    .address {
      font-weight: bold;
    }
  }
  .item {
    margin: 20px 10px 0 0;
    p {
      padding: 10px;
      color: #27b1a8;
    }
    iframe {
      width: calc(100vw - 230px);
      height: calc(100vh - 220px);
      background: #fff;
    }
  }

  @media screen and (max-width: 1000px) {
    .item {
      iframe {
        width: calc(100vw - 60px);
      }
    }
  }
}
</style>