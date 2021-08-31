<template>
  <div class="detail">
    <div class="header">
      <router-link to="/comics"><font-awesome-icon icon="arrow-left" class="icon" />Back to series</router-link>
      
    </div>
    <div class="comic-detail">
      <img class="comic__photo" :src="imgUrl" alt="comic logo" />
      <div class="comic-detail__text">
        <h3 class="comic__title">{{ comic.title }}</h3>
        <p class="date">
          <strong>Created: </strong
          >{{comic.dates[0].date | luxon:format('yyyy')}}
        </p>

        <div class="text-box">
          <p class="text-box__heading">Characters</p>
          <div
            v-for="character in comic.characters.items"
            :key="character.name"
          >
            <p>{{ character.name }}</p>
          </div>
        </div>
        <div class="text-box">
          <p class="text-box__heading">Creators</p>
          <div v-for="creator in comic.creators.items" :key="creator.name">
            <p><strong>Name: </strong>{{ creator.name }}</p>
            <p class="role"><strong>Role:</strong>{{ creator.role }}</p>
          </div>
        </div>
        <p class="format"><strong>Format: </strong>{{ comic.format }}</p>
        <p class="description">
          <strong>Description: </strong
          >{{ comic.description ? comic.description : "Not available" }}
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      comic: {},
      imgUrl: "",
    };
  },
  methods: {
    async getComicById() {
      const baseURL = "https://gateway.marvel.com:443/v1/public/";
      let res = await this.$http.get(
        `${baseURL}comics/${this.$route.params.comicId}?apikey=d2a508ec092852bfb6b4d607085c6e08`
      );
      this.comic = res.data.data.results[0];
      console.log("commics", this.comic);
    },
  },
  watch: {
    comic() {
      this.imgUrl = this.comic.thumbnail
        ? this.comic.thumbnail.path + "." + this.comic.thumbnail.extension
        : undefined;
    },
  },
  mounted() {
    if (this.$route.params.comicId) {
      console.log("Route params", this.$route.params);
      this.getComicById();
    }
  },
};
</script>
<style scoped>
.detail {
  min-height: 100rem;
}
.header {
  display: flex;
  justify-content: start;
  width: 100%;
  margin-bottom: 1.5rem;
  font-weight: 900;
  font-size: 1rem;
  padding: 2rem 10rem;
}
.comic-detail {
  display: flex;
  padding: 1rem 10rem;
  width: 100;
  flex-wrap: wrap;
  justify-content: center;
}
.comic-detail__text {
  display: flex;
  flex-direction: column;
  width: 50%;
}
.comic__photo {
  width: 40%;
  height: 45rem;
  margin-right: 2rem;
}
.comic__title {
  margin-bottom: 2rem;
}
.date,
.text-box,
.format,
.description {
  margin-bottom: 1rem;
}
.text-box__heading {
  font-size: 1.5rem;
  font-weight: 900;
  margin-bottom: 0.6rem;
}
.role {
  margin-bottom: 0.5rem;
}
</style>
