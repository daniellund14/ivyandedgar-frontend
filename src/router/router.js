import Vue from 'vue';
import Router from 'vue-router';
import Index from '../pages/Index';
import MainNavbar from '../components/organisms/MainNavbar';
import MainFooter from '../components/organisms/MainFooter';
import PageNotFound from '../pages/PageNotFound';
import Login from '../pages/auth/Login';
import Register from '../pages/auth/registration/Register';
import Profile from '../pages/BreederProfile';

Vue.use(Router);

export default new Router({
  linkExactActiveClass: 'active',
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      components: { default: Index, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 0, transparent: false },
        footer: { backgroundColor: 'black' },
      },
    },
    {
      path: '/login',
      name: 'login',
      components: { default: Login, header: MainNavbar },
      props: {
        header: { colorOnScroll: 0, transparent: false },
      },
    },
    {
      path: '/register',
      name: 'register',
      components: { default: Register, header: MainNavbar },
      props: {
        header: { colorOnScroll: 0, transparent: false },
      },
    },
    {
      path: '/breeder/:id/profile',
      name: 'register',
      components: { default: Profile, header: MainNavbar },
      props: {
        header: { colorOnScroll: 0, transparent: false },
      },
    },
    { path: '*', component: PageNotFound },
  ],
  scrollBehavior: (to) => {
    if (to.hash) {
      return { selector: to.hash };
    }
    return { x: 0, y: 0 };
  },
});
