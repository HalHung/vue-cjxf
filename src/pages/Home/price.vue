<template>
  <div class="price-section section py-5 ">
    <div
      class="bg"
      :style="{'background-image' : 'url(' + imgCost + ')'}"
    ></div>

    <div class="container container-sm">

      <div class="card-deck">
        <!-- <div
        class="card-deck"
        v-if="!paidRole"
      > -->
        <div
          class="card"
          v-for="(item,k) in packs"
          :key="k"
        >
          <div class="card-header ">
            <h3>{{item.name}}</h3>
            <p
              class="card-text text-muted"
              v-html="item.description"
            ></p>
          </div>
          <!-- <div class="card-body">
            {{item.priceInfo}}
              <button class="btn btn-primary" @click="amount=100">100元</button>
              <button class="btn btn-primary" @click="amount=300">300元</button>
              <button class="btn btn-primary" @click="amount=500">500元</button>
              <button class="btn btn-primary" @click="amount=1000">1000元</button>
          </div> -->
          <div class="card-footer">
            <button
              @click="selectPack(item.id)"
              class="btn btn-primary"
            >
              <span>立即支持</span>
            </button>

          </div>
        </div>
      </div>

      <div class="card mt-3">
        <div class="card-body pb-1">
          <h5>福氣包(一次性捐款)</h5>
          <!-- <p>讓您的廣告顯示在澈見幸福上，觸及更多群眾！！</p> -->
        </div>
        <div class="card-body">
            <!-- {{item.priceInfo}} -->
          <button class="btn btn-primary" @click="amount=100">100元</button>
          <button class="btn btn-primary" @click="amount=300">300元</button>
          <button class="btn btn-primary" @click="amount=500">500元</button>
          <button class="btn btn-primary" @click="amount=1000">1000元</button>
        </div>
        <div class="card-text custom-input">
          <el-input-number placeholder="自訂金額" :min=100 :max=100000 :step=50 v-model="customAmount" @change="customAmountChange"></el-input-number>
        </div>
        <div class="card-footer">
            <button
              @click="selectPack('happiness')"
              class="btn btn-primary"
              :disabled = "amount == null"
            >
              <span v-if="amount == null">立即支持</span>
              <span v-else>立即支持{{amount}}元</span>
            </button>

          </div>
      </div>

      <div class="card mt-3">
        <div class="card-body pb-1">
          <h4>廣告贊助方案</h4>
          <p class="ad">讓您的廣告顯示在澈見幸福上，觸及更多群眾！！</p>
        </div>
        <div class="card-footer">
          <button
            @click="toggleSpecial()"
            class="btn btn-primary"
          >點我看更多</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import upgrade from '@/pages/checkout/upgrade';
// import gift from './gift';

export default {
  name: 'price',
  data () {
    return {
      customAmount: undefined,
      selected: null,
      amount: null
    };
  },
  computed: {
    ...mapGetters({
      // 取得資料夾列表
      packs: 'global/packs',
      customs: 'global/customs',
      isAuth: 'auth/isAuth',
      role: 'auth/role',
      me: 'auth/me'
    }),
    paidRole () {
      console.log(this.me);
      if (!this.me.role) return false;
      return parseInt(this.me.role) > 0;
    },
    imgCost: function () {
      return require(`@/assets/img/index_cost.jpg`);
    }
  },
  methods: {
    customAmountChange (currentValue, oldValue) {
      this.amount = currentValue;
    },
    toggleBuy () {
      this.$vuedals.open({
        name: 'upgrade',
        title: '信用卡授權',
        props: {
          planId: this.selected,
          amount: this.amount
        },

        component: upgrade
      });
    },
    // toggleGift () {
    //   this.$vuedals.open({
    //     name: 'upgrade',
    //     title: 'STAR 心禮卡',
    //     props: {

    //     },
    //      footer: {
    //       hidden: true
    //     },
    //     component: require('./gift').default,
    //   });
    // },
    toggleSpecial () {
      this.$vuedals.open({
        name: 'Special',
        title: '廣告贊助方案',
        props: {

        },
         footer: {
          hidden: true
        },
        component: require('./special').default,
      });
    },
    // toggleLogin (next) {
    //    this.$vuedals.open({
    //      name: 'login',
    //      title: '會員登入',
    //      footer: {
    //        hidden: true
    //      },
    //      component: require('@/pages/Account/login-form').default,
    //      onDismiss: () => {},
    //      onClose: () => {
    //        if (next) next();
    //      }
    //    });
    // },
    selectPack (type) {
      console.log(type);
      var next = this.toggleBuy;
      this.selected = type;
      // if (!this.isAuth) {
      //   this.toggleLogin(this.selected === 'normal' ? null : next);
      // } else {
        next();
      // }
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../../assets/scss/custom-bootstrap.scss";
@import "~bootstrap/scss/bootstrap";
.card {
  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
.card-header {
  background: transparent;
  border-bottom-width: 0;
  text-align: center;
  padding: 3rem 1rem 0;
  h3 {
    border-bottom: 1px solid $primary;
    padding: 1rem 0 1.5rem;
    margin-bottom: 1.5rem;
    font-size: 1.1rem;
    font-weight: bold;
  }
}

.card-body {
  text-align: center;
  padding: 2rem 0;
  font-size: 1.6rem;
  p {
    font-size: 1.2rem;

    @include media-breakpoint-down(sm) {
        font-size: 16px;
        padding: 16px;
      }
  }
}
.card-footer {
  background: transparent;
  border-top-width: 0;
  text-align: center;
  padding: 1rem 0 3rem;
}

.section-header {
  max-width: 760px;
  margin: 40px auto 0;
  padding: 3rem 2rem;
  text-align: unset;
}

.hide{
  display: none;
}

.custom-input{
  text-align: center;
}
</style>
