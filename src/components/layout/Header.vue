<template>
<header class="app-header navbar">
  <b-link class="navbar-brand" :to="{ name: 'home.index' }">GDM Product Manager</b-link>
  <b-navbar-nav class="d-md-down-none">
    <b-nav-item :to="{ name: 'home.index' }" class="px-3">Home</b-nav-item>
    <b-nav-item :to="{ name: 'products.index' }" class="px-3">Products</b-nav-item>
  </b-navbar-nav>
  <b-navbar-nav class="ml-auto">
    <b-nav-item-dropdown right>
        <template slot="button-content">
          <font-awesome-icon icon="user-circle" />
          <span> {{user.email}}</span>
        </template>
        <b-dropdown-item :to="{ name: 'login.index' }">
          <font-awesome-icon icon="sign-out-alt" /> Logout
        </b-dropdown-item>
      </b-nav-item-dropdown>
  </b-navbar-nav>
</header>
</template>
<script>
export default {
  name: 'MainHeader',
  computed: {
    user() {
      return this.$store.state.auth.user;
    },
  },
  methods: {
    sidebarToggle(e) {
      e.preventDefault();
      document.body.classList.toggle('sidebar-hidden');
    },
    sidebarMinimize(e) {
      e.preventDefault();
      document.body.classList.toggle('sidebar-minimized');
    },
    mobileSidebarToggle(e) {
      e.preventDefault();
      document.body.classList.toggle('sidebar-mobile-show');
    },
    asideToggle(e) {
      e.preventDefault();
      document.body.classList.toggle('aside-menu-hidden');
    },
  },
};
</script>

<style lang="scss" scoped>
.app-header.navbar .navbar-nav {
  padding-right: 1rem;
}
</style>
