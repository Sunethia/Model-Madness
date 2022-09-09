<template>
  <div class="footer">
    <div class="container">
      <!-- <div class="row">
        <div class="col"> -->
      <a href="https://twitter.com/?lang=en">
        <i class="fa-brands fa-twitter">--Model_madness</i></a
      >
      <a href="https://www.facebook.com/">
        <i class="fa-brands fa-facebook">--Model-madness</i></a
      >
      <a href="https://support.google.com/mail/answer/56256?hl=en">
        <i class="fa-regular fa-at">--modelmadness@gmail.com</i></a
      >
      <a href="https://www.linkedin.com/home">
        <i class="fa-brands fa-linkedin-in">--model@madness</i></a
      >
      <i class="fa-solid fa-phone">--021 952 8653</i>

      <h4>
        Model-madness Copyright © 2022 - All rights reserved || Designed By:
        Sunethia
      </h4>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
i {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 2rem;
  background-color: rgb(40, 75, 99);
  color: white;
  margin-left: 2rem;
  font-size: 1rem;
}
i:hover {
  background-color: black;
}
h1 {
  color: white;
  padding-top: 10rem;
  margin-right: 30rem;
  margin-left: 20rem;
}
.h4 {
  display: inline;
}
.row {
  display: flex;
  width: 100%;
}
.col {
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
a {
  background-color: rgb(40, 75, 99);
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  display: inline;
}
h4 {
  color: white;
  font-family: "Combo";
  margin-top: 2rem;
}
div.col {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
}

/* media queries */
@media (min-width: 800px) and (max-width: 990px) {
  .iframe {
    width: 150px;
    height: 150px;
  }
  .h1 {
    margin-left: 10rem;
  }
}
</style>
