<template>
  <!-- <router-link
    class="product_box"
    :to="{ name: 'productDetails', params: { id: user.id } }"
  > -->
  <div class="card">
    <img class="user_imgURL" :src="user.email" />
    <p class="product_title">{{ user.fullname }}</p>
  </div>
  <!-- </router-link> -->
</template>
<script>
export default {
  props: ["user"],
};
</script>
<style>
.card {
  box-shadow: 5px 5px 5px 5px black;
  border-radius: 10px;
  width: 250px;
  height: 300px;
}
.card:hover {
  background-color: black;
}
.product_imgURL {
  height: 200px;
  width: 200px;
}
.product_price {
  margin: none;
}
p {
  background-color: white;
}
</style>
