<template>
  <div class="navbar">
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="about">About</a></li>
      <li><a href="products">Products</a></li>
      <li><a href="#">About</a></li>
    </ul>
  </div>
</template>
<script>
export default {};
</script>
<style>
.navbar {
  display: flex;
  justify-content: center;
  align-items: center;
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
  color: white;
}
li a:hover {
  background-color: rgb(40, 54, 24);
}
.active {
  background-color: rgb(40, 54, 24);
}
</style>
