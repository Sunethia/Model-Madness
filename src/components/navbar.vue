<template>
  <!-- <nav>
    <router-link to="/">Home</router-link>
    <router-link to="about">About</router-link>
    <router-link to="products">Products</router-link>
    <router-link to="register">Register</router-link>
    <router-link to="login">Login</router-link>
    <router-link to="admin">Admin</router-link>
    <router-link to="contact">Contact</router-link>
    <router-link to="/profile">
      <i class="fa-solid fa-user"></i>
      <p class="profile-name">{{ user.fullname }}</p>
    </router-link>
  </nav> -->
  <div class="navbar">
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="about">About</a></li>
      <li><a href="products">Products</a></li>
      <li><a href="register">Register</a></li>
      <li><a href="login">Login</a></li>
      <li><a href="admin">Admin</a></li>
      <li><a href="contact">Contact</a></li>
      <!-- <li>
        <a href="profile"> <i class="fa-solid fa-user"></i></a>
      </li> -->
      <!-- <li v-if="user">
        <a href="profile"></a>
          <i class="fa-solid fa-user"></i><P>{{ user.fullname }}</P></a
        >
      </li> -->

      <!-- <div v-if="user">
        <router-link to="/profile">
          <p class="profile-name">{{ user.fullname }}</p>
        </router-link>
      </div> -->
    </ul>
  </div>
</template>
<script>
export default {
  name: "navbar",
};
</script>
<style>
.navbar {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  margin-top: 3rem;
  margin-bottom: 2rem;
}

li {
  display: inline;
}
a {
  padding: 2rem;
  color: black;
  background-color: white;
  font-size: 1rem;
  font-family: "Bangers";
}

li a:hover {
  background-color: rgb(40, 54, 24);
}
li a.active {
  background-color: rgb(40, 54, 24);
  color: white;
}

li a:hover:not(.active) {
  background-color: #555;
  color: white;
}
i {
  font-size: 1.5rem;
  background-color: white;
  padding-right: 2rem;
}
i:hover {
  background-color: rgb(40, 54, 24);
}
</style>
