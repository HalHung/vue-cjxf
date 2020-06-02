<template>
  <v-layout>
    <template slot="necker">
      <hero></hero>
    </template>
    <template slot="body">
      <!-- <div class="section-var section text-white">
        <div class="container ">
          <div class="row">
            <div class="col-md-6">
              <div class="para clearfix">
                <p class="mt-3">澈見幸福App-方便有效的學習工具，每天聽一小段，反覆聽，同時觀想全球同學都一起在師父上師的法座下，徜徉在幸福的法語中。</p>
                <p class="mt-3">從2016年起，澈見幸福依著師長的心願，努力打造國際級的心靈學習平台。每天平均超過3萬、10個國家的同學一起學習。</p>
                <p class="mt-3">在僧團的指導下，除了個人化的學習功能外，並持續更新：開示直播、電腦版、背書功能、定課紀錄等。以及多元的學習內容：每週平均增加5篇經典、開示、讚頌、讚頌及課頌。</p>
                <p class="mt-3">歡迎您攜手共同打造幸福平台，讓我們的幸福長長久久！</p>
              </div>
            </div>
            <div class="col-md-6"><img src="@/assets/img/index_headset.png"
                alt=""></div>
          </div>
        </div>
      </div> -->
      <!-- <vis></vis> -->
      <!-- <music></music> -->
      <div class="section-surprise section  text-white px-5 py-5">
        <div class="bg"
          :style="{'background-image' : 'url(' + imgSurprise + ')'}"></div>
        <div class="py-5 para2 clearfix">
            <h3 class="display-5">「必須把內心深處的問題解決之後，痛苦才不會再發生」</h3>
            <p class="mt-5">「如果每個人每天早晨能抽20分、半小時來聽一下師父的法音，只要一聽，我們的輪迴大夢就在覺醒...」</p>
            <p class="mt-3">澈見幸福App提供您日日增上的幸福平台！</p>
            <p class="mt-3">增上需要靠一群人，號召志同道合的朋友，現在就開始建立無限生命的幸福計劃，大家一起成佛吧！</p>
        </div>
      </div>
      <price id="price-section"></price>

    </template>
  </v-layout>
</template>

<script>
/* ============
 * Home Index Page
 * ============
 *
 * The home index page.
 */

import VLayout from '@/layouts/Default';
import music from './music';
import hero from './hero';
import price from './price';
import vis from './vis';
export default {

  name: 'home-index',
  computed: {
    imgSurprise: function () {
      return require('@/assets/img/index_surprise.jpg')
    }
  },

  components: {
    VLayout, music, hero, price, vis

  },
};
</script>
<style lang="scss" >
@import "../../assets/scss/custom-bootstrap.scss";
@import "~bootstrap/scss/bootstrap";

.section-var {
  background-image: linear-gradient(to right, #1a2445 0%, #4152b5 100%);
  background-repeat: repeat-x;
  img {
    height: 600px;
  }
  .para {
    margin-top: 100px;
    padding: 2rem;
    letter-spacing: 2px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

    @include media-breakpoint-down(sm) {
      margin-top: 20px;
    }
  }
}

.section-surprise {
  min-height: 650px;
  display: flex;
  align-items: center;
}

.para2 {
  max-width: 920px;
  padding-left: 3rem;
  padding-right: 2rem;
  position: relative;
  background: rgba(0, 0, 0, 0.5);
  letter-spacing: 2px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

  @include media-breakpoint-down(sm) {
    padding: 16px;

    .display-5 {
      font-size: 18px;
    }
  }
}
</style>
