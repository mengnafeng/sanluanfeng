<script>
export default {
  name: "menu",
  data() {
    return {
      list: [
        {
          name: '首页',
          link: "/",
          value: 'zhuye'
        },
        {
          name: "公司简介",
          link: "#gsjj",
          value: 'gongsijianjie'
        },
        {
          name: "工作内容",
          link: "#gznr",
          value: 'gongzuoneirong'
        },
        {
          name: "公司优势",
          link: "#gsys",
          value: 'gongsiyoushi'
        },
        {
          name: "采购流程",
          link: "#cglc",
          value: 'caigouliucheng'
        },
        {
          name: "联系我们",
          link: "#lxwm",
          value: 'lxwm'
        },
      ],
      scrollTop: 0,
      showMenu: false,
      currentPath: "/",
      command: 'CN'
    };
  },
  watch: {
    $route(to) {
      this.currentPath = to.path;
    },
  },
  mounted() {
    this.currentPath = this.$route.path;
    this.$i18n.locale = 'CN';
    // window.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    goDetail(item) {
      // this.$router.push(item.link);
      // this.showMenu = false;
      this.currentPath = item.link;
      const ele = document.querySelector(item.link);
      console.log(ele, ele.offsetTop);
      document.body.scrollTop = ele.offsetTop;
      document.documentElement.scrollTop = ele.offsetTop
    },
    showList() {
      this.showMenu = !this.showMenu;
    },
    handleScroll() {
      this.scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
    },
    handleCommand(command) {
      this.$i18n.locale = command;
      this.command = command;
    },
  },
};
</script>
<template>
  <div class="header">
    <div class="pc">
      <div class="logo">
        <img
          src="@/assets/image/PC/logo-pc.png"
          alt=""
        />{{ $t('gsmc') }}
        <div  class="drop-down">
          <el-dropdown @command="handleCommand" trigger="click">
            <span class="el-dropdown-link">
              {{command || 'CN'}}<el-icon class="el-icon--right"
                ><arrow-down
              /></el-icon>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item command="CN">CN</el-dropdown-item>
                <el-dropdown-item command="EN">EN</el-dropdown-item>
                <el-dropdown-item command="EY">Русский</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </div>
    </div>
    <div class="h5">
      <div class="logo">
        <img
          src="@/assets/image/H5/logo-h5.png"
          alt=""
        />三峦峯
        <div  class="drop-down">
          <el-dropdown @command="handleCommand" trigger="click">
            <span class="el-dropdown-link">
              {{command || 'CH'}}<el-icon class="el-icon--right"
                ><arrow-down
              /></el-icon>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item command="CN">ZH</el-dropdown-item>
                <el-dropdown-item command="EN">EN</el-dropdown-item>
                <el-dropdown-item command="EY">Русский</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </div>
    </div>
    <img
      class="menu-icon"
      @click="showList"
      src="@/assets/image/menu.png"
      alt=""
    />
    <div class="menu" v-if="showMenu">
      <div
        @click="goDetail(item)"
        class="item"
        :class="{ activited: currentPath === item.link }"
        v-for="item in list"
      >
         <a :href='"#" + item.link' target="_blank" rel="noopener noreferrer">{{ $t(`${item.value}`) }}</a>
      </div>
    </div>
    <div class="menu-pc">
      <div
        @click="goDetail(item)"
        class="item"
        :class="{ activited: currentPath === item.link }"
        v-for="item in list"
      >
         {{ $t(`${item.value}`) }}
         <!-- <a :href='"#" + item.link' target="_blank" rel="noopener noreferrer">{{ $t(`${item.value}`) }}</a> -->
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.header {
  position: absolute;
  top: 0;
  left: 50%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  margin: 0 auto;
  height: 70px;
  z-index: 100;
  width: 100%;
  transform: translateX(-50%);
  color: #fff;
  align-content: center;
  max-width: 1280px;

  .logo {
    display: flex;
    align-items: center;
    font-size: 16px;

    img {
      width: 50px;
    }

    .drop-down {
      color: #fff;
      border: 1px solid #fff;
      border-radius: 3px;
      height: 20px;
      padding: 0 5px;
      margin-left: 10px;

      .el-dropdown-link {
        color: #fff;
        display: flex;
        align-items: center;
        margin-top: 2px;
      }
    }
  }

  .menu-icon {
    width: 20px;
    cursor: pointer;
  }

  .menu-pc {
    display: none;
  }

  .menu {
    width: 100%;
    position: absolute;
    top: 70px;
    left: 0;
    z-index: 100;
    padding-top: 6px;
    background: #fff;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 10px 20px;

    .item {
      padding: 4px 20px;
      font-size: 14px;
      flex-wrap: nowrap;
      color: #3154fa;
      background: #eff2ff;
      border-radius: 20px;
      margin: 5px 3px;

      &.activited {
        color: #fff;
        background: #3154fa;
      }
    }
  }
}

@media only screen and (min-width: 750px) {
  .header {
    .logo {
      display: flex;
      align-items: center;
      font-size: 18px;

      img {
        width: 65px;
      }

      .drop-down {
        color: #fff;
        border: 1px solid #fff;
        border-radius: 3px;
        height: 20px;
        padding: 0 5px;
        margin-left: 10px;

        .el-dropdown-link {
          color: #fff;
          display: flex;
          align-items: center;
          margin-top: 2px;
        }
      }
    }
    .menu-icon {
      display: none;
    }
    .menu-pc {
      display: flex;
      flex-direction: row;
      align-content: center;
      align-items: center;

      .item {
        font-size: 16px;
        font-weight: bold;
        cursor: pointer;
        width: 120px;
        text-align: center;

        &.activited {
          color: #fff;
          font-size: 18px;

          &::before {
            content: "";
            position: absolute;
            bottom: -5px;
            width: 16px;
            height: 3px;
            background: #fff;
            left: 50%;
            margin-left: -8px;
            border-radius: 3px;
          }
        }
      }
    }
  }
}
</style>
