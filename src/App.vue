<template>
  <div id="app" class="body">
    <Nav/>
    <router-view></router-view>
    <Footer/>
  </div>
</template>

<script>
import Nav from './components/Nav.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Nav,
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
    // this.getCharacter();
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
