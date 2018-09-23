<template>
  <div class="shipping">
    <span><b>Shipping</b></span>
    <div class="shipping-information">
      <div class="shipping-information__item">
        <p>Name:</p>
        <p><b>{{ form.information.name }}</b></p>
      </div>
      <div class="shipping-information__item">
        <p>Phone Number:</p>
        <p><b>{{ form.information.phone }}</b></p>
      </div>
      <div class="shipping-information__item">
        <p>Email:</p>
        <p><b>{{ form.information.email }}</b></p>
      </div>
      <div class="shipping-information__item">
        <p>Dropshipper Name:</p>
        <p><b>{{ form.information.dropshipperName }}</b></p>
      </div>
      <div class="shipping-information__item">
        <p>Dropshipper Phone:</p>
        <p><b>{{ form.information.dropshipperPhone }}</b></p>
      </div>
      <div class="shipping-information__item">
        <p>Address:</p>
        <p><b>{{ form.information.address }}</b></p>
      </div>
    </div>
    <hr>
    <form @submit.prevent="validateForm('form-2')" data-vv-scope="form-2">
      <div class="shipping-form">
        <div class="shipping-form__item">
          <label class="shipping-form__label" for="service">Delivery Service: </label>
          <div class="shipping-service">
            <div class="shipping-service__list">
              <input v-validate="'required'" name="service" v-on:change="shippingPrice" class="" type="radio" value="JNE" v-model="form.shipping.service" id="JNE">
              <label class="" for="JNE">JNE</label>
            </div>
            <div class="shipping-service__list">
              <input name="service" v-on:change="shippingPrice" class="" type="radio" value="Go Send" v-model="form.shipping.service" id="GoSend">
              <label class="" for="GoSend">GoSend</label>
            </div>
            <div class="shipping-service__list">
              <input name="service" v-on:change="shippingPrice" class="" type="radio" value="Sicepat" v-model="form.shipping.service" id="Sicepat">
              <label class="" for="Sicepat">Sicepat</label>
            </div>
          </div>
          <span>{{ errors.first('form-2.service') }}</span>
        </div>
        <div class="shipping-form__item">
          <label class="shipping-form__label" for="service">Delivery Price: </label>
          <span>{{ form.shipping.price }}</span>
        </div>
        <div class="shipping-form__item">
          <label class="shipping-form__label" for="service">Delivery Estimate: </label>
          <span>{{ form.shipping.estimate }}</span>
        </div>
        <div class="shipping-form__item">
          <label class="shipping-form__label" for="service">Delivery Service: </label>
          <div class="shipping-pay">
            <div class="shipping-pay__item">
              <input v-on:change="shippingPrice" class="" type="radio" value="Wallet" v-model="form.shipping.paymentMethod" id="Wallet">
              <label class="" for="Wallet" checked>Wallet</label>
            </div>
            <div class="shipping-pay__item">
              <input v-on:change="shippingPrice" class="" type="radio" value="Bank Transfer" v-model="form.shipping.paymentMethod" id="Bank" :disabled="form.shipping.service !== 'Sicepat'">
              <label class="" for="Bank">Bank Transfer</label>
            </div>
            <div class="shipping-pay__item">
              <input v-on:change="shippingPrice" class="" type="radio" value="Virtual Account" v-model="form.shipping.paymentMethod" id="VA" :disabled="form.shipping.service == 'Go Send'">
              <label class="" for="VA">Virtual Account</label>
            </div>
          </div>
        </div>
        <hr>
        <div align="right">
          <button type="button" v-on:click="form.step -= 1">Back</button>
          <button type="submit">Next</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Shipping',
  props: ['form'],
  methods: {
    shippingPrice () {
      if (this.form.shipping.service === 'JNE') {
        this.form.shipping.price = 15000
        this.form.shipping.estimate = '2 Day'
      } else if (this.form.shipping.service === 'Go Send') {
        this.form.shipping.price = 35000
        this.form.shipping.estimate = 'Half Day'
      } else if (this.form.shipping.service === 'Sicepat') {
        this.form.shipping.price = 10000
        this.form.shipping.estimate = '1 Day'
      }
      this.form.shipping.total = this.form.shipping.price + this.form.shipping.servicePrice
    },
    validateForm (scope) {
      this.$validator.validateAll(scope).then((result) => {
        if (result) {
          this.form.step += 1
          this.form.shipping.isValid = true
        }
      })
    }
  }
}
</script>

<style lang="stylus">
.shipping-information {
  display flex
  flex-flow row wrap
  .shipping-information__item {
    margin-right 20px
  }
}

.shipping {
  text-align: left;
  padding: 20px;
  background-color: #ddd;
}

.shipping-form__item {
  display: flex;
  flex-flow row wrap
  margin-top 20px
}

.shipping-form__label {
  min-width 200px
}

.shipping-service {
  display: flex;
  border-radius: 5px;
  margin-top 15px
}

.shipping-service__list {
  label {
    width: 8em;
    background-color: #fff;
    color: #000;
    padding: 0.5em;
    cursor: pointer;
  }

  input[type=radio] {
    display: none;
  }

  input[type=radio]:checked ~ label {
    background-color: #f1592a;
    color: white;
  }
}
</style>
