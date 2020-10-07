<template>

<div>
    <template v-if="typeOfItem == 'catalog'">

        <div class="featured__items_block">
            <a href="single_page.html">
                <div class="featured__items_block-image-1 featured__hover"><img class="feturedProduct" :src="item.productImg" alt="product1"></div>
                <h3 class="featured__items_block-name">{{ item.productName }}</h3>
                <p class="featured__items_block-price">{{ item.productPrice }}</p>
            </a>
            <button @click="$parent.$parent.$refs.basket.add(item)" class="featured__add" name="add">
                <i class="fas fa-shopping-cart"></i> Add to Cart
            </button>
        </div>

    </template>

    <template v-else-if="typeOfItem =='basket'">
        <div class="header__dropbox">
            <a href="single_page.html">
                <img :src="item.productImg" class="header__dropimg" alt="" width="85" height="100">
            </a>
            <div class="header__dropcontent">
                <a href="single_page.html">
                    <h3 class="header__dropname">{{ item.productName }}</h3>
                    <img src="" alt="">
                    <p class="header__dropprice">{{ item.amount }} Х {{ item.productPrice }}</p>
                </a>
            </div>
            <button @click="$parent.$parent.$refs.basket.remove(item.productId)" class="header__cart-drop-button fas fa-times-circle"></button>
        </div>
    </template>
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
        },
        typeOfItem: {
            type: String
        }
    },
}
</script>

<style>

</style>