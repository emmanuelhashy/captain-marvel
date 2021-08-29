<template>
  <div class="all-comics">
      <div class="all-comics__header">
        <h1 class="title">All Comics</h1>
      </div>
      <div class="all-comics__body">
          <Comic v-for="comic in comics" :key="comic.id" :comic="comic"/>
      </div>
  </div>
</template>
<script>
import Comic from "../components/Comic";
export default {
    components: {
    Comic,
  },
  name: 'Comics',
   data() {
    return {
      comics: [],
    };
  },
  methods: {
    async getCharacter() {
      const baseURL = "https://gateway.marvel.com:443/v1/public/";
      let res = await this.$http.get(
        `${baseURL}characters/1010338/comics?apikey=d2a508ec092852bfb6b4d607085c6e08`
      );
      this.comics = res.data.data.results
      console.log("commics", this.comics);
    },
  },
}
</script>

<style scoped>
.all-comics {
  padding: 0 10rem;
  margin-top: 4.5rem;
  width: 100%;
  padding-top: 1rem;
  padding-bottom: 3rem;
}
</style>
