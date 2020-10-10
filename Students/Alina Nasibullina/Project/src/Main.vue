<template>
    <div>
        <div class="body_container">
            <div class="header container">
                <a href="index.html" class="logo">Bran<span>d</span></a>
                <div class="search--content">
                    <form method="get" class="search">
                        <input type="checkbox" name="Browse" id="Browse">
                        <label  class="search__browse" for="Browse" id="buttonDropDownMenu">Browse <i class="fas fa-caret-down"></i></label>	
                        <div class="search--menu" aria-labelledby="buttonDropDownMenu">
                            <NavLink class="nav-list"/>
                            <!-- <h3>Women</h3>
                            <div class="greyLine"></div>
                            <a href="#">Dresses</a>
                            <a href="#">Tops</a>
                            <a href="#">Sweaters/Knits</a>
                            <a href="#">Jackets/Coats</a>
                            <a href="#">Blazers</a>
                            <a href="#">Denim</a>
                            <a href="#">Leggings/Pants</a>
                            <a href="#">Skirts/Shorts</a>
                            <a href="#">Accessories</a>
                            <h3>Men</h3>
                            <div class="greyLine"></div>
                            <a href="#">Tees/Tank tops</a>
                            <a href="#">Shirts/Polos</a>
                            <a href="#">Sweaters</a>
                            <a href="#">Sweatshirts/Hoodies</a>
                            <a href="#">Blazers</a>
                            <a href="#">Jackets/vests</a> -->
                        </div>
                        <input type="text" name="search" placeholder="Search for Item...">
                        <button><i class="fas fa-search"></i></button>
                    </form>
                </div>

                <div class="card--content">
                    <!-- <input type="checkbox" name="header__cart_link" id="header__cart_link">
                    <label for="header__cart_link" class="header__cart_link" id="#basket-toggler"><img src="../src/assets/img/cart.png" alt="cart" class="header__cart"></label> -->
                    
                    <button class="header__cart_link" id="basket-toggler" @click="showBasket = !showBasket"><img src="https://raw.githubusercontent.com/AlinaNasibullina/static/master/img/cart.png" alt="cart" class="header__cart"></button>
                    <Basket v-show="showBasket" ref="basket"/>
                </div>
                <button name="accountBar" class="header__account-bar">My Account <i class="fas fa-caret-down"></i></button>	
            </div>

            <div class="headerLine"></div>

            <nav class="topNav">
                <div class="topNav__list"><a href="#">Home</a>
                    <div class="navLine"></div>
                </div>
                <div class="topNav__list"><a href="#">Man</a>
                    <div class="topNav--dropDown">
                        <NavLink class="nav-list " />
                        <!-- <h3>Women</h3>
                        <div class="greyLine"></div>
                        <a href="#">Dresses</a>
                        <a href="#">Tops</a>
                        <a href="#">Sweaters/Knits</a>
                        <a href="#">Jackets/Coats</a>
                        <a href="#">Blazers</a>
                        <a href="#">Denim</a>
                        <a href="#">Leggings/Pants</a>
                        <a href="#">Skirts/Shorts</a>
                        <a href="#">Accessories</a>
                        <h3>Women</h3>
                        <div class="greyLine"></div>
                        <a href="#">Dresses</a>
                        <a href="#">Tops</a>
                        <a href="#">Sweaters/Knits</a>
                        <a href="#">Jackets/Coats</a>
                        <h3>Women</h3>
                        <div class="greyLine"></div>
                        <a href="#">Dresses</a>
                        <a href="#">Tops</a>
                        <a href="#">Sweaters/Knits</a>
                        <h3>Women</h3>
                        <div class="greyLine"></div>
                        <a href="#">Dresses</a>
                        <a href="#">Tops</a>
                        <a href="#">Sweaters/Knits</a>
                        <a href="#">Jackets/Coats</a> -->
                        <a href="#"><img src="../src/assets/img/Promo_Ad.png" alt="promo"></a>
                    </div>
                    <div class="navLine"></div>
                </div>
                <div class="topNav__list"><a href="#">Women</a>
                    <div class="navLine"></div>
                    <div class="topNav--dropDown">
                        <h3>Women</h3>
                        <div class="greyLine"></div>
                        <a href="#">Dresses</a>
                        <a href="#">Tops</a>
                        <a href="#">Sweaters/Knits</a>
                        <a href="#">Jackets/Coats</a>
                        <a href="#">Blazers</a>
                        <a href="#">Denim</a>
                        <a href="#">Leggings/Pants</a>
                        <a href="#">Skirts/Shorts</a>
                        <a href="#">Accessories</a>
                        <h3>Women</h3>
                        <div class="greyLine"></div>
                        <a href="#">Dresses</a>
                        <a href="#">Tops</a>
                        <a href="#">Sweaters/Knits</a>
                        <a href="#">Jackets/Coats</a>
                        <h3>Women</h3>
                        <div class="greyLine"></div>
                        <a href="#">Dresses</a>
                        <a href="#">Tops</a>
                        <a href="#">Sweaters/Knits</a>
                        <h3>Women</h3>
                        <div class="greyLine"></div>
                        <a href="#">Dresses</a>
                        <a href="#">Tops</a>
                        <a href="#">Sweaters/Knits</a>
                        <a href="#">Jackets/Coats</a>
                        <a href="#"><img src="../src/assets/img/Promo_Ad.png" alt="promo"></a>
                    </div>
                </div>
                <div class="topNav__list"><a href="#">Kids</a>
                    <div class="navLine"></div>
                </div>
                <div class="topNav__list"><a href="#">Accoseriese</a>
                    <div class="navLine"></div>
                </div>
                <div class="topNav__list"><a href="#">Featured</a>
                    <div class="navLine"></div>
                </div>
                <div class="topNav__list"><a href="#">Hot Deals </a>
                    <div class="navLine"></div>
                </div>
            </nav>

            <div class="topBanner">
                <div class="container">
                    <div class="topBanner__content">
                        <div class="redLine"></div>
                        <div class="topBanner__text">
                            <h1>THE BRAND</h1>
                            <h2>OF LUXERIOUS <span>FASHION</span></h2>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container range__content">
                <div class="range">
                    <a href="#" class="range__link"><div class="range__text">hOT dEAL<br><span>FOR MEN</span></div><img src="https://raw.githubusercontent.com/AlinaNasibullina/static/master/img/offer1.jpg" alt="offer1">
                    </a>
                </div>
                <div class="range">
                    <a href="#" class="range__link"><div class="range__text">LUXIROUS &amp; trendy<br><span>ACCESORIES</span></div><img src="https://raw.githubusercontent.com/AlinaNasibullina/static/master/img/offer2.jpg" alt="offer2"></a>
                </div>
                <div class="range">
                    <a href="#" class="range__link"><div class="range__text">30% offer<br><span>women</span></div><img src="https://raw.githubusercontent.com/AlinaNasibullina/static/master/img/offer3.jpg" alt="offer3"></a>
                </div>
                <div class="range">
                    <a href="#" class="range__link"><div class="range__text">new arrivals <br><span>FOR kids</span></div><img src="https://raw.githubusercontent.com/AlinaNasibullina/static/master/img/offer4.jpg" alt="offer4"></a>
                </div>
            </div>
            <div class="container fetured__box">
                <h3 class="fetured_items__h3">Fetured Items</h3>
                <p class="fetured_items__span">Shop for items based on what we featured in this week</p>
                <Catalog />
                <button name="AllProdict" class="browseAllProduct">Browse All Product <i class="fas fa-long-arrow-alt-right"></i></button>
            </div>
            <div class="container only_offer">
                <div class="offer__banner">
                    <h2 class="offer_h2">30% <span>OFFER</span></h2>
                    <p>FOR WOMEN</p>
                </div>
                <div class="offer__content">
                    <div class="offer__details offer__details1">
                        <h3>Free Delivery</h3>
                        <p>Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</p>
                    </div>
                    <div class="offer__details">
                        <h3>Sales &amp; discounts</h3>
                        <p>Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</p>
                    </div>
                    <div class="offer__details">
                        <h3>Quality assurance</h3>
                        <p>Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="crl"></div>
        <div class="footer_block">
            <div class="endBanner">
                <div class="container endBanner__content">
                    <div class="quote">
                        <img src="https://raw.githubusercontent.com/AlinaNasibullina/static/master/img/photo_3_2206.png" alt="photo">
                        <div class="quote__content">
                            <p class="quote__text">“Vestibulum quis porttitor dui! Quisque viverra nunc mi, a pulvinar purus condimentum a. Aliquam condimentum mattis neque sed pretium”</p>
                            <p class="quote__sign">Bin Burhan</p>
                            <p class="quote__sity">Dhaka, Bd</p>
                            <a href="#" class="quote__slider"></a>
                            <a href="#" class="quote__slider quote__slider_active"></a>
                            <a href="#" class="quote__slider"></a>
                        </div>
                    </div>
                    <div class="subscribe">
                        <h3>Subscribe</h3>
                        <p>FOR OUR NEWLETTER AND PROMOTION</p>	
                        <form action="#" class="subscribe-form">
                            <input type="email" placeholder="Enter Your Email"><button>Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>
            <footer class="container footer__info">
                <div class="footer__text">
                    <div class="logo">Bran<span>d</span></div>
                    <p>Objectively transition extensive data rather than cross functional solutions. Monotonectally syndicate multidisciplinary materials before go forward benefits. Intrinsicly syndicate an expanded array of processes and cross-unit partnerships.<br><br>Efficiently plagiarize 24/365 action items and focused infomediaries.Distinctively seize superior initiatives for wireless technologies. Dynamically optimize.
                    </p>
                </div>
                <div class="footer__content">
                    <h3>COMPANY</h3>
                    <a href="#">Home</a>
                    <a href="#">Shop</a>
                    <a href="#">About</a>
                    <a href="#">How It Works</a>
                    <a href="#">Contact</a>
                </div>
                <div class="footer__content">
                    <h3>INFORMATION</h3>
                    <a href="#">Tearms &amp; Condition</a>
                    <a href="#">Privacy Policy</a>
                    <a href="#">How to Buy</a>
                    <a href="#">How to Sell</a>
                    <a href="#">Promotion</a>
                </div>
                <div class="footer__content">
                    <h3>SHOP CATEGORY</h3>
                    <a href="#">Men</a>
                    <a href="#">Women</a>
                    <a href="#">Child</a>
                    <a href="#">Apparel</a>
                    <a href="#">Brows All</a>
                </div>
            </footer>
            <footer class="end-line">
                <div class="container footer-end-line">
                    <p>&copy; 2017 Brand All Rights Reserved.</p>
                    <div class="social-link">
                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                    <a href="#"><i class="fab fa-twitter"></i></a>
                    <a href="#"><i class="fab fa-linkedin-in"></i></a>
                    <a href="#"><i class="fab fa-pinterest-p"></i></a>
                    <a href="#"><i class="fab fa-google-plus-g"></i></a></div>
                </div>
            </footer>
        </div>
    </div>
</template>

<script>
    import Catalog from './components/Catalog.vue';
    import Basket from './components/Basket.vue';
    import NavLink from './components/NavLink.vue';

    export default {
        components: { Catalog, Basket, NavLink },
        data() {
            return {
                showBasket: false,
            }
        },
        methods: {
            get(url) {
                return fetch(url).then(d => d.json())
            },
        },
    }
</script>

<style>

</style>