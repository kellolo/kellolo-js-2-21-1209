<template>
    <div>
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
                @click="$parent.remove(item.productId)"
            ></button>
        </div>
    </div>
</template>

<script>
import Raiting from './Raiting.vue'
export default {
    components: { Raiting },
    props: {
        item: {
            type: Object
        }
    }
}
</script>

<style>

</style>