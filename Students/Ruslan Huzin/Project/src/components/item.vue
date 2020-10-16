<template>
    <div>
        <template v-if="type=='catalog'">
            <div class="feturedItem">
                <div class="feturedItem fetured_items__link">
                    <div class="feturedImgWrap">
                        <div class="feturedBuy">
                            <button class="hover_cart" name="add"
                                @click="$parent.$parent.$refs.basketComponent.basketAdd(item)">
                                <i class="fas fa-shopping-cart"></i> Add to Cart
                            </button>
                        </div>
                        <img class="feturedProduct" :src="item.productImg" alt="product1">
                    </div>
                    <div>
                        <div
                            class="feturedBuySm d-flex flex-column justify-content-around align-items-center align-items-md-start">
                            <div class="feturedItemName">{{item.productName}}</div>
                            <div class="feturedItemPrice">${{item.productPrice}}</div>
                        </div>
                    </div>
                </div>
            </div>
        </template>
        <template v-else-if="type=='basket'">
            <div class="d-flex headerCartWrapIn mb-1 p-2">
                <img :src="item.productImg" alt="" width="85" height="100">
                <div>
                    <div>{{item.productName}}</div>
                    <span>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star-half-alt"></i>
                    </span>
                    <div class="headerCartWrapPrice">{{item.amount}}
                        <span>x</span> ${{item.productPrice}}
                    </div>
                    <button 
                    class="fas fa-times-circle" 
                    name="remove"
                    @click="$emit('rem', item.productId)"
                    >
                </button>
                </div>
                        <!-- Цепляемся за метод родителя напрямую -->
            <!--<button class="fas fa-times-circle" name="remove"
                    @click="$parent.basketRemove(item.productId)">
                </button> -->
                    <!-- Создаем пользовательское событие -->

            </div>
        </template>
    </div>
</template>

<script>
    export default {
        props: ['item', 'type'],
    }
</script>