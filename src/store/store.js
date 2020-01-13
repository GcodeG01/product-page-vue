import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    department: ''
  },
  mutations: {
    changeDepartment (state, department) {
      state.department = department
    },
    changePrice (state, price) {
      state.price = price
    },
    changeDescription (state, description) {
      state.description = description
    },
    changeImages (state, images) {
      state.images = images
    },
    changeName (state, name) {
      state.name = name
    }
  },
  getters: {
    department: state => state.department,
    price: state => state.price,
    description: state => state.description,
    images: state => state.images,
    name: state => state.name
  }
})
