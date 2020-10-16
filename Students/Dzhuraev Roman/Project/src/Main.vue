<template>
  <div>
    <h3>Корзина</h3>
    <Cart />

    <h3>Каталог</h3>
    <Catalogue />

  </div>
</template>

<script>
import Catalogue from './components/Catalogue.vue'
import Cart from './components/Cart.vue'

export default {
  components: { Catalogue, Cart },
  data() {
    return {
      showBasket: false,
    }
  },
  methods: {
    _get(url) {
      return fetch(url).then(d => d.json())
    }
  },
}
</script>

<style>

</style>