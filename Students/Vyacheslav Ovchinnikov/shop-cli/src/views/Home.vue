<template>
  <div>
    <div class="top">
      <aside class="promo">
        <div class="promo__content container">
          <div></div>
          <div><b>THE BRAND</b><br />OF LUXERIOUS <span>FASHION</span></div>
        </div>
      </aside>

      <offer-box />

      <main class="product-box center">
        <h1 class="product-box__head">Fetured Items</h1>
        <p class="product-box__desc">
          Shop for items based on what we featured in this week
        </p>
        <Catalog />
      </main>

      <button class="product-box__button">
        Browse All Products
        <img src="https://raw.githubusercontent.com/Veledar/STATIK/master/imgs/arrowToRight.png"
             alt="Стрелка"/>
      </button>

      <Offer />
    </div>
  </div>
</template>

<script>
import Catalog from "../components/Catalog.vue";
import OfferBox from "../components/OfferBox.vue";
import Offer from "../components/Offer.vue";


export default {
  components: { Catalog, OfferBox, Offer },
  
}
</script>

<style>
</style>