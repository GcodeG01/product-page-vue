<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import productDepartment from './components/productDepartment'
import pushProduct from './components/pushProduct'

export default {
  name: 'App',
  components: {
    productDepartment,
    pushProduct
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
