<template>
  <div>
    <div>
      <div class="place mar-bot-16">庭苑·绿萝</div>
      <div class="content mar-bot-16">深圳终点站，吃货崛起。</div>
    </div>
    <div>
      <component
        v-if="BaiduMap"
        :is="BaiduMap"
        :center="center"
        :zoom="zoom"
        :scroll-wheel-zoom="true"
        class="baidu-map-view"
        @ready="map_handler"
        ak="XxRuUzs5DCi0x3AxBfYAXZgHkzUQ8nzf"
      ></component>
    </div>
  </div>
</template>

<script>
// import { BaiduMap } from "vue-baidu-map";
export default {
  name: "shangchuanVillage",
  //   components: {
  //     BaiduMap,
  //   },
  data() {
    return {
      center: { lng: 0, lat: 0 },
      zoom: 20,
      BaiduMap: null,
    };
  },
  mounted() {
    import("vue-baidu-map").then((module) => {
      this.BaiduMap = module.BaiduMap;
    });
  },
  methods: {
    //地图显示的回调
    map_handler({ BMap, map }) {
      this.center.lng = 113.91141;
      this.center.lat = 22.585081;
    },
  },
};
</script>

<style lang="scss" scoped>
.place {
  color: #5151a2;
  font-size: 16px;
}
.content {
  color: #f75000;
  font-size: 16px;
}
.mar-bot-16 {
  margin-bottom: 16px;
}
.baidu-map-view {
  width: 100%;
  height: 400px;
}
</style>
