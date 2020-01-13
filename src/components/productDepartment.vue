<template>

    <div id="pushDepartment" >
        <router-link class="button" to="/">X</router-link>
        <h1>Product Department</h1>
        <input v-model='department' @input="changed" placeholder="Department here!">
        <p>Recommended Department  <input id="recommended" v-model="type" > </p>
        <div class="inline-block">
          <router-link class="square" to="/productName">&#60;&#8211;</router-link>
          <router-link class="cricle" to="/productName">s</router-link>
          <router-link class="active" to="/productDepartment" >s</router-link>
          <router-link class="cricle" to="/productPrice" >s</router-link>
          <router-link class="cricle" to="/productImages">s</router-link>
          <router-link class="cricle" to="/productDescription">s</router-link>
          <router-link class="square" to="/productPrice">&#8211;&#62;</router-link>
        </div>
    </div>
</template>

<script>
export default
{
  name: 'productDepartment',
  methods: {
    changed: function (event) {
      this.$store.commit('changeDepartment', event.target.value)
    }
  },
  data () {
    return {
      title: 'productDepartment',
      department: ''
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
  margin-top: 185px;
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
#recommended{
    font-size: 12px;
    border-radius: 0px;
    width: 400px;
    height: 10px;
    padding: 10px;
}
input {
  background-color: #ffffff;
  border: solid;
  color: rgba(0, 0, 0, 0.445);
  padding: 15px 32px;
  text-align: left;
  text-decoration: none;
  display: block;
  font-size: 15px;
  border-radius: 30px;
  width: 580px;
  margin:0 auto;
}
p{
  padding-top: 15px;
  padding-right: 15px;
  margin:0 auto;
}

h1{
  padding-bottom: 15px;
  margin-top: 200px;
  text-align: center;
}

</style>
