<template>
  <div id="app">
    <!-- <h1>Próximos eventos</h1> -->
    <!-- <div>
      <h1>
        Chico's Bar
        <a href>(página)</a>
      </h1>
      <p>Reunião com a família no Chico's bar</p>
      <span>23/10/2019</span>
      <div>Wesley, Verônica e +13 irão</div>
    </div>-->
    <!-- <router-link to="/people/form">Go to form</router-link> -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
