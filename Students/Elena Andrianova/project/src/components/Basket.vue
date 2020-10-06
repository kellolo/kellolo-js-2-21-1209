<template>
  <div id="basket" class="headerCartWrap">
    <div class="headerCartWrapInAll">
      <div class="headerCartWrapIn" v-for="item of items" :key="item.productId">
        <div class="basketItemImg">
          <img :src="item.productImg" alt="productPhoto" width="85" height="100">
        </div>
        <div class="basketInfoProduct">
          <div class="BasketItemName">{{  item.productName  }}</div>
          <span>
             <i class="fas fa-star goldenStar"></i>
             <i class="fas fa-star goldenStar"></i>
             <i class="fas fa-star goldenStar"></i>
             <i class="fas fa-star goldenStar"></i>
             <i class="fas fa-star-half-alt goldenStar"></i>
          </span>
          <div class="headerCartWrapPrice">{{  item.amount  }} <span>x</span> ${{  item.productPrice  }}</div>
        </div>
        <button class="fas fa-times-circle"
                name="remove"
                :data-id="item.productId"
                @click="removeItem(item)"
                >
        </button>
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
//import Item from './Item.vue'
export default {
 // components: {  Item  },
  data() {
    return {
      items: [],
      url: 'https://raw.githubusercontent.com/Alaya95/static/master/JSON/basket.json'
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
  }
}
</script>

<style>

</style>