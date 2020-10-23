<template>
    <div class="featured__items">
        <Item 
            v-for="item of catalogItems" 
            :key="item.productId"
            :item="item"
            typeOfItem="catalog"
        />
    </div>
</template>

<script>
import Item from './Item.vue';
// import { get } from '../libraries/requests';
import { mapGetters, mapActions } from 'vuex'
export default {
    components: { Item },
    // data() {
    //     return {
    //         items: [],
    //         url: '/api/catalog'
    //     }
    // },
    computed: mapGetters(['catalogItems']),
    methods: mapActions(['getCatalogItems']),
    mounted() {
        // get(this.url).then(items => { this.items = items });
        this.getCatalogItems();
    }
}
</script>

<style>

</style>