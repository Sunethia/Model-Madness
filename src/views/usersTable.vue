<template>
  <div>
    <table class="table table-striped">
      <router-link :to="{ name: 'admin' }">Admin Table</router-link>
      <tr>
        <th>#</th>
        <th>Full Name</th>
        <th>Email</th>
        <th>Password</th>
        <th>User Role</th>
        <th>Phone</th>
        <th>Join Date</th>
        <th>Cart</th>
      </tr>
      <adminusers v-for="user in users" :key="user.id" :user="user" />
    </table>
  </div>
</template>
<script>
import adminusers from "../components/adminusers.vue";
export default {
  components: { adminusers },

  computed: {
    
    users() {
      return this.$store.state.users;
    },
  },
 
  mounted() {
   
    this.$store.dispatch("getusers");
  },
};
</script>
<style></style>