<template>
  <div>
    <div class="product-item" id="catalog">
      <Item
          v-for="item in items"
          :key="item.productId"
          :item="item"
          :type="'catalog'"
      />
    </div>
  </div>
</template>

<script>
import Item from './Item.vue'
import { get } from '../libraries/requests'
export default {
  components: { Item },
  data() {
    return {
      items: [],
      url: '/api/catalog', //for Dev
      // url: '/catalog' //for Build
    }
  },
  mounted() {
    get(this.url).then(items => { this.items = items });
    console.log(this)
    console.log(this.$parent)
    console.log(this.$root)
  }
}
</script>

<style>

</style>