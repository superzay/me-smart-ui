<template>
  <div class="content">
    <header>
      <p class="logo center-y">me-smart-ui 库</p>
      <p class="connect">wxsuperzay</p>
    </header>
    <!-- 组件列表 -->
    <aside @touchstart.stop="toggle('aside')">
      <!-- me-smart-ui组件 -->
      <div class="aside-flag center">
        <i class="iconfont icon-mulu"></i>
      </div>
      <div ref="asideList" @touchstart.stop="" class="aside-list">
        <div
          v-for="item in getCompnentList()"
          :key="item"
          class="aside-list-item"
          :class="{ active: item == active }"
          @click="activeTab(item)"
        >
          <div class="center aside-list-item-text">
            <span>{{ item }} </span>
            <span></span>
          </div>
        </div>

        <!-- threejs动画特效-->
        <div
          class="aside-list-item"
          :class="{ active: `threejs` == active }"
          @click="activeTab(`threejs`)"
        >
          <div class="center aside-list-item-text">
            <span>threejs&nbsp;&nbsp;3D开发</span>
            <span></span>
          </div>
        </div>

        <!-- canvase动画特效 -->
        <div
          class="aside-list-item"
          :class="{ active: `canvas` == active }"
          @click="activeTab(`canvas`)"
        >
          <div class="center aside-list-item-text">
            <span>canvas&nbsp;&nbsp;2D特效</span>
            <span></span>
          </div>
        </div>

        <!-- CesiumGIS 地理信息 -->
        <div
          class="aside-list-item"
          :class="{ active: `cesium` == active }"
          @click="activeTab(`cesium`)"
        >
          <div class="center aside-list-item-text">
            <span> GIS 地理信息系统</span>
            <span></span>
          </div>
        </div>
      </div>
    </aside>

    <!-- 组件展示 -->
    <main>
      <component v-if="targetComp" :is="targetComp"></component>
    </main>
  </div>
</template>

<script>
import common from "src/assets/js/common";
import threejs from "src/assets/components/threejs.vue";
import canvas from "src/assets/components/canvas.vue";
import cesium from "src/assets/components/cesium.vue";
export default {
  data() {
    return {
      active: "threejs",
      compMap: new Map(), // 组件map集合
    };
  },
  created() {
    window.addEventListener("touchstart", this.toggle);
  },
  computed: {
    targetComp() {
      if (!this.compMap) return false;
      const comp = this.compMap.get(this.active);
      if (comp) return comp;

      if (this.active == "threejs") return threejs;
      if (this.active == "canvas") return canvas;
      if (this.active == "cesium") return cesium;

      // 动态获取组件
      import(`./package/components/${this.active}/demo/index.vue`).then(
        (arg) => {
          this.compMap.set(this.active, arg.default);
          const compMap = this.compMap;
          this.compMap = null;
          this.$nextTick(() => {
            this.compMap = compMap;
          });
        }
      );
      return false;
    },
  },
  methods: {
    getCompnentList() {
      // window.meSmartComponents由webpack注入
      return window.meSmartComponents.map((item) => common.camelToLine(item));
    },
    // 小屏设备时切换菜单栏打开和关闭
    toggle(entry) {
      let el = this.$refs.asideList;
      if (el) {
        let list = Array.from(el.classList);
        if (list.includes("aside-close") && entry === "aside") {
          el.classList.remove("aside-close");
        } else {
          el.classList.add("aside-close");
        }
      }
    },
    activeTab(tab) {
      this.active = tab;
      window.scrollTo(0, 0);
      _hmt && _hmt.push(["_trackPageview", tab]); // 百度统计
      setTimeout(() => {
        let el = this.$refs.asideList;
        el?.classList.add("aside-close");
      }, 1000);
    },
  },
  destoryed() {
    window.removeEventListener("touchstart", this.toggle);
  },
};
</script>

<style scoped lang='scss' scoped>
@import "src/assets/css/var.scss";

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
    z-index: $zIndex + 1;

    .logo {
      width: 120px;
      background: $themeColor;
      /* background: #40aaa3; */
      border-radius: 20px;
      text-align: center;
      padding: 5px 0;
      color: #fff;
      left: 15px;
      font-size: 12px;
    }
    .connect {
      position: absolute;
      bottom: 5px;
      right: 10px;
      color: $themeColor;
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
        height: 45px;
        text-align: center;
        cursor: pointer;
        font-size: 12px;
        color: #444;
        position: relative;
        &::before {
          display: block;
          content: "";
          position: absolute;
          width: calc(100% - 30px);
          height: 1px;
          top: -2px;
          left: 50%;
          transform: translateX(-50%);
          border-bottom: 1px dashed #e0e0e0;
        }

        &.active {
          /* color: $themeColor; */
          background: #eee;
          color: #27b1a8;
          //font-weight: bold;
          &::before {
            display: none;
            content: "";
          }
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
        display: block;
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
          display: none;
        }

        .aside-list-item {
          height: 35px;

          &.active {
            background: #e2e3e4;
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