import comp from './index.vue'

comp.install = function (Vue) {
  Vue.component(comp.name,comp)
}

export default comp


