<template>
  <div id="app">
    <Nav/>
    <Hero/>
    <News/>
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

export default {
  name: 'App',
  components: {
    Nav,
    Hero,
    Featured,
    News,
    Gaming,
    Footer
  },
  data() {
    return {
      comics: [],
    };
  },
  methods: {
    async getCharacter() {
      const baseURL = 'https://gateway.marvel.com:443/v1/public/'
      let res = await this.$http.get(
        `${baseURL}characters?apikey=d2a508ec092852bfb6b4d607085c6e08`
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
