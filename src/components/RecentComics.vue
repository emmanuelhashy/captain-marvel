<template>
  <div class="comics">
    <h4 class="comics__header">Recent Comics</h4>
    <div class="comics__container">
      <Comic v-for="comic in comics" :key="comic.id" :comic="comic" />
    </div>
    <a
      target="_self"
      style="margin: 2rem; text-transform: uppercase"
      class="cta-btn cta-btn--solid cta-btn--red"
      @click="viewAllComics"
      ><div class="innerFill"><span>VIEW ALL</span></div></a
    >
  </div>
</template>
<script>
import Comic from "./Comic";
export default {
  components: {
    Comic,
  },
  data() {
    return {
      comics: [],
    };
  },
  methods: {
    viewAllComics() {
      this.$router.push({ path: 'comics' })
      console.log("Clicked")
    },

    async getCharacter() {
      const baseURL = "https://gateway.marvel.com:443/v1/public/";
      let res = await this.$http.get(
        `${baseURL}characters/1010338/comics?apikey=d2a508ec092852bfb6b4d607085c6e08`
      );
      this.comics = res.data.data.results.slice(0, 7);
      console.log("commics", this.comics);
      // console.log("sliced commics", this.comics.results.slice(0,6))
    },
  },
  mounted() {
    this.getCharacter();
  },
};
</script>

<style scoped>
.comics {
  padding: 0 10rem;
  margin-top: 4.5rem;
  background-color: #202020;
  padding-top: 1rem;
  padding-bottom: 3rem;
}
.comics__header {
  font: 800 1.7rem/1 RobotoCondensed, Trebuchet MS, Helvetica, Arial, sans-serif;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
  margin-top: 1.5rem;
  color: #fff;
}
.comics__container {
  display: flex;
  justify-content: center;
}

@media screen and (max-width: 1024px) {
  .comics {
    padding: 0 4rem;
    padding-top: 1rem;
    padding-bottom: 3rem;
  }
  .comics__container {
    flex-wrap: wrap;
  }
}

@media screen and (max-width: 768px) {
  .comics {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .comics__card {
  width: 15rem;
  margin-top: 2rem;
}
.comics__header {
  text-align: center;
}
}
</style>