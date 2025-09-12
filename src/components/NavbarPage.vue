<template>
   <div class="navbar">
       <h3><router-link to="/">Home</router-link></h3>
       <h3><router-link to="/workout">Workout</router-link></h3>
       <h3><router-link to="/nutrition">Nutrition Page</router-link></h3>
   </div>

</template>

<script>
export default{
    name:'NavbarPage',
}
</script>


<style>
.navbar
{
    display: flex;
    flex-direction: row;
    gap: 10px;
    justify-content: center;
    align-items: center;
    background-color: lightblue;
}
</style>