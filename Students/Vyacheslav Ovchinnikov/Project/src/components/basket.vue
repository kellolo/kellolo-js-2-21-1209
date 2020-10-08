<template>
    <div class="headerCartWrapInAll"> 
        <div class="d-flex headerCartWrapIn" 
             v-for="item of items"
             :key="item.productId"
        >
            <a href="#" class="d-flex ">
                <img :src="item.productImg" alt="photo">
                <div>
                    <div>{{ item.productName }}</div>
                    <span>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star-half-alt"></i>
                    </span>
                    <div class="headerCartWrapPrice">{{item.amount}} <span>x</span> $ {{ item.productPrice }}</div>
                </div>
            </a>
            <button class="fas fa-times-circle" 
                    @click="remove(item.productId)">
            </button>
        </div>
        <div class="headerCartWrapTotalPrice">
            <div>total</div>
            <div>$ {{ productPrices }}</div>
        </div>
        <button type="button" class="button productsButtonIndex">Checkout</button>
        <button type="button" class="button productsButtonIndex">Go to cart</button>
    </div>
</template>

<script>
// import Item from './item.vue'
export default {
    // components: { Item },
    data() {
        return {
            productPrices: 0,
            items: [],
            url: 'https://raw.githubusercontent.com/kellolo/static/master/JSON/basket.json'
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
        this._get(this.url).then(basket => { 
            this.items = basket.content;
            console.log(this.items)
            this.items.forEach(el => {
                this.items.productPrices += +this.productPrice;
                console.log(this.items)
            })
        });
    }
}
</script>

<style>

</style>