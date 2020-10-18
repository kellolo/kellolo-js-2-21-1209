<template>
    <div class="headerCartWrap" id="basket">
        <div class="headerCartWrapBlock"></div>
            <div class="headerCartWrapInAll" >
                <div class="headerCartWrapInAll">
                    <Item 
                        v-for="item of items"
                        :key="item.productId" 
                        :item="item"
                        type="basket"
                        @rem="remove" 
                    />      
                </div>
            </div>

            <div class="headerCartWrapTotalPrice">
                <div>total</div>
                <div>$500.00</div>
            </div>

            <button type="button" class="productsButtonIndex">Checkout</button>
            <button type="button" class="productsButtonIndex">Go to cart</button>
    </div>
</template>

<script>
import Item from './item.vue'
export default {
    components: { Item },
    data() {
        return {
            items: [],
            //url: 'https://raw.githubusercontent.com/kellolo/static/master/JSON/basket.json'
            url: '/api/basket'
        }
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
                let newItem = Object.assign({}, item, { amount: 1});
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
        },
    },
    mounted() {
        this._get(this.url).then(basket => { this.items = basket.content });
    }
}
</script>

<style>

</style>