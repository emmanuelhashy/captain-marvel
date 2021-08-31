<template>
  <div class="gaming">
    <div class="gaming__left">
      <img
        width="100%"
        src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/marvelhq-promos-modules-featured-half-dsk-01.jpg"
        alt="game photo"
      />
    </div>
    <div class="gaming__right">
      <div class="gaming__text">
        <h4 class="gaming__header-1">marvel hq</h4>
        <p class="gaming__header-2">
          Play games and read comics on marvelHQ.com
        </p>
        <a
          target="_self"
          style="margin: 1rem; text-transform: uppercase;"
          class="cta-btn cta-btn--solid cta-btn--red"
          href="https://www.marvel.com/movies/captain-marvel#purchase-10"
          ><div class="innerFill"><span>check it out</span></div></a
        >
      </div>
    </div>
  </div>
</template>
<style scoped>
.gaming {
  display: flex;
  /* justify-content: center; */
  align-items: center;
  padding: 0 10rem;
  background-color: #000;
}
.gaming__left {
  width: 50%;
}
.gaming__right {
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.gaming__text {
  width: 100%;
  padding: 0 4rem;
}
.gaming__header-1 {
  margin: 20px 0;
  color: #e62429;
  letter-spacing: 3px;
  text-transform: uppercase;
}
.gaming__header-2 {
  font-weight: 800;
  margin: 0 0 10px;
  font: 900 26px/1.2 Roboto Bold, Trebuchet MS, Helvetica, Arial, sans-serif;
  color: #fff;
}

@media screen and (max-width: 1024px) {
  .gaming {
    padding: 0rem 4rem;
  }
}
@media screen and (max-width: 768px) {
  .gaming__text {
    padding: 0 2rem;
  }
  .gaming__header-2 {
    font: 700 23px/1.2 Roboto Bold, Trebuchet MS;
  }
}

@media screen and (max-width: 660px) {
  .gaming {
    padding-top: 2rem;
    flex-direction: column;
  }
  .gaming__left,
  .gaming__right {
    width: 100%;
  }
}

@media screen and (max-width: 425px) {
  .gaming {
    padding: 0rem 1.5rem;
  }
  .gaming__text {
    padding: 0;
  }
  .gaming__header-2 {
    font: 500 18px/1.2 Roboto Bold, Trebuchet MS;
  }
}
</style>
