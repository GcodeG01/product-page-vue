<template>

    <div id="pushProduct" >

        <h1>Product Description</h1>
        <textarea v-model="product" placeholder="Write Your Description Here!"></textarea>
     </div>

</template>

<script>
/* eslint-disable */

 
/* eslint-enable */
</script>

<style scoped>
textarea {
  background-color: #ffffff; 
  border: solid;
  color: rgba(0, 0, 0, 0.706);
  padding: 15px 32px;
  font-size: 15px;
  border-radius: 30px;
  width: 580px;
  height: 300px;
  white-space:pre-line;
 
}
p{
    padding-top: 15px;
    padding-right: 15px;
}

div
{
  position:  absolute;
  top: 30%;
  left: 20%;
}
h1{
    padding-bottom: 15px;
}

</style>