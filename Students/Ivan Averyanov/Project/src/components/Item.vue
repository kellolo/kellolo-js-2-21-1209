<template>
        <div>
            <div class="catalog__mango">
            <img class="mango" :src="item.productImg" alt="mango">
                <button type="button" class="AddToCart AddToCart-clic "
                    name = "add"
                    v-on:click ="$parent.$parent.$refs.basket.add(item)">
                    <img class="AddToCart-clic" name = "add" src="https://raw.githubusercontent.com/xorrou1/responses/master/ProjectFiles/img/FeturedItems/AddToCart.png" alt="AddToCart"><span class="AddToCart-clic" name = "add">Add to Cart</span>
                    </button>
                </div>
            <div class="product__name">{{item.productName}}</div>
            <div class="product__price">${{item.productPrice}}</div>
        </div>
</template>

<script>
export default {
        props: {
            type: Object,
            default: () => ({
                productName:'testName',
                productPrice: '99999',
                productId: '001',
                productImg:'https://placehold.it/80x120'
            })
        }
}
</script>
