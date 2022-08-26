<template>
  <router-link
    class="product_box"
    :to="{ name: 'productDetails', params: { id: product.id } }"
  >
    <div class="card">
      <img class="product_imgURL" :src="product.imgURL" />
      <p class="product_title">{{ product.title }}</p>
    </div>
  </router-link>
</template>
<script>
export default {
  props: ["product"],
};
</script>
<style>
.card {
  box-shadow: 5px 5px 5px 5px lightsalmon;
  border-radius: 10px;
  width: 300px;
  height: 300px;
}
.product_imgURL {
  height: 200px;
  width: 200px;
}
.product_price {
  margin: none;
}
</style>
