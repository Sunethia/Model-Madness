<template>

  <div class="home">
    <div class="things">
      <ul>
        <li>New In</li>

        <li>Accessories</li>

        <li>Tops</li>

        <li>Bottoms</li>

        <li>Dresses</li>

        <li>Shoes</li>

        <li>Underwear</li>
      </ul>
    </div>
    <div class="images">
      
    </div>
  </div>
</template>

<script></script>
<style scoped>
.home {
  background-color: #bc6c25;
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #bc6c25;
}

li {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  display: inline;
  margin: 0 1% 0 1%;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li a:hover {
  background-color: #111;
}
</style>
