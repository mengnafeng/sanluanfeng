<script>
  import {messages} from '@/lang/messages'
  export default {
    data() {
      return {
      }
    },
    mounted() {
      this.currentPath = this.$route.path;
      // window.addEventListener('scroll', this.handleScroll);
    },
    methods: {
      
    }
  }
</script>

<template>
  <div class="content">
    <div class="banner" id="banner">
      <img class="pc" src="@/assets/image/PC/banner-pc.png" alt="">
      <img class="h5" src="@/assets/image/H5/banner-h5.png" alt="">
      <div class="slogan">
        <div class="slogan-title">{{ $t('banner') }}</div>
        <div class="slogan-desc">{{ $t('bannerDesc') }}</div>
      </div>
    </div>
    <div class="desc desc1" id="gsjj">
      <div class="title">
        <div>PROFILE</div>
        <div class="name">{{ $t('gongsijianjie') }}</div>
      </div>
      <div class="descrip">{{ $t('banner1') }}</div>
      <div class="model1">
        <div class="bg bg1">
          <img src="@/assets/image/PC/gsjj-pc-01.png" alt="">
          <div>{{ $t('banner2') }}</div>
        </div>
        <div  class="bg bg2">
          <img src="@/assets/image/PC/gsjj-pc-02.png" alt="">
          <div style="color: #333;">{{ $t('banner3') }}</div>
        </div>
        <div  class="bg bg3">
          <img src="@/assets/image/PC/gsjj-pc-03.png" alt="">
          <div>{{ $t('banner4') }}</div>
        </div>
      </div>
    </div>
    <div class="desc desc2" id="gznr">
      <div class="title">
        <div>WORK</div>
        <div class="name">{{ $t('gongzuoneirong') }}</div>
      </div>
      <div class="model2">
        <div class="bg">
          <img src="@/assets/image/PC/gznr-pc-01.png" alt="">
          <div class="tag">{{ $t('neirong1') }}</div>
          <div>{{ $t('neirong2') }}</div>
        </div>
        <div class="bg">
          <img src="@/assets/image/PC/gznr-pc-02.png" alt="">
          <div class="tag">{{ $t('neirong3') }}</div>
          <div>{{ $t('neirong4') }}</div>
        </div>
        <div class="bg">
          <img src="@/assets/image/PC/gznr-pc-03.png" alt="">
          <div class="tag">{{ $t('neirong5') }}</div>
          <div>{{ $t('neirong6') }}</div>
        </div>
      </div>
    </div>
    <div class="desc desc3" id="gsys">
      <div class="title">
        <div>ADVANTAGE</div>
        <div class="name">{{ $t('gongsiyoushi') }}</div>
      </div>
      <div class="model3">
        <div class="bg">
          <img src="@/assets/image/PC/gsys-pc-01.png" alt="">
          <div class="tag">{{ $t('youshi1') }}</div>
          <div>{{ $t('youshi2') }}</div>
        </div>
        <div class="bg">
          <img src="@/assets/image/PC/gsys-pc-02.png" alt="">
          <div class="tag">{{ $t('youshi3') }}</div>
          <div>{{ $t('youshi4') }}</div>
        </div>
      </div>
    </div>
    <div class="desc desc4" id="cglc">
      <div class="title">
        <div>ADVANTAGE</div>
        <div class="name">{{ $t('caigouliucheng') }}</div>
      </div>
      <div  class="model4">
        <div class="bg">
          <img src="@/assets/image/PC/cglc-pc-01.png" alt="">
          <div class="infos">{{ $t('caigou1') }}</div>
        </div>
        <div class="bg">
          <img src="@/assets/image/PC/cglc-pc-02.png" alt="">
          <div class="infos">{{ $t('caigou2') }}</div>
        </div>
        <div class="bg">
          <img src="@/assets/image/PC/cglc-pc-03.png" alt="">
          <div class="infos">{{ $t('caigou3') }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.content {
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  margin-bottom: 80px;
  position: relative;

  .banner {
    font-size: 14px;
    color: #fff;
    position: relative;
    top: 0;
    left: 50%;
    z-index: 99;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateX(-50%);

    .slogan {
      position: absolute;
      left: 40px;
      right: 40px;
      top: 130px;
      max-width: 100%;

      .slogan-title {
        font-size: 28px;
        color: #fff;
        font-weight: 500;
        max-width: 750px;
      }
      .slogan-desc {
        font-size: 22px;
        color: #0FF;
        font-weight: 500;
      }
    }
  }
  .font {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -100px;
    margin-top: -50px;
    width: 200px;
  }

  .desc {
    margin-top: 30px;
    text-align: center;

    &.desc1 {
      margin-top: 60px;
    }

    .title {
      color: #E9EAFF;
      font-family: PingFang SC;
      font-size: 50px;
      position: relative;
      text-align: center;
      padding: 0 30px;

      .name {
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        margin: 0 auto;
        color: #333;
        font-family: PingFang SC;
        font-size: 30px;
        font-weight: 500;
      }
    }

    .descrip {
      padding: 0 20px;
    }
    .h5{
      font-weight: 600;
      font-size: 16px;
      line-height: 28px;
      margin: 20px 0;
    }
    .info {
      font-weight: 400;
      font-size: 16px;
      line-height: 28px;
    }

    .model1 {
      display: flex;
      color: #fff;
      margin-top: 20px;
      max-width: 1200px;
      overflow-x: scroll;
      padding: 0 0 0 10px;

      img {
        width: 70px;
        margin-bottom: 10px;
      }

      .bg {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 30px;
        width: 80%;
        height: 280px;
        flex-direction: column;
        flex-shrink: 0;
      }

      .bg1 {
        background: url('@/assets/image/PC/circle1.png') center no-repeat;
        background-size: cover;
      }
      
      .bg2 {
        background: url('@/assets/image/PC/circle2.png') center no-repeat;
        background-size: cover;
      }
      .bg3 {
        background: url('@/assets/image/PC/circle3.png') center no-repeat;
        background-size: cover;
      }
    }

    &.desc2 {
      background: url('@/assets/image/H5/model2.png') no-repeat;
      background-size: 100% 100%;
      padding-top: 80px;
    }

    .model2 {
      display: flex;
      justify-content: center;
      flex-direction: column;
      color: #333;
      margin-top: 20px;
      padding-bottom: 100px;

      img {
        width: 160px;
        margin-bottom: 20px;
      }

      .bg {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 20px;
        flex-direction: column;
        flex-shrink: 0;
        flex: 1;
        margin: 40px;

        .tag {
          font-size: 20px;
          font-weight: 500;
          margin-bottom: 10px;
        }
      }
    }

    &.desc3 {
      background: #F1F2FF;
      padding-top: 50px;
    }

    .model3 {
      display: flex;
      justify-content: center;
      flex-direction: column;
      color: #333;
      margin-top: 20px;
      padding-bottom: 100px;

      img {
        width: 320px;
        margin-bottom: 20px;
      }

      .bg {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 20px;
        flex-direction: column;
        flex-shrink: 0;
        flex: 1;
        margin: 40px;

        .tag {
          font-size: 20px;
          font-weight: 500;
          margin-bottom: 10px;
        }
      }
    }

    .model4 {
      display: flex;
      color: #333;
      margin-top: 20px;
      max-width: 1200px;
      overflow-x: scroll;
      padding: 0 0 0 10px;
      font-weight: 500;
      

      img {
        width: 100%;
        margin-bottom: 10px;
      }

      .bg {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 70%;
        flex-direction: column;
        flex-shrink: 0;
        box-shadow: 0 0 10px rgba(0, 0, 0, .1);
        border-radius: 20px;
        overflow: hidden;
        margin: 20px 10px;
        padding: 0 0 10px;

        .infos {
          font-weight: 500;
        }
      }
    }
  }
}


@media only screen and (min-width: 750px) {
  .content {
    .banner {
      font-size: 14px;
      color: #fff;
      position: relative;
      top: 0;
      left: 50%;
      z-index: 99;
      display: flex;
      justify-content: center;
      align-items: center;
      transform: translateX(-50%);

      .slogan {
        position: absolute;
        left: 50%;
        top: 200px;
        max-width: 1200px;
        margin-left: -640px;

        .slogan-title {
          font-size: 36px;
          color: #fff;
          font-weight: 500;
          max-width: 750px;
        }
        .slogan-desc {
          font-size: 28px;
          color: #0FF;
          font-weight: 500;
        }
      }
    }

    .desc {
      margin-top: 30px;
      text-align: center;
      padding: 0 20px;
      margin: 0 auto;

      .title {
        color: #E9EAFF;
        font-family: PingFang SC;
        font-size: 80px;
        position: relative;
        text-align: center;
        padding: 0 30px;

        .name {
          position: absolute;
          bottom: 25px;
          left: 50%;
          transform: translateX(-50%);
          margin: 0 auto;
          color: #333;
          font-family: PingFang SC;
          font-size: 30px;
          font-weight: 500;
        }
      }

      .h5{
        font-weight: 600;
        font-size: 16px;
        line-height: 28px;
        margin: 20px 0;
      }
      .info {
        font-weight: 400;
        font-size: 16px;
        line-height: 28px;
      }

      .model1 {
        display: flex;
        justify-content: center;
        color: #fff;
        margin-top: 20px;
        max-width: 1200px;
        width: 100%;
        overflow-x: hidden;

        img {
          width: 120px;
          margin-bottom: 20px;
        }

        .bg {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 0 50px;
          width: 400px;
          height: 380px;
          flex-direction: column;
        }

        .bg1 {
          background: url('@/assets/image/PC/circle1.png') center no-repeat;
          background-size: cover;
        }
        
        .bg2 {
          background: url('@/assets/image/PC/circle2.png') center no-repeat;
          background-size: cover;
        }
        .bg3 {
          background: url('@/assets/image/PC/circle3.png') center no-repeat;
          background-size: cover;
        }
      }

      &.desc2 {
        background: url('@/assets/image/PC/model2.png') no-repeat;
        background-size: 100% 100%;
        width: 1240px;
        height: 520px;
        padding-top: 40px;
        margin-top: 60px;
      }

      .model2 {
        display: flex;
        justify-content: center;
        flex-direction: row;
        color: #333;
        max-width: 1240px;
        padding: 0 0 0 10px;
        margin-top: 0;
        align-items: flex-start;

        img {
          width: 100px;
          margin-bottom: 20px;
        }

        .bg {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 0;
          flex-direction: column;
          flex-shrink: 0;
          flex: 1;
          margin:20px;

          .tag {
            font-size: 20px;
            font-weight: 500;
            margin-bottom: 10px;
          }
        }
      }

      &.desc3 {
        background: #F1F2FF;
        padding-top: 50px;
        width: 100%;
      }

      .model3 {
        display: flex;
        justify-content: center;
        flex-direction: row;
        color: #333;
        max-width: 1240px;
        padding: 0 0 0 10px;
        margin: 0 auto;

        img {
          width: 320px;
          margin-bottom: 20px;
        }

        .bg {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 0 50px;
          flex-direction: column;
          flex-shrink: 0;
          flex: 1;

          .tag {
            font-size: 20px;
            font-weight: 500;
            margin-bottom: 10px;
          }
        }
      }
      
      &.desc4 {
        padding-top: 50px;
      }

      .model4 {
        display: flex;
        justify-content: center;
        color: #333;
        margin-top: 20px;
        max-width: 1200px;
        width: 100%;
        overflow-x: hidden;

        img {
          width: 100%;
          margin-bottom: 20px;
        }

        .bg {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 340px;
          flex-direction: column;
          box-shadow: 0 10px 10px rgba(0, 0, 0, .05);
          border-radius: 20px;
          padding: 0 0 20px;
          
          .infos {
            font-weight: 500;
          }
        }
      }
    }
  }
}
</style>
