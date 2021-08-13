<template>
  <div id="app">
    <Nav/>
    <Hero/>
    <News/>
    <RecentComics/>
    <featured/>
    <div class="bottom">
      <Gaming/>
      <Footer/>
    </div>
  </div>
</template>

<script>
import Nav from './components/Nav.vue'
import Hero from './components/Hero.vue'
import Featured from './components/Featured.vue'
import News from './components/News.vue'
import Gaming from './components/Gaming.vue'
import Footer from './components/Footer.vue'
import RecentComics from './components/RecentComics.vue'

export default {
  name: 'App',
  components: {
    Nav,
    Hero,
    Featured,
    News,
    Gaming,
    RecentComics,
    Footer
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
    this.getCharacter();
  },
}
</script>

<style>
@import './assets/style.css';
.bottom {
  padding-top: 5rem;
  width: 100%;
  background-color: #202020;
}
</style>
