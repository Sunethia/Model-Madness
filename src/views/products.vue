<template>
  <form class="filters">
    <button @click="sort">Sort</button>
    <select name="" class="inp" v-model="category">
      <label>Sort By Catergory</label>
      <option value="All" selected>All</option>
      <option value="Tops">Tops</option>
      <option value="dresses">Dresses</option>
      <option value="bottoms">Bottoms</option>
      <option value="shoes">Shoes</option>
      <option value="Accessories">Accessories</option>
    </select>
    <input type="text" v-model="search" placeholder="search..." class="inp" />
    {{ search }}
    <router-link to="/profile">
      <div class="user" v-if="user">
        <i class="fa-solid fa-user"></i>
        <div class="profile-name">
          <h2>{{ user.full_name }}</h2>
        </div>
      </div>
    </router-link>
    <router-link to="/cart">
      <div class="cart">
        <i class="fa-solid fa-cart-shopping"></i>
        <h2>Cart</h2>
      </div>
    </router-link>
  </form>
  <div class="prods">
    <productcard
      v-for="product in products"
      :key="product.id"
      :product="product"
      class="card"
    />
  </div>
</template>
<script>
import productcard from "../components/productcard";
export default {
  data() {
    return {
      search: "",
      price: "All",
      category: "All",
    };
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
    user() {
      return this.$store.state.user;
    },
  },
  methods: {
    sort() {
      this.$store.commit("sortByPrice");
    },
    filteredproducts() {
      return this.$store.state.products?.filter((product) => {
        let isMatch = true;
        if (!product.name.toLowerCase().includes(this.search.toLowerCase()))
          isMatch = false;
        if (this.category !== "All" && product.category !== this.category)
          isMatch = false;
        return isMatch;
      });
    },
  },
  methods: {
    sortPrice() {
      this.$store.commit("sortproductsByPrice");
    },
  },
  components: { productcard },
  mounted() {
    this.$store.dispatch("getproducts");
    // this.$store.dispatch("getUser");
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