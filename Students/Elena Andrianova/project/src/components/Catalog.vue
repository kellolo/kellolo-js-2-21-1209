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
export default {
  components: {  Item  },
  data() {
    return {
      items: [],
      url: '/api/catalog.json'
    }
  },
  methods: {
    get(url) {
      return fetch(url).then(d => d.json())
    },
  },
  mounted() {
    this.get(this.url).then(items => {this.items = items;})
  }
}
</script>

<style>

</style>