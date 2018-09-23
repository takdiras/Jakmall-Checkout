<template>
  <div class="information">
    <span><b>Information</b></span>
    <form @submit.prevent="validateForm('form-1')" data-vv-scope="form-1">
      <div class="dropshipper">
        <input type="checkbox" name="isDropshiper" v-model="form.information.isDropshipper" placeholder="false" id="isDropshipper">
        <label for="isDropshipper">Send as Dropshipper</label>
        <input v-validate.disable="'required'" type="text" name="dropshipperName" :disabled="!form.information.isDropshipper" placeholder="Dropshipper Name">
        <input v-validate.disable="{required: true, regex:/^[0-9-+()]{6,20}$/}" type="text" name="dropshipperPhone" :disabled="!form.information.isDropshipper" placeholder="Phone Number">
        <span class="error">{{ errors.first('form-1.dropshipperName') }} {{ errors.first('form-1.dropshipperPhone') }}</span>
      </div>
      <div class="user">
        <div class="user-item">
          <label for="name" class="user-item__label">Name</label>
          <input v-validate.disable="'required'" class="user-item__input" type="text" name="name" v-model="form.information.name">
        </div>
        <span class="error">{{ errors.first('form-1.name') }}</span>
        <div class="user-item">
          <label for="phone number" class="user-item__label">Phone Number</label>
          <input v-validate.disable="{required: true, regex:/^[0-9-+()]{6,20}$/}" class="user-item__input" type="text" name="phone" v-model="form.information.phone">
        </div>
        <span class="error">{{ errors.first('form-1.phone') }}</span>
        <div class="user-item">
          <label class="user-item__label">Address</label>
          <textarea v-on:keyup="count" v-validate.disable="{ required: true, max: 120}" class="user-item__input" type="text" name="address" v-model="form.information.address"></textarea>
        </div>
        <span class="user-item__count">Character left: {{ remainingCount }}</span>
        <span class="error">{{ errors.first('form-1.address') }}</span>
        <div class="user-item">
          <label for="name" class="user-item__label">Email</label>
          <input v-validate.disable="'required|email'" class="user-item__input" type="text" name="email" v-model="form.information.email">
        </div>
        <span class="error">{{ errors.first('form-1.email') }}</span>
        <hr>
        <div align="right">
          <button type="submit">Next</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: ['form'],
  name: 'Information',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      maxCount: 120,
      remainingCount: 120
    }
  },
  methods: {
    count () {
      this.remainingCount = this.maxCount - this.form.information.address.length
      this.hasError = this.remainingCount < 0
    },
    validateForm (scope) {
      this.$validator.validateAll(scope).then((result) => {
        if (result) {
          this.form.step += 1
          this.form.information.isValid = true
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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

.information {
  background-color: #ddd;
  padding: 20px;
  text-align: left;
}
.dropshipper {
  margin 10px 0
}
.user-item {
  display flex
  flex-flow row wrap
  +e(label) {
    display inline-block
    min-width 200px
  }
  +e(count) {
    color black
    font-size .7rem
    padding-left 0
    display block
  }
}
@media only screen and (min-width: 768px) {
  .user-item__count {
    padding-left 200px
  }
}
</style>
