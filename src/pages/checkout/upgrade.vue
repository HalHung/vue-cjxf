<template>
  <div v-loading.fullscreen.lock="isLoading">
    <div class="form"
      v-if="type==='coupon'">
      <h2 class="title">優惠碼 </h2>
      <coupon-input></coupon-input>
    </div>
    <h2 class="title mt-5">請選擇方案 </h2>
    <paylist v-if="list"
      :selected.sync="form.planId"
      :list="list"></paylist>
  <el-form ref="checkoutForm" :model="form" :rules="rules">
    <h2 class="title mt-5">付款方式 </h2>
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
            v-model="form.card.number">
          </el-input>
      </el-form-item>
      
        <el-col :span="7">
          <el-form-item prop="card.expMonth">
          <el-input
            type='tel'
            name="ccmonth"
            placeholder="MM"
            v-model="form.card.expMonth">
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
            v-model="form.card.expYear">
          </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="2">&nbsp;</el-col>
        <el-col :span="7">
          <el-form-item prop="card.cvc">
          <el-input
            type='tel'
            name="cvc"
            placeholder="CVC"
            v-model="form.card.cvc" show-password>
          </el-input>
          </el-form-item>
        </el-col>
    </el-form>
    <div class="note mt-5">
      <p class="">使用說明 </p>
      <p>使用 Google 產品時，您可以匯出及下載帳戶中存放的資料，例如您的電子郵件、日曆和相片。只要幾個簡單步驟，就能建立封存檔案，將這些資料留存備查或提供其他服務使用。</p>
      <p>注意：下載完成後，您的資料並不會從 Google 伺服器中刪除。瞭解如何刪除您的帳戶或刪除您的搜尋記錄和瀏覽活動。</p>
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
// import { mapGetters } from 'vuex';
// import API from '@/api/';
export default {
  data () {
    return {
      isLoading: false,
      form: {
        planId: '',
        couponCode: '',
        payment: 'credit',
        card: {
          number: '',
          expYear: '',
          expMonth: '',
          cvc: ''
        }
      },
      rules: {
        email: [
          { required: true, message: '請輸入會員帳號', trigger: 'blur' },
          { type: 'email', message: '請輸入正確的會員帳號', trigger: ['blur', 'change'] }
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
    submit () {
     const myself = this;
      this.$refs['checkoutForm'].validate((valid) => {
          if (valid) {
            myself.isLoading = true;
            API.checkout.subscription(this.form).then(function (res) {
              console.log(res);
              myself.isLoading = false;
              let plan = myself.list[0];
              if (res.data.status === 'SUCCESS') {
                myself.$vuedals.close();
                Message({
                  message: `刷卡成功！ 您已成功購買 ${plan.name}！`,
                  type: 'success',
                  duration: 3 * 1000
                })
                myself.$store.dispatch('auth/status', null, {
                  root: true
                });
              } else {
                Message({
                  message: `刷卡失敗，請確認信用卡相關資訊。[${res.data.message}]`,
                  type: 'error',
                  duration: 3 * 1000
                })
              }
            }).catch(function (reason) {
              console.log(reason);
              myself.isLoading = false;
              Message({
                message: reason.response.data.message,
                type: 'error',
                duration: 3 * 1000
              })
            })
          } else {
            console.log('error submit!!');
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
</style>

