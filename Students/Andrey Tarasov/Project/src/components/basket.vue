<template>
  <div class="headerCartWrap" id="basket" >
      <div class="headerCartWrapBlock"></div>
      <div class="headerCartWrapInAll">
        <div class="headerCartWrapInAll">
          <div class="d-flex headerCartWrapIn mb-1 p-2" v-for="item of basketItems" :key="item.productId">
            <img :src="item.productImg" alt="" width="85" height="100" />
            <div>
              {{ item.productName }}
            </div>

            <span>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star-half-alt"></i>
            </span>

            <div class="headerCartWrapPrice">
              {{ item.amount }} <span>x</span> ${{ item.productPrice }}
            </div>

            <button
              class="fas fa-times-circle"
              @click="remove(item.productId)"
            ></button>
          </div>
        </div>
        <div>

          <div class="headerCartWrapTotalPrice">
            <div>total</div>
            <div>$500.00</div>
          </div>

          <button type="button" class="productsButtonIndex">Checkout</button>
          <button type="button" class="productsButtonIndex">
            Go to cart
          </button>
        </div>
      </div>
    </div>
</template>

<script>
// import Item from './item.vue'
export default {
  components: { Item },
  data() {
    return {
      items: [],
      showCatalog: true,
      url: 'https://raw.githubusercontent.com/kellolo/static/master/JSON/basket.json'
    }
  },

  methods: {
    get(url) {
			return fetch(url).then(d => d.json())
    },

    add(item) {
			let find = this.item.find(el => el.productId == item.productId);
			if (find) {
				find.amount++;
			} else {
        let newItem = Object.assign( {}, item, { amount: 1 });
				this.item.push(newItem);
			}
		},

		remove(id) {
			let find = this.item.find(el => el.productId == id);
			if (find.amount > 1) {
				find.amount--;
			} else {
				this.item.splice(this.item.indexOf(find), 1);
			}
		},
    
    mounted() {
			this.get(this.url).then(basket => {
			this.items = basket.content
			});
		},
  }
}
</script>

<style>

</style>