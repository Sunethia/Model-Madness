<template>
  <div class="about">
    <h1>About Model-madness</h1>
    <div class="row">
      <div class="col">
        <img src="../assets/m.jpg" class="bout" />
        <img src="../assets/o.jpg" class="bout" />
        <img src="../assets/d.jpg" class="bout" />
        <img src="../assets/e.jpg" class="bout" />
        <img src="../assets/l.jpg" class="bout" />
        <img src="../assets/mm.jpg" class="bout" />
        <img src="../assets/a.jpg" class="bout" />
        <img src="../assets/dd.jpg" class="bout" />
        <img src="../assets/n.jpg" class="bout" />
        <img src="../assets/ee.jpg" class="bout" />
        <img src="../assets/ss.jpg" class="bout" />
        <img src="../assets/sss.jpg" class="bout" />
      </div>
      <div class="col">
        <h3>
          Model madness was created by a young lady, who was fascinated by all
          the new and fabulous trends. She loved to combine all types of fashion
          to create an unique look.She mostly wore casual clothes and
          streetwear. She lives in South Africa, Cape town and started her
          business with taking some old clothing and recreating them into
          popular trending clothes. Soon after people started noticing her
          clothes and loved it, so she started her own fashion line. A few years
          after she started her fashion line , she started expanding. And now
          owns a few stores around the world. Today known as Model-madness.
        </h3>
      </div>
    </div>
    <div class="reviews">
      <h1>Reviews</h1>
      <div class="person">
        <div class="container">
          <div class="container-inner">
            <img class="circle" src="../assets/Chanique.jpg" />
            <img class="img img2" src="" />
          </div>
        </div>
        <div class="divider"></div>
        <div class="name">Chanique Mansoor</div>
        <div class="title"></div>
      </div>
      <div class="person">
        <div class="container">
          <div class="container-inner">
            <img class="circle" src="../assets/cammy.jpg" />
          </div>
        </div>
        <div class="divider"></div>
        <div class="name">Cameron Tamboer</div>
        <div class="title"></div>
      </div>
    </div>
  </div>
</template>
<script></script>
<style scoped>
.bout {
  width: 10rem;
  height: 10rem;
}
h1 {
  font-size: 3rem;
  margin-top: 2rem;
  margin-bottom: 3rem;
  font-family: "Arsenal";
  color: white;
}
h3 {
  font-size: 2rem;
  font-family: "Arsenal";
  color: white;
  display: inline;
}
div.name {
  color: white;
}
/* sliders styles */
@import url("https://fonts.googleapis.com/css2?family=Merriweather:wght@900&family=Sumana:wght@700&display=swap");
body {
  align-items: center;
  background-color: #f2f2f2;
  display: flex;
  font-family: "Merriweather", serif;
  flex-wrap: wrap;
  justify-content: center;
  height: 100vh;
  margin: 0;
}
.person {
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 280px;
}
.container {
  border-radius: 50%;
  height: 312px;
  -webkit-tap-highlight-color: transparent;
  transform: scale(0.48);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  width: 400px;
}
.container:after {
  background-color: #f2f2f2;
  content: "";
  height: 10px;
  position: absolute;
  top: 390px;
  width: 100%;
}
.container:hover {
  transform: scale(0.54);
}
.container-inner {
  clip-path: path(
    "M 390,400 C 390,504.9341 304.9341,590 200,590 95.065898,590 10,504.9341 10,400 V 10 H 200 390 Z"
  );
  position: relative;
  transform-origin: 50%;
  top: -200px;
}
.circle {
  background-color: #fee7d3;
  border-radius: 50%;
  cursor: pointer;
  height: 380px;
  left: 10px;
  pointer-events: none;
  position: absolute;
  top: 210px;
  width: 380px;
}
.img {
  pointer-events: none;
  position: relative;
  transform: translateY(20px) scale(1.15);
  transform-origin: 50% bottom;
  transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
}
.container:hover .img {
  transform: translateY(0) scale(1.2);
}
.img1 {
  left: 22px;
  top: 164px;
  width: 340px;
}
.img2 {
  left: -46px;
  top: 174px;
  width: 444px;
}
.img3 {
  left: -16px;
  top: 144px;
  width: 466px;
}
.divider {
  background-color: #ca6060;
  height: 1px;
  width: 160px;
}
.name {
  color: #404245;
  font-size: 36px;
  font-weight: 600;
  margin-top: 16px;
  text-align: center;
}
.title {
  color: #6e6e6e;
  font-family: arial;
  font-size: 14px;
  font-style: italic;
  margin-top: 4px;
}
</style>
