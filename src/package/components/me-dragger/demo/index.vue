<template>
  <div class='demo-me-dragger'>
    <p class='text'>&nbsp;&nbsp; 试一试，PC端拖拽排序插件</p>
    <me-dragger :options.sync='arr' id-field='id' type='left-right'>
      <div v-for='(item,index) in arr' :key='item.id' class='item'>
        <span class="center"><span class='top'> 第 {{index+1}} 名</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {{item.id}}</span>
      </div>
    </me-dragger>
  </div>
</template>
<script>
  export default {
    name: '',
    data() {
      return {
        // 列表数组，id必须
        arr: [{
          id: '貂蝉',
        }, {
          id: '小乔',
        }, {
          id: '孙尚香',
        }, {
          id: '蔡文姬',
        }, {
          id: '柳如是',
        }, {
          id: '李香君',
        }, {
          id: '陈圆圆',
        }, {
          id: '李师师',
        }, {
          id: '杜秋娘',
        }, {
          id: '苏小小',
        }],
      }
    }
  }
</script>
<style lang="scss" scoped>
  .demo-me-dragger {
    max-width: 800px;
    margin: auto;

    .text {
      font-weight: bold;
      margin-bottom: 5px;
    }

    .item {
      height: 60px;
      width: 200px;
      margin: 10px;
      display: inline-block;
      border-radius: 10px;
      background: rgba(255, 0, 0, 0.6);
      position: relative;
      color: #333;

      .center {
        white-space: nowrap;
      }

      .top {
        color: rgb(214, 226, 43)
      }
    }
  }

  @media screen and (max-width: 500px) {
    .item {
      width: 140px!important;
      height: 45px!important;
      font-size: 12px!important;
      border-radius: 10px!important;
    }
  }
</style>