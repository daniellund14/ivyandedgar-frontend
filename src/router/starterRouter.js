import Vue from 'vue';
import Router from 'vue-router';
import Starter from '../pages/StarterPage.vue';
import MainNavbar from '../components/molecules/MainNavbar.vue';
import MainFooter from '../components/molecules/MainFooter.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      components: {
        default: Starter,
        header: MainNavbar,
        footer: MainFooter
      },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      }
    }
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
