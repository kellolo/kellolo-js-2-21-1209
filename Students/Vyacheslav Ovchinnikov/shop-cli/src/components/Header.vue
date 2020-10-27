<template>
    <header class="header center">
        <div id="search-controller" class="header__left">
          <a class="logo" href="#">
            <img
              class="logo__img"
              src="https://raw.githubusercontent.com/Veledar/STATIK/master/imgs/logo.png"
              alt="logo"
            />BRAN<span>D</span>
          </a>
          <form action="#" class="search">
            <a href="#" class="search__browse">
              Browse <i class="fas fa-caret-down"></i>
            </a>
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
          >
            <img
              class="header__cart"
              src="https://raw.githubusercontent.com/Veledar/STATIK/master/imgs/cart.png"
              alt="Basket"
            />
          </a>
          <div class="headerCartWrap">
            <div class="headerCartWrapBlock"></div>
            <Basket v-show="showBasket" ref="basket" />
          </div>
          <a href="#" class="button">
            My Account <i class="fas fa-caret-down"></i>
          </a>
        </div>
    </header>
</template>

<script>
import Basket from "./Basket.vue";

export default {
  components: { Basket },
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