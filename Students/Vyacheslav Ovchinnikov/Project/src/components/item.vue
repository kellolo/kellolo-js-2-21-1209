<template>
    <div>
        <section class="product">
            <a href="#">
                <img class="product__img" :src="item.productImg" alt="photo">
            </a>
            <div class="product__content">
                <h2><a href="#" class="product__name">{{ item.productName }}</a></h2>
                <p class="product__price">$ {{ item.productPrice }}</p>
            </div>
            <button class="product__add"  
                    @click="$parent.$parent.$refs.basket.add(item)"
            >
                Add to Cart
            </button>
            <!-- Корзину не видно -->
            <img src="https://raw.githubusercontent.com/Veledar/STATIK/master/imgs/addToCart.png" alt="Корзина">
        </section>
    </div>
</template>

<script>
export default {
    //props: ['item'],
    props: {
        item: {
            type: Object,
            default: () => ({
                        productName: 'Qwert',
                        productPrice: 100500,
                        productId: '100500qqq',
                        productImg: 'https://placehold.it/80x120'
                    })
        },
    },
}
</script>

<style>

</style>