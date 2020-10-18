<template>
        <div class="f-content">
            <div class="visible">
                <a href="#"><img :src="item.productImg" alt="l2"></a>
                <div class="f-textbox">
                    <a href="#"><p>{{item.productName}}</p>
                        <p>${{item.productPrice}}</p></a>
                </div>
            </div>
            <div class="shadow">
                <div class="shadow_box">
                    <a><button
                            class="add" @click="$parent.$parent.$refs.basket.add(item)">
                        <img class="add" src="" alt="cart1"><p class="add">Add to card</p></button></a>
                </div>
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