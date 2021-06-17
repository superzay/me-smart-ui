<template>
  <div class='demo-me-image-crop'>
    <h3 href=""> 移动端头像裁剪插件</h3>
    <!--选择图片-->
    <div class='slt-img'>
      <label>选择要裁剪的图片</label>
      <input type="file" @change='getFile($event)' accept=".jpg,.png,.bmp,.gif" />
    </div>

    <!--图片裁剪组件-->
    <div v-if='openImgCropPopover' class='img-crop'>
      <div>
        <!-- me-image-crop已经在main.js和test-lib.js中被注册为全局组件，直接使用 -->
        <me-image-crop ref='image-crop' @confirm-crop-image='getImg' @cancel-crop-image='cancel' :out-type='outType'
          :show-btn='showBtn' :image-src='imgSrc'>
          <!--可传递插槽-->
          <!--<template v-slot:confirm>
              <div style='width:25px;height:25px;background:yellow;border-radius:20px;'>ok</div>
            </template>-->
        </me-image-crop>
      </div>
    </div>

    <!--裁剪后图片显示-->
    <img v-if='croppedImg' :src="croppedImg" alt="" class='cropped-img' />

  </div>
</template>
<script>
  export default {
    name: '',
    data() {
      return {
        imgSrc: '',
        outType: 'base64', //base64或者blob
        showBtn: true,
        croppedImg: '',
        openImgCropPopover: false,
      }
    },
    methods: {
      getImg: function (img) {
        if (this.outType === 'base64') {
          this.croppedImg = img; //base64
          this.openImgCropPopover = false;
        } else {
          console.dir(img); //blob
          this.openImgCropPopover = false;
        }
      },
      cancel: function () {
        this.openImgCropPopover = false;
      },
      //读取本地图片
      getFile: function (event) {
        let _this = this;
        let inputEl = event.currentTarget;
        let reader = new FileReader();
        reader.onload = function () {
          _this.imgSrc = reader.result;
          _this.openImgCropPopover = true;
          inputEl.value = ''; //记得清空
        }
        reader.readAsDataURL(inputEl.files[0]);

        //使用me-image-crop组件的getImage方法获取图片
        /*this.showBtn = false;
        setTimeout(function(){
          if(_this.outType === 'base64') {
            _this.croppedImg = _this.$refs["image-crop"].getImage();
            _this.openImgCropPopover = false;

          } else {
            _this.$refs["image-crop"].getImage(function(blob){
              console.dir(blob);
              _this.openImgCropPopover = false;

            });
          }
        }, 5000)*/
      }
    },
  }
</script>
<style lang="scss" scoped>
  h3 {
    margin-top:30px;
    text-align: center;
  }
  .slt-img {
    border: 1px solid #b2b2b2;
    width: 100px;
    height: 100px;
    position: relative;
    margin:30px auto 30px auto;
    background-image: url(./images/jia.png);
    background-size: 100% 100%;
  }

  .slt-img label {
    position: absolute;
    bottom: -30px;
    left: 50%;
    display: block;
    transform: translateX(-50%);
    white-space: nowrap;
  }

  .slt-img input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }

  .cropped-img {
    margin: 50px auto 0 auto;
    display: block;
  }

  .img-crop {
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.2);
    z-index: 9999;

  }

  .img-crop>div {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    /*由于移动端的vh单位会算上地址栏的高度,所以100vh可能不准确,大于页面窗口的实际高度,这里用100%*/
  }
</style>