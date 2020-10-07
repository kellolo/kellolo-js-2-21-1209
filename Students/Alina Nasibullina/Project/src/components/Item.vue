<template>
    <div>
        <div class="feturedItem">
            <div class="feturedItem fetured_items__link">
                <div class="feturedImgWrap">
                    <div class="feturedBuy">
                        <button
                            class="hover_cart"
                            name="add"
                            @click="$parent.$parent.$refs.basket.add(item)"
                        >
                            <i class="fas fa-shopping-cart"></i> Add to Cart
                        </button>
                    </div>
                    <img class="feturedProduct" :src="item.productImg" alt="product1">
                </div>
                <div>
                    <div class="feturedBuySm d-flex flex-column justify-content-around align-items-center align-items-md-start">
                        <div class="feturedItemName">{{ item.productName }}</div>
                        <div class="feturedItemPrice price">${{ item.productPrice }}</div>
                        <Raiting />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Raiting from './Raiting.vue'
export default {
    components: { Raiting },
    props: {
        item: {
            type: Object,
            // default: () => ({
            //             productName: 'Qwert',
            //             productPrice: 100500,
            //             productId: '100500qqq',
            //             productImg: 'https://placehold.it/80x120',
            //         })
        },
    }
}
</script>

<style>

</style>