<template>
  <div>
    <div
        class="col-10 offset-1 col-sm-6 offset-sm-0 col-md-4 col-lg-3 feturedItems"
        v-for="item of catalogItems"
        :key="item.productId"
      >
        <div class="feturedItem">
          <div class="feturedImgWrap">
            <div class="feturedBuy">
              <button name="add" @click="$parent.$parent.$refs.basket.add(item)">
                <div><i class="fas fa-shopping-cart"></i> Add to Cart</div>
              </button>
            </div>
            <img class="feturedProduct" :src="item.productImg" alt="product1" />
          </div>
          <div>
            <div
              class="feturedBuySm d-flex flex-column justify-content-around align-items-center align-items-md-start"
            >
              <div class="feturedItemName">{{ item.productName }}</div>
              <div class="feturedItemPrice">${{ item.productPrice }}</div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  props: ['item']
}
</script>

<style>

</style>