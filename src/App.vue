<template>
  <div class="checkout" id="app">
    <div class="checkout-step">
      <h2>Checkout</h2>
      <ul class="step-nav">
        <li @click="goStep1" class="step-nav__item"  v-bind:class="{ active: checkoutForm.step === 2 | checkoutForm.step === 3 }">
          Information
        </li>
        <li @click="goStep2" class="step-nav__item" v-bind:class="{ active: checkoutForm.step === 3 }">
          Shipping
        </li>
        <li class="step-nav__item">
          Confirmation
        </li>
      </ul>
    </div>
    <div class="checkout-form">
      <app-information v-if="checkoutForm.step === 1" class="form-item" :form="checkoutForm" />
      <app-shipping  v-if="checkoutForm.step === 2" class="form-item" :form="checkoutForm" />
      <app-confirmation v-if="checkoutForm.step === 3" class="form-item" :form="checkoutForm" />
    </div>
  </div>
</template>

<script>
import Information from './components/Information.vue'
import Shipping from './components/Shipping.vue'
import Confirmation from './components/Confirmation.vue'

export default {
  name: 'App',
  components: {
    'app-information': Information,
    'app-shipping': Shipping,
    'app-confirmation': Confirmation
  },
  methods: {
    finish () {
      alert('submited')
    },
    goStep1 () {
      if (this.checkoutForm.information.isValid) {
        this.checkoutForm.step = 1
      }
    },
    goStep2 () {
      if (this.checkoutForm.shipping.isValid) {
        this.checkoutForm.step = 2
      }
    }
  },
  data () {
    return {
      checkoutForm: {
        information: {
          isDropshipper: false,
          dropshipperName: '',
          dropshipperPhone: '',
          name: 'Test',
          phone: '',
          address: '',
          email: '',
          isValid: false
        },
        shipping: {
          service: '',
          price: '',
          estimate: '',
          paymentMethod: 'Wallet',
          total: '',
          servicePrice: 2000,
          isValid: false
        },
        step: 1
      }
    }
  }
}
</script>

<style lang="stylus">
e(name) {
  &__{name} {
    {block};
  }
}

m(name) {
  &--{name} {
    {block};
  }
}

#app {
  text-align: center;
  padding: 2rem;
}

body {
  margin: 0;
  font-family: sans-serif;
}

.error {
  color red
  font-size .7rem
  padding-left 0
}

@media only screen and (min-width: 768px) {
  .error {
    padding-left 200px
  }
}

.checkout {
  margin 0 auto
  max-width 700px;
  .step-nav {
    counter-reset: step;
    flex: 1;
    min-width 250px
    +e(item) {
      list-style-type: none;
      float: left;
      width: 30%;
      position: relative;
      text-align: center;
      font-weight: normal;
      &:hover{
        cursor pointer
      }
      &:before {
        content: counter(step);
        counter-increment: step;
        height: 30px;
        width: 30px;
        line-height: 30px;
        border: 2px solid #ddd;
        display: block;
        text-align: center;
        margin: 0 auto 10px auto;
        border-radius: 50%;
        background-color: #fff;
      }

      &:after {
        content: '';
        position: absolute;
        width: 100%;
        height: 2px;
        background-color: #ddd;
        top: 15px;
        left: -50%;
        z-index: -1;
      }

      &:first-child::after {
        content: none;
      }

      &.active {
        color: #f2300c;
      }

      &.active:before {
        border-color: #f2300c;
      }

      &.active + .step-nav__item::after {
        background-color: #f2300c;
      }
    }

    +e(number) {
      width: 2em;
      height: 2em;
      text-align: center;
      line-height: 2em;
      border-radius: 1em;
      background: dodgerblue;
      margin: 0 1em;
      display: inline-block;
      color: white;
      position: relative;
    }

    +e(label) {
      text-align: center;
      line-height: 2em;
      display: inline-block;
      position: relative;
    }
  }

  .checkout-step {
    display: flex;
    flex-flow row wrap
  }
  .form-item{
    margin 10px 0
  }
}
</style>
