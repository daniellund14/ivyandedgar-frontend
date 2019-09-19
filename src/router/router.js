import Vue from 'vue';
import Router from 'vue-router';
import Landing from '../pages/Landing.vue';
import MainNavbar from '../components/organisms/MainNavbar.vue';
import MainFooter from '../components/organisms/MainFooter.vue';
import PageNotFound from '../pages/PageNotFound';
import Login from '../pages/Login';

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
        header: { colorOnScroll: 0, transparent: false},
        footer: { backgroundColor: 'black' }
      }
    },
    {
      path: '/login',
      name: 'login',
      components: {default: Login, header: MainNavbar },
      props: {
        header: { colorOnScroll: 0, transparent: false}
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
