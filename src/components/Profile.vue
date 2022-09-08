<template>
  <div>
    <div v-if="user">
      <router-link to="/profile">
        <p class="profile-name">{{ user.fullname }}</p>
        <p class="email">{{ user.email }}</p>
        <p class="userrole">{{ user.userrole }}</p>
        <p class="phonenumber">{{ user.phone_number }}</p>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    user() {
      return this.$store.state.user;
    },
    mounted() {
      this.$store.dispatch("getuser");
    },
  },
};
</script>
<style>
.profile {
  border: 1px solid black;
  height: 500px;
}
.profile-name {
  border: 1px solid white;
  font-size: 2rem;
}
</style>
