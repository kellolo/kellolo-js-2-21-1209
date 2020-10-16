<template>
  <div id="basket" class="headerCartWrap">

     <item
       v-for="item of items"
       :key="item.productId"
       :item="item"
       :type="'basket'"
       @rem="remove"
     />

      <div class="headerCartWrapTotalPrice">
        <div>total</div>
        <div>$ {{ totalPrice }}</div>
      </div>
      <button type="button" class="basketCartBtn">Checkout</button>
      <button type="button" class="basketCartBtn">Go to cart</button>

  </div>
</template>

<script>


import Item from './item.vue'
import { get, post, put, del } from '../libraries/requests'
export default {
  components: { Item },
  data() {
    return {
      items: [],
      url: '/api/basket' //dev
      // url: '/basket' //build
    }
  },
  methods: {
    add(item) {
      let find = this.items.find(el => el.productId == item.productId);
      if (find) {
        put(`/api/basket/${find.productId}`, { amount: 1 })
            .then(status => {       /*{ status: true }*/
              if (status.status) {
                find.amount++;
              }
            })
      } else {
        let newItem = Object.assign({}, item, { amount: 1 });
        post('/api/basket', newItem)
            .then(status => {       /*{ status: true }*/
              if (status.status) {
                this.items.push(newItem);
              }
            })
      }
    },

    remove(id) {
      let find = this.items.find(el => el.productId == id);
      if (find.amount > 1) {
        put(`/api/basket/${id}`, { amount: -1 })
            .then(status => {       /*{ status: true }*/
              if (status.status) {
                find.amount--;
              }
            })
      } else {
        del(`/api/basket/${id}`)
            .then(status => {       /*{ status: true }*/
              if (status.status) {
                this.items.splice(this.items.indexOf(find), 1);
              }
            })
      }
    }
  },
  mounted() {
    get(this.url).then(basket => { this.items = basket.content });
  },
  computed: {
    totalPrice() {
      let total = 0;

      for (let item of this.items) {
        total +=  +item.amount * +(item.productPrice);
      }

      return total;
    }}
}
</script>

<style>

</style>