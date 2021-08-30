import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../pages/Home.vue';
import NotFound from '../components/NotFound.vue';
import Comics from '../pages/Comics.vue';
import Comic from '../pages/ComicDetail.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/comics',
      component: Comics
    },
    {
      path: '/comic-detail/:comicId',
      component: Comic
    },
    {
      path: '*',
      component: NotFound
    }
  ]
});


export default router;
