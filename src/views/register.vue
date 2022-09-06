<template>
  <div class="container">
    <form @submit.prevent="register">
      <h3>Register</h3>
      <input
        class="form-input"
        type="text"
        name="fullname"
        required
        v-model="fullname"
        placeholder="Full Name"
      />
      <input
        class="form-input"
        type="text"
        name="email"
        required
        v-model="email"
        placeholder="Email:"
      />
      <input
        class="form-input"
        type="text"
        name="password"
        required
        v-model="password"
        placeholder="Password:"
      />

      <input
        class="userrole"
        type="text"
        name="userrole"
        required
        v-model="userrole"
        readonly
        placeholder="User Role:"
      />
      <input
        class="phone_number"
        type="text"
        name="phone_number"
        required
        v-model="phone_number"
        placeholder="Phone Number"
      />
      <input
        class="join_date"
        type="text"
        name="join_date"
        required
        v-model="join_date"
        placeholder="Join Date:"
      />

      <!-- <input
        class="cart"
        type="text"
        name="cart"
        required
        v-model="cart"
        placeholder="Cart"
      /> -->
      <input class="form-btn" type="submit" value="Register" />
      <!-- <hr />
      <div class="form-extra">
        <router-link to="/">Already have an Account</router-link>
      </div> -->
    </form>
    <div v-if="user">
      Welcome {{ user.fullname }}, Your sign up was successsul
    </div>
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
      fullname: "",
      email: "",
      password: "",
      userrole: "",
      phone_number: "",
      join_date: "",
    };
  },
  methods: {
    register() {
      this.$store.dispatch("register", {
        fullname: this.fullname,
        email: this.email,
        password: this.password,
        userrole: this.userrole,
        phone_number: this.phone_number,
        join_date: this.join_date,
      });
    },
  },
};
</script>
<style scoped>
.container {
  height: 89vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
form {
  border-radius: 10px;
  box-shadow: 5px 5px 5px 5px black;
  background: rgb(40, 75, 99);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 300px;
  height: 400px;
}
.form-input {
  width: 200px;
  border: none;
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
.form-extra {
  width: 200px;
  border: none;
  border-radius: 5px;
  height: 25px;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
}
.form-extra a {
  text-decoration: none;
  color: black;
}
.form-section {
  border-radius: 10px;
  box-shadow: 5px 5px 5px 5px white;
  background: salmon;
  width: 90vw;
  height: 100vh;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
h3 {
  color: white;
  font-weight: bold;
  font-size: 1.4rem;
}
hr {
  width: 90%;
}
.user-type {
  display: none;
}
a {
  margin-top: 5rem;
}
</style>
