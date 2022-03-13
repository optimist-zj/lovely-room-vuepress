<template>
  <div>
    <div class="header mar-bot-16">
      <div class="portrait-box">
        <img class="portrait" src="../../image/J&Y/in-y-1.jpg" />
      </div>
      <div>
        <div class="name">申玉</div>
        <div class="desc">外贸销售一枚</div>
      </div>
    </div>
    <div class="hobby mar-bot-16">爱好: 逛街，旅行，看吃播，吃吃吃。</div>
    <div class="achievement mar-bot-16">成就: xxxxxxxx</div>
    <div class="target mar-bot-16">目标: xxxxxxxxxxxx</div>
  </div>
</template>
<script>
export default {
  name: "Yu",
};
</script>
<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  .portrait-box {
    margin-right: 12px;
    .portrait {
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }
  }

  .name {
    color: #222226;
    font-weight: 500;
    line-height: 24px;
    font-size: 16px;
  }
  .desc {
    color: #8492a6;
    font-weight: 500;
    line-height: 24px;
    font-size: 16px;
  }
}
.hobby {
  color: #5151a2;
}
.achievement {
  color: #408080;
}
.target {
  color: #f75000;
}
.mar-bot-16 {
  margin-bottom: 12px;
}
</style>
