<template>
  <div class="all-comics">
    <div class="all-comics__header">
      <h1 class="title">All Comics</h1>
      <div class="sort-con container">
        <h3>Sort by Year</h3>
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
      <infinite-loading
        spinner="spiral"
        @infinite="infiniteScroll"
      ></infinite-loading>
    </div>
    <p>Loading...</p>
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
      loading: false,
      apikey: "d2a508ec092852bfb6b4d607085c6e08",
      year: "All",
    };
  },
  computed: {
    url() {
      return `${baseURL}characters/1010338/comics?limit=40&offset=${this.offset}&apikey=d2a508ec092852bfb6b4d607085c6e08`;
    },
  },
  methods: {
    getComics() {
      this.loading = true;
      this.$http
        .get(this.url)
        .then((response) => {
          if (response.data.data.results.length > 1) {
            response.data.data.results.forEach((item) =>
              this.comics.push(item)
            );
          }
          this.loading = false;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // getNextComic() {
    //   window.onscroll = () => {
    //     // this.offset += 50;
    //     let bottomOfWindow =
    //       document.documentElement.scrollTop +
    //         document.documentElement.clientHeight >=
    //       document.documentElement.scrollHeight - 10;
    //     if (bottomOfWindow) {
    //       console.log("bottomOfWindow");
    //       this.getComics();
    //     }
    //   };
    // },
    infiniteScroll($state) {
      setTimeout(() => {
        this.offset+=50
        this.$axios
          .$get(this.url)
          .then((res) => {
            if (res.data.results.length > 1) {
              res.data.results.forEach((item) => this.comics.push(item))
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
  margin-top: 4.5rem;
  width: 100%;
  padding-top: 1rem;
  padding-bottom: 3rem;
}
.all-comics__body {
  display: flex;
  flex-wrap: wrap;
}
.all-comics__header {
  display: flex;
  justify-content: space-between;
}
</style>
