<template>
  <div>
    <div class="top">
      <header class="header center">
        <div id="search-controller" class="header__left">
          <a class="logo" href="#">
            <img class="logo__img"
                 src="https://raw.githubusercontent.com/Veledar/STATIK/master/imgs/logo.png"
                 alt="logo"
            />BRAN<span>D</span>
          </a>
          <form action="#" class="search">
            <a href="#" class="search__browse">
              Browse <i class="fas fa-caret-down"></i>
            </a>
            <input name="search" type="text" placeholder="Search for Item..." />
            <button type="submit"><i class="fas fa-search"></i></button>
          </form>
        </div>
        <div class="header__right">
          <a class="cart"
             href="#"
             id="basket-toggler"
             @click="showBasket = !showBasket">
             <img class="header__cart"
                  src="https://raw.githubusercontent.com/Veledar/STATIK/master/imgs/cart.png"
                  alt="Basket"
             />
          </a>
          <div class="headerCartWrap">
            <div class="headerCartWrapBlock"></div>
            <Basket v-show="showBasket" ref="basket" />
          </div>
          <a href="#" class="button">
            My Account <i class="fas fa-caret-down"></i>
          </a>
        </div>
      </header>

      <div class="line-horizon"></div>

      <Nav />

      <aside class="promo">
        <div class="promo__content container">
          <div></div>
          <div><b>THE BRAND</b><br />OF LUXERIOUS <span>FASHION</span></div>
        </div>
      </aside>

      <offer-box  />

      <main class="product-box center">
        <h1 class="product-box__head">Fetured Items</h1>
        <p class="product-box__desc">
          Shop for items based on what we featured in this week
        </p>
        <Catalog />
      </main>

      <button class="product-box__button">
          Browse All Products
          <img
              src="https://raw.githubusercontent.com/Veledar/STATIK/master/imgs/arrowToRight.png"
              alt="Стрелка"
          />
      </button>

      <div class="offerForWomen center">
        <aside class="offerForWomenBanner">
            <div class="offerText">
              <div>30% <span>OFFER</span></div>
              <div>FOR WOMEN</div>
            </div>
        </aside>
        <div class="offerForWomenDetails">
            <article class="offerUnit">
                <h2 class="offerDetailsHead">Free Delivery</h2>
                <p class="offerDetailsText">
                    Worldwide delivery on all. Authorit tively morph next-generation
                    innov tion with extensive models.
                </p>
            </article>
            <article class="offerUnit">
                <h2 class="offerDetailsHead">Free Delivery</h2>
                <p class="offerDetailsText">
                    Worldwide delivery on all. Authorit tively morph next-generation
                    innov tion with extensive models.
                </p>
            </article>
            <article class="offerUnit">
                <h2 class="offerDetailsHead">Free Delivery</h2>
                <p class="offerDetailsText">
                    Worldwide delivery on all. Authorit tively morph next-generation
                    innov tion with extensive models.
                </p>
            </article>
        </div>
      </div>

      <div class="subscribeWrap">
        <div class="center subscribe">
            <div class="subscribeReview">
                <figure class="subscribeReviewUnit">
                    <div class="subscribeReviewUnitLeft">
                        <img
                          src="https://raw.githubusercontent.com/Veledar/STATIK/master/imgs/reviewPerson.png"
                          alt="Фото персоны"
                        />
                    </div>
                    <figcaption class="subscribeReviewUnitRight">
                        <blockquote>
                          &#8220;Vestibulum quis porttitor dui! Quisque viverra nunc mi, a
                          pulvinar purus condimentum a. Aliquam condimentum mattis neque
                          sed pretium&#8221;
                        </blockquote>
                        <div class="reviewName">Bin Burhan</div>
                        <div class="reviewFrom">Dhaka, Bd</div>
                        <div class="reviewsSwitch">
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </figcaption>
                </figure>
            </div>
            <div class="subscribeDivider"></div>
            <div class="subscribeRight">
                <div class="subscribeRightHead">Subscribe</div>
                <div class="subscribeRightText">
                FOR OUR NEWLETTER AND PROMOTION
                </div>
                <form class="subscribeForm" action="#">
                    <input placeholder="Enter Your Email" type="text" />
                    <button>Subscribe</button>
                </form>
            </div>
        </div>
      </div>
    </div>

    <Footer />
    
    <div class="copyrights center">
      <div class="copyrights__wrap">
        <div class="copyrights__left">&copy; 2017 Brand All Rights Reserved.</div>
        <nav class="copyrights__right">
          <a href="#"><i class="fab fa-facebook-f"></i></a>
          <a href="#"><i class="fab fa-twitter"></i></a>
          <a href="#"><i class="fab fa-linkedin-in"></i></a>
          <a href="#"><i class="fab fa-pinterest-p"></i></a>
          <a href="#"><i class="fab fa-google-plus-g"></i></a>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
  import Catalog from "./components/Catalog.vue";
  import Basket from "./components/Basket.vue";
  import Footer from "./components/Footer.vue";
  import OfferBox from "./components/OfferBox.vue";
  import Nav from "./components/Nav.vue";

  export default {
    // components: { 'catalog-component': Catalog },
    components: { Catalog, Basket, Footer, OfferBox, Nav },
    data() {
      return {
        showBasket: false,
      };
    },
    methods: {
      _get(url) {
        return fetch(url).then((d) => d.json());
      },
    },
  };
</script>

<style>

</style>