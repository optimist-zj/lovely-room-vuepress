<template>
  <div>
    <div>
      <div class="place mar-bot-16">上尚居</div>
      <div class="content mar-bot-16">
        第二站，周军终于得逞了，从此过上二人生活。
      </div>
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
  name: "shuikouGarden",
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
      this.center.lng = 113.909798;
      this.center.lat = 22.581234;
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
