<template>
  <div class="comic-detail">
    <img
          class="comic__photo"
          :src="imgUrl"
          alt="comic logo"
        />
    <div class="comic-detail__text">
      <h3>{{comic.title}}</h3>
      <p>Published:{{comic.modified}}</p>
      <div>
        <p>characters</p>
        <div v-for="character in comic.characters.items" :key="character.name">
          <p>{{character.name}}</p>
        </div>
      </div>
      <p>Penciler:</p>
      <p>Description:{{comic.description}}</p>
      <p>Colorist:</p>
      <p>Editor:</p>
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
      this.imgUrl = this.comic.images[0]? this.comic.images[0].path + "." + this.comic.images[0].extension : undefined
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
