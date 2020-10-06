<template>
    <div class="header__cart-drop">
                    <button class="header__basket-button" id="basket-toggler"><img
                            class="header__cart" src="" alt="cart"></button>

                    <div class="header__drop">

                        <!--<div class="header__dropcost">
                        <p>total</p>
                        <p>550</p>
                    </div>
                    <a href="checkout.html" class="header__dropbutton">Checkout</a>
                    <a href="shopping_cart.html" class="header__dropbutton">Go to cart</a>-->
                        <div class="header__dropbox" v-for="item of items" :key="item.productId">
                            <a href="single_page.html">
                                <img :src="item.productImg" class="header__dropimg" alt="" width="85" height="100">
                            </a>
                            <div class="header__dropcontent">
                                <a href="single_page.html">
                                    <h3 class="header__dropname">{{ item.productName }}</h3>
                                    <img src="" alt="">
                                    <p class="header__dropprice">{{ item.amount }} Х {{ item.productPrice }}</p>
                                </a>
                            </div>
                            <button @click="buy(item)" class="header__cart-drop-button fas fa-times-circle"></button>
                        </div>

                    </div>
        </div>
</template>

<script>

// import Item from './item.vue'
export default {
    // components: { Item },
    data() {
        return {
            items: [],
            url: 'https://raw.githubusercontent.com/kellolo/static/master/JSON/basket.json'
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