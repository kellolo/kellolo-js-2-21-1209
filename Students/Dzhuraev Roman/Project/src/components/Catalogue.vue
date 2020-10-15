<template>
  <div id="catalogue">
    <div class="catalogue__item">
      <Item
          v-for="item of items"
          :key="item.productId"
          :item="item"
      />
    </div>
  </div>
</template>

<script>
export default {
name: "catalogue",
  data() {
    return {
      items: [],
      url: 'https://raw.githubusercontent.com/kellolo/static/master/JSON/catalog.json'
    }
  },
  methods: {
    _get(url) {
      return fetch(url).then(d => d.json())
    },
  },
  mounted() {
    this._get(this.url).then(items => { this.items = items });
  }
}
</script>

<style scoped>

</style>