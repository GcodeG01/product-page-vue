<template>
  <div id="app">
   
    <pushProduct msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import pushProduct from './components/button.vue'
import productName from './components/productName.vue'

/* eslint-disable */
export default {
  name: 'app',
  components: {
    pushProduct,
    productName
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
