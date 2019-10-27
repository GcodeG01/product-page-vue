
<template>
    <div>
        
        <p>what product are you selling: <input v-model="product" placeholder="product"></p>

        <p>where type of product is it:  <input v-model="type" placeholder="type"> </p>
        
        <p>image refrence: <input v-model="image" placeholder="image"> </p>

        <p>description of item: <input v-model="description" placeholder="description"> </p>

        <p>price of item: <input v-model="price" placeholder="price"> </p>

        <button v-on:click="save">save</button>   
     </div>
</template>



<script>
export default {
    name: 'pushProduct'
 
}

</script>

<style scoped>

</style>

                