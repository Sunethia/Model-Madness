<template>
  <button @click="change1">tops</button>
  <!-- <div v-if="user">
    <router-link to="/profile">
      <p class="profile-name">{{ user.fullname }}</p>
    </router-link>
  </div> -->
  <div v-if="products" class="prods">
    <productsCard
      class="card"
      v-for="product of filteredproducts"
      :key="product.id"
      :product="product"
    />
  </div>
</template>
<script>
import productsCard from "../components/productsCard.vue";
export default {
  data() {
    return {
      search: "",
      // products: [],
    };
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
    user() {
      return this.$store.state.user;
    },
    filteredproducts() {
      return this.$store.state.products?.filter((product) => {
        return product.category
          ?.toLowerCase()
          .includes(this.search.toLowerCase());
      });
    },
  },
  components: { productsCard },
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
  width: 300px;
  height: 400px;
}
.image {
  height: 170px;
  width: 200px;
}
/* .profile {
  border: 1px solid black;
  height: 500px;
}
.profile-name {
  border: 1px solid white;
  font-size: 2rem;
} */
</style>
