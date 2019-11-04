<template>
  <div class="section clearfix">
    <div class="grid-container ">
      <!-- <div class="grid-item grid-item-1">
        <div class="bg"
          :style="{'background-image' : 'url(' + img2 + ')'}"></div>
      </div>
      <div class="grid-item grid-item-2">
        <div class="bg"
          :style="{'background-image' : 'url(' + img3 + ')'}"></div>
      </div> -->
      <div class="grid-item grid-item-3"
        alt="">
        <div class="bg"
          :style="{'background-image' : 'url(' + img1 + ')'}">
          <div class="para">
            <h3>「一人走一萬步，不如一萬人走一步」 </h3>
            <p class="mt-5">能增上的日子都是好日子！</p>
            <p class="mt-3">澈見幸福提供您一個絕佳的學習平台！<br> <br> 增上需要靠一群人，號召有志同道合的朋友，現在就開始建立無限生命的幸福計劃，大家一起成佛吧！</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import VLayout from '@/layouts/Default';
import music from './music';
import hero from './hero';
import vis from './vis';
import price from './price';

export default {

  /**
   * The name of the page.
   */
  name: 'home-index',
  computed: {
    img1: function () {
      return require('@/assets/img/index_mv01.jpg')
    },
    // img2: function () {
    //   return require('@/assets/img/index_mv02.jpg')
    // },
    // img3: function () {
    //   return require('@/assets/img/index_mv03.jpg')
    // },
  },
  /**
   * The components that the page can use.
   */
  components: {
    VLayout, music, hero, price, vis

  },
};
</script>
<style lang="scss" scoped>
@import "~bootstrap/scss/bootstrap";
.section {
  .grid-container {
    height: 500px;
    img {
      max-width: 100%;
    }

    .grid-item {
      position: relative;
      overflow: hidden;
    }
    .grid-item-1 {
      grid-column: 1;
      grid-row: 1;
    }
    .grid-item-2 {
      grid-column: 1;
      grid-row: 2;
    }
    .grid-item-3 {
      // grid-column: 2 / span 2;
      // grid-row: 1 / span 2;
      padding: 5rem;
      .para {
        max-width: 600px;
        margin: 40px auto 0;
        padding: 3rem 2rem;
        color: #fff;
        background: rgba(0, 0, 0, 0.5);
      }
    }

    @include media-breakpoint-down(sm) {
      height: 550px;
      .grid-item-1 {
        grid-column: 1;
        grid-row: 3;
      }
      .grid-item-2 {
        grid-column: 2;
        grid-row: 3;
      }
      .grid-item-3 {
        grid-column: 1 / span 2;
        grid-row: 1 / span 2;
        padding: 1rem;
        .para {
          margin: 0px auto;
          padding: 2rem 2rem;
        }
      }
    }
  }
}
</style>
