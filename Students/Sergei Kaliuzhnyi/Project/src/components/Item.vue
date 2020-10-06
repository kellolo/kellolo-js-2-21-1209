<template>
    <div class="featured__items_block">
        <a href="single_page.html">
            <div class="featured__items_block-image-1 featured__hover"><img class="feturedProduct"
                    :src="item.productImg" alt="product1"></div>
            <h3 class="featured__items_block-name">{{ item.productName }}</h3>
            <p class="featured__items_block-price">{{ item.productPrice }}</p>
        </a>
        <button @click="$parent.$parent.$refs.basket.add(item)" class="featured__add" name="add">
            <i class="fas fa-shopping-cart"></i> Add to Cart
        </button>
    </div>
</template>

<script>
export default {
    props: {
        item: {
            type: Object,
            default: () => ({
                        productName: 'Qwert',
                        productPrice: 100500,
                        productId: '100500qqq',
                        productImg: 'https://placehold.it/80x120',
                    })
        },
        number: {
            type: Number,
            default: 1000
        }
    },
}
</script>

<style>

</style>