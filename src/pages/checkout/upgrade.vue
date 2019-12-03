<template>
  <div v-loading.fullscreen.lock="isLoading">
    <!-- <div class="form"
      v-if="type==='coupon'">
      <h2 class="title">優惠碼 </h2>
      <coupon-input></coupon-input>
    </div>
    <h2 class="title mt-5">請選擇方案 </h2> -->
    <paylist v-if="list"
      :selected.sync="form.planId"
      :list="list"></paylist>
  <el-form ref="checkoutForm" :model="form" :rules="rules">
      <h2 class="title mt-1">姓名</h2>
         <el-col :span="11">
          <el-form-item prop="lastName">
          <el-input
            type='text'
            name="lastName"
            placeholder="姓"
            v-model="form.lastName">
          </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="2" class="line">/</el-col>
        <el-col :span="11">
          <el-form-item prop="firstName">
          <el-input
            type='text'
            name="firstName"
            placeholder="名"
            v-model="form.firstName">
          </el-input>
          </el-form-item>
        </el-col>
      <h2 class="title mt-1">電子信箱</h2>
      <el-form-item prop="email">
        <el-input
            placeholder="請輸入電子信箱"
            v-model="form.email"
            name="email"
            >

        </el-input>
      </el-form-item>
      <h2 class="title mt-1">聯絡電話</h2>
      <el-form-item prop="phoneNumber">
        <vue-tel-input @input="onPhoneInput" placeholder="請輸入聯絡電話"  name="phoneNumber" v-bind="bindProps"></vue-tel-input>
        <!-- <el-input
            type="phoneNumber"
            placeholder="請輸入聯絡電話"
            v-model="form.phoneNumber"
            name="phoneNumber"
            >
        </el-input>
         -->
      </el-form-item>
    <h2 class="title mt-1">付款方式 </h2>
    <el-radio-group v-model="form.payment">
      <el-radio :label="'credit'">信用卡</el-radio>
      <!-- <el-radio :label="'atm'">ATM</el-radio> -->
    </el-radio-group>
      <el-form-item prop="card.number">
          <el-input
            type='tel'
            name='cardnumber'
            autocompletetype="cc-number"
            placeholder="請輸入信用卡號碼"
            v-model="cardNumber">
            <i slot="prefix" class="fab fa-lg" v-bind:class=[ccClass]></i>
          </el-input>
      </el-form-item>

        <el-col :span="7">
          <el-form-item prop="card.expMonth">
          <el-input
            type='tel'
            name="ccmonth"
            placeholder="MM"
            maxlength="2"
            v-model="cardMonth">
          </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="1" class="line">/</el-col>
        <el-col :span="7">
          <el-form-item prop="card.expYear">
          <el-input
            type='tel'
            name="ccyear"
            placeholder="YY"
            maxlength="2"
            v-model="cardYear">
          </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="2">&nbsp;</el-col>
        <el-col :span="7">
          <el-form-item prop="card.cvc">
          <el-input
            type='tel'
            name="cvc"
            :placeholder="cvcName"
            :maxlength="cvcSize"
            v-model="cardCvc">
          </el-input>
          </el-form-item>
        </el-col>
    </el-form>
    <div class="note mt-5">
      <p>電子發票將捐贈給福智學校財團法人(愛心碼:1025)</p>
    </div>
  </div>
</template>
<script>
import paylist from '@/pages/_part/packs/list';
import couponInput from '@/pages/Account/coupon';
import API from '@/api/';
import {
  Message
} from 'element-ui';
import creditCardType, { getTypeInfo } from 'credit-card-type';

// import { mapGetters } from 'vuex';
// import API from '@/api/';
export default {
  data () {
    return {
      ccClass: '',
      cvcName: 'CVC',
      cvcSize: 4,
      isLoading: false,
      bindProps: {
        preferredCountries: ['CA', 'TW', 'CN', 'US', 'JP', 'KR', 'HK', 'SG', 'MY', 'IN', 'VN']
      },
      form: {
        lastName: '',
        firstName: '',
        email: '',
        phoneNumber: '',
        phoneCountryCode: '',
        phoneValid: '',
        planId: '',
        couponCode: '',
        payment: 'credit',
        card: {
          number: '',
          expYear: '',
          expMonth: '',
          cvc: '',
          type: ''
        }
      },
      rules: {
        lastName: [
          { required: true, message: '請輸入姓', trigger: 'blur' }
        ],
        firstName: [
          { required: true, message: '請輸入名', trigger: 'blur' }
        ],
        phoneNumber: [
          { required: true, message: '請輸聯絡電話', trigger: 'blur' }
        ],
        email: [
          { required: true, message: '請輸入電子信箱', trigger: 'blur' },
          { type: 'email', message: '請輸入正確的電子信箱', trigger: ['blur', 'change'] }
        ],
        'card.number': [
          { required: true, message: '請輸入信用卡號碼', trigger: 'blur' }
        ],
        'card.expYear': [
          { required: true, message: '請輸入年分', trigger: 'blur' }
        ],
        'card.expMonth': [
          { required: true, message: '請輸入月分', trigger: 'blur' }
        ],
        'card.cvc': [
          { required: true, message: '請輸入驗證碼', trigger: 'blur' }
        ],
      }
    };
  },
  components: {
    couponInput,
    paylist: paylist
  },

  computed: {
    list () {
      let data = this.$store.getters[`global/payList`].filter(plan => plan.id === this.planId);
      if (!data[0]) return;
      this.form.planId = this.planId;
      return data;
    },
    cardNumber: {
      get () {
        if (this.form.card.type) {
          return this.prettyCardNumber(this.form.card.number, this.form.card.type);
        } else {
          return this.form.card.number;
        }
      },
      set (value) {
        const self = this;
        this.form.card.number = value.replace(/\D/g, '');
        creditCardType(this.form.card.number).filter(function (card) {
          self.form.card.type = card.type;
          self.ccClass = `fa-cc-${card.type === 'american-express' ? 'amex' : card.type}`;
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
        if (temp === '' | parseInt(temp) <= 12 && temp !== '00') {
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
    }
  },
  props: {
    type: {
      default: '',
      type: String
    },
    title: null,
    planId: null
  },
  methods: {
    onPhoneInput (formattedNumber, { number, valid, country }) {
        this.form.phoneNumber = number.international;
        this.form.phoneCountryCode = country.iso2;
        this.form.phoneValid = valid;
    },
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
    submit () {
     const myself = this;
      this.$refs['checkoutForm'].validate((valid) => {
          if (valid) {
            myself.isLoading = true;
            API.checkout.subscription(this.form).then(function (res) {
              myself.isLoading = false;
              let plan = myself.list[0];
              if (res.data.status === 'SUCCESS' && res.data.message === '授權成功') {
                myself.$vuedals.close();
                Message({
                  message: `刷卡成功！ 您已成功購買 ${plan.name}！`,
                  type: 'success',
                  duration: 0,
                  showClose: true
                })
                myself.$store.dispatch('auth/status', null, {
                  root: true
                });
              } else if (res.data.Status === 'SUCCESS' && res.data.Message === '成功取得3D HTML') {
                var body = res.data.Result;
                document.body.innerHTML = body;
                document.forms[0].submit();
              } else {
                Message({
                  message: `刷卡失敗，請確認信用卡相關資訊。[${res.data.message}]`,
                  type: 'error',
                  duration: 0,
                  showClose: true
                })
              }
            }).catch(function (reason) {
              myself.isLoading = false;
              Message({
                message: reason.data.message,
                type: 'error',
                duration: 0,
                showClose: true
              })
            })
          } else {
            return false;
          }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.title {
  font-weight: bold;
  font-size: 1.2rem;
}
.line {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

