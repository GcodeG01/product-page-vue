<template>
  <div id="productName" >
    <router-link class="button" to="/">X</router-link>
    <h1 class="center">Summary</h1>
        <h3 class="line1"><p>Name:</p><input v-model="name" @input="changed4"></h3><br/>
        <h3 class="line2"><p>Department:</p> <input v-model="department" @input="changed1"></h3><br/>
        <h3 class="line2"><p>Price:</p> <input v-model ="price" @input="changed5" ></h3><br/>
        <h3 class="line3"><p>Images:</p> <input id="recommended" v-model="image" @input="changed3"> <input id="recommended2" v-model="type" > <input id="recommended2" v-model="type" ></h3><br/>
        <h3 class="line4"><p>Description:</p> <textarea v-model="description" @input="changed2"></textarea> </h3><brs/>
        <button v-on:click="writeUserData">Submit</button>
  </div>

</template>

<script>
/*eslint-disable*/
import db from './firebaseInit'

export default
{
  name: 'pushProduct',
   
  data () {
    return {
      name: this.$store.state.name,
      price: this.$store.state.price,
      name: this.$store.state.name,
      image: this.$store.state.images,
      description: this.$store.state.description,
      department:  this.$store.state.department
    }
  },
  methods: {
    changed1: function (event) {
      this.$store.commit('changeDepartment', event.target.value)
    },
    changed2: function (event) {
      this.$store.commit('changeDescription', event.target.value)
    },
    changed3: function (event) {
      this.$store.commit('changeImages', event.target.value)

    },
    changed4: function (event) {
      this.$store.commit('changeName', event.target.value)
    },
    changed5: function (event) {
      this.$store.commit('changePrice', event.target.value)
    },
    writeUserData(){
      db.collection('products').add({
        name: this.name,
        department: this.department,
        image: this.image,
        description: this.description,
        price: this.price
      })
    }
  }
}
</script>

<style scoped>
button:hover{
  background-color: #e0e0e0;
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
button{
  background-color: #ffffff;
  border:solid;
  color: black;
  text-align: center;
  border-radius: 45%;
  padding: 20px 35px;
  font-size: 20px;
  display: block;
  margin-left:43%;
}
h3{
  text-align: left;
  display: inline-block;
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
  margin-left: 80% ;
}
input {
  background-color: #ffffff;
  border: solid;
  color: rgba(0, 0, 0, 0.445);
  padding: 15px 32px;
  text-align: left;
  text-decoration: none;
  font-size: 15px;
  border-radius: 15px;
  width: 580px;
}
textarea {
  background-color: #ffffff;
  border: solid;
  color: rgba(0, 0, 0, 0.706);
  padding: 15px 32px;
  font-size: 15px;
  border-radius: 15px;
  width: 580px;
  height: 200px;
  white-space:pre-line;
}
</style>
