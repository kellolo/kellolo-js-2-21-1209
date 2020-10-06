<template>
  <div>
    <div class="item">
      <div class="itemImg">
        <div class="itemImgHover">
          <button
              name="add"
              @click="add(item)"
              :key="item.productId"
              :item="item"
          >
            <img src="../src/assets/imgs/cart2.png" alt="imgCart">
            Add to Cart
          </button>
        </div>
        <img :src="item.productImg" alt="imgProduct">
      </div>
      <div class="itemText">
        <a href="#">{{item.productName}}</a>
        <p> $ {{item.productPrice}}</p>
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