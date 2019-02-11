<template>
  <b-card
    header-tag="header"
    footer-tag="footer">
    <div slot="header">
      <i className="fa fa-align-justify"></i><strong>Home</strong>
    </div>
    <div>
      Welcome to the home page. Start by managing your
      <router-link :to="{ name: 'products.index' }">products</router-link>.
    </div>
  </b-card>
</template>

<script>

export default {
  name: 'Home',
};
</script>
