<template>
  <nav class="nav">
    <div class="container">
      <div class="logo">
        <a href="https://i.postimg.cc/WpwgYd7L/logo1.jpg"></a>
      </div>
      <div id="mainListDiv" class="main_list">
        <ul class="navlinks">
          <li><router-link to="/home">Home</router-link></li>
          <li><router-link to="/about">About</router-link></li>
          <li><router-link to="/"></router-link></li>
          <li><router-link to="/"></router-link></li>
        </ul>
      </div>
      <span class="navTrigger">
        <i></i>
        <i></i>
        <i></i>
      </span>
    </div>
  </nav>
</template>
<script>
import store from "@/store";
export default {
  name: "navbar",
};
</script>
<style>

</style>
