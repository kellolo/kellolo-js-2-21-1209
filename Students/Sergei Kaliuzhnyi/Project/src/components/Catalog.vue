<template>
    <div class="featured__items">
        <Item 
            v-for="item of items" 
            :key="item.productId"
            :item="item"
            typeOfItem="catalog"
        />
    </div>
</template>

<script>
import Item from './Item.vue'
export default {
    components: { Item },
    data() {
        return {
            items: [],
            url: '/api/catalog'
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