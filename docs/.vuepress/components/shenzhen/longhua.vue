<template>
  <div>
    <div>
      <div class="place mar-bot-16">大浪9区91栋</div>
      <div class="content mar-bot-16">第一站，我来啦！！！</div>
    </div>
    <div>
      <baidu-map
        :center="center"
        :zoom="zoom"
        :scroll-wheel-zoom="true"
        class="baidu-map-view"
        @ready="map_handler"
        ak="XxRuUzs5DCi0x3AxBfYAXZgHkzUQ8nzf"
      ></baidu-map>
    </div>
  </div>
</template>

<script>
import { BaiduMap } from "vue-baidu-map";
export default {
  name: "longhua",
  components: {
    BaiduMap,
  },
  data() {
    return {
      center: { lng: 0, lat: 0 },
      zoom: 20,
    };
  },
  methods: {
    //地图显示的回调
    map_handler({ BMap, map }) {
      this.center.lng = 114.011804;
      this.center.lat = 22.683644;
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
