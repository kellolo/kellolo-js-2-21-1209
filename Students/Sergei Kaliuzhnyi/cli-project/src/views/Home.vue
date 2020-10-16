<template>
  <div>
    
    <Header />

    <!-- <Promo />

    <Offers /> -->
    
    <section class="featured center">
      <div class="featured__head">
        <h2 class="featured__head-h1">Fetured Items</h2>
        <h3 class="featured__head-h3">Shop for items based on what we featured in this week</h3>
      </div>

      <Catalog />

      <div class="featured__button">
        <a href="#" class="button">Browse All Product</a>
      </div>
    </section>

    <Offer />

    <Footer />

    </div>
</template>

<script>
import Catalog from '@/components/Catalog.vue';
import Basket from '@/components/Basket.vue';
import Header from '@/components/Header.vue';
import Promo from '@/components/Promo.vue';
import Offers from '@/components/Offers.vue';
import Offer from '@/components/Offer.vue';
import Footer from '@/components/Footer.vue';

export default {
    // components: { 'catalog-component': Catalog },
    components: { Catalog, Basket, Promo, Offer, Footer, Header, Offers },
    data() {
        return {
            showBasket: false,
        }
    },
    methods: {
        _get(url) {
            return fetch(url).then(d => d.json())
        },  
    },
}
</script>

<style>

</style>