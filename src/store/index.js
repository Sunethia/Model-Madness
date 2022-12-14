import { createStore } from "vuex";
import router from "../router/index";
export default createStore({
  state: {
    users: null,
    user: null || JSON.parse(localStorage.getItem("users")),
    token: null,
    products: null,
    product: null,
    cart: [],
  },
  getters: {},
  mutations: {
    setCart(state, cart) {
      state.cart = cart;
    },
    updateCart: (state, product) => {
      state.cart.push(product);
    },
    removeFromCart: (state, cart) => {
      state.cart = cart;
    },
    settoken: (state, token) => {
      state.token = token;
    },
    setusers: (state, users) => {
      state.users = users;
    },
    setuser: (state, user) => {
      state.user = user;
      localStorage.setItem("users", JSON.stringify(user));
    },
    setproducts: (state, products) => {
      state.products = products;
    },
    setproduct: (state, product) => {
      state.product = product;
    },
    Logout(state) {
      (state.user = ""), (state.token = "");
    },
  },
  actions: {
    //users
    getusers: async (context) => {
      fetch("https://model-madness.herokuapp.com/users")
        .then((res) => res.json())
        .then((users) => context.commit("setusers", users));
    },

    //cart
    getcart: (context, id) => {
      if (context.state.user === null) {
        alert("Please Login");
      } else {
        id = context.state.user.user_id;
        fetch("https://model-madness.herokuapp.com/users/" + id + "/cart", {
          // fetch("https://model-madness.herokuapp.com/users/" + id + "/cart", {
          method: "GET",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            "x-auth-token": context.state.token,
          },
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log(data)
            context.commit("setcart", data);
          });
      }
    },

    addTocart: async (context, product, id) => {
      console.log(product.product_id);
      id = context.state.user.user_id;
      // console.log(product);
      await fetch("https://model-madness.herokuapp.com/users/" + id + "/cart", {
        // await fetch("https://model-madness.herokuapp.com/users/" + id + "/cart", {
        method: "POST",
        body: JSON.stringify({
          product_id: product.product_id,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          "x-auth-token": context.state.token,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          context.dispatch("getcart", id);
        });
    },
    deleteFromCart: async (context, id) => {
      const newCart = context.state.cart.filter((product) => product.id != id);
      swal({
        title: "Are you sure you want to remove this item?",
        text: "",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          swal("Removed from cart", {
            icon: "success",
          });
        }
      });
      context.commit("removeFromCart", newCart);
    },
    //logout
    logout: async (context) => {
      context.commit("setusers", null);
      window.location = "/login";
    },
    //login
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
            router.push("/products", alert("Successfully Logged In:"));
          });
      } else {
        alert(data);
      }
    },

    //register
    register: async (context, data) => {
      const {
        fullname,
        email,
        password,
        userrole,
        phone_number,
        join_date,
        cart,
      } = data;
      fetch("https://model-madness.herokuapp.com/users/register", {
        method: "POST",
        body: JSON.stringify({
          fullname: fullname,
          email: email,
          password: password,
          userrole: userrole,
          phone_number: phone_number,
          join_date: join_date,
          cart,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => context.commit("setusers", json));
      router.push("/login", alert("Successful"));
    },
    //products
    getproducts: async (context) => {
      fetch("https://model-madness.herokuapp.com/products")
        .then((res) => res.json())
        .then((products) => context.commit("setproducts", products));
    },
    getproduct: async (context, id) => {
      fetch("https://model-madness.herokuapp.com/products/" + id)
        .then((response) => response.json())
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
  },
  sortProductByPrice: (state) => {
    state.products.sort((a, b) => {
      return a.price - b.price;
    });
    if (!state.asc) {
      state.products.reverse();
    }
    state.asc = !state.asc;
  },

  modules: {},
});
