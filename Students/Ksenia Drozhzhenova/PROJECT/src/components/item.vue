<template>
  <div>
    

      <div class="products_gal">
        <div class="product_img">
          <img
            class="feturedProduct"
            :src="item.productImg"
            alt="product1"
          /><br />
          <h4>Mango People T-shirt<br /><span>$52.00</span></h4>
        </div>
        <div class="product_hover">
          <button
            class="hover_cart"
            name="add"
            @click="$parent.$parent.$refs.basket.add(item)"
          >
            <p>
              <i class="fa fa-shopping-cart" aria-hidden="true"></i>&nbsp;Add to
              Cart
            </p>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  //props: ["item"],
  props: {
    item: {
      type: Object,
      default: () => ({
        productName: "Qwert",
        productPrice: 100500,
        productId: "100500qqq",
        productImg: "https://placehold.it/80x120",
      }),
    },
    number: {
      type: Number,
      default: 1000,
    },
  },
};
</script>

<style>
</style>