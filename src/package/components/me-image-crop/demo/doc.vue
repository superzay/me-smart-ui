<template>
  <!-- 说明文档 -->
  <div class='doc'>
    <!-- 安装  -->
    <card title="安装">
      <code-block code='npm install --save me-smart-ui' lang='bash'></code-block>
    </card>

    <!-- 使用 -->
    <card title='使用'>
      <code-block :code='getJs()' lang='js'></code-block>
      <br>
      <code-block :code="getHtml()" lang='html'></code-block>
    </card>

    <!-- DMEO -->
    <card title='DMEO' class='demo'>
      <p>
        仓库地址:<a href="https://gitee.com/superzay/me-smart-ui">https://gitee.com/superzay/me-smart-ui</a>。
        源码目录下有插件使用的完整demo，路径：/src/package/components/me-image-crop/demo/index.vue
      </p>
    </card>

    <!-- 插件操作说明 -->
    <card title='插件操作说明' class=''>
      <p>
        组件使用canvas对图片进行缩放和裁剪，可使用单指拖动图片，双指旋转图片，双指缩放图片，鼠标拖动图片、滚轮缩放图片，鼠标单击步进旋转图片、鼠标长按连续旋转图片
      </p>
    </card>

    <!-- API -->
    <card title='API' class='api'>
      <!-- 属性 -->
      <div class='api-item api-attributes'>
        <h4>attributes</h4>
        <div class='api-attributes-table'>
          <table>
            <thead>
              <th>
                <div>属性</div>
              </th>
              <th class='api-arributes-table-explain'>
                <div>说明</div>
              </th>
              <th>
                <div>类型</div>
              </th>
              <th>
                <div>可选值</div>
              </th>
              <th>
                <div>默认值</div>
              </th>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div>image-src</div>
                </td>
                <td>
                  <div>图片的DataURL（由于canvas跨域污染问题，只支持图片的base64编码数据）</div>
                </td>
                <td>
                  <div>string</div>
                </td>
                <td>
                  <div>------</div>
                </td>
                <td>
                  <div>------</div>
                </td>
              </tr>
              <tr>
                <td>
                  <div>show-btn</div>
                </td>
                <td>
                  <div>
                    是否显示裁剪和取消按钮
                  </div>
                </td>
                <td>
                  <div>boolean</div>
                </td>
                <td>
                  <div>true / false</div>
                </td>
                <td>
                  <div>true</div>
                </td>
              </tr>
              <tr>
                <td>
                  <div>out-type</div>
                </td>
                <td>
                  <div>输出图片的格式</div>
                </td>
                <td>
                  <div>string</div>
                </td>
                <td>
                  <div>base64/blob</div>
                </td>
                <td>
                  <div>base64</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>


      </div>

      <!-- 方法 -->
      <div class='api-item api-methods'>
        <h4>methods</h4>
        <div class='api-methods-table'>
          <table>
            <thead>
              <th>
                <div>方法</div>
              </th>
              <th class='api-methods-table-large'>
                <div>说明</div>
              </th>
              <th class='api-methods-table-large'>
                <div>参数</div>
              </th>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div>getImage</div>
                </td>
                <td>
                  <div>返回裁剪后的图片</div>
                </td>
                <td>
                  <div>获取base64格式图片不需要参数。获取blob格式图片，需要传递回调函数，回调函数会接收到blob对象，注意该过程为异</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- 事件 -->
      <div class='api-item api-event'>
        <h4>event</h4>
        <div class='api-event-table'>
          <table>
            <thead>
              <th>
                <div>事件</div>
              </th>
              <th class='api-event-table-large'>
                <div>说明</div>
              </th>
              <th>
                <div>参数</div>
              </th>
              <th class='api-event-table-large'>
                <div>返回值</div>
              </th>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div>cancel-crop-image</div>
                </td>
                <td>
                  <div>取消图片参加</div>
                </td>
                <td>
                  <div>------</div>
                </td>
                <td>
                  <div>------</div>
                </td>
              </tr>
              <tr>
                <td>
                  <div>confirm-crop-image</div>
                </td>
                <td>
                  <div>确认裁剪图片</div>
                </td>
                <td>
                  <div>------</div>
                </td>
                <td>
                  <div>返回裁剪后的图片，格式base64</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- 插槽 -->
      <div class='api-item api-slot'>
        <h4>slot</h4>
        <div class='api-slot-table'>
          <table>
            <thead>
              <th>
                <div>插槽</div>
              </th>
              <th class='api-slot-table-large'>
                <div>说明</div>
              </th>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div>rotate</div>
                </td>
                <td>
                  <div>pc端图片旋转按钮插槽</div>
                </td>
              </tr>
              <tr>
                <td>
                  <div>cancel</div>
                </td>
                <td>
                  <div>取消裁剪按钮插槽</div>
                </td>
              </tr>
              <tr>
                <td>
                  <div>confirm</div>
                </td>
                <td>
                  <div>确认裁剪按钮插槽</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </card>

    <card title='运行'>
      <p>克隆项目到本地，执行npm install安装依赖，然后运行npm run dev即可查看</p>
    </card>
  </div>
</template>
<script>
  import codeBlock from 'src/assets/components/code-block.vue'
  import card from 'src/assets/components/card.vue'

  export default {
    name: '',
    components: {
      codeBlock,
      card
    },
    data() {
      return {}
    },
    methods: {
      getJs() {
        return `
        // 全量使用
        import MeSmartUi from "me-smart-ui";
        import 'me-smart-ui/lib/css/index.css';
        Vue.use(MeSmartUi )

        // 按需使用  
        import meImageCrop from "me-smart-ui/meImageCrop";
        import 'me-smart-ui/lib/css/meImageCrop.css';
        Vue.use(meImageCrop)
        `
      },
      getHtml() {
        return `
        <template>
          <me-iamge-crop></me-image-crop>  
        </template>
        `
      }
    },
  }
</script>
<style lang="scss" scoped>
  .doc {
    color: #333;
    font-size: 14px;
    padding: 1px 0;

    @media screen and(max-width:1000px) {
      ::v-deep {
        .code-block {
          .code {
            margin-left: -20px;
          }
        }
      }

    }

    .demo {
      p {
        white-space: normal;
        word-wrap: break-word;
        word-break: break-all
      }
    }

    .api {
      .api-item {
        margin-bottom: 60px;
        color: #000;
        padding: 0 10px;
      }

      .api-attributes {
        .api-attributes-table {
          overflow: auto;

          th.api-arributes-table-explain {
            >div {
              min-width: 300px;
            }
          }
        }
      }

      .api-methods {
        .api-methods-table {
          overflow: auto;
        }

        .api-methods-table-large {
          >div {
            min-width: 300px;
          }
        }
      }

      .api-event {
        .api-event-table {
          overflow: auto;
        }
      }

      .api-slot {
        .api-slot-table {
          overflow: auto;
        }

        .api-slot-table-large {
          >div {
            min-width: 500px;
          }
        }
      }
    }

    /* 表格公共配置样式 */
    table {
      table-layout: automatic;
      width: 100%;
      min-width: 500px;
      word-break: break-all;
      word-wrap: break-word;
      border-collapse: collapse;

      td,
      th {
        height: 45px;
        border-bottom: 1px solid #f2f2f2;
        padding: 8px;
        color: #999;
        text-align: left;

        >div {
          width: 100%;
          min-width: 120px;
        }
      }

      th {
        color: #999;
      }
    }
  }
</style>