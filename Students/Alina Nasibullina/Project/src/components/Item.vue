<template>
    <div>
        <template v-if="type == 'catalog'">
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
        </template>
        <template v-else-if="type == 'basket'">
            <div 
                class="d-flex headerCartWrapIn mb-1 p-2 dropDown--product" 
            >
                <img :src="item.productImg" alt="" width="85" height="100">
                <div>
                    <div>{{ item.productName }}</div>
                    <Raiting />
                    <div class="headerCartWrapPrice">{{ item.amount }} 
                        <span>x</span> ${{ item.productPrice }}
                    </div>

                </div>
                <button 
                    class="fas fa-times-circle" 
                    name="remove"
                    @click="$emit('rem', item.productId)"
                ></button>
            </div>
        </template>
    </div>
</template>

<script>
import Raiting from './Raiting.vue'
export default {
    components: { Raiting },
    props: ['item', 'type']
}
</script>

<style>

</style>