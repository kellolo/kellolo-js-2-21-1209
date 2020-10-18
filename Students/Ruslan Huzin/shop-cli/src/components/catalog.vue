<template>
    <div class="row" id="catalog">
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
import Item from './item.vue'
import { get } from '../libriaries/requests'
export default {
    components: { Item },
    data() {
        return{
            items: [],
            /* catalogUrl: 'https://raw.githubusercontent.com/kellolo/static/master/JSON/catalog.json', */
            catalogUrl: '/api/catalog', /* for dev */
            /* catalogUrl: '/catalog', for build */ 
        }
    },
    mounted(){
        get(this.catalogUrl).then(items => {
            this.items = items
        })
    }
}

</script>

<style>

</style>