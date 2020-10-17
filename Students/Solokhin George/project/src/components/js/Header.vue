<template>
    <header class="header container">
        <div class="header-first-part">
            <a href="#" class="logo">Bran<span>d</span></a>
            <div class="search">
                <button class="search__browse" name="search">Browse <i class="fas fa-caret-down"></i></button>
                <div class="dropdown">
                    <div class="dropdown-container">
                        <div>
                            <div>Women</div>
                            <a href="#">Dresses</a>
                            <a href="#">Tops</a>
                            <a href="#">Sweaters/Knits</a>
                            <a href="#">Jackets/Coats</a>
                            <a href="#">Denim</a>
                            <a href="#">Leggings/Pants</a>
                            <a href="#">Skirts/Shorts</a>
                            <a href="#">Accessories</a>
                            <div>Man</div>
                            <a href="#">Tees/Tank tops</a>
                            <a href="#">Shirts/Polos</a>
                            <a href="#">Sweaters</a>
                            <a href="#">Sweatshirts/Hoodies</a>
                            <a href="#">Blazers</a>
                            <a href="#">Jackets/vests</a>
                        </div>
                    </div>
                </div>
                <input type="text" name="search" placeholder="Search for Item...">
                <button><i class="fas fa-search"></i></button>
            </div>
        </div>
        <div class="account-block">
            <!--    <img src="../src/assets/imgs/cart.png" alt="cart" class="header__cart" @click="showBasket = !showBasket">-->
            <i class="fas fa-shopping-cart header__cart" @click="showBasket = !showBasket"></i>
            <Basket v-show="showBasket" ref="basket"/>
            <button name="accountBar" class="header__account-bar">My Account <i class="fas fa-caret-down"></i></button>
        </div>
    </header>
</template>

<script>
    import Basket from "./Basket.vue";
    export default {
        name: "Header",
        components: {Basket},
        data() {
            return {
                showBasket: false,
            }
        },
    }
</script>

<style scoped>

</style>