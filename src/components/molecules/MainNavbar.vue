<template>
  <navbar
    position="fixed"
    type="primary"
    :transparent="transparent"
    :color-on-scroll="colorOnScroll"
    menu-classes="ml-auto"
  >
    <template slot-scope="{ toggle, isToggled }">
      <router-link v-popover:popover1 class="navbar-brand" to="/">
        Ivy and Edgar
      </router-link>
    </template>
    <template slot="navbar-menu">
      <drop-down
        tag="li"
        title="Dogs"
        icon="now-ui-icons design_app"
        class="nav-item"
      >
        <nav-link to="/">
          <i class="now-ui-icons"></i> List a Dog
        </nav-link>
        <a
          href="/"
          class="dropdown-item"
        >
          <i class="now-ui-icons"></i> Purchase a Dog
        </a>
        <a
          href="/"
          class="dropdown-item"
        >
          <i class="now-ui-icons"></i> Dog Concierge
        </a>
      </drop-down>
      <drop-down
              tag="li"
              title="Profile"
              icon="now-ui-icons design_image"
              class="nav-item"
      >
        <nav-link to="/">
          <i class="now-ui-icons users_single-02"></i> Create an Account
        </nav-link>
        <nav-link to="/">
          <i class="now-ui-icons users_circle-08"></i> Login
        </nav-link>
      </drop-down>
    </template>
  </navbar>
</template>

<script>
import { DropDown, NavbarToggleButton, Navbar, NavLink } from '@/components';
import { Popover } from 'element-ui';
export default {
  name: 'main-navbar',
  props: {
    transparent: Boolean,
    colorOnScroll: Number
  },
  components: {
    DropDown,
    Navbar,
    NavbarToggleButton,
    NavLink,
    [Popover.name]: Popover
  }
};
</script>

<style scoped></style>
