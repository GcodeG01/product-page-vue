<template>
  <div id="productName" >
    <router-link class="button" to="/">X</router-link>
    <h1 class="centered">Product Name</h1>
    <input class="centered" v-model="name" @input="changed" placeholder="Name Here!">
    <div class="inline-block">
      <router-link class="square" to="/">&#60;&#8211;</router-link>
      <router-link class="active" to="/productName">s</router-link>
      <router-link class="cricle" to="/productDepartment" >s</router-link>
      <router-link class="cricle" to="/productPrice" >s</router-link>
      <router-link class="cricle" to="/productImages">s</router-link>
      <router-link class="cricle" to="/productDescription">s</router-link>
      <router-link class="square" to="/productDepartment">&#8211;&#62;</router-link>
    </div>
  </div>

</template>

<script>

export default
{
  name: 'productName',
  methods: {
    changed: function (event) {
      this.$store.commit('changeName', event.target.value)
    }
  },
  data () {
    return {
      title: 'productName',
      name: ''
    }
  }
}
</script>

<style scoped>
.square{
  background-color: #ffffff;
  border: solid;
  color: rgb(0, 0, 0);
  padding: 10px 12px;
  font-size: 15px;
  border-radius: 10px;
  font-weight: bold;
  margin-left: 10px;
  text-decoration: none;
  border-width: 1px;
}

.active{
  background-color: #000000;
  border: solid;
  color: rgb(0, 0, 0);
  padding: 10px 12px;
  font-size: 5px;
  border-radius: 360px;
  border-color: black;
  margin-left: 10px;
}
.cricle{
  background-color: #ffffff;
  border: solid;
  color: rgb(255, 255, 255);
  padding: 5px 7px;
  font-size: 5px;
  border-radius: 360px;
  border-color: black;
  margin-left: 10px;
  border-width: 1px;
}
.inline-block{
  display: inline-block;
  margin-top: 269px;
}
.button {
  background-color: #ffffff;
  border: solid;
  color: rgb(255, 5, 5);
  padding: 5px 10px;
  text-align: left;
  text-decoration: none;
  font-size: 15px;
  border-radius: 360px;
  margin-right: 100px;
  margin-left: 95% ;
}

input {
  background-color: #ffffff;
  border: solid;
  color: rgba(0, 0, 0, 0.445);
  padding: 15px 32px;
  text-align: left;
  text-decoration: none;
  font-size: 15px;
  display: block;
  border-radius: 30px;
  width: 580px;
  margin: 0 auto;
}
h1{
  margin-top: 200px;
  text-align: center;
}
</style>
