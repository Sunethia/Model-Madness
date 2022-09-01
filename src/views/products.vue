<template>
  <button @click="change1">tops</button>
  <div v-if="products" class="prods">
    <productsCard
      class="card"
      v-for="product in filteredproducts"
      :key="product.id"
      :product="product"
    />
  </div>
</template>
<script>
import productsCard from "../components/productsCard.vue";
export default {
  components: { productsCard },
  data() {
    return {
      search: "",
      // products: [],
    };
  },
  computed: {
    filteredproducts() {
      return this.$store.state.products?.filter((product) => {
        return product.category
          ?.toLowerCase()
          .includes(this.search.toLowerCase());
      });
    },
    products() {
      return this.$store.state.products;
    },
  },
  mounted() {
    this.$store.dispatch("getproducts");
  },
  methods: {
    Change1() {
      this.search = "tops";
    },
    Change2() {
      this.search = "bottoms";
    },
    Change3() {
      this.search = "accessories";
    },
  },
};
</script>
<style scoped>
h1 {
  font-size: 5rem;
  color: black;
  
}
.prods {
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  margin-inline: 7%;
  gap: 20px;
  justify-content: center;
  align-items: center;
  font-size: 1.7rem;
  font-weight: bold;
}
.prods a {
  text-decoration: none;
  color: black;
}
.image {
  height: 170px;
  width: 200px;
}
.profile {
  border: 1px solid black;
  height: 500px;
}
</style>
