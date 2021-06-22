<template>
  <div class='card'>
    <h3 v-if='title' class='title'>{{title}}</h3>
    <div calss='content'>
      <slot></slot>
    </div>
  </div>
</template>
<script>
  export default {
    props: ['title'],
  }
</script>

<style lang='scss' scoped>
  @import 'src/assets/css/var.scss';

  .card {
    background: #fff;
    border-radius: 12px;
    padding: 20px;
    min-height: 100px;
    margin: 30px 0;
    box-shadow: 5px 5px 10px 5px #e2e2e2;

    .title {
      color: $themeColor;
      padding-bottom: 18px;
    }

    .content {
      white-space: normal;
      word-wrap: break-word;
      word-break: break-all;
      padding-bottom: 0.1px;
    }
  }
</style>