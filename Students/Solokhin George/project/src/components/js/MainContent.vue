<template>
    <div>
    <div class="topPicture">
        <div class="container">
            <div class="topPicture_line"></div>
            <div class="topPictureText">
                <h1>THE BRAND</h1>
                <h1>OF LUXERIOUS <span>FASHION</span></h1>
            </div>
        </div>
    </div>
    <div class="hot-deal">
        <div class="container">
            <div class="hot-deal-content" v-for="image of images">
                <a href="#">
                    <div class="hd-textbox">
                        <p>hot deal</p>
                        <h2>for men</h2>
                    </div>
                </a>
                <a href="#"><img :src="image" alt="men"></a>
            </div>
        </div>
    </div>
    <Catalog/>
    <button class="browse">Browse All Product<i class="fas fa-long-arrow-alt-right"></i></button>
    <div class="offer">
        <div class="container">
            <div class="offer-textbox">
                <h1>30% <span>OFFER</span></h1>
                <h2>FOR WOMEN</h2>
            </div>
            <div class="offer-blocks">
                <div class="offer-content">
<!--                    <img src="../src/assets/imgs/delivery.svg" alt="delivery">-->
                    <div class="content-textbox">
                        <h3>Free Delivery</h3>
                        <p>Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive
                            models.</p>
                    </div>
                </div>
                <div class="offer-content">
<!--                    <img src="../src/assets/imgs/sale.svg" alt="sale">-->
                    <div class="content-textbox">
                        <h3>Sales & discounts</h3>
                        <p>Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive
                            models.</p>
                    </div>
                </div>
                <div class="offer-content">
<!--                    /<img src="../src/assets/imgs/quality.svg" alt="quality">-->
                    <div class="content-textbox">
                        <h3>Quality assurance</h3>
                        <p>Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive
                            models.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
    import Catalog from "./Catalog.vue";
    export default {
        name: "MainContent",
        components: {Catalog},
        data() {
            return {
                showBasket: false,
                images: [
                    "https://raw.githubusercontent.com/GeorgeCybersport/JavaScript-Basic/master/offer1.jpg",
                    "https://raw.githubusercontent.com/GeorgeCybersport/JavaScript-Basic/master/offer2.jpg",
                    "https://raw.githubusercontent.com/GeorgeCybersport/JavaScript-Basic/master/offer3.jpg",
                    "https://raw.githubusercontent.com/GeorgeCybersport/JavaScript-Basic/master/offer4.jpg"
                ],
            }
        },
    }
</script>

<style scoped>

</style>