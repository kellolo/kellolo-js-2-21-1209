<template>
    <div class="card-link--dropDown" id="basket">
        <div id="basket-items" class="headerCartWrapInAll" >
            <Item 
                v-for="item of items" 
                :key="item.productId"
                :item="item"
                type="basket"
                @rem="remove"
            />
        </div>
        <div>
            <p>TOTAL</p>
            <p>${{ computedTotalSum }}</p>
        </div>
        <button id="checkout">Checkout</button>
        <a href="ShoppingCart.html">Go to cart</a>
    </div>
</template>

<script>
import Item from './Item.vue'

export default {
    components: { Item },
    data() {
        return {
            items: [],
            // url: 'https://raw.githubusercontent.com/kellolo/static/master/JSON/basket.json'
            url: '/api/basket'
            // url: '/basket'
        }
    },
    computed: {
        computedTotalSum: function() {
            let productSum = 0;
            this.items.forEach(function(item) {
                productSum = productSum + (item.amount * item.productPrice);
            })
            return productSum;
        },
    },
    methods: {
        _get(url) {
            return fetch(url).then(d => d.json())
        },
        add(item) {
            let find = this.items.find(el => el.productId == item.productId);
            if (find) {
                find.amount++;
            } else {
                let newItem = Object.assign({}, item, { amount: 1 });
                this.items.push(newItem);
            }
        },
    
        remove(id) {
            let find = this.items.find(el => el.productId == id);
            if (find.amount > 1) {
                find.amount--;
            } else {
                this.items.splice(this.items.indexOf(find), 1);
            }
        }
    },
    mounted() {
        this._get(this.url).then(basket => { this.items = basket.content});
    }
}
</script>

<style>

</style>