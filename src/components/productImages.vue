<template>

    <div id="pushProduct" >

        <h1>Product Image(s)</h1>
        <input v-model="product" placeholder="Upload Images!">
        <p> </p>
        <p> <input id="recommended" v-model="type" > <input id="recommended2" v-model="type" > <input id="recommended2" v-model="type" ></p>
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
  display: inline-block;
  font-size: 15px;
  border-radius: 0px;
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