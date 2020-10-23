<template>
  <div id="app">
    <div id="nav">
      <Header />
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
    </div>
    <router-view/>
    <div>
      <Offer />

    <Footer />

    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Offer from '@/components/Offer.vue';
import Footer from '@/components/Footer.vue';
export default {
    components: { Header, Offer, Footer },
}
</script>

<style lang="scss">

</style>
