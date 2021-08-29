<template>
  <div class="all-comics">
    <div class="all-comics__header">
      <h1 class="title">All Comics</h1>
    </div>
    <div class="all-comics__body">
      <Comic v-for="comic in comics" :key="comic.id" :comic="comic" />
    </div>
  </div>
</template>
<script>
import Comic from "../components/Comic";
import baseURL from "../config.js";
export default {
  components: {
    Comic,
  },
  name: "Comics",
  data() {
    return {
      comics: [],
      offset: 0,
    };
  },
  computed: {
    url() {
      return `${baseURL}characters/1010338/comics?limit=50&offset=${this.offset}&apikey=d2a508ec092852bfb6b4d607085c6e08`;
    },
  },
  methods: {
    async getInitialComics() {
      let res = await this.$http.get(this.url);
      this.comics = res.data.data.results;
      console.log("commics", this.comics);
    },
    getNextComic() {
      window.onscroll = () => {
        this.offset += 50;
        let bottomOfWindow =
          document.documentElement.scrollTop + window.innerHeight ===
          document.documentElement.offsetHeight;
        if (bottomOfWindow) {
          this.$http
            .get(this.url)
            .then((response) => {
                if (response.data.data.results.length > 1) {
                    response.data.data.results.forEach((item) => this.comics.push(item))
                }
            });
        }
      };
    },
  },
  mounted() {
    this.getNextComic();
  },
  beforeMount() {
    this.getInitialComics();
  },
};
</script>

<style scoped>
.all-comics {
  padding: 0 10rem;
  margin-top: 4.5rem;
  width: 100%;
  padding-top: 1rem;
  padding-bottom: 3rem;
}
.all-comics__body {
  display: flex;
  flex-wrap: wrap;
}
</style>
