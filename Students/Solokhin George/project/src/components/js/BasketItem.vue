<template>
    <div class="product-drop">
        <div class="sell-block">
            <img :src="item.productImg" alt="pic">
            <div class="product-drop-textbox">
                <div>{{item.productName}}</div>
                <span>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star-half-alt"></i>
                                </span>
                <div> {{item.amount}} <span>x</span> ${{item.productPrice}}</div>
            </div>
        </div>
        <div class="action">
            <button
                    class="fas fa-times-circle"
                    @click="$parent.remove(item.productId)">
            </button>
        </div>
    </div>
</template>

<script>
    export default {
        // props: ['item'],
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

<style scoped>

</style>