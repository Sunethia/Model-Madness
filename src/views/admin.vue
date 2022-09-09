<template>
  <div>
    <div class="container">
      <table class="table table-striped">
        <router-link :to="{ name: 'user table' }">Users Table</router-link>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Category</th>
          <th>Description</th>
          <th>Image</th>
          <th>Price</th>
          <th>Title</th>
        </tr>
        <adminproducts
          v-for="product in products"
          :key="product.id"
          :product="product"
        />
      </table>
    </div>
  </div>
</template>
<script>
import adminproducts from "../components/adminproducts.vue";
export default {
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
  components: { adminproducts },
  mounted() {
    this.$store.dispatch("getproducts");
  },
};
</script>
<style scoped>
.table table-striped {
  margin-top: 5rem;
}
</style>
