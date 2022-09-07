<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <i class="fa-brands fa-twitter"
          ><a href="https://twitter.com/?lang=en"></a>--Model_madness</i
        >
        <i class="fa-brands fa-facebook"
          ><a href="https://www.facebook.com/"></a>--Model-madness</i
        >
        <i class="fa-regular fa-at"
          ><a href="https://support.google.com/mail/answer/56256?hl=en"></a
          >--modelmadness@gmail.com</i
        >
        <i class="fa-brands fa-linkedin-in"
          ><a href="https://www.linkedin.com/home"></a>--model@madness</i
        >
        <i class="fa-solid fa-phone">--021 952 8653</i>
      </div>
      <div class="col">
        <h1>Location</h1>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d105863.9319737363!2d18.504625972926313!3d-33.98616640767917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d-33.9551344!2d18.6531911!4m5!1s0x1dcc433bedd50e81%3A0x9c746d268c8e0ad9!2slifechoices!3m2!1d-33.985664299999996!2d18.4926986!5e0!3m2!1sen!2sza!4v1662384318878!5m2!1sen!2sza"
          width="600"
          height="450"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
i {
  display: flex;
  align-items: flex-start;
  margin-right: 2rem;
  background-color: rgb(40, 75, 99);
  color: white;
  margin-left: 2rem;
}
h1 {
  color: white;
  padding-top: 10rem;
  margin-right: 30rem;
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
}
</style>
