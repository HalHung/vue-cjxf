<template>
  <div class="hero">
    <div class="bg"
      :style="{'background-image' : 'url(' + imgHero + ')'}"></div>
    <div class="bg gradation"></div>
    <div class="container">
      <div class="row">
        <div class="col-md-8 offset-md-1">
          <div class="para">
            <div class="mt-md-1"> <img src="@/assets/img/index_slogan.png"
                alt=""> </div>
            <div class="row mt-3">
              <div class="col content">
                <p class="mt-3">澈見幸福App-方便有效的學習工具，每天聽一小段，反覆聽，同時觀想全球同學都一起在師父上師的法座下，徜徉在幸福的法語中。</p>
                <p class="mt-3">從2018年起，澈見幸福依著師長的心願，努力打造國際級的心靈學習平台。每天平均超過1萬、17個國家的同學一起學習。</p>
                <p class="mt-3">在僧團的指導下，除了個人化的學習功能外，並持續更新：開示直播、電腦版、背書功能、定課紀錄等。以及多元的學習內容：每週平均增加5篇經典、開示、讚頌、讚頌及課頌。</p>
                <p class="mt-3">歡迎您攜手共同打造幸福平台，讓我們的幸福長長久久！</p>
              </div>
            </div>
            <div class="col-md-6">
              <button v-scroll-to="'#price-section'"
                class="mt-3 btn btn-primary btn-block"> 立即支持  澈見幸福 </button>
                <div class="row mt-3">
                <div class="col">
                  <a target="_blank"
                    href="https://play.google.com/store/apps/details?id=com.luciditv.xfzhi&hl"
                    class=" btn-img"><img src="@/assets/img/download-app.png"
                      alt=""></a>
                </div>
                <div class="col">
                  <a target="_blank"
                    href="https://apps.apple.com/tw/app/%E6%BE%88%E8%A6%8B%E5%B9%B8%E7%A6%8F/id1332575155"
                    class=" btn-img"><img src="@/assets/img/download-ios.png"
                      alt=""></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    imgHero: function () {
      return require('@/assets/img/index_banner.jpg');
    }
  }
};
</script>
<style lang="scss" scoped>
@import "~bootstrap/scss/bootstrap";

.hero {
  position: relative;
  height: 800px;
  overflow: hidden;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

  .gradation {
      background: -moz-linear-gradient(
        top,
        rgba(0, 0, 0, 0.55) 0%,
        rgba(0, 0, 0, 0.45) 60%,
        rgba(0, 0, 0, 0) 100%
      ); /* FF3.6-15 */
      background: -webkit-linear-gradient(
        top,
        rgba(0, 0, 0, 0.55) 0%,
        rgba(0, 0, 0, 0.45) 60%,
        rgba(0, 0, 0, 0) 100%
      ); /* Chrome10-25,Safari5.1-6 */
      background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.55) 0%,
        rgba(0, 0, 0, 0.45) 60%,
        rgba(0, 0, 0, 0) 100%
      ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    }

  p{
    font-size: 18px;
  }
  .para {
    margin-top: 150px;
    max-height: 10%;
  }
  img {
    max-width: 100%;
    width: 300px;
  }
  .content{
    color: rgb(238, 238, 238);
  }
  .btn{
    background: #e89300;
    border-color: #e89300;
  }
  @include media-breakpoint-down(sm) {
    .para {
      margin-top: 100px;
    }
    .bg {
      filter: brightness(0.5);
    }
  }
}
</style>

