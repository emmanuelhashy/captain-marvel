<template>
  <div class="comic-detail">
    <img src="" alt="" />
    <div class="comic-detail__text">
      <h3>Title</h3>
      <p>Published:</p>
      <p>Writer:</p>
      <p>Penciler:</p>
      <p>Description:</p>
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
    };
  },
  methods: {
    async getComicById() {
        const baseURL = "https://gateway.marvel.com:443/v1/public/";
      let res = await this.$http.get(
        `${baseURL}characters/1010338/comics/${this.$route.params.comicId}?apikey=d2a508ec092852bfb6b4d607085c6e08`
      );
      this.comic = res.data;
      console.log("commics", this.comic);
    }
  },
  mounted(){
    this.getComicById()
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
