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
import Item from './Item.vue';
import { get } from '../libraries/requests';
export default {
    components: { Item },
    data() {
        return {
            items: [],
            url: '/api/catalog'
        }
    },
    methods: {
        
    },
    mounted() {
        get(this.url).then(items => { this.items = items });
    }
}
</script>

<style>

</style>