<template>
  <div class="threejs">
    <p class="introduce">
      &nbsp;&nbsp;&nbsp;闲来无事写的一些canvas小动画，可以熟悉canvas的基本api和应用。喜欢的同学可以去仓库拉源码
      <br />
      <br />

      <span class="address">仓库地址：</span>
      <br />
      &nbsp;&nbsp;&nbsp;<a href="https://gitee.com/superzay/canvas-firework"
        >https://gitee.com/superzay/canvas-firework</a
      >
      <br />
      &nbsp;&nbsp;&nbsp;<a href="https://gitee.com/superzay/canvas-bubble"
        >https://gitee.com/superzay/canvas-bubble</a
      >
    </p>
    <div class="item firework">
      <p>小烟花</p>
      <iframe
        src="http://182.43.179.137:81/canvas/firework.html"
        frameborder="0"
      ></iframe>
    </div>
    <div class="item">
      <p>多彩泡泡（点一点）</p>
      <iframe
        src="http://182.43.179.137:81/canvas/bubble.html"
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
    color: #999;
    font-size: 12px;
    margin-top: 10px;
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
      height: 400px;
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