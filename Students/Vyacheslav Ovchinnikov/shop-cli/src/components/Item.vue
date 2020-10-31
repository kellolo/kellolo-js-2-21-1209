<template>
  <div>
    <template v-if="type == 'catalog'">
      <section class="product">
        <a href="#">
          <img class="product__img" :src="item.productImg" alt="photo" />
        </a>
        <div class="product__content">
          <h2>
            <a href="#" class="product__name">{{ item.productName }}</a>
          </h2>
          <p class="product__price">$ {{ item.productPrice }}</p>
        </div>
        <button
          class="product__add"
          @click="$parent.$parent.$parent.$refs.header.$refs.basket.add(item)"
        >
          Add to Cart
          <img
            class="card__photo"
            src="https://raw.githubusercontent.com/Veledar/STATIK/master/imgs/addToCart.png"
            alt="Корзина"
          />
        </button>
      </section>
    </template>
    <template v-else-if="type == 'basket'">
      <div class="d-flex headerCartWrapIn">
        <a href="#" class="d-flex">
          <img :src="item.productImg" alt="photo" />
          <div>
            <div>{{ item.productName }}</div>
            <span>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star-half-alt"></i>
            </span>
            <div class="headerCartWrapPrice">
              {{ item.amount }} <span>x</span> $ {{ item.productPrice }}
            </div>
          </div>
        </a>
        <button
          class="fas fa-times-circle"
          @click="$emit('rem', item.productId)"
        ></button>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  props: ["item", "type"],
};
</script>

<style>
</style>