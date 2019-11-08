
<template>

    <div id="pushProduct" >
        <input v-model="product" placeholder="product">
        <p>what product are you selling: {{product}} </p>

        <p>where type of product is it:  <input v-model="type" placeholder="type"> </p>
        
        <p>image refrence: <input v-model="image" placeholder="image"> </p>

        <p>description of item: <input v-model="description" placeholder="description"> </p>

        <p>price of item: <input v-model="price" placeholder="price"> </p>

        <button v-on:click="writeUserData">save</button>   
     </div>
</template>

<script>
/* eslint-disable */

import db from './firebaseInit'

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
      writeUserData() {
          db.collection('products').add({
            product: this.product,
            type: this.type,
            image: this.image,
            description: this.description,
            price: this.price
          })
        }
    }
  }
 
/* eslint-enable */
</script>

<style scoped>

</style>

                