<template>
    <div class="items__catalog">
        <div href="shoppingCart.html" class="catalog__product">
            <Item 
                v-for="item of items"
                :key="item.productId"
                :item="item"
            />
        </div>           
    </div>
</template>

<script>
import Item from "./Item.vue"
export default {
    components: { Item },
    data() {
        return {
            items: [],
            url: 'https://raw.githubusercontent.com/xorrou1/responses/master/JSON%20carts%20marcet/catalog.json'
        }
    },  
    methods: {
        get(url) {
            return fetch(url).then(d => d.json());
        }
    }, 
    mounted(){
        this.get(this.url).then(items => { this.items = items} );
                 
    }
}

</script>

<style>

</style>