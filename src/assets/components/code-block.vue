<template>
  <div class='code-block'>
    <slot></slot>
    <pre class='pre'>
      <code v-html='codeHtml' ref='code' :class='getClass()' class='hljs code'></code>
    </pre>

  </div>
</template>
<script>
  import hl from 'highlight.js' // 导入代码高亮文件
  export default {
    props: {
      lang: {
        type: String,
        require: true

      },
      code: {
        type: String,
        require: true
      }
    },
    computed: {
      codeHtml() {
        let length
        let text = this.code

        // 去掉代码前多余的空格
        let list = text.match(/\n\u0020+/g)
        if (list) {
          list.forEach(item => {
            if (!length) {
              length = item.length
              return
            }
            if (item.length - 1 < length) {
              length = item.length - 1
            }
          })
          const reg = new RegExp(`\n\u0020{${length}}`,'g')
          text = text.replace(reg, '\n')
          console.log(reg,text)
        }

        // 高亮代码转换
        return hl.highlight(text, { language: this.lang }).value
      }
    },
    data() {
      return {
        docHtml: ''
      }
    },
    mounted() {},
    methods: {
      getClass() {
        let className = `language-${this.lang}`
        const obj = {}
        obj[className] = true
        return obj
      }
    }

  }
</script>

<style lang='scss' scoped>
  .code-block {
    ::v-deep {
      @import 'highlight.js/styles/atom-one-light';

      .hljs {
        background: transparent;
        font-size: 14px;
        font-family: Menlo, Monaco, Consolas, Courier New, monospace;
      }
    }

    background: #f2f2f2;
    border-radius: 6px;
    padding: 10px;

    .pre {
      overflow: auto;
      display: block;

      .code {
        display: inline-block;
        position: relative;
      }
    }
  }
</style>