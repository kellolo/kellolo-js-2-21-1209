<template>
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
        </div>
        
        <button class="fas fa-times-circle" name="remove"
            @click="$parent.$parent.$refs.basketComponent.basketRemove(item.productId)"></button>
    </div>
</template>

<script>
export default {
    props: ['item'],
    
}
</script>

<style>

</style>