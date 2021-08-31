<template>
  <div>
    <Hero/>
    <News/>
    <!-- <RecentComics/> -->
    <featured/>
    <div class="bottom">
      <Gaming/>
    </div>
  </div>
</template>

<script>
import Hero from '../components/Hero.vue'
import Featured from '../components/Featured.vue'
import News from '../components/News.vue'
import Gaming from '../components/Gaming.vue'
// import RecentComics from '../components/RecentComics.vue'

export default {
  name: 'App',
  components: {
    Hero,
    Featured,
    News,
    Gaming,
    // RecentComics,
  },
  data() {
    return {
      comics: [],
      caracterId: ""
    };
  },
  methods: {
    async getCharacter() {
      const baseURL = 'https://gateway.marvel.com:443/v1/public/'
      let res = await this.$http.get(
        `${baseURL}characters?ts=4&apikey=d2a508ec092852bfb6b4d607085c6e08&hash=5a7b205bfcc2b7bce00ea25902ad5d2e`
      );
      this.comics = res.data
      console.log("commics", this.comics)
    },
  },
  mounted() {
    // this.getCharacter();
  },
}
</script>

<style>
.bottom {
  padding-top: 5rem;
  width: 100%;
  background-color: #202020;
}
</style>
