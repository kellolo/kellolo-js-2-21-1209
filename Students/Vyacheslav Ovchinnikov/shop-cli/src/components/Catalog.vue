<template>
  <div id="catalog" class="product-box center">
    <Item
      v-for="item of items"
      :key="item.productId"
      :item="item"
      type="catalog"
    />
  </div>
</template>

<script>
import Item from "./Item.vue";
import { get } from '../libraries/requests.js'

export default {
  components: { Item },
  data() {
    return {
      items: [],
      url: "/api/catalog", // for Dev
      //url: "/catalog" // for Bild
    }
  },
  mounted() {
    get(this.url).then((items) => { this.items = items })
  }
}
</script>

<style>
</style>