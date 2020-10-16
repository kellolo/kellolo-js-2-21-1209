<template>
    <div class="dropdown-buy" v-show="showBasket">
        <div class="cart-products">
            <BasketItem
                    v-for="item of items"
                    :key="item.productId"
                    :item="item"
            />

        </div>
        <div class="total-price-drop">
            <div class="total-drop-textbox">
                <div>total</div>
                <div id="total-cart-price">{{totalPrice}}$</div>
            </div>
            <button>Checkout</button>
            <button>Go to cart</button>
        </div>
    </div>
</template>

<script>
    import BasketItem from "./BasketItem.vue";
    export default {
        components: {BasketItem},
        data() {
            return {
                totalPrice: null,
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
                this.totalPrice+=item.productPrice;
            },

            remove(id) {
                let find = this.items.find(el => el.productId == id);
                if (find.amount > 1) {
                    find.amount--;
                } else {
                    this.items.splice(this.items.indexOf(find), 1);
                }
                this.totalPrice-=find.productPrice;
            }
        },
        mounted() {
            this._get(this.url).then(basket => {
                this.items = basket.content;
                this.totalPrice=basket.totalPrice;
            });
        }
    }
</script>

<style scoped>

</style>