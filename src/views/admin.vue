<template>
  <div class="container">
    <div class="row">
      <div v-if="products" class="prods">
        <adminproducts
          v-for="product in products"
          :key="product.id"
          :product="product"
        />
        <router-link to="/AddProduct">add product</router-link>
      </div>
      <div v-if="users" class="prods">
        <adminusers v-for="user in users" :key="user.id" :user="user" />
      </div>
    </div>
  </div>
</template>
<script>
import adminproducts from "../components/adminproducts.vue";
import adminusers from "../components/adminusers.vue";
export default {
  computed: {
    products() {
      return this.$store.state.products;
    },
    users() {
      return this.$store.state.users;
    },
  },
  components: { adminusers, adminproducts },
  mounted() {
    this.$store.dispatch("getproducts");
    this.$store.dispatch("getusers");
  },
};
</script>
