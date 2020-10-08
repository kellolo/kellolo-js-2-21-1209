<template>
<section class="b-shoplist container" id="catalog">
    <div class="b-item" v-for="itemsCatalog of itemsCatalog" :key="itemsCatalog.productId">
        <div class="b-item-pic">
            <img :src="itemsCatalog.productImg" alt="1">
        </div>
        <div class="b-item-txt">
            <span>{{ itemsCatalog.productName }}</span>
            <span>${{ itemsCatalog.productPrice }}.00</span>
        </div>
        <div class="b-item-overlay">
            <button @click="$parent.$refs.basket.add(itemsCatalog)">
                <svg width="1em" height="1em" viewbox="0 0 16 16" class="bi bi-basket3" fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                         d="M10.243 1.071a.5.5 0 0 1 .686.172l3 5a.5.5 0 1 1-.858.514l-3-5a.5.5 0 0 1 .172-.686zm-4.486 0a.5.5 0 0 0-.686.172l-3 5a.5.5 0 1 0 .858.514l3-5a.5.5 0 0 0-.172-.686z" />
                    <path
                        d="M0 6.5A.5.5 0 0 1 .5 6h15a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1zM.81 9c0 .035.004.07.011.105l1.201 5.604A1 1 0 0 0 3 15.5h10a1 1 0 0 0 .978-.79l1.2-5.605A.495.495 0 0 0 15.19 9h-1.011L13 14.5H3L1.821 9H.81z" />
                </svg>
                Add to Cart
            </button>
        </div>
    </div>
</section>
</template>

<script>
export default {
    data(){ 
        return{
            catalogUrl: 'https://raw.githubusercontent.com/kulyamzin/GeekBrain/master/Files/GeekBrains/catalog.json',
            itemsCatalog: []
            }
        },
    methods:{
        get(url) { 
            return fetch(url).then(d => d.json());
            },
    },
    mounted() {
        this.get(this.catalogUrl).then(items => { this.itemsCatalog = items; });
    }
}
</script>

<style>

</style>
