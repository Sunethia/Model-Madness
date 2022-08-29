import { createStore } from "vuex";
import router from "../router/index";
export default createStore({
  state: {
    users: null,
    user: null,
    token: null,
    products: null,
    product: null,
  },
  getters: {},
  mutations: {
    settoken: (state, token) => {
      state.token = token;
    },
    setusers: (state, users) => {
      state.users = users;
    },
    setuser: (state, user) => {
      state.user = user;
    },
    setproducts: (state, products) => {
      state.products = products;
    },
    setproduct: (state, product) => {
      state.product = product;
    },
  },
  actions: {
    logout: async (context) => {
      context.commit("setusers", null);
      window.location = "/login";
    },
    login: async (context, payload) => {
      let res = await fetch("https://model-madness.herokuapp.com/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: payload.email,
          password: payload.password,
        }),
      });
      let data = await res.json();
      console.log(data);
      if (data.token) {
        context.commit("settoken", data.token);
        // Verify token
        //
        fetch("https://model-madness.herokuapp.com/users/users/verify", {
          headers: {
            "Content-Type": "application/json",
            "x-auth-token": data.token,
          },
        })
          .then((res) => res.json())
          .then((data) => {
            context.commit("setuser", data.user);
            router.push("/products");
          });
      } else {
        alert(data);
      }
    },
    register: async (context, data) => {
      const {
      fullname,
        email,
        password,
        userrole,
        phone_number,
        join_date,
        cart
      } = data;
      fetch("https://model-madness.herokuapp.com/users/register", {
        method: "POST",
        body: JSON.stringify({
          fullname: fullname,
          email: email,
          password: password,
          userrole:userrole,
          phone_number: phone_number,
          join_date:join_date,
         cart
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => context.commit("setusers", json));
    },
    getproducts: async (context) => {
      fetch("https://model-madness.herokuapp.com/products")
        .then((res) => res.json())
        .then((products) => context.commit("setproducts", products));
    },
  },
  getproduct: async (context, id) => {
    fetch("https://model-madness.herokuapp.com/products/" + id)
      .then((res) => res.json())
      .then((product) => context.commit("setproduct", product[0]));
  },
  deleteProduct: async (context, id) => {
    fetch("https://model-madness.herokuapp.com/products/" + id, {
      method: "DELETE",
    }).then(() => context.dispatch("getproducts"));
  },
  createProduct: async (context, product) => {
    fetch("https://model-madness.herokuapp.com/products/", {
      method: "POST",
      body: JSON.stringify(product),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then(() => context.dispatch("getproducts"));
  },
  updateProduct: async (context, product) => {
    fetch("https://model-madness.herokuapp.com/products/" + product.id, {
      method: "PUT",
      body: JSON.stringify(product),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then(() => context.dispatch("getproducts"));
  },
  modules: {},
});
