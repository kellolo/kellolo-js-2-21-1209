<template>
  <div>
    <div class="top">
      <header class="header center">
        <div id="search-controller" class="header__left">
          <a class="logo" href="#"
            ><img
              class="logo__img"
              src="https://raw.githubusercontent.com/Veledar/STATIK/master/imgs/logo.png"
              alt="logo"
            />BRAN<span>D</span></a
          >
          <form action="#" class="search">
            <a href="#" class="search__browse"
              >Browse <i class="fas fa-caret-down"></i
            ></a>
            <input name="search" type="text" placeholder="Search for Item..." />
            <button type="submit"><i class="fas fa-search"></i></button>
          </form>
        </div>
        <div class="header__right">
          <a
            class="cart"
            href="#"
            id="basket-toggler"
            @click="showBasket = !showBasket"
            ><img
              class="header__cart"
              src="https://raw.githubusercontent.com/Veledar/STATIK/master/imgs/cart.png"
              alt="Basket"
          /></a>

          <div class="headerCartWrap">
            <div class="headerCartWrapBlock"></div>
            <Basket v-show="showBasket" ref="basket" />
          </div>

          <a href="#" class="button"
            >My Account <i class="fas fa-caret-down"></i
          ></a>
        </div>
      </header>
      <div class="line-horizon"></div>
      <Nav />
      <Promo />
      <offer-box  />
      <main class="product-box center">
        <h1 class="product-box__head">Fetured Items</h1>
        <p class="product-box__desc">
          Shop for items based on what we featured in this week
        </p>
        <Catalog />
      </main>
      <button class="product-box__button">
          Browse All Products
          <img
              src="https://raw.githubusercontent.com/Veledar/STATIK/master/imgs/arrowToRight.png"
              alt="Стрелка"
          />
      </button>
      <Offer />
      <Subscribe />
    </div>
    <Footer />
    <Copyrights />
  </div>
</template>

<script>
import Catalog from "./components/Catalog.vue";
import Basket from "./components/Basket.vue";
import Copyrights from "./components/Copyrights.vue";
import Footer from "./components/Footer.vue";
import Subscribe from "./components/Subscribe.vue";
import Offer from "./components/Offer.vue";
import OfferBox from "./components/OfferBox.vue";
import Promo from "./components/Promo.vue";
import Nav from "./components/Nav.vue";

export default {
  // components: { 'catalog-component': Catalog },
  components: { Catalog, Basket, 
                Copyrights, Footer, Subscribe, 
                Offer, OfferBox, Promo,
                Nav },
  data() {
    return {
      showBasket: false,
    };
  },
  methods: {
    _get(url) {
      return fetch(url).then((d) => d.json());
    },
  },
};
</script>

<style>

</style>