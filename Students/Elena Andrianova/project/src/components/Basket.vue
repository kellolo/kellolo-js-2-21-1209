<template>
  <div id="basket" class="headerCartWrap">
    <div class="headerCartWrapInAll">
     <item
     v-for="item of items"
     :key="item.productId"
     :item="item"
     :type="'basket'"
     />


      <div class="headerCartWrapTotalPrice">
        <div>total</div>
        <div>$ {{ totalPrice }}</div>
      </div>
      <button type="button" class="productsButtonIndex">Checkout</button>
      <button type="button" class="productsButtonIndex">Go to cart</button>
    </div>
  </div>
</template>

<script>
import Item from './Item.vue'
export default {
  components: {  Item  },
  data() {
    return {
      items: [],
      url: '/api/basket.json'
    }
  },
  methods: {
    get(url) {
      return fetch(url).then(d => d.json())
    },
    add(item) {
      console.log(item)
      let find = this.items.find(el => el.productId == item.productId);
      if (find) {
        find.amount++;
      } else {
        let newItem = Object.assign({}, item, { amount: 1 });
        console.log(newItem);
        this.items.push(newItem);
      }
    },
    removeItem(item) {
      let find = this.items.find(el =>  el.productId == item.productId);
      if (find.amount > 1) {
        find.amount--;
      } else {
        this.items.splice(this.items.indexOf(find), 1);
      }
    },
  },
  mounted() {
    this.get(this.url).then(basket => {this.items = basket.content})
  },
  computed: {
    totalPrice() {
      let total = 0;

      for (let item of this.items) {
        total +=  +item.amount * +(item.productPrice);
      }

      return total;
    }
  }
}
</script>

<style>

</style>