<template>
  <navbar />
  <footer />
  <router-view></router-view>
</template>
<script>
import navbar from "./components/navbar.vue";
import footer from "./components/footer.vue";
export default {
  name: "App",
  components: {
    navbar,
    footer,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: rgb(40, 75, 99);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
