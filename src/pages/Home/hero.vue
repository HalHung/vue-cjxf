<template>
  <div class="hero">
    <div class="bg"
      :style="{'background-image' : 'url(' + imgHero + ')'}"></div>
    <div class="container">
      <div class="row">
        <div class="col-md-5 offset-md-6">
          <div class="para">
            <div class="mt-md-5"> <img src="@/assets/img/index_slogan.png"
                alt=""> </div>
            <button v-scroll-to="'#price-section'"
              class="mt-3 btn btn-primary btn-block"> 立即體驗 STAR MUSIC </button>
            <div class="row mt-3">
              <div class="col">
                <a target="_blank"
                  href="https://play.google.com/store/apps/details?id=com.greattimemusic.starmusic"
                  class=" btn-img"><img src="@/assets/img/download-app.png"
                    alt=""></a>
              </div>
              <div class="col">
                <a target="_blank"
                  href="https://itunes.apple.com/us/app/star-music/id1375013749?l=zh&ls=1&mt=8"
                  class=" btn-img"><img src="@/assets/img/download-ios.png"
                    alt=""></a>
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
  height: 600px;
  overflow: hidden;

  .para {
    margin-top: 150px;
  }
  img {
    max-width: 100%;
  }
  @include media-breakpoint-down(sm) {
    .para {
      margin-top: 200px;
    }
    .bg {
      filter: brightness(0.5);
    }
  }
}
</style>

