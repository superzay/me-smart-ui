// 由webpack注入组件
export default {
  install(Vue){
    components.forEach(item =>{
      Vue.component(item.name,item)
    })
  }
}

export const b = 20