<template>
  <div class="all-comics">
    <div class="all-comics__header">
      <h2 class="title">All Comics</h2>
      <div class="all-comic__sort">
        <h4>Sort by Year</h4>
        <select name="year" id="year" v-model="year">
          <option value="" hidden>Select Year</option>
          <option value="All">All</option>
          <option v-for="(i, index) in 51" :key="index" :value="i + 1969">
            {{ i + 1969 }}
          </option>
        </select>
      </div>
    </div>
    <div class="all-comics__body">
      <Comic v-for="comic in comics" :key="comic.id" :comic="comic" />
    </div>
      <infinite-loading
        spinner="spiral"
        @infinite="infiniteScroll"
      ></infinite-loading>
  </div>
</template>
<script>
import Comic from "../components/Comic";
import { baseURL } from "../config.js";
export default {
  components: {
    Comic,
  },
  name: "Comics",
  data() {
    return {
      comics: [],
      offset: 0,
      apikey: "d2a508ec092852bfb6b4d607085c6e08",
      year: "All",
    };
  },
  computed: {
    url() {
      return `${baseURL}characters/1010338/comics?limit=50&offset=${this.offset}&apikey=d2a508ec092852bfb6b4d607085c6e08`;
    },
  },
  methods: {
    async getComics() {
      let res = await this.$http.get(this.url)
		this.comics = res.data.data.results;
    },
    infiniteScroll($state) {
      setTimeout(() => {
        this.offset+=50
        this.$http
          .get(this.url)
          .then((res) => {
            if (res.data.data.results.length > 1) {
              res.data.data.results.forEach((item) => this.comics.push(item))
              $state.loaded()
            } else {
              $state.complete()
            }
          })
          .catch((err) => {
            console.log(err)
          })
      }, 500)
    }
  },
  watch: {
    year() {
      if (this.year) {
        if (this.year === "All") {
          this.offset = 0;
          this.getComics();
        } else {
          this.$http
            .get(
              `${baseURL}characters/1010338/comics?startYear=${this.year}&apikey=${this.apikey}`
            )
            .then((res) => {
              this.comics = res.data.data.results;
            })
            .catch((err) => {
              console.log(err);
            });
        }
      }
    },
    // showModal(){
    // 	console.log("watch show");

    // 	const page = document.querySelector('body');
    // 	if(this.showModal){
    // 		page.style.height = '100vh';
    // 		page.style.overflow="hidden";
    // 	}
    // 	else{
    // 		page.style.height = '100%';
    // 		page.style.overflow ="scroll";
    // 	}
    // }
  },
  mounted() {
    this.getComics();
    // this.getNextComic();
  },
};
</script>

<style scoped>
.all-comics {
  padding: 0 10rem;
  margin-top: 3rem;
  width: 100%;
  padding-bottom: 3rem;
}
.all-comics__body {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.all-comics__header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;
}
.all-comics__sort {
  display: flex;
  flex-direction: column;
}
</style>
