<template>
  <div class="home">
    <h1>Welcome to Model-madness!</h1>
    <div class="best">
      <h1>Best Sellers for Last Week</h1>
      <div class="row">
        <div class="col">
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img
                  src="../assets/browndress.webp"
                  class="dress"
                  style="width: 300px; height: 300px"
                />
              </div>
              <div class="flip-card-back">
                <img
                  src="../assets/browndress2.webp"
                  class="dress"
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
                  src="../assets/cap.webp"
                  class="cap"
                  style="width: 300px; height: 300px"
                />
              </div>
              <div class="flip-card-back">
                <img
                  src="../assets/cap2.webp"
                  class="cap"
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
                  src="../assets/highwaist.webp"
                  class="jean"
                  style="width: 300px; height: 300px"
                />
              </div>
              <div class="flip-card-back">
                <img
                  src="../assets/highwaist2.webp"
                  class="jean"
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
                  src="../assets/top.webp"
                  class="top"
                  style="width: 300px; height: 300px"
                />
              </div>
              <div class="flip-card-back">
                <img
                  src="../assets/top2.webp"
                  class="top"
                  style="width: 300px; height: 300px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="sale">
      <div class="row">
        <div class="col">
          <div class="card" style="width: 30rem">
            <img
              src="../assets/bluejersey.webp"
              class="card-img-top"
              alt="sale"
            />
            <div class="card-body">
              <h5 class="card-title">SALE!</h5>
              <p class="card-text">Sale on all cardigans From R100</p>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="card" style="width: 30rem">
            <img
              src="../assets/browndressboobtube.webp"
              class="card-img-top"
              alt="sale"
            />
            <div class="card-body">
              <h5 class="card-title">SALE!</h5>
              <p class="card-text">Sale on all day basics From R100</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="pictures">
        <div class="row">
          <div class="col">
            <img src="../assets/phonecases.webp" class="casses" />
          </div>
          <div class="col"><h2>Phonecases Range Launching soon!</h2></div>
        </div>
      </div>
    </div>
    <div class="stylegallery">
      <h1>Style Gallery</h1>
      <div class="row">
        <div class="col">
          <img src="../assets/style1.webp" class="style" />
        </div>
        <div class="col">
          <img src="../assets/style2.webp" class="style" />
        </div>
        <div class="col"><img src="../assets/style3.webp" class="style" /></div>
        <div class="col"><img src="../assets/style4.webp" class="style" /></div>
        <div class="col"><img src="../assets/style5.webp" class="style" /></div>
      </div>
    </div>
  </div>
</template>

<script></script>
<style scoped>
.home {
  background-color: rgb(40, 75, 99);
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: rgb(40, 75, 99);
  margin-bottom: 5rem;
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
  background-color: rgb(40, 75, 99);
}

li a:hover {
  background-color: rgb(40, 54, 24);
}
a {
  display: flex;
  justify-content: center;
  align-items: center;
}
.card {
  margin-bottom: 3rem;
}
.card-body {
  height: 15rem;
}

h1 {
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-family: "Arsenal";

  margin-left: 25rem;
}
h2 {
  color: white;
  font-family: "Arsenal";
  margin-top: 15rem;
}
.best {
  margin-bottom: 200px;
}
.stylegallery.row {
  display: flex;
}
.col-img {
  height: 25rem;
  width: 25rem;
  box-shadow: 2px 2px 2px 2px black;
}
.casses {
  width: 40rem;
  box-shadow: 5px 5px 5px 5px black;
}
.style {
  width: 15rem;
  height: 15rem;
  box-shadow: 5px 5px 5px 5px black;
}
.card-img-top:hover {
  background-color: black;
}
.sale {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;
}
.sale:hover {
  background-color: black;
}

.card-body {
  box-shadow: 5px 5px 5px 5px black;
}
.dress {
  box-shadow: 5px 5px 5px 5px black;
  padding-left: 2rem;
}
.dress:hover {
  background-color: black;
}
.cap {
  box-shadow: 5px 5px 5px 5px black;
}
.cap:hover {
  background-color: black;
}
.jean {
  box-shadow: 5px 5px 5px 5px black;
}
.jean:hover {
  background-color: black;
}
.top {
  box-shadow: 5px 5px 5px 5px black;
}
.top:hover {
  background-color: black;
}
.card-title {
  font-size: 4rem;
  color: white;
}
.card-text {
  font-size: 2rem;
  color: white;
}
/* Flip card css */
.flip-card {
  background-color: transparent;
  width: 15rem;
  height: 15rem;
  border: 1px 1px 1px solid #dab49d;
  /* perspective: 1000px; Remove this if you don't want the 3D effect */
}

/* This container is needed to position the front and back side */
.flip-card-inner {
  position: relative;
  width: 15rem;
  height: 15rem;
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
  width: 15rem;
  height: 15rem;
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
.caro {
  height: 200px;
  width: 200px;
}
.carousel-item {
  height: 486px;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* media queries */
@media (min-width: 1200px) and (max-width: 1286px) {
  .flip-card {
    width: 15rem;
    height: 15rem;
  }
  img.dress {
    width: 5rem;
    height: 10rem;
  }
  img.cap {
    width: 15rem;
    height: 15rem;
  }
  img .jean {
    width: 15rem;
    height: 15rem;
  }
  img.top {
    width: 15rem;
    height: 15rem;
    padding-bottom: 0.1rem;
  }
  img.style {
    margin-top: 2rem;
  }
}
@media (min-width: 1000px) and (max-width: 1200px) {
  .flip-card {
    width: 10rem;
    height: 10rem;
    margin-left: 7rem;
  }
  div.best {
    display: flex;
    flex-direction: column;
  }

  img.dress {
    width: 10rem;
    height: 10rem;
  }
  img.top {
    width: 10rem;
    height: 10rem;
  }
  .card {
    width: 15rem;
    height: 20rem;
  }
  div.card-body {
    height: 15rem;
    margin-bottom: 3rem;
  }
  img.casses {
    height: 25rem;
    width: 45rem;
    margin-top: 35rem;
    margin-left: 5rem;
  }
  h2 {
    margin-top: 2rem;
    margin-left: 5rem;
  }
  img.style {
    margin-top: 2rem;
  }
}
@media (min-width: 800px) and (max-width: 1000px) {
  .flip-card {
    height: 7rem;
    width: 7rem;
  }
  div.best {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: wrap;
  }
  div.card-img-top {
    width: 7rem;
    height: 7rem;
  }
}
</style>
