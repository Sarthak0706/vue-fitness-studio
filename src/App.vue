<template>
  <NavbarPage/>
  <router-view/>
</template>

<script>
import NavbarPage from './components/NavbarPage.vue';


export default {
  name: 'App',
  components: {
    NavbarPage
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}

</style>
