<template>

    <div id="productImages" >
        <router-link class="button" to="/">X</router-link>
        <h1>Product Image(s)</h1>
        <input v-model="image" @input="changed" placeholder="Upload Images!">
        <p> </p>
        <p> <input id="recommended" v-model="type" > <input id="recommended2" v-model="type" > <input id="recommended2" v-model="type" ></p>
        <div class="inline-block">
          <router-link class="square" to="/productPrice">&#60;&#8211;</router-link>
          <router-link class="cricle" to="/productName">s</router-link>
          <router-link class="cricle" to="/productDepartment" >s</router-link>
          <router-link class="cricle" to="/productPrice" >s</router-link>
          <router-link class="active" to="/productImages">s</router-link>
          <router-link class="cricle" to="/productDescription">s</router-link>
          <router-link class="square" to="/productdescription">&#8211;&#62;</router-link>
        </div>
     </div>

</template>
<script>

export default
{
  name: 'productImages',
  methods: {
    changed: function (event) {
      this.$store.commit('changeImages', event.target.value)
    }
  },
  data () {
    return {
      title: 'productImages',
      image: ''
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
  margin-top: 50px;
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
    width: 100px;
    height: 100px;
    padding: 10px;
    margin-right: 40px;
}
#recommended2{
    font-size: 12px;
    border-radius: 0px;
    width: 50px;
    height: 50px;
    padding: 10px;
    margin-right: 40px;
}
input {
  background-color: #ffffff;
  border: solid;
  color: rgba(0, 0, 0, 0.445);
  padding: 15px 32px;
  text-align: left;
  text-decoration: none;
  font-size: 15px;
  border-radius: 0px;
  width: 580px;
}
p{
  padding-top: 15px;
  padding-right: 15px;
}
h1{
  padding-bottom: 15px;
  margin-top: 200px;
  text-align: center;
}

</style>
