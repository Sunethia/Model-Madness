<template>
  <div class="login container">
    <form @submit="login">
      <h1>Login</h1>
      <label for="email" class="form-label">Email</label>
      <input
        type="email"
        @click="reset"
        v-model="email"
        required
        class="form-control"
      />
      <label for="password" @click="reset" class="form-label">Password</label>
      <input type="password" class="form-control" required v-model="password" />
      <div v-if="clicked">
        <div v-if="user">
          <p>Successfully logged in</p>
        </div>
        <div v-else>
          <p>Checking...</p>
        </div>
      </div>
      <div v-else>
        <button class="btn btn-dark" type="submit">Login</button>
      </div>
    </form>
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
  height: 86.5vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
form {
  box-shadow: 5px 5px 5px 5px black;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30vw;
  height: 70vh;
  gap: 10px;
  background: rgb(40, 75, 99);
}
.form-input {
  width: 150px;
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
.form-extra p {
  width: 100px;
  border: none;
  border-radius: 5px;
  height: 30px;
  background: rgb(40, 75, 99);
  display: flex;
  justify-content: center;
  align-items: center;
}
.form-extra a {
  text-decoration: none;
  color: black;
}
h3 {
  color: white;
  font-weight: bold;
  font-size: 1.4rem;
}
hr {
  width: 90%;
}
.welcome {
  color: white;
  font-weight: bold;
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.form-control {
  background-color: rgb(40, 75, 99);
}
</style>
<!-- 9:01 register 9:02
<template>
  <div class="container">
    <form @submit.prevent="register">
      <h3>Register</h3>
      <input
        class="form-input"
        type="text"
        name="full_name"
        required
        v-model="full_name"
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
        class="form-input"
        type="text"
        name="image"
        required
        v-model="image"
        placeholder="Image:"
      />
      <input
        class="user-type"
        type="text"
        name="user_type"
        required
        v-model="user_type"
        readonly
      />
      <input class="form-btn" type="submit" value="Register" />
      <hr />
      <div class="form-extra">
        <router-link to="/">Already have an Account</router-link>
      </div>
    </form>
    <div v-if="user">
      Welcome {{ user.full_name }}, Your sign up was successsul
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
      full_name: "",
      email: "",
      password: "",
      user_type: "user",
      image: "",
    };
  },
  methods: {
    register() {
      this.$store.dispatch("register", {
        full_name: this.full_name,
        email: this.email,
        password: this.password,
        user_type: this.user_type,
        image: this.image,
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
  box-shadow: 5px 5px 5px 5px lightsalmon;
  background: salmon;
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
</style> -->
