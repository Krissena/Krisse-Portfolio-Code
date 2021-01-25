<template>
  <div id="app">
    <CustomMenu />     
    <!-- <menu v-if="router.path !=='/kirjaudu'"/> --> 
    <router-view></router-view>    
  </div>
</template>

<script>
  import CustomMenu from './components/CustomMenu';

  export default {
    name: 'app',
    components: {
      CustomMenu
    },
  }
</script>

<style>
  #app {
    height: 100%;
    font-family: Open Sans, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;    
    color: #2c3e50;
    overflow: hidden;
    display: flex;      
  }

  html, body {
    width: 100%;
    height: 100%;    
    overflow: hidden;
  }

  h1 {
    font-family: "Open Sans", sans-serif;
    font-size: 2rem;
    font-weight: 300;
    color: #323266;
  }

  h2 {
    font-family: "Opens Sans", sans-serif;
    font-size: 1.5rem;
    font-weight: 300;
    color: #323266    
  }

  p {
    font-family: "Open Sans", sans-serif;
    font-size: 1rem;
    font-weight: normal;    
  } 

  * {
    box-sizing: border-box;
  }
  
</style>
