<template>
  <div class="app">
    <Header/>
    <div class="app-body">
      <main class="main">
        <div class="container-fluid">
          <router-view></router-view>
        </div>
      </main>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Footer from '../components/layout/Footer.vue';
import Header from '../components/layout/Header.vue';

export default {
  name: 'MainContainer',
  components: {
    Footer,
    Header,
  },
  data() {
    return {
      nav: [],
    };
  },
  computed: {
    name() {
      return this.$route.name;
    },
    list() {
      return this.$route.matched;
    },
  },
};
</script>
