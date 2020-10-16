<template>
    <div>
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

    <div class="headerLine"></div>

    <nav class="topNav">
        <div class="nav-block">
            <a href="index.html">Home</a>
        </div>
        <div class="nav-block" v-for="name of linkNames">
            <a href="#">{{name}}</a>
            <Navdrop/>
        </div>
    </nav>

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
                    <img src="../src/assets/imgs/delivery.svg" alt="delivery">
                    <div class="content-textbox">
                        <h3>Free Delivery</h3>
                        <p>Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive
                            models.</p>
                    </div>
                </div>
                <div class="offer-content">
                    <img src="../src/assets/imgs/sale.svg" alt="sale">
                    <div class="content-textbox">
                        <h3>Sales & discounts</h3>
                        <p>Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive
                            models.</p>
                    </div>
                </div>
                <div class="offer-content">
                    <img src="../src/assets/imgs/quality.svg" alt="quality">
                    <div class="content-textbox">
                        <h3>Quality assurance</h3>
                        <p>Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive
                            models.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="subscribe-box">
        <div class="container">
            <div class="left-part">
                <div class="quote">
                    <img src="../src/assets/imgs/Layer_40.png" alt="face">
                    <p>“Vestibulum quis porttitor dui! Quisque viverra nunc mi,
                        a pulvinar purus condimentum a. Aliquam condimentum mattis neque sed pretium”</p>
                </div>
                <div class="name">
                    <p>Bin Burhan</p>
                    <p>Dhaka, Bd</p>
                </div>
            </div>
            <div class="middle"></div>
            <div class="right-part">
                <h2>Subscribe</h2>
                <h3>FOR OUR NEWLETTER AND PROMOTION</h3>
                <form action="" class="user-data">
                    <input type="text" class="user-input" name="userdata" placeholder="Enter Your Email">
                    <button class="user-button" name="userdata">
                        Subscribe
                    </button>
                </form>
            </div>
        </div>
    </div>
    <nav class="footer-nav">
        <div class="container">
            <div class="brand">
                <div class="logo">Bran<span>d</span></div>
                <p>Objectively transition extensive data rather than cross functional solutions. Monotonectally
                    syndicate multidisciplinary materials before go forward benefits. Intrinsicly syndicate an expanded
                    array of processes and cross-unit partnerships.</p>
                <br>
                <p>Efficiently plagiarize 24/365 action items and focused infomediaries.
                    Distinctively seize superior initiatives for wireless technologies. Dynamically optimize.
                </p>
            </div>
            <div class="nav-list">
                <h3>company</h3>
                <a href="#">Home</a>
                <a href="#">Shop</a>
                <a href="#">About</a>
                <a href="#">How It Works</a>
                <a href="#">Contact</a>
            </div>

            <div class="nav-list">
                <h3>information</h3>
                <a href="#"> Tearms & Condition</a>
                <a href="#">Privacy Policy</a>
                <a href="#">How to Buy</a>
                <a href="#">How to Sell</a>
                <a href="#">Promotion</a>
            </div>
            <div class="nav-list">
                <h3>SHOP CATEGORY</h3>
                <a href="#">Men</a>
                <a href="#">Women</a>
                <a href="#">Child</a>
                <a href="#">Apparel</a>
                <a href="#">Brows All</a>
            </div>
        </div>
    </nav>
    <footer>
        <div class="container">
            <div class="copy">
                &copy; 2017 Brand All Rights Reserved.
            </div>
            <div class="networks">
                <a href="#"><i class="fab fa-facebook-f"></i></a>
                <a href="#"><i class="fab fa-twitter"></i></a>
                <a href="#"><i class="fab fa-linkedin-in"></i></a>
                <a href="#"><i class="fab fa-pinterest-p"></i></a>
                <a href="#"><i class="fab fa-google-plus-g"></i></a>
            </div>
        </div>
    </footer>
    </div>
</template>

<script>
    import Navdrop from "./components/js/Navdrop.vue";
    import Catalog from './components/js/catalog.vue'
    import Basket from './components/js/basket.vue'

    export default {
        // components: { 'catalog-component': Catalog },
        components: { Catalog, Basket, Navdrop},
        data() {
            return {
                showBasket: false,
                linkNames: ["man", "woman", "kids", "ACCOSERIESE", "FEATURED", "HOT DEAL"],
                images: [
                    "https://raw.githubusercontent.com/GeorgeCybersport/JavaScript-Basic/master/offer1.jpg",
                    "https://raw.githubusercontent.com/GeorgeCybersport/JavaScript-Basic/master/offer2.jpg",
                    "https://raw.githubusercontent.com/GeorgeCybersport/JavaScript-Basic/master/offer3.jpg",
                    "https://raw.githubusercontent.com/GeorgeCybersport/JavaScript-Basic/master/offer4.jpg"
                ],
            }
        },
        methods: {
            _get(url) {
                return fetch(url).then(d => d.json())
            },
        },
    }
</script>

<style>

</style>