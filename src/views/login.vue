<template>
  <div class="container">
    <form @submit.prevent="login">
      <h3>Log in:</h3>
      <input
        class="form-input"
        type="text"
        name="email"
        required
        v-model="email"
      />
      <input
        class="form-input"
        type="text"
        name="password"
        required
        v-model="password"
      />
      <input class="form-btn" type="submit" value="Login" />
      <hr />
      <!-- <div class="form-extra">
        <router-link to="/register"><p>Register</p></router-link>
        <router-link to="/reset"><p>Reset-Psw</p></router-link>
      </div> -->
    </form>
    <div v-if="user">Welcome {{ user.full_name }}</div>
  </div>
</template>
<script>
export default {
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      this.$store.dispatch("login", {
        email: this.email,
        password: this.password,
      });
    },
  },
};
</script>
<style scoped>
.container {
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
form {
  border: 1px solid black;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 300px;
  gap: 10px;
}
.form-input {
  width: 200px;
  border: 1px solid lightgray;
  border-radius: 5px;
  height: 30px;
}
.form-btn {
  width: 208px;
  border: none;
  border-radius: 5px;
  height: 30px;
}
.form-extra {
  display: flex;
  gap: 10px;
}
.form-extra p {
  width: 100px;
  border: none;
  border-radius: 5px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.form-extra a {
  text-decoration: none;
  color: black;
}
h3 {
  font-weight: bold;
  font-size: 1.4rem;
}
hr {
  width: 90%;
}

</style>
