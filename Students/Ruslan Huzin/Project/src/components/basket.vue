<template>
    <div class="headerCartWrap" id="basket">
        <Item 
            v-for="item of items"
            :key="item.productId"
            :item="item"
        />
        <div class="headerCartWrapBlock"></div>
        <div class="headerCartWrapInAll">
            <div id="basket-items" class="headerCartWrapInAll">
            </div>

            <div class="headerCartWrapTotalPrice">
                <div>total</div>
                <div>$500.00</div>
            </div>

            <button type="button" class="productsButtonIndex">Checkout</button>
            <button type="button" class="productsButtonIndex">Go to cart</button>
        </div>
    </div>

</template>

<script>
import Item from './basket_item.vue'
export default {
    components: { Item },
    data() {
        return{
            items: [],
            basketUrl: 'https://raw.githubusercontent.com/kellolo/static/master/JSON/basket.json',
        }
    },
    methods:{
        get(url) {
            return fetch(url).then(d => d.json())
        },
        basketAdd(item) {
            let find = this.items.find(el => el.productId == item.productId);
            if (find) {
                find.amount++;
            } else {
                this.items.push(Object.assign({}, item, {
                    amount: 1
                }));
            }
        },
        basketRemove(id) {
            let find = this.items.find(el => el.productId == id);
            if (find.amount > 1) {
                find.amount--;
            } else {
                this.items.splice(this.items.indexOf(find), 1);
            }
        }
    },
    mounted(){
        this.get(this.basketUrl).then(items => {
            this.items = items.content
        })
    }
}
</script>

<style>

</style>