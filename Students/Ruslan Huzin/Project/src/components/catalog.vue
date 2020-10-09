<template>
    <div class="row" id="catalog">
        <Item 
            v-for="item of items" 
            :key="item.productId"
            :item="item"
        />
    </div>
</template>

<script>
import Item from './item.vue'
export default {
    components: { Item },
    data() {
        return{
            items: [],
            catalogUrl: 'https://raw.githubusercontent.com/kellolo/static/master/JSON/catalog.json',
        }
    },
    methods:{
        get(url) {
            return fetch(url).then(d => d.json())
        },
    },
    mounted(){
        this.get(this.catalogUrl).then(items => {
            this.items = items
        })
    }
}

</script>

<style>

</style>