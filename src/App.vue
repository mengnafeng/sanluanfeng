<script>
  import menus from '@/components/menu.vue';
  import footers from '@/components/footer.vue';

  export default {
    data() {
      return {
      }
    },
    components: {
      menus,
      footers
    },
    mounted() {
    },
    methods: {
      getImageUrl(name) {
        const url = new URL(`/src/assets/image/${name}`, import.meta.url).href;
        return url;
      },
    }
  }
</script>

<template>
  <menus />
  <div class="con">
    <router-view />
  </div>
  <footers />
</template>

<style lang="less">
.con {
  max-width: 1600px;
  margin: 0 auto;
}
</style>
