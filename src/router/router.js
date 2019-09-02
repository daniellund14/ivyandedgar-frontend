import Vue from 'vue';
import Router from 'vue-router';
import Landing from '../pages/Landing.vue';
import MainNavbar from '../components/molecules/MainNavbar.vue';
import MainFooter from '../components/molecules/MainFooter.vue';
import PageNotFound from '../pages/PageNotFound';

Vue.use(Router);

export default new Router({
  linkExactActiveClass: 'active',
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'landing',
      components: { default: Landing, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400, transparent: false},
        footer: { backgroundColor: 'black' }
      }
    },
    { path: "*", component: PageNotFound }
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
