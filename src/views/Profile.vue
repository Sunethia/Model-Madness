<template>
  <h1>Profile</h1>
  <div v-if="user">
    {{ user.fullname }}
  </div>
</template>

<script>
export default {
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
};
</script>

<style></style>
