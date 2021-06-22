<template lang='html'>
  <div class='content'>
    <header>
      <p class='logo center-y'>me-smart-ui 库</p>
    </header>
    <!-- 组件列表 -->
    <aside @click.stop='toggle("aside")'>
      <div class='aside-flag center'>
        <i class='iconfont icon-mulu'></i>
      </div>
      <div ref='asideList' @click.stop="" class='aside-list'>
        <div v-for='item in getCompnentList()' :key='item' class='aside-list-item' :class='{active:item==active}'
          @click='active = item'>
          <div class='center aside-list-item-text'>

            <span>{{item}} </span>
            <span></span>
          </div>
        </div>

      </div>
    </aside>

    <!-- 组件展示 -->
    <main>
      <component v-if='targetComp' :is='targetComp'></component>
    </main>
  </div>
</template>

<script>
  import common from 'src/assets/js/common'
  export default {
    data() {
      return {
        active: 'me-image-crop',
        compMap: new Map(),// 组件map集合
      }
    },
    created() {
      window.addEventListener('click', this.toggle)
    },
    computed: {
      targetComp() {
        if (!this.compMap) return false
        const comp = this.compMap.get(this.active)
        if (comp) return comp
        // 动态获取组件
        import(`./package/components/${this.active}/demo/index.vue`).then(arg => {
          this.compMap.set(this.active, arg.default)
          const compMap = this.compMap
          this.compMap = null
          this.$nextTick(() => {
            this.compMap = compMap
          })
        })
        return false
      }
    },
    methods: {
      getCompnentList() {
        // window.meSmartComponents由webpack注入
        return window.meSmartComponents.map(item => common.camelToLine(item))
      },
      // 小屏设备时切换菜单栏打开和关闭
      toggle(entry) {
        let el = this.$refs.asideList
        if (el) {
          let list = Array.from(el.classList)
          if (list.includes('aside-close') && entry === 'aside') {
            el.classList.remove('aside-close')
          } else {
            el.classList.add('aside-close')
          }
        }
      }
    },
    destoryed() {
      window.removeEventListener('click', this.toggle)
    }
  }
</script>

<style scoped lang='scss' scoped>
  @import 'src/assets/css/var.scss';

  .content {
    padding-top: $headerHeight;

    header {
      height: $headerHeight;
      background: #fff;

      box-shadow: 0 5px 5px 0 #d2d2d2;
      position: fixed;
      left: 0;
      top: 0;
      width: 100%;
      z-index: $zIndex+1;

      .logo {
        width: 120px;
        background: $themeColor;
        /* background: #40aaa3; */
        border-radius: 20px;
        text-align: center;
        padding: 5px 0;
        color: #fff;
        left: 20px;
        font-size: 12px;
      }
    }


    aside {
      position: fixed;
      background: $backgroundAside;
      height: 100vh;
      width: $largeDeviceAsideWidth;
      z-index: $zIndex;
      left: 0;
      top: $headerHeight;

      .aside-flag {
        color: #aaa;
        display: none;
      }

      .aside-list {
        overflow: hidden;

        .aside-list-item {
          height: 50px;
          text-align: center;
          cursor: pointer;
          font-size: 14px;
          position: relative;

          &.active {
            /* color: $themeColor; */
            background: #f2f2f2;
          }

          .aside-list-item-text {
            white-space: nowrap;
          }
        }
      }

    }

    main {
      padding: 10px 30px 10px 30px;
      margin-left: $largeDeviceAsideWidth;

      .title {
        font-weight: bold;
        font-size: 20px;
        text-align: center;
        margin-bottom: 20px;
      }
    }


  }

  @media screen and (max-width: 1000px) {
    .content {
      padding-top: $headerHeight-1;

      header {
        height: $headerHeight-1;

        .logo {
          left: 10px;
        }
      }

      aside {
        width: 30px;
        height: 30px;
        border-radius: 10px;
        position: fixed;
        top: $headerHeight-1 + 10px;
        left: 10px;
        box-shadow: 2px 2px 10px 0px #c2c2c2;

        .aside-flag {
          display: block
        }

        .aside-list {
          position: absolute;
          top: calc(100% + 5px);
          left: 0px;
          width: 150px;
          background: $backgroundAside;
          border-radius: 3px;
          box-shadow: 2px 2px 10px 0px #c2c2c2;

          &.aside-close {
            display: none
          }

          .aside-list-item {
            height: 30px;

            &.active {
              background: #e2e3e4
            }
          }
        }
      }

      main {
        margin-left: $smallDeviceAsideWidth;
      }
    }


  }
</style>