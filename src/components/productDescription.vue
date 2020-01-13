<template>

    <div id="productDescription" >
      <router-link class="button" to="/">X</router-link>
      <h1>Product Description</h1>
      <textarea v-model="description" @input="changed" placeholder="Write Your Description Here!"></textarea>
    <div class="inline-block">
      <router-link class="square" to="/productImages">&#60;&#8211;</router-link>
      <router-link class="cricle" to="/productName">s</router-link>
      <router-link class="cricle" to="/productDepartment" >s</router-link>
      <router-link class="cricle" to="/productPrice" >s</router-link>
      <router-link class="cricle" to="/productImages">s</router-link>
      <router-link class="active" to="/productDescription">s</router-link>
      <router-link class="square" to="/pushproduct">&#8211;&#62;</router-link>
    </div>
    </div>

</template>

<script>
export default
{
  name: 'productDescription',
  methods: {
    changed: function (event) {
      this.$store.commit('changeDescription', event.target.value)
    }
  },
  data () {
    return {
      title: 'productDescription',
      description: ''
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
  margin-top: 71px;
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
textarea {
  background-color: #ffffff;
  border: solid;
  color: rgba(0, 0, 0, 0.706);
  padding: 15px 32px;
  font-size: 15px;
  border-radius: 30px;
  width: 580px;
  height: 200px;
  white-space:pre-line;
  display:block;
  margin-left: auto;
  margin-right: auto;
}
p{
  padding-top: 15px;
  padding-right: 15px;
}

h1{
  margin-top: 200px;
  text-align: center;
  padding-bottom: 15px;
}

</style>
