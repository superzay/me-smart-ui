<template>
  <div class='me-dragger' ref='root'>
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'meDragger',
    props: {
      options: {
        type: Array,
        required: true
      },
      idField: {
        type: String,
        required: true
      },
      // 拖拽类型
      type: {
        type: String,
        default: 'up-down'
      }
    },
    data() {
      return {
        uuid: null,
        position: [],
        dragId: null,
        moving: false,
        animateTime: 200,
      }
    },
    created() {
      this.uuid = this.generate_uuid()
    },
    computed: {},
    methods: {
      // 生成实例的uuid，唯一标识实例，（一个页面可能同时渲染多个me-dragger实例）
      generate_uuid() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
          /[xy]/g,
          function (c) {
            var r = (Math.random() * 16) | 0,
              v = c == "x" ? r : (r & 0x3) | 0x8;
            return v.toString(16);
          }
        );
      },
      dragstart(event) {
        this.dragId = event.currentTarget.dataset.id
        window['__ME_DRAGGER_UUID__'] = this.uuid 
      },
      dragend() {
        this.dragId = null
        window['__ME_DRAGGER_UUID__'] = null
        this.$forceUpdate()
      },
      dragover(event) {
        if(window['__ME_DRAGGER_UUID__'] !== this.uuid) return
        event.preventDefault();
        let id = event.currentTarget.dataset.id
        if (!this.moving && id !== this.dragId) {

          let elArr = Array.from(this.$refs.root.querySelectorAll('.me-dragger>*'))
          this.position = elArr.map(item => {
            return {
              id: item.dataset.id,
              top: item.getBoundingClientRect().top,
              left: item.getBoundingClientRect().left,
            }

          })

          let mLeft = event.clientX
          let mTop = event.clientY
          let elLeft = event.currentTarget.getBoundingClientRect().left
          let elTop = event.currentTarget.getBoundingClientRect().top
          let elWidth = event.currentTarget.clientWidth
          let elHeight = event.currentTarget.clientHeight
          let area
          if (this.type === 'up-down') {
            area = (mTop >= elTop + elHeight / 2) ? 'down' : 'up'
          } else {
            area = (mLeft >= elLeft + elWidth / 2) ? 'right' : 'left'
          }

          let dragItemIndex = this.options.findIndex(item => item[this.idField] === this.dragId)
          let dragItem = this.options[dragItemIndex]
          let newArr = this.options.filter(item => item[this.idField] !== this.dragId)


          let dragoverIndex = newArr.findIndex(item => item[this.idField] === id)
          if (area === 'right' || area === 'down') {
            dragoverIndex++
          }

          if (dragItemIndex === dragoverIndex) return

          this.moving = true
          newArr.splice(dragoverIndex, 0, dragItem)

          this.$emit('order-change', newArr)
          this.$nextTick(() => {
            let elArr = Array.from(this.$refs.root.querySelectorAll('.me-dragger>*'))
            elArr.forEach(item => {
              if (item.dataset.id === this.dragId) return
              let top = item.getBoundingClientRect().top
              let left = item.getBoundingClientRect().left

              let pos = this.position.find(item1 => item.dataset.id === item1.id)
              if (!pos) return
              item.style.transform = `translate(${pos.left - left}px,${pos.top - top}px)`

            })
            setTimeout(() => {
              elArr.forEach(item => {
                if (item.dataset.id === this.dragId) return
                item.style.transform = 'translate(0px,0px)'
                item.style.transition = `transform ${this.animateTime / 1000}s`
              })

            }, 0)

            setTimeout(() => {
              elArr.forEach(item => {
                if (item.dataset.id === this.dragId) return
                item.style.transform = ''
                item.style.transition = ''
              })
              this.moving = false
            }, this.animateTime)

          })

        }

      },
      dealDom() {
        let elArr = Array.from(this.$refs.root.querySelectorAll('.me-dragger>*'))
        if (!elArr.length) return
        elArr.forEach((item, index) => {
          item.draggable = true
          item.dataset.id = this.options[index][this.idField]
          item.style.opacity = item.dataset.id === this.dragId ? 0.4 : 1
          item.style.zIndex = item.dataset.id !== this.dragId ? 10 : 'auto'
          item.addEventListener('dragstart', this.dragstart)
          item.addEventListener('dragend', this.dragend)
          item.addEventListener('dragover', this.dragover)

        })
      }

    },
    mounted() {
      this.dealDom()
    },
    updated() {
      this.dealDom()
    }


  }
</script>
<style lang="scss">
  /* @import "../../css/base"; */
  .me-dragger {
    color: blue;
  }
</style>