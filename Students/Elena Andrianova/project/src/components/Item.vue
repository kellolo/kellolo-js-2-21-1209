<template>
  <div>


    <tepmlate v-if="type == 'catalog'">
        <div class="item">
            <div class="itemImg">
              <div class="itemImgHover">
                <button
                    name="add"
                    @click="$parent.$parent.$refs.basket.add(item)"
                    :key="item.productId"
                    :item="item"
                >
                  <img src="https://github.com/Alaya95/static/blob/master/img/JS1_shop/cart2.png?raw=true" alt="imgCart">
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
    </tepmlate>

    <template v-if="type == 'basket'">
        <div class="headerCartWrapIn" >
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
                  @click="$parent.$parent.$refs.basket.removeItem(item)"
          >
          </button>
        </div>
    </template>

  </div>
</template>
<script>
export default {
  //props: ['item']
  props: {
    type: {
      type:String,
      default: 'catalog'
    },
    item: {
      type: Object
    }
  },
  computedWrapperClassName() {
    return `${this.type}`
  },


}
</script>
<style>

</style>