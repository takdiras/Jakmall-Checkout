<template>
  <div class="confirmation">
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
    <div class="shipping-service">
      <div class="shipping-service__item">
        <p>Delivery Details:</p>
        <p><b>{{ form.shipping.service }}</b></p>
      </div>
      <div class="shipping-service__item">
        <p>Delivery Price:</p>
        <p><b>{{ form.shipping.price }}</b></p>
      </div>
      <div class="shipping-service__item">
        <p>Service Price:</p>
        <p><b>{{ form.shipping.servicePrice }}</b></p>
      </div>
      <div class="shipping-service__item">
        <p>Total Price:</p>
        <p><b>{{ form.shipping.total }}</b></p>
      </div>
      <div class="shipping-service__item">
        <p>Payment Method:</p>
        <p><b>{{ form.shipping.paymentMethod }}</b></p>
      </div>
    </div>
    <div align="right">
      <button type="button" v-on:click="form.step -= 1">Back</button>
      <button type="button" v-on:click="send()">Finish</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Confirmation',
  props: ['form'],
  methods: {
    send () {
      alert(JSON.stringify(this.form))
    }
  }
}
</script>

<style lang="stylus">
.confirmation {
  background-color: #ddd;
  padding: 20px;
  text-align: left;
}

.shipping-service {
  display flex
  flex-flow row wrap
  .shipping-service__item {
    margin-right: 20px;
  }
}
</style>
