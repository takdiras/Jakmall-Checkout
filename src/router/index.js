import Vue from 'vue'
import Router from 'vue-router'
import Information from '@/components/Information'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Information',
      component: Information
    }
  ]
})
