<template>
    <div class="headerCartWrap" id="basket">
        <div class="headerCartWrapBlock"></div>
        <div class="headerCartWrapInAll">
            <div>
                <Item 
                    v-for="item of items"
                    :key="item.productId"
                    :item="item"
                    type="basket"
                    @rem ="basketRemove"
                />
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
import Item from './item.vue'
import { get, post, put, del } from '../libriaries/requests'
export default {
    components: { Item },
    data() {
        return{
            items: [],
            /* basketUrl: 'https://raw.githubusercontent.com/kellolo/static/master/JSON/basket.json', */
            basketUrl: '/api/basket',
            /* basketUrl: '/basket', for build */ 
        }
    },
    methods:{
        basketAdd(item) {
            let find = this.items.find(el => el.productId == item.productId);
            if (find) {
                put(`/api/basket/${find.productId}`,{ amount:1 })
                .then(status => {
                    if (status.status){
                        find.amount++;
                    }
                })
            } else {
                let newItem = Object.assign({}, item, { amount:1 });
                post('/api/basket', newItem)
                .then(status => {
                    if (status.status){
                        this.items.push(newItem);
                    }
                })
            }
        },
        basketRemove(id) {
            let find = this.items.find(el => el.productId == id);
            if (find.amount > 1) {
                put(`/api/basket/${id}`,{ amount:-1 })
                .then(status =>{
                    if (status.status){
                        find.amount--;
                    }
                })
            } else {
                del(`/api/basket/${id}`)
                .then(status => {
                    if (status.status){
                        this.items.splice(this.items.indexOf(find), 1);
                    }
                })
            }
        }
    },
    mounted(){
        get(this.basketUrl).then(items => {
            this.items = items.content
        })
    }
}
</script>

<style>

</style>