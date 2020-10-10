<template>
    <div id="catalog">
      <div class="feturedItems w-100 d-flex flex-wrap justify-content-around">
            <Item 
                v-for="item of items" 
                :key="item.productId"
                :item="item"
                type="catalog"
            />
      </div>
  </div>
</template>

<script>
import Item from './Item.vue'
export default {
    components: { Item },
    data() {
        return {
            items: [],
            // url: 'https://raw.githubusercontent.com/AlinaNasibullina/static/master/JSON/catalog.json'
            url: '/api/catalog'
            // url: '/catalog'
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

<style>

</style>