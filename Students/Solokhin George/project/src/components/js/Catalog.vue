<template>
    <div class="f-items">
        <div class="container">
            <h2>Featured items</h2>
            <p>Shop for items based on what we featured in this week</p>
            <div class="f-blocks">
                <Item
                        v-for="item of items"
                        :key="item.productId"
                        :item="item"
                />
            </div>
        </div>
    </div>
</template>

<script>
    import Item from './Item.vue'
    export default {
        components: { Item },
        data() {
            return {
                items: [],
                url: 'https://raw.githubusercontent.com/kellolo/static/master/JSON/catalog.json'
            }
        },
        methods: {
            _get(url) {
                return fetch(url).then(d => d.json())
            },
        },
        mounted() {
            this._get(this.url).then(items => { this.items = items });
        }
    }
</script>

<style scoped>

</style>