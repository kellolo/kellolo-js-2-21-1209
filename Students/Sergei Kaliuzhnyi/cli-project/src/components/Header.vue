<template>
  <div>
      <header class="header center">
            <div class="header__left">
                <a class="logo" href="index.html">
                    <img class="logo__img" src="https://raw.githubusercontent.com/eqillibrium/My_Store_API/master/logo.png" alt="logo">BRAN<span class="accent">D</span>
                </a>
                <form class="header__form" action="#">
                    <div class="browse">Browse <i class="fa fa-sort-desc browse__icon" aria-hidden="true"></i></div>
                    <input type="text" value="Search for Item..." class="input_text">
                    <button class="search_button"><img src="https://raw.githubusercontent.com/eqillibrium/My_Store_API/master/search.png" alt="search"></button>
                </form>
            </div>
            <div class="header__right">
                <button class="header__basket-button" id="basket-toggler" @click="showBasket = !showBasket"><img
                            class="header__cart" src="https://raw.githubusercontent.com/eqillibrium/My_Store_API/master/basket.png" alt="cart"></button>

                <Basket v-show="showBasket" ref="basket"/>
                
                <a href="#" class="button">My Account <i class="fa fa-sort-desc button__icon"
                        aria-hidden="true"></i></a>
            </div>
        </header>
        <header class="nav">
            <ul class="menu center">
                <router-link to="/"><li class="menu__list"><a href="index.html" class="menu__link">Home</a></li></router-link>
                <li class="menu__list">
                    <a href="product.html" class="menu__link">Man</a>
                    <div class="drop">
                        <div class="drop__flex">
                            <h3 class="drop__h3">Women</h3>
                            <ul class="drop__ul">
                                <li><a href="product.html" class="drop__a">Dresses </a></li>
                                <li><a href="product.html" class="drop__a">Blazers </a></li>
                                <li><a href="product.html" class="drop__a">Denim </a></li>
                                <li><a href="product.html" class="drop__a">Leggings/Pants </a></li>
                                <li><a href="product.html" class="drop__a">Skirts/Shorts </a></li>
                                <li><a href="product.html" class="drop__a">Accessories</a></li>
                            </ul>
                        </div>
                        <div class="drop__flex">
                            <h3 class="drop__h3">Women</h3>
                            <ul class="drop__ul">
                                <li><a href="product.html" class="drop__a">Dresses </a></li>
                                <li><a href="product.html" class="drop__a">Tops </a></li>
                                <li><a href="product.html" class="drop__a">Sweaters/Knits </a></li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li class="menu__list"><a href="single_page.html" class="menu__link">Women</a></li>
                <li class="menu__list"><a href="product.html" class="menu__link">Kids</a></li>
                <li class="menu__list"><a href="product.html" class="menu__link">Accoseriese</a></li>
                <li class="menu__list"><a href="product.html" class="menu__link">Featured</a></li>
                
                <li class="menu__list"><router-link to="/about"><a href="product.html" class="menu__link">Hot Deals</a></router-link>
                    <div class="drop drop_last">
                        <div class="drop__flex">
                            <h3 class="drop__h3">Women</h3>
                            <ul class="drop__ul">
                                <li><a href="product.html" class="drop__a">Dresses </a></li>
                                <li><a href="product.html" class="drop__a">Blazers </a></li>
                                <li><a href="product.html" class="drop__a">Denim </a></li>
                                <li><a href="product.html" class="drop__a">Leggings/Pants </a></li>
                                <li><a href="product.html" class="drop__a">Skirts/Shorts </a></li>
                                <li><a href="product.html" class="drop__a">Accessories</a></li>
                            </ul>
                        </div>
                        <div class="drop__flex">
                            <h3 class="drop__h3">Women</h3>
                            <ul class="drop__ul">
                                <li><a href="product.html" class="drop__a">Dresses </a></li>
                                <li><a href="product.html" class="drop__a">Tops </a></li>
                                <li><a href="product.html" class="drop__a">Sweaters/Knits </a></li>
                            </ul>
                        </div>
                    </div>
                </li>
            </ul>
        </header>
  </div>
</template>

<script>
import Basket from './Basket.vue';
export default {
    components: { Basket },
    data() {
        return {
            showBasket: false,
        }
    },
}
</script>

<style>

</style>