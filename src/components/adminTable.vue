<template>
  <!-- table data -->
  <tr>
    <td>{{ product.id }}</td>
    <td>{{ product.title }}</td>
    <td>R{{ product.price }}</td>
    <td><img :src="product.image" class="img-fluid" id="admin-img" /></td>
    <td>{{ product.category }}</td>
    <td>
      <i @click="deleteproduct(product.id)" class="fa-solid fa-trash-can"></i>
    </td>
  </tr>
</template>
<script>
export default {
  props: ["product"],
  methods: {
    deleteproduct(id) {
      return this.$store.dispatch("Deleteproduct", id);
    },
  },
};
</script>
<style>
#admin-img {
  height: 6em;
  width: 6em;
}
tr,
td,
th {
  border: 2px solid black;
}
</style>
