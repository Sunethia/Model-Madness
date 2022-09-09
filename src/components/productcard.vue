<template>
  <router-link
    class="productcard"
    :to="{ name: 'productDetails', params: { id: product.id } }"
  >
    <div class="card">
      <img class="product_imgURL" :src="product.imgURL" />
      <p class="product_title">{{ product.title }}</p>
      <p class="product_price">{{ product.price }}</p>
    </div>
  </router-link>
</template>
<script>
export default {
  props: ["product"],
  computed: {
    products() {
      return this.$store.state.product;
    },
  },

  mounted() {
    this.$store.dispatch("getproduct");
    // this.$store.dispatch("getUser");
  },
};
</script>
<style scoped>
.product_box {
  border: 1px solid black;
  width: 90%;
}
.card {
  display: flex;
  margin-bottom: 5rem;
  background-color: rgb(40, 75, 99);
}
.card:hover {
  background: black;
  color: white;
}
.card img {
  border: 1px solid black;
  width: 30%;
  object-fit: contain;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px;
  width: 18.5rem;
  height: 20rem;
}
.product_img {
  border: 1px solid black;
  width: 100%;
}
.product_title {
  border: 1px solid black;
  width: 18.5rem;
}
.product_price {
  border: 1px solid black;
  width: 30%;
}
</style>