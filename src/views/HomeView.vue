<template>
  <div class="home">
    <div class="things">
      <ul>
        <li><a href="">New In</a></li>

        <li><a href="">Accessories</a></li>

        <li><a href="">Tops</a></li>

        <li><a href="">Bottoms</a></li>

        <li><a href="">Dresses</a></li>

        <li><a href="">Shoes</a></li>

        <li><a href="">Underwear</a></li>
      </ul>
    </div>
    <div class="best">
      <h1>Best Sellers for Last Week</h1>
      <div class="row">
        <div class="col">
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img
                  src="../assets/browndress.webp"
                  alt="dress"
                  style="width: 300px; height: 300px"
                />
              </div>
              <div class="flip-card-back">
                <img
                  src="../assets/browndress2.webp"
                  alt="dress"
                  style="width: 300px; height: 300px"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img
                  src="../assets/pinkdress.webp"
                  alt="dress"
                  style="width: 300px; height: 300px"
                />
              </div>
              <div class="flip-card-back">
                <img
                  src="../assets/pinkdress2.webp"
                  alt="dress"
                  style="width: 300px; height: 300px"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img
                  src="../assets/bluedress.webp"
                  alt="Avatar"
                  style="width: 300px; height: 300px"
                />
              </div>
              <div class="flip-card-back">
                <img
                  src="../assets/bluedress2.webp"
                  alt="dress"
                  style="width: 300px; height: 300px"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img
                  src="../assets/silverdress.webp"
                  alt="Avatar"
                  style="width: 300px; height: 300px"
                />
              </div>
              <div class="flip-card-back">
                <img
                  src="../assets/silverdress2.webp"
                  alt="dress"
                  style="width: 300px; height: 300px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="featured">
      <div class="col"></div>
      <div class="col"></div>
    </div>
  </div>
</template>

<script></script>
<style scoped>
.home {
  background-color: #bc6c25;
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #bc6c25;
}

li {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  display: inline;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  display: inline;
}

li a:hover {
  background-color: rgb(40, 54, 24);
}
a {
  display: flex;
  justify-content: center;
  align-items: center;
}

h1 {
  color: white;
  font-family: "PT Sans Narrow", sans-serif;
}
/* Flip card css */
.flip-card {
  background-color: transparent;
  width: 300px;
  height: 200px;
  border: 1px 1px 1px solid #dab49d;
  perspective: 1000px; /* Remove this if you don't want the 3D effect */
}

/* This container is needed to position the front and back side */
.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

/* Do an horizontal flip when you move the mouse over the flip box container */
.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

/* Position the front and back side */
.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
}

/* Style the front side (fallback if image is missing) */
.flip-card-front {
  background-color: #bbb;
  color: black;
}

/* Style the back side */
.flip-card-back {
  background-color: #dab49d;
  color: white;
  transform: rotateY(180deg);
}
/* end of flip card */
</style>
