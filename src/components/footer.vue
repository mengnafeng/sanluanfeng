<script>
export default {
  name: "footer",
  data() {
    return {};
  },
  mounted() {},
  methods: {
    showList() {},
  },
};
</script>
<template>
  <div class="footer" id="lxwm">
    <div class="foot-t">
      <div class="foot-t-l pc">
        <img
          src="@/assets/image/PC/logo-pc.png"
          alt=""
        />
      </div>
      <div class="foot-t-r">
        <div class="foot-t-r-t">{{ $t('bannerDesc') }}</div>
      </div>
    </div>
    <div class="footer-con">
      <div class="footer-con-l">
        <div class="pc"><span> 京ICP备15037205号-2</span><img src="@/assets/image/PC/beian.png" alt=""><span>京公网安备 11010502034003号</span></div>
        <div>{{ $t('gsmc') }}</div>
        <div>Copyright © 2021 All rights reserved</div>
      </div>
      <div class="footer-t">
        <div>
          <div class="desc">
            <div class="title">TEL</div>
            <div class="info">
              +8617712174994 杜女士
            </div>
          </div>
          <div class="desc">
            <div class="title">EMAIL</div>
            <div class="info">{{ $t('cmail') }}</div>
          </div>
        </div>
      </div>

      <div class="footer-t">
        <div>
          <div class="desc">
            <div class="title">ADD</div>
            <div class="info">
              {{ $t('gsdz') }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.footer {
  background: #333;
  color: #fff;
  padding: 50px 20px;

  .foot-t {
    display: flex;
    justify-content: space-between;
    max-width: 1100px;
    margin: 0 auto 20px;
    align-items: flex-end;


    .foot-t-l {
      width: 80px;

      img {
        width: 80px;
      }
    }

    .foot-t-r {
      flex-shrink: 0;
      border-bottom: none;
      text-align: left;
      flex: 1;
      height: 30px;

      .foot-t-r {
        text-align: center;
      }
    }
  }

  .footer-con {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0;
    display: flex;
    justify-content: space-between;
    flex-direction: column;

    .footer-con-l {
      color: #999;
      line-height: 30px;
      padding-bottom: 10px;
      border-bottom: 1px #999 solid;
    }
  }

  .footer-t {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-top: 20px;

    .footer-t-r {
      color: #999;
      font-size: 12px;
      margin-left: 0;
      margin-top: 35px;
      flex-shrink: 0;
      display: flex;
      flex-direction: column;
    }

    .qrcode {
      width: 90px;
      height: 90px;
      margin-bottom: 10px;
    }
  }

  .desc {
    margin-bottom: 30px;

    .title {
      color: #fff;
      margin-bottom: 5px;
    }
    .info {
      color: #999;
      line-height: 28px;
    }
    .no-color {
      color: #999;
      text-decoration: none;
    }
    .hover-color:hover {
      color: #ffffff;
    }
  }
}

@media only screen and (min-width: 750px) {
  .footer {
    background: #333;
    color: #fff;
    padding: 50px 0;

    .foot-t {
      display: flex;
      justify-content: space-between;
      max-width: 1100px;
      margin: 0 auto;
      align-items: flex-end;


      .foot-t-l {
        width: 80px;

        img {
          width: 80px;
        }
      }

      .foot-t-r {
        flex-shrink: 0;
        border-bottom: 1px solid #fff;
        text-align: right;
        flex: 1;
        height: 30px;

        .foot-t-r {
          text-align: center;
        }
      }
    }

    .footer-con {
      max-width: 1100px;
      margin: 0 auto;
      padding: 40px 20px 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: row;

      .footer-con-l {
        color: #999;
        line-height: 30px;
        border-bottom: none;
      }
    }

    .footer-t {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-top: 20px;

      .footer-t-r {
        color: #999;
        font-size: 12px;
        margin-left: 20px;
      margin-top: 35px;
      flex-shrink: 0;
      display: flex;
      flex-direction: column;
    }

    .qrcode {
      width: 90px;
      height: 90px;
      margin-bottom: 10px;
    }
  }

  .desc {
    margin-bottom: 30px;

    .title {
      color: #fff;
      margin-bottom: 5px;
    }
    .info {
      color: #999;
      line-height: 28px;
    }
    .no-color {
      color: #999;
      text-decoration: none;
    }
    .hover-color:hover {
      color: #ffffff;
    }
  }
}
}
</style>
