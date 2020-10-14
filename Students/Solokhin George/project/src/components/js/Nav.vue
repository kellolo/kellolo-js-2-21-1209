<template>
    <nav class="topNav">
        <div class="nav-block">
            <a href="index.html">Home</a>
        </div>
        <div class="nav-block" v-for="name of linkNames">
            <a href="#">{{name}}</a>
            <Navdrop/>
        </div>
    </nav>
</template>

<script>
    import Navdrop from "./Navdrop.vue";
    export default {
        name: "Nav",
        components: {Navdrop},
        data(){
            return {
                linkNames: ["man", "woman", "kids", "ACCOSERIESE", "FEATURED", "HOT DEAL"],
            }
        }
    }
</script>

<style scoped>

</style>