<template>
  <div class="container">
    <div class="row my-2">
      <div class="col-md">
        <router-link to="/registerUser">
          <button class="btn btn-primary">Add New User</button>
        </router-link>
      </div>
      <div class="col-md">
        <router-link to="/addProducts">
          <button class="btn btn-primary">Add New Product</button>
        </router-link>
      </div>
    </div>
    <h2 class="display-2">Users</h2>
    <div class="row table-responsive-md setTableOff">
      <table class="table table-hover">
        <thead class="bg-gradient">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Firstname</th>
            <th scope="col">Email</th>
            <th scope="col">User Role</th>
            <th scope="col">Phone-number</th>
            <th scope="col">Join-date</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, index) in users" :key="index">
            <td data-title="id">{{ user.id }}</td>
            <td data-title="Firstname">{{ user.fullname }}</td>
            <td data-title="Join date">{{ user.join_date }}</td>
            <td data-title="Email">{{ user.email }}</td>
            <td data-title="User Role">{{ user.userrole }}</td>
            <td data-title="Phonenumber">{{ user.phone_number }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <h2 class="display-2">Products</h2>
    <div class="row table-responsive-md setTableOff">
      <table class="table table-hover">
        <thead class="bg-gradient">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">Category</th>

            <th scope="col">Description</th>
            <th scope="col">ImgURL</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(prod, index) in products" :key="index">
            <td data-title="ID">{{ prod.id }}</td>
            <td data-title="Title">{{ prod.prodtitle }}</td>
            <td data-title="Category">{{ prod.category }}</td>
            <td data-title="Description">{{ prod.description }}</td>
            <td data-title="Image">
              <img
                class="img-thumbnail sameSize"
                :src="prod.imgURL"
                :alt="prod.prodtitle"
              />
            </td>
            <td data-title="Price">R {{ prod.price }}</td>
            <td data-title="User ID">{{ prod.user_id }}</td>
            <td data-title="Quantity">{{ prod.quantity }}</td>
           
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    users() {
      return this.$store.state.users;
    },
    products() {
      return this.$store.state.products;
    },
  },
  mounted() {
    this.$store.dispatch("fetchusers");
    this.$store.dispatch("fetchproducts ");
  },
  methods: {
    registerAuser() {},
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