<template>
  <input type="text" v-model="search" placeholder="Search by category" />
  <form @submit="createProduct()">
    <input type="text" v-model="title" placeholder="title" />
    <input type="text" v-model="price" placeholder="price" />
    <input type="text" v-model="image" placeholder="imgURL" />
    <input type="text" v-model="category" placeholder="category" />
    <button type="submit">ADD PRODUCT</button>
  </form>
  <table class="table table-striped">
    <tr>
      <th>#</th>
      <th>title</th>
      <th>price</th>
      <th>image</th>
      <th>category</th>
      <th>Delete</th>
    </tr>
    <adminTables
      v-for="product in filteredproducts"
      :key="product.id"
      :product="product"
    ></adminTables>
  </table>
</template>
<script>
import adminTables from "../components/adminTable.vue";
export default {
  computed: {
    filteredproducts() {
      return this.$store.state.products?.filter((product) => {
        return product.category
          ?.toLowerCase()
          .includes(this.search.toLowerCase());
      });
    },
    products() {
      return this.$store.state.product;
    },
  },
  components: { adminTable },
  data() {
    return {
      products: null,
      search: "",
      title: "",
      price: "",
      image: "",
      category: "",
    };
  },
  methods: {
    createProduct() {
      this.$store.dispatch("Addproduct", {
        title: this.title,
        price: this.price,
        image: this.image,
        category: this.category,
      });
    },
  },
  mounted() {
    this.$store.dispatch("getproducts");
  },
};
</script>
<style></style>
