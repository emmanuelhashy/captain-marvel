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
import baseURL from "../config.js"
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
    async getInitialComics() {
      let res = await this.$http.get(
        `${baseURL}characters/1010338/comics?apikey=d2a508ec092852bfb6b4d607085c6e08`
      );
      this.comics = res.data.data.results
      console.log("commics", this.comics);
    },
    getNextComic() {
      window.onscroll = () => {
        let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;
        if (bottomOfWindow) {
          this.$http.get(`${baseURL}characters/1010338/comics?apikey=d2a508ec092852bfb6b4d607085c6e08`).then(response => {
            this.comics.push(response.data.data.results[0]);
          });
        }
      }
    }
  },
  mounted() {
    this.getNextComic();
  },
  beforeMount() {
    this.getInitialComics();
  }
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
