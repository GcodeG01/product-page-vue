/* eslint-disable */

import Vue from 'vue'
import Router from 'vue-router'
import button from '@/components/savebutton'
import productName from '@/components/productName'
import productPrice from '@/components/productPrice'
import productDepartment from '@/components/productDepartment'
import productDescription from '@/components/productDescription'
import productImages from '@/components/productImages'
import pushProduct from '@/components/pushProduct'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/productName',
      name: 'productName',
      component: productName
    },
    {
      path: '/',
      name: 'savebutton',
      component: button
    },
    {
      path: '/productPrice',
      name: 'productPrice',
      component: productPrice
    },
    {
      path: '/productDepartment',
      name: 'productDepartment',
      component: productDepartment
    },
    {
      path: '/productDescription',
      name: 'productDescription',
      component: productDescription
    },
    {
      path: '/productImages',
      name: 'productImages',
      component: productImages
    },
    {
      path:'/pushProduct',
      name: 'pushProduct',
      component:pushProduct
    }
  ]}
)
