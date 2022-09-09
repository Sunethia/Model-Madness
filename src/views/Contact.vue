<template>
  <div class="contact">
    <h1>Contact</h1>
    <form action="https://formspree.io/f/xvolegyo" method="POST">
      <label>
        <textarea
          class="input"
          name="name"
          placeholder="Your name goes here..."
        ></textarea>
      </label>
      <label>
        <input
          class="input"
          type="email"
          name="email"
          placeholder="Your email goes here..."
        />
      </label>
      <label>
        <textarea
          class="input"
          name="message"
          placeholder="Your message goes here"
        ></textarea>
      </label>
      <!-- your other form fields go here -->
      <button
        type="submit"
        style="
          background-color: rgb(40, 75, 99);
          border: none;
          font-size: 5rem;
          font-family: 'Rampart One';
          color: white;
        "
      >
        Send
      </button>
    </form>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
h1 {
  font-size: 5rem;
  font-family: "Rampart One";
  color: white;
  padding-bottom: 3rem;
  padding-top: 3rem;
  display: flex;
  align-content: center;
  justify-content: center;
}
.title {
  margin-bottom: 10rem;
  padding-top: 5rem;
  font-family: Rampart One;
  font-size: 5rem;
}
button {
  color: white;
}
form {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;
}
textarea {
  width: 30rem;
  height: 2rem;
  background-color: rgb(40, 75, 99);
}
input {
  width: 30rem;
  height: 2rem;
  background-color: rgb(40, 75, 99);
}

@media (min-width: 300px) and (max-width: 520px) {
  .input {
    width: 400px;
  }
}
@media (min-width: 300px) and (max-width: 440px) {
  .input {
    width: 350px;
  }
  h1 {
    font-size: 3.5rem;
  }
}
@media (min-width: 300px) and (max-width: 388px) {
  .input {
    width: 300px;
  }
  h1 {
    font-size: 2rem;
  }
}
@media (min-width: 300px) and (max-width: 388px) {
  .input {
    width: 250px;
  }
  h1 {
    font-size: 2rem;
    margin-left: 1rem;
  }
  .button {
    font-size:2rem;
  }
}
</style>
