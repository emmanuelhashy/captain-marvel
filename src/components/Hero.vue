<template>
  <div class="hero">
    <div class="hero-container">
        <div class="hero__text">
            <h1 class="hero__name">CAROL DANVERS</h1>
            <h2 class="hero__title">CAPTAIN MARVEL</h2>
            <h3 class="hero__desc">Carol Danvers becomes one of the universe's most powerful heroes when Earth is caught in the middle of a galactic war between two alien races.</h3>
        </div>
    </div>
    <div class="hero-socials">
      <a href="" class="text-grey"
        ><font-awesome-icon :icon="['fab', 'facebook-square']" class="icon"
      /></a>
      <a href="" class="text-grey"
        ><font-awesome-icon :icon="['fab', 'twitter']" class="icon"
      /></a>
      <a href="" class="text-grey"
        ><font-awesome-icon :icon="['fab', 'instagram']" class="icon"
      /></a>
    </div>
    <div class="tabs">
      <div class="tab active">overview</div>
      <div class="tab">incomics profile</div>
      <div class="tab">incomics full report</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Hero",
};
</script>
<style scoped>
.hero {
    position: relative;
}
.hero-container {
  width: 100%;
  padding: 4rem 10rem;
  display: flex;
  align-items: center;

background-image: url("~@/assets/008cmv_ons_mas_dsk_02.jpg"), -webkit-gradient(linear, left top, left bottom, from(rgb(231, 231, 231)), to(rgb(16, 16, 17)));
  background-size: cover;
  /* background-position: center; */
  background-repeat: no-repeat;
  background-position: center center;
  position: relative;
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 60vh, 0 100%);
  clip-path: polygon(0 0, 100% 0, 100% 60vh, 0 100%);
  height: 62vh;
}
.hero__text {
    width: 40rem;
    color: #fff;
}
.hero__name {
    font: 700 1rem/1.1 RobotoCondensed Bold,Trebuchet MS,Helvetica,Arial,sans-serif;
    letter-spacing: 1px;
    text-transform: uppercase;
    margin-bottom: 1.1rem;
}
.hero__title {
        font: 890 2.5rem/1 RobotoCondensed Bold,Trebuchet MS,Helvetica,Arial,sans-serif;
    line-height: 1;
    text-transform: uppercase;
    margin-bottom: 1.1rem;
}
.hero__desc {
    font: 700 1rem/2 RobotoCondensed Bold,Trebuchet MS,Helvetica,Arial,sans-serif;
    line-height: 1;
}
.movie-text {
  text-transform: capitalize;
  font-weight: 500;
  color: #fff;
  margin: 0.3rem 0;
}
.hero .cta-btn {
  margin: 1rem;
}

.hero-socials {
  padding: 0 10rem;
  display: flex;
  justify-content: flex-end;
}
.icon {
  margin-right: 1rem;
  font-size: 1.1rem;
  color: gray;
}
.tabs {
  width: 22rem;
  display: flex;
  height: 4rem;
  margin-left: 10rem;
  margin-top: -3rem;
  z-index: 500;
  text-transform: uppercase;
  color: rgba(216, 211, 211, 0.521);
  background-color: #202020;
  position: absolute;
  font-size: .75rem;
  font-weight: 700;
}
.tab {
    padding: 1.4rem;
    display: flex;
    align-items: center;
    border-right: 1px solid #393939;
}
.tab:hover {
    color: #fff;
}
.active {
    border-top: 5px solid red;
    color: #fff;
}
iframe {
  border: none;
}
</style>