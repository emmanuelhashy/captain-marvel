<template>
  <div class="comics">
    <h4 class="comics__header">Recent Comics</h4>
    <div class="comics__container">
      <div v-for="comic in comics" :key="comic.id">
        <Comic :comic="comic" />
      </div>
    </div>
    <a
      target="_self"
      style="margin: 1rem; text-transform: uppercase"
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
    // async getCharacter() {
    //   let res = await this.$axios.$get(
    //     "characters/1010338/comics?apikey=6740ae373da1c47cbdc80ee83dfc9158"
    //   );
    //   this.comics = res.data.results.splice(0, 6);
    // },
    viewAllComics() {
      this.$router.push({ path: 'comics' })
      console.log("Clicked")
    },

    async getCharacter() {
      const baseURL = "https://gateway.marvel.com:443/v1/public/";
      let res = await this.$http.get(
        `${baseURL}characters/1010338/comics?apikey=d2a508ec092852bfb6b4d607085c6e08`
      );
      this.comics = res.data.data.results.slice(0, 4);
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
  flex-wrap: wrap;
}
.comics__card {
  width: 20rem;
  margin-right: 0.5rem;
}
.comics__card:hover {
  cursor: pointer;
}
.comics__photo {
  width: 100%;
  height: 15rem;
}
.comics__genre {
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
</style>