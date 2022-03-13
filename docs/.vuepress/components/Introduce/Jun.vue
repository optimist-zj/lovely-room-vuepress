<template>
  <div>
    <div class="header mar-bot-16">
      <div class="portrait-box">
        <img class="portrait" src="../../image/J&Y/in-j-1.png" />
      </div>
      <div>
        <div class="name">周军</div>
        <div class="desc">苦逼码农一枚</div>
      </div>
    </div>
    <div class="hobby mar-bot-16">
      爱好: 打游戏，海贼王，旅行，骑车(并没机会骑)。
    </div>
    <div class="achievement mar-bot-16">
      成就: 也算到过很多地方了，领略祖国大江南北的风光。未来要探访更多的地方。
    </div>
    <div class="target mar-bot-16">
      目标: 现在的目标就是好好存钱买房了。干翻人生最大难题!
    </div>
  </div>
</template>
<script>
export default {
  name: "Jun",
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
