
<template>

    <div id="pushProduct" >
        <input v-model="product" placeholder="product">
        <p>what product are you selling: {{product}} </p>

        <p>where type of product is it:  <input v-model="type" placeholder="type"> </p>
        
        <p>image refrence: <input v-model="image" placeholder="image"> </p>

        <p>description of item: <input v-model="description" placeholder="description"> </p>

        <p>price of item: <input v-model="price" placeholder="price"> </p>

        <button v-on:click="writeUserData(product,type,image,description,price)">save</button>   
     </div>
</template>

<script>
/* eslint-disable */

var firebase = require("firebase/app");
 data: {
    product: 'hi'
  }
// Add the Firebase products that you want to use
require("firebase/auth");
require("firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyDrDTo440WUch6ibt5FPhIbihsgqreckVk",
  authDomain: "product-page-vue.firebaseapp.com",
  databaseURL: "https://product-page-vue.firebaseio.com",
  projectId: "product-page-vue",
  storageBucket: "product-page-vue.appspot.com",
  messagingSenderId: "130326519986",
  appId: "1:130326519986:web:2a6071e83a90c670f729ab"
};



firebase.initializeApp(firebaseConfig);
export default {
  data() {
      return{
      product: 'hellow',
      type: 'types',
      image: 'images',
      description: 'descriptions',
      price: 'no way'
      }
  },
  methods:{
      writeUserData: function(product,type,image,description,price) {
    firebaseConfig.database().ref('products/').set({
            Product: product,
            type: type,
            image: image,
            description:description,
            price: price

        })
 
    }
  }
 
}
 
/* eslint-enable */
</script>

<style scoped>

</style>

                