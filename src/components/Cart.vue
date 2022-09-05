<template>
  <body>
    <div class="wrapper">
      <div class="box">
        <div class="content">
          <div class="card" v-for="product in cartproducts" :key="product.id">
            <img :src="product.imgURL" class="mb-2" alt="img" />
            <div class="cart-content">
              <h3 class="ms-5">{{ product.descriptions }}</h3>
              <br />
              <p class="d-flex justify-content- gap-3">
                <span class="ms-5">Price: R{{ product.price }}</span>
              </p>
              <br />
              <button @click="deleteFromCart(product.id)" class="button-18">
                <i class="fa fa-trash"></i>
                <span class="btn2">Remove</span>
              </button>
              <div class="right-bar">
                <hr />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card">
      <h5>Cash in</h5>
      <div class="cart-details">
        <div class="row">
          <p>Subtotal:</p>
          <p>Shipping:</p>
        </div>
        <div class="row">
          <p>R{{ calculatePrice }}</p>
          <p>Free shipping</p>
        </div>
      </div>
      <router-link to="/checkout">
        <button type="submit" class="button-18">Checkout</button>
      </router-link>
    </div>
  </body>
</template>
