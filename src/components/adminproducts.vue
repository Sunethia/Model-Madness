<template>
  <tr>
    <td>{{ product.id }}</td>
    <td>{{ product.tilte }}</td>
    <td>{{ product.category }}</td>
    <td>{{ product.description }}</td>
    <td><img :src="product.imgURL" class="img-fluid" id="admin-img" /></td>
    <td>{{ product.price }}</td>
  </tr>
</template>
<script>
export default {
  props: ["product"],
};
</script>
<style>
#admin-img {
  height: 6em;
  width: 6em;
}

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
