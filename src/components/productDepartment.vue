<template>

    <div id="pushProduct" >

        <h1>Product Department</h1>
        <input v-model="product" placeholder="Department here!">
        <p>Recommended Department  <input id="recommended" v-model="type" > </p>
     </div>

</template>

<script>
/* eslint-disable */

 
/* eslint-enable */
</script>

<style scoped>
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
  display: inline-block;
  font-size: 15px;
  border-radius: 30px;
  width: 580px;
 
}
p{
    padding-top: 15px;
    padding-right: 15px;
}

div
{
  position:  absolute;
  top: 40%;
  left: 25%;
}
h1{
    padding-bottom: 15px;
}

</style>