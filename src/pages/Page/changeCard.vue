<template>
  <div class="change-card">
    <div
      class="bg"
      :style="{'background-image' : 'url(' + imgCost + ')'}"
    ></div><div
      class="bg bg-layer"
    ></div>
    <div class="container container-sm">
      <div class="row">
        <div class="col">
            <div class="row mt-3">
              <div class="col content">
                <h1 style="letter-spacing:2px;">隨喜您大力護持每位學員的增上生！</h1>
                <p class="mt-3 intro-p">您知道您一個月幫助了至少20000個人嗎！！</p>
                <p class="intro-p">澈見幸福20000個活躍用戶因您的護持才能持續學習，</p>
                <p class="intro-p">每個音檔、每部影片、每個人開啟澈見幸福的那一刻，都帶有您的善業！</p>
              </div>
            </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="card">
            <div class="card-body">
              <div class="container">
                <div class="row">
                  <div class="col">
                    <h5>您的捐款資訊</h5>
                  </div>
                </div>
                <div class="row mt-2 card-row">
                  <div class="col-sm">
                    <p class="info-title">姓名：</p>
                    <p>{{orderInfo.fullName}}</p>
                  </div>
                  <div class="col-sm">
                    <p class="info-title">項目：</p>
                    <p>{{orderInfo.planName}}</p>
                  </div>
                  <div class="col-sm">
                    <p class="info-title">金額：</p>
                    <p>{{orderInfo.price}}</p>
                  </div>
                </div>
                <div class="row card-row">
                  <div class="col-sm">
                    <p class="info-title">卡號末4碼：</p>
                    <p>{{orderInfo.card4No}}</p>
                  </div>
                  <div class="col-sm">
                    <p class="info-title">到期日：</p>
                    <p>{{orderInfo.tokenLife.substring(0, 7)}}</p>
                  </div>
                  <div class="col-sm">
                    <p class="info-title">電子信箱：</p>
                    <p>{{orderInfo.email}}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- <div class="card mt-4"> -->
          <div class="card mt-4" v-if="!isClosed" v-loading="loading">
            <div class="card-body">
              <div class="container">
                <div class="row">
                  <div class="col">
                    <h5>更換卡號</h5>
                    <p style="color:#8b0f0f;font-size:14px;">更換卡號因授權需求會刷10元，授權成功後會立即退刷給您！</p>
                  </div>
                </div>
                <div class="row mt-2">
                  <div class="col">
                    <el-radio-group v-model="payment">
                      <el-radio :label="'credit'">信用卡( Visa, Mastercard, JCB )</el-radio>
                    </el-radio-group>
                    <el-form class="mt-2" ref="form" :model="form" :rules="rules">
                      <el-form-item prop="card.number" v-if="payment=='credit'">
                        <el-input
                          type="tel"
                          name="cardnumber"
                          autocompletetype="cc-number"
                          placeholder="請輸入信用卡號碼"
                          v-model="cardNumber"
                          v-if="payment=='credit'"
                        >
                          <i slot="prefix" class="fab fa-lg" v-bind:class="[ccClass]"></i>
                        </el-input>
                      </el-form-item>
                      <el-col :span="7" v-if="payment=='credit'">
                        <el-form-item prop="card.expMonth">
                          <select class="browser-default custom-select" v-model="cardMonth">
                            <option value="" disabled selected>月</option>
                            <option v-for="m in 12" :key="m">{{m}}</option>
                          </select>
                        </el-form-item>
                      </el-col>
                      <el-col :span="1" class="line" v-if="payment=='credit'">/</el-col>
                      <el-col :span="7" v-if="payment=='credit'">
                        <el-form-item prop="card.expYear">
                          <select class="browser-default custom-select" v-model="cardYear">
                            <option value="" disabled selected>年</option>
                            <option v-for="y in yearList" :key="y.value">{{y.value}}</option>
                          </select>
                        </el-form-item>
                      </el-col>
                      <el-col :span="7" :offset="2" v-if="payment=='credit'">
                        <el-form-item prop="card.cvc">
                          <el-input
                            type="tel"
                            name="cvc"
                            :placeholder="cvcName"
                            :maxlength="cvcSize"
                            v-model="cardCvc"
                          ></el-input>
                        </el-form-item>
                      </el-col>
                      <el-col>
                        <button type="button" class="btn"
                                style="background:#eb9f2d; color:#fff; border-radius:5px;"
                                @click="submitForm('form')">
                                確認送出
                        </button>
                      </el-col>
                    </el-form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <appFooter class="mt-5"></appFooter>
  </div>
</template>

<script>
import creditCardType, { getTypeInfo } from 'credit-card-type';
import appFooter from '@/pages/_part/footer';
export default {
  components: {
    appFooter,
  },
  name: 'change-card',
  data () {
    var validateCardType = (rule, value, callback) => {
      if (this.type) {
        if (
          this.type === 'visa' ||
          this.type === 'mastercard' ||
          this.type === 'mastercard'
        ) {
          var card = getTypeInfo(this.type);
          if (card.lengths.indexOf(this.form.card.number.length) >= 0) {
            callback();
          } else {
            callback(new Error('請輸入Visa, Mastercard, JCB信用卡'));
          }
        } else {
          callback(new Error('請輸入Visa, Mastercard, JCB信用卡'));
        }
      } else {
        callback();
      }
    };
    return {
      ccClass: '',
      cvcName: 'CVC',
      cvcSize: 4,
      payment: 'credit',
      form: {
        ticket: '',
        card: {
          number: '',
          expYear: '',
          expMonth: '',
          cvc: '',
        },
      },
      type: '',
      yearList: null,
      orderInfo: null,
      expireDate: '',
      isClosed: false,
      loading: false,
      rules: {
        'card.number': [
          { required: true, message: '請輸入信用卡號碼', trigger: 'blur' },
          { validator: validateCardType, trigger: 'blur' }
        ],
        'card.expMonth': [
          { required: true, message: '請輸入月分', trigger: 'blur' }
        ],
        'card.expYear': [
          { required: true, message: '請輸入年分', trigger: 'blur' }
        ],
        'card.cvc': [
          { required: true, message: '請輸入驗證碼', trigger: 'blur' }
        ]
      }
    };
  },
  created () {
    // console.log('created');
    // 年份清單
    var moment = require('moment');
    let y = moment().format('YY');
    this.yearList = [];
    for (let i = 0; i < 10; i++) {
      this.yearList.push({ value: `${y}`, label: `${y}` });
      y++;
    }
    // 取得url的token
    let urlParams = new URLSearchParams(window.location.search);
    this.form.ticket = urlParams.get('ticket');
    this.getOrderInfo();
  },
  watch: {
    orderInfo () {
      console.log('orderInfo:' + JSON.stringify(this.orderInfo));
      this.isClosed = this.orderInfo.isClosed;
      console.log('isClose:' + this.isClosed);
    }
  },
  computed: {
    // orderInfo: {
    //   get () {
    //     return this.$store.state.changeCard.orderInfo;
    //   },
    // },
    imgCost: function () {
      return require(`@/assets/img/index_cost.jpg`);
    },
    cardNumber: {
      get () {
        if (this.type) {
          return this.prettyCardNumber(
            this.form.card.number,
            this.type
          );
        } else {
          return this.form.card.number;
        }
      },
      set (value) {
        const self = this;
        this.form.card.number = value.replace(/\D/g, '');
        creditCardType(this.form.card.number).filter(function (card) {
          self.type = card.type;
          self.ccClass = `fa-cc-${
            card.type === 'american-express' ? 'amex' : card.type
          }`;
          self.cvcName = card.code.name;
          self.cvcSize = card.code.size;
        });
      }
    },
    cardMonth: {
      get () {
        return this.form.card.expMonth;
      },
      set (value) {
        const temp = value.replace(/\D/g, '');
        if ((temp === '') | (parseInt(temp) <= 12) && temp !== '00') {
          this.form.card.expMonth = temp;
        }
      }
    },
    cardYear: {
      get () {
        return this.form.card.expYear;
      },
      set (value) {
        this.form.card.expYear = value.replace(/\D/g, '');
      }
    },
    cardCvc: {
      get () {
        return this.form.card.cvc;
      },
      set (value) {
        this.form.card.cvc = value.replace(/\D/g, '');
      }
    },
  },
  methods: {
    prettyCardNumber (cardNumber, cardType) {
      var card = getTypeInfo(cardType);
      if (card) {
        var offsets = [].concat(0, card.gaps, cardNumber.length);
        var components = [];
        for (var i = 0; offsets[i] < cardNumber.length; i++) {
          var start = offsets[i];
          var end = Math.min(offsets[i + 1], cardNumber.length);
          components.push(cardNumber.substring(start, end));
        }
        return components.join(' ');
      }
      return cardNumber;
    },
    submitForm (form) {
      this.$refs[form].validate((valid) => {
        if (valid) {
          this.loading = true;
          this.$store.dispatch('changeCard/changeCreditCard', this.form).then(res => {
            if (res.data.status === 'SUCCESS') {
              this.$message({
                duration: 0,
                showClose: true,
                type: 'success',
                message: res.data.message,
              });
              this.isClosed = true;
              this.form.card.number = '';
              this.form.card.expYear = '';
              this.form.card.expMonth = '';
              this.form.card.cvc = '';
            } else {
              this.$message({
                duration: 0,
                showClose: true,
                type: 'error',
                message: '更換卡號失敗! 請確認輸入資料',
              });
            };
            this.loading = false;
          })
          .catch((e) => {
              this.$message({
                type: 'error',
                message: '更換卡號失敗! 有問題請聯繫網站客服',
              });
            });
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    getOrderInfo () {
      // console.log('取得order資訊:' + this.form.ticket);
      this.$store.dispatch('changeCard/getOrderInfo', {ticket: this.form.ticket}).then((res) => {
        this.orderInfo = res.data;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~bootstrap/scss/bootstrap";
.change-card {
  padding-top: 3rem;
  position: relative;
  // height: 100vh;
  overflow: hidden;
  color: white;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

  .intro-p {
    font-size: 18px;
    letter-spacing: 1px;
  }

  .bg-layer {
    background: rgba(0, 0, 0, 0.13);
  }

  .card {
    color: #424242;
  }

  .line {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 6px;
  }

  .card-row {
    p {
      display: inline;
    }

    .info-title {
      color: #947b0d;
      // color: #eb9f2d;
    }
  }

  @include media-breakpoint-down(sm) {
    h1 {
      font-size: 28px;
    }
    .intro-p {
      font-size: 16px;
    }
  }
}
</style>
