<template>
  <div id="app">
    <div class="top">
      <Header />
      <div class="line-horizon"></div>
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/checkout">Checkout</router-link> |
        <router-link to="/product">Product</router-link> |
        <router-link to="/shopping-cart">Shopping Cart</router-link> |
        <router-link to="/single-page">Single Page</router-link>
      </div>
      <Nav />
      <router-view/>
    </div>
    <Subscribe />
    <Footer />
    <Copyrights />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Nav from "./components/Nav.vue";
import Subscribe from "./components/Subscribe.vue";
import Footer from "./components/Footer.vue";
import Copyrights from "./components/Copyrights.vue";

export default {
  components: { Header, Nav, Subscribe, Footer, Copyrights },
  data() {
    return {
      showBasket: false,
    }
  },
  methods: {
    _get(url) {
      return fetch(url).then((d) => d.json());
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 5px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
