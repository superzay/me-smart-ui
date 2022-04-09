<template>
  <div class="threejs">
    <div v-if="num >= 0" class="item">
      <p>雷达扫描</p>
      <iframe
        src="http://182.43.179.137:81/threejs/radar"
        frameborder="0"
      ></iframe>
    </div>
    <div v-if="num >= 1" class="item">
      <p>流动</p>
      <iframe
        src="http://182.43.179.137:81/threejs/belt"
        frameborder="0"
      ></iframe>
    </div>
    <div v-if="num >= 2" class="item">
      <p>生长</p>
      <iframe
        src="http://182.43.179.137:81/threejs/grow"
        frameborder="0"
      ></iframe>
    </div>
    <div v-if="num >= 3" class="item">
      <p>光幕</p>
      <iframe
        src="http://182.43.179.137:81/threejs/wall"
        frameborder="0"
      ></iframe>
    </div>
    <div v-if="num >= 4" class="item">
      <p>渐变</p>
      <iframe
        src="http://182.43.179.137:81/threejs/gradient"
        frameborder="0"
      ></iframe>
    </div>
    <div v-if="num > 5" class="item">
      <p>飞线</p>
      <iframe
        src="http://182.43.179.137:81/threejs/fly"
        frameborder="0"
      ></iframe>
    </div>
    <div v-if="num >= 6" class="item">
      <p>包围线</p>
      <iframe
        src="http://182.43.179.137:81/threejs/line"
        frameborder="0"
      ></iframe>
    </div>
    <div v-if="num >= 7" class="item">
      <p>透明</p>
      <iframe
        src="http://182.43.179.137:81/threejs/opacity"
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
  .item {
    margin: 20px 10px 0 0;
    float: left;
    p {
      padding: 10px;
    }
    iframe {
      width: calc((100vw - 260px) / 2);
      height: calc((100vw - 260px) / 2 / 1.5);
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