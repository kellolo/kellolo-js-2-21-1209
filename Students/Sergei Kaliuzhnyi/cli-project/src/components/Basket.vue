<template>
    <div class="header__cart-drop">
        <div class="header__drop">
            <Item 
                v-for="item of basketItems" 
                :key="item.productId"
                :item="item"
                typeOfItem="basket"
            />
            <div class="header__dropcost">
                <p>total</p>
                <p>{{ }}</p>
            </div>
            <router-link to="/checkout"> <a href="checkout.html" class="header__dropbutton">Checkout</a></router-link>
            <a href="shopping_cart.html" class="header__dropbutton">Go to cart</a>                      
        </div>
    </div>
</template>

<script>
import Item from './Item.vue'
// import { get, post, put, del } from '../libraries/requests';
import { mapGetters, mapActions } from 'vuex'

// import Item from './item.vue'
export default {
    components: { Item },
    // data() {
    //     return {
    //         items: [],
    //         url: '/api/basket'
    //     }
    // },
    computed: mapGetters(['basketItems']),
    // {
    //     // getSum(){
    //     //     let result = 0;
    //     //     this.items.map (el => result += (el.productPrice * el.amount));
    //     //     return result;
    //     // }
    // },
    methods: mapActions(['getBasketItems']),
    // {
        // add(item) {
        //     let find = this.items.find(el => el.productId == item.productId);
        //     if (find) {
        //         put(`/api/basket/${find.productId}`, { amount: 1 })
        //         .then(status => {
        //             if (status.status) {
        //                 find.amount++;
        //             }
        //         })
        //     } else {
        //         let newItem = Object.assign({}, item, { amount: 1 });
        //         post('/api/basket', newItem)
        //         .then(status => {
        //             if (status.status) {
        //                 this.items.push(newItem);
        //             }
        //         })
        //     }
        // },
    
    //     remove(id) {
    //         let find = this.items.find(el => el.productId == id);
    //         if (find.amount > 1) {
    //             put(`/api/basket/${id}`, { amount: -1 })
    //             .then(status => {
    //                 if (status.status) {
    //                     find.amount--;
    //                 }
    //             })
    //         } else {
    //             del(`/api/basket/${id}`)
    //             .then(status => {       /*{ status: true }*/
    //                 if (status.status) {
    //                     this.items.splice(this.items.indexOf(find), 1);
    //                 }
    //             })
    //         }
    //     }
    // },
    async mounted() {
        // get(this.url).then(basket => { this.items = basket.content });
        this.getBasketItems()
    }
}
</script>

<style>

</style>