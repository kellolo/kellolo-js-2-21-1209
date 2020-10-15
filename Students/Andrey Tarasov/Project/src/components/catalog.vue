<template>
  <div class="row" id="catalog">
    <div class="col-10 offset-1 col-sm-6 offset-sm-0 col-md-4 col-lg-3 feturedItems">
    <Item v-for="item of catalogItems" :key="item.productId" :item="item" />
    </div>
  </div>
</template>

<script>
// import Item from './item.vue'
export default {
  components: { Item },
  data() {
    return {
      items: [],
      showCatalog: true,
      url: 'https://raw.githubusercontent.com/kellolo/static/master/JSON/catalog.json'
    }
  },

  methods: {
    get(url) {
			return fetch(url).then(d => d.json())
    },
    
    mounted() {
			this.get(this.url).then(items => {
			this.items = items
			})
		},
  }
}
</script>

<style>

</style>