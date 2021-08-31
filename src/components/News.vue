<template>
  <div class="news">
    <h4 class="news__header">latest news</h4>
    <div class="news__container">
      <div class="news__card">
        <img class="news__photo" src="../assets/hero.jpg" alt="news 1 logo" />
        <p class="news__genre">Movies</p>
        <p class="headline">
          ‘The Marvels’ Arrives in Theaters November 11, 2022
        </p>
      </div>
      <div class="news__card">
        <img
          class="news__photo"
          src="../assets/captain-marvel-disappointing-mcu.png"
          alt="news 1 logo"
        />
        <p class="news__genre">TV SHOWS</p>
        <p class="headline">
          Marathon These MCU Moments to Prepare You For the 'WandaVision' Finale
        </p>
      </div>
      <div class="news__card">
        <img class="news__photo" src="../assets/images.jpg" alt="news 1 logo" />
        <p class="news__genre">CULTURE & LIFESTYLE</p>
        <p class="headline">
          Marvel’s Voices: Victoria Alonso on Marvel Studios’ Approach to
          Filmmaking, Stan Lee’s Enduring Legacy, and Finding Your Inner Super
          Hero
        </p>
      </div>
      <div class="news__card">
        <img
          class="news__photo"
          src="../assets/captain-marvel-disappointing-mcu.png"
          alt="news 1 logo"
        />
        <p class="news__genre">Movies</p>
        <p class="headline">
          All the Times the MCU's Carol Danvers Paid Tribute to the Captain
          Marvel Comics
        </p>
      </div>
    </div>
  </div>
</template>
<style scoped>
.news {
  padding: 0 10rem;
  margin-top: 4.5rem;
  background-color: #151515;
  padding-top: 1rem;
  padding-bottom: 3rem;
}
.news__header {
  font: 800 1.7rem/1 RobotoCondensed, Trebuchet MS, Helvetica, Arial, sans-serif;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
  margin-top: 1.5rem;
  color: #fff;
}
.news__container {
  display: flex;
  justify-content: center;
}
.news__card {
  width: 20rem;
  margin-right: 0.5rem;
}
.news__card:hover {
  cursor: pointer;
}
.news__photo {
  width: 100%;
  height: 15rem;
}
.news__genre {
  color: #999;
  text-transform: uppercase;
  font-size: 0.9rem;
  font-weight: 600;
  margin-top: 5px;
}
.headline {
  color: #fff;
  font-weight: 700;
  margin: 8px 0 0;
  padding: 0;
  cursor: pointer;
  display: block;
}
.headline:hover {
  color: red;
}

@media screen and (max-width: 1024px) {
  .news {
    padding: 0 4rem;
    padding-top: 1rem;
    padding-bottom: 3rem;
  }
}

@media screen and (max-width: 768px) {
  .news__container {
    flex-wrap: wrap;
  }
  .news__card {
  width: 15rem;
  margin-top: 2rem;
}
.news__header {
  text-align: center;
}
}
</style>
