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
import Item from "./item.vue";
export default {
    components: { Item },
    data() {
        return {
            items: [],
            // url: "https://raw.githubusercontent.com/kellolo/static/master/JSON/catalog.json"
            url: "/api/catalog"
        }
    },
    methods: {
        _get(url) {
            return fetch(url).then(d => d.json());
        }
    },
    mounted() {
        this._get(this.url).then(items => { this.items = items; });
        }
    }
</script>

<style>
</style>