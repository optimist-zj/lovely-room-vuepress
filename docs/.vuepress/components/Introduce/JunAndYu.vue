<template>
  <div>
    <div id="react">
      <div class="out_frount">
        <img src="../../image/J&Y/out-1.png" class="out_pic" />
      </div>
      <div class="out_back">
        <img src="../../image/J&Y/out-2.png" class="out_pic" />
      </div>
      <div class="out_left">
        <img src="../../image/J&Y/out-3.png" class="out_pic" />
      </div>
      <div class="out_right">
        <img src="../../image/J&Y/out-4.png" class="out_pic" />
      </div>
      <div class="out_top">
        <img src="../../image/J&Y/out-5.png" class="out_pic" />
      </div>
      <div class="out_bottom">
        <img src="../../image/J&Y/out-6.jpg" class="out_pic" />
      </div>
      <span class="in_frount">
        <img src="../../image/J&Y/in-y-1.jpg" class="in_pic" />
      </span>
      <span class="in_back">
        <img src="../../image/J&Y/in-j-1.png" class="in_pic" />
      </span>
      <span class="in_left">
        <img src="../../image/J&Y/in-y-2.png" class="in_pic" />
      </span>
      <span class="in_right">
        <img src="../../image/J&Y/in-j-2.png" class="in_pic" />
      </span>
      <span class="in_top">
        <img src="../../image/J&Y/in-y-3.png" class="in_pic" />
      </span>
      <span class="in_bottom">
        <img src="../../image/J&Y/in-j-3.png" class="in_pic" />
      </span>
    </div>
    <div>
      今天是阿军和阿玉在一起的第<span class="days">{{ days }}</span
      >天
    </div>
  </div>
</template>
<script>
export default {
  name: "JunAndYu",
  data() {
    return {
      days: Math.floor(
        (Date.now() - Date.parse("2019-10-1")) / (24 * 60 * 60 * 1000)
      ),
    };
  },
};
</script>
<style lang="scss" scoped>
#react {
  width: 300px;
  height: 300px;
  margin: 100px auto 100px;
  transform-style: preserve-3d;
  animation: rotate 20s infinite;
  animation-timing-function: linear;
  div {
    position: absolute;
    transition: all 0.4s;
    .out_pic {
      width: 300px;
      height: 300px;
      opacity: 0.9;
    }
    .in_pic {
      width: 200px;
      height: 200px;
    }
  }
  span {
    display: block;
    position: absolute;
    width: 200px;
    height: 200px;
    top: 50px;
    left: 50px;
  }
}

@keyframes rotate {
  from {
    transform: rotateX(0deg) rotateY(0deg);
  }
  to {
    transform: rotateX(360deg) rotateY(360deg);
  }
}
.out_frount {
  transform: translateZ(150px);
}
.out_back {
  transform: translateZ(-150px);
}
.out_left {
  transform: rotateY(90deg) translateZ(150px);
}
.out_right {
  transform: rotateY(-90deg) translateZ(150px);
}
.out_top {
  transform: rotateX(90deg) translateZ(150px);
}
.out_bottom {
  transform: rotateX(-90deg) translateZ(150px);
}
.in_frount {
  transform: translateZ(100px);
}
.in_back {
  transform: translateZ(-100px);
}
.in_left {
  transform: rotateY(90deg) translateZ(100px);
}
.in_right {
  transform: rotateY(-90deg) translateZ(100px);
}
.in_top {
  transform: rotateX(90deg) translateZ(100px);
}
.in_bottom {
  transform: rotateX(-90deg) translateZ(100px);
}
#react:hover .out_frount {
  transform: translateZ(300px);
}
#react:hover .out_back {
  transform: translateZ(-300px);
}
#react:hover .out_left {
  transform: rotateY(90deg) translateZ(300px);
}
#react:hover .out_right {
  transform: rotateY(-90deg) translateZ(300px);
}
#react:hover .out_top {
  transform: rotateX(90deg) translateZ(300px);
}
#react:hover .out_bottom {
  transform: rotateX(-90deg) translateZ(300px);
}
.days {
  font-size: 16pxv;
  font-weight: bold;
  color: #ff2d2d;
}
</style>
