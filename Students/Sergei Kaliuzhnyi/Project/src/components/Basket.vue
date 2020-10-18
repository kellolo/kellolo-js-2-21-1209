<template>
    <div class="header__cart-drop">
        <div class="header__drop">
            <Item 
                v-for="item of items" 
                :key="item.productId"
                :item="item"
                typeOfItem="basket"
            />
            <div class="header__dropcost">
                <p>total</p>
                <p>{{ getSum }}</p>
            </div>
            <a href="checkout.html" class="header__dropbutton">Checkout</a>
            <a href="shopping_cart.html" class="header__dropbutton">Go to cart</a>                      
        </div>
    </div>
</template>

<script>
import Item from './Item.vue'

// import Item from './item.vue'
export default {
    components: { Item },
    data() {
        return {
            items: [],
            url: '/api/basket'
        }
    },
    computed:{
        getSum(){
            let result = 0;
            this.items.map (el => result += (el.productPrice * el.amount));
            return result;
        }
    },
    methods: {
        _get(url) {
            return fetch(url).then(d => d.json())
        },
        add(item) {
            console.log(item)
            let find = this.items.find(el => el.productId == item.productId);
            if (find) {
                find.amount++;
            } else {
                let newItem = Object.assign({}, item, { amount: 1 });
                console.log(newItem)
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
        this._get(this.url).then(basket => { this.items = basket.content });
    }
}
</script>

<style>

</style>