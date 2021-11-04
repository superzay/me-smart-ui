<template>
  <div class='demo-me-dragger'>
    <h2 class='title'>me-dragger组件文档（文章最后有演示demo）</h2>
    <p class='explain'>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;一款基于vue的PC端拖拽排序插件。实现对目标的自由拖拽、实时响应排序。
    </p>
    <!-- 说明文档 -->
    <doc></doc>

    <!-- 拖拽排序插件，演示demo -->
    <p class='text'>&nbsp;&nbsp; 试一试，PC端拖拽排序插件</p>
    <me-dragger :options='arr' id-field='id' @order-change='orderChange' type='left-right'>
      <div v-for='(item,index) in arr' :key='item.id' class='item'>
        <span class="center"><span class='top'> 第 {{index+1}} 名</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {{item.id}}</span>
      </div>
    </me-dragger>
  </div>
</template>
<script>
  import doc from './doc.vue'
  export default {
    components: {
      doc
    },
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
    },
    methods:{
      orderChange(newArr){
        this.arr = newArr
      }
    }
  }
</script>
<style lang="scss" scoped>
  .demo-me-dragger {
    /* max-width: 800px; */
    margin: auto;
    padding-bottom: 200px;

    .title {
      text-align: center;
      padding-top: 20px;
    }

    .explain {
      margin: 10px 0 -10px 0;
      font-size: 13px;
      color: #666;
    }

    .text {
      font-weight: bold;
      margin: 20px 0 5px 0;
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
      width: 140px !important;
      height: 45px !important;
      font-size: 12px !important;
      border-radius: 10px !important;
    }
  }
</style>