<template>
  <div class="comic-detail">
    <img
          class="comic__photo"
          :src="imgUrl"
          alt="comic logo"
        />
    <div class="comic-detail__text">
      <h3>{{comic.title}}</h3>
      <p>{{comic.dates[0].date | luxon:format('yyyy')}}</p>
      
      <div>
        <p>Characters</p>
        <div v-for="character in comic.characters.items" :key="character.name">
          <p>{{character.name}}</p>
        </div>
      </div>
      <div>
        <p>Creators</p>
        <div v-for="creator in comic.creators.items" :key="creator.name">
          <p>Name: {{creator.name}}</p>
          <p>Role: {{creator.role}}</p>
        </div>
      </div>
      <p>Format: {{comic.format}}</p>
      <p>Description:{{comic.description ? comic.description : "Description not available"}}</p>
    </div>
  </div>
</template>
<script>
export default {
    data() {
    return {
      comic: {},
      imgUrl:""
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
    }
  },
  watch: {
    comic() {
      this.imgUrl = this.comic.thumbnail? this.comic.thumbnail.path + "." + this.comic.thumbnail.extension : undefined
    }
  },
  mounted(){
    if(this.$route.params.comicId) {
      console.log("Route params", this.$route.params)
      this.getComicById()
    }
  }
}
</script>
<style scoped>
.comic-detail {
  display: flex;
}
.comic-detail__text {
  display: flex;
  flex-direction: column;
}
</style>
