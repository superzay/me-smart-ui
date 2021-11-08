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
        源码目录下有插件使用的完整demo，路径：/src/package/components/me-dragger/demo/index.vue
      </p>
    </card>

    <!-- 插件操作说明 -->
    <card title='插件操作说明' class=''>
      <p>
        PC端鼠标单击目标自由拖拽、实时响应排序
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
                  <div>options</div>
                </td>
                <td>
                  <div>目标列表，用于生成新的排序，必传属性</div>
                </td>
                <td>
                  <div>array</div>
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
                  <div>id-field</div>
                </td>
                <td>
                  <div>
                    列表项标识字段，即通过哪个字段来区分列表项，必传属性
                  </div>
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
                  <div>type</div>
                </td>
                <td>
                  <div>拖拽方式，分上下拖拽排序和左右拖拽排序，非必传</div>
                </td>
                <td>
                  <div>string</div>
                </td>
                <td>
                  <div>up-donw/left-right</div>
                </td>
                <td>
                  <div>up-down</div>
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
                  <div>------</div>
                </td>
                <td>
                  <div>------</div>
                </td>
                <td>
                  <div>------</div>
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
                  <div>orderChange</div>
                </td>
                <td>
                  <div>当顺序发生改变时触发该事件</div>
                </td>
                <td>
                  <div>------</div>
                </td>
                <td>
                  <div>新的排序列表（不会对options直接修改，由插件引用者在该事件中自行决定是否使用新排序）</div>
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
                  <div>默认插槽</div>
                </td>
                <td>
                  <div>列表项</div>
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
        import meDragger from "me-smart-ui/meDragger";
        import 'me-smart-ui/lib/css/meDragger.css';
        Vue.use(meDragger)
        `
      },
      getHtml() {
        return `
        <template>
          <me-dragger></me-dragger>  
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