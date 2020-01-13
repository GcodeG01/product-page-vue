<template>

    <div class="button" >

      <router-link class="button" to="/ProductName">Create Product</router-link>

     </div>
</template>

<script>
export default
{
  name: 'savebutton',
  data () {
    return {
      title: 'savebutton'
    }
  }
}
</script>

<style scoped>

.button {
  background-color: #000000;
  border: none;
  color: rgb(231, 210, 210);
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  font-size: 26px;
  border-radius: 30px;
  width: 280px;
}
.button{
  margin: auto;
  margin-top:400px;
}
</style>
