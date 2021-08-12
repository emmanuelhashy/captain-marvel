import Vue from 'vue';
import VueRouter from 'vue-router';
import Hello from '../components/HelloWorld.vue';
import NotFound from '../components/NotFound.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Hello
    },
    {
      path: '*',
      component: NotFound
    }
  ]
});


export default router;
