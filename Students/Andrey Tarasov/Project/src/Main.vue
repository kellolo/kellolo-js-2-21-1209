<template>
  <div>
    <header class="container">
      <a href="#" class="logo">Bran<span>d</span></a>

      <form method="get" class="search">
        <button name="Browse">
          Browse
          <img src="./assets/imgs/icons/fa-caret-down.png" alt="#" />
        </button>
        <input type="text" name="search" placeholder="Search for Item..." />
        <button></button>
      </form>

      <!-- Корзина -->

      <div class="headerCart pr-4">
        <button id="basket-toggler" @click="showBasket = !showBasket"></button>

        <!-- <Basket v-show="showBasket" ref="basket" /> -->

        <div class="headerCartWrap" id="basket" v-show="showBasket">
          <div class="headerCartWrapBlock"></div>
          <div class="headerCartWrapInAll">
            <div class="headerCartWrapInAll">
              <div
                class="d-flex headerCartWrapIn mb-1 p-2"
                v-for="item of basketItems"
                :key="item.productId"
              >
                <img :src="item.productImg" alt="" width="85" height="100" />
                <div>
                  {{ item.productName }}
                </div>

                <span>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star-half-alt"></i>
                </span>

                <div class="headerCartWrapPrice">
                  {{ item.amount }} <span>x</span> ${{ item.productPrice }}
                </div>

                <button
                  class="fas fa-times-circle"
                  @click="remove(item.productId)"
                ></button>
              </div>
            </div>

            <div class="headerCartWrapTotalPrice">
              <div>total</div>
              <div>$500.00</div>
            </div>

            <button type="button" class="productsButtonIndex">Checkout</button>
            <button type="button" class="productsButtonIndex">
              Go to cart
            </button>
          </div>
        </div>
      </div>

      <!--  -->

      <button name="accountBar" class="header__account-bar">
        My Account
        <img src="./assets/imgs/icons/fa-caret-down-white.png" alt="#" />
      </button>
    </header>

    <div class="headerLine"></div>

    <div class="topNav">
      <a href="index.html">Home</a>
      <a href="shopping-cart.html">Man</a>
      <a href="#">Women</a>
      <a href="#">Kids</a>
      <a href="product.html">Accoseriese</a>
      <a href="checkout.html">Featured</a>
      <a href="singlePage.html">Hot Deals </a>
    </div>

    <div class="topBanner">
      <div class="container-banner">
        <div class="topBanner__text">
          <h1>The Brand</h1>
          <p>Of Luxerious <span>Fashion</span></p>
        </div>
      </div>
    </div>

    <div class="selecting-category">
      <div class="category-one">
        <a href="#"
          ><img src="../src/assets/imgs/offer1.jpg" alt="Для мужчин"
        /></a>

        <div>
          <p>Hot deal</p>
          <p>For men</p>
        </div>
      </div>

      <div class="category-two">
        <a href="#"
          ><img src="../src/assets/imgs/offer2.jpg" alt="Аксессуары"
        /></a>

        <div>
          <p>Luxirous &amp; Trendy</p>
          <p>ACCESORIES</p>
        </div>
      </div>

      <div class="category-three">
        <a href="#"
          ><img src="../src/assets/imgs/offer3.jpg" alt="Для женщин"
        /></a>

        <div>
          <p>30% offer</p>
          <p>Women</p>
        </div>
      </div>

      <div class="category-four">
        <a href="#"
          ><img src="../src/assets/imgs/offer4.jpg" alt="Для детей"
        /></a>

        <div>
          <p>New arrivals</p>
          <p>For kids</p>
        </div>
      </div>
    </div>

    <div class="container-text">
      <h3>Fetured Items</h3>
      <p>Shop for items based on what we featured in this week</p>
    </div>

    <!-- Встраиваемый каталог из базы данных -->
    <!-- <Catalog /> -->
    <div class="row" id="catalog">
      
      <div
        class="col-10 offset-1 col-sm-6 offset-sm-0 col-md-4 col-lg-3 feturedItems"
        v-for="item of catalogItems"
        :key="item.productId"
      >
        <div class="feturedItem">
          <div class="feturedImgWrap">
            <div class="feturedBuy">
              <button name="add" @click="add(item)">
                <div><i class="fas fa-shopping-cart"></i> Add to Cart</div>
              </button>
            </div>
            <img class="feturedProduct" :src="item.productImg" alt="product1" />
          </div>
          <div>
            <div
              class="feturedBuySm d-flex flex-column justify-content-around align-items-center align-items-md-start"
            >
              <div class="feturedItemName">{{ item.productName }}</div>
              <div class="feturedItemPrice">${{ item.productPrice }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--  -->

    <div class="button-browseProduct">
      <button name="browseProduct" class="browseProduct">
        Browse All Product &#129042;
      </button>
    </div>

    <div class="container-offer">
      <div class="container-offer__stock">
        <div class="container-offer__stockWomen">
          <h2>30% <span>Offer</span></h2>
          <p>For women</p>
        </div>
      </div>

      <div class="container-offer__service">
        <div class="container-offer__service__free">
          <h3><a href="#">Free Delivery</a></h3>
          <p>
            Worldwide delivery on all. Authorit tively morph next-generation
            innov tion with extensive models.
          </p>
        </div>

        <div class="container-offer__service__sales">
          <h3><a href="#">Sales &amp; discounts</a></h3>
          <p>
            Worldwide delivery on all. Authorit tively morph next-generation
            innov tion with extensive models.
          </p>
        </div>

        <div class="container-offer__service__quality">
          <h3><a href="#">Quality assurance</a></h3>
          <p>
            Worldwide delivery on all. Authorit tively morph next-generation
            innov tion with extensive models.
          </p>
        </div>
      </div>
    </div>

    <footer>
      <div class="mailing">
        <div class="mailing-blackout"></div>

        <div class="mailing-container">
          <div class="mailing-container__description">
            <img src="./assets/imgs/face-girl.png" alt="Лицо девушки" />
            <div>
              <q
                >Vestibulum quis porttitor dui! Quisque viverra nunc mi, a
                pulvinar purus condimentum a. Aliquam condimentum mattis neque
                sed pretium</q
              >
              <p>
                <span>Bin Burhan</span> <br />
                Dhaka, Bd
              </p>
              <hr />
              <hr />
              <hr />
            </div>
          </div>
          <div class="mailing-container__line"></div>

          <div class="mailing-container__subscribe">
            <h3>Subscribe</h3>
            <p>FOR OUR NEWLETTER AND PROMOTION</p>
            <div>
              <form method="get">
                <input
                  type="email"
                  name="login"
                  placeholder="Enter Your Email"
                /><button>Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div class="container-information">
        <div class="brand">
          <a href="#" class="logo">Bran<span>d</span></a>
          <p>
            Objectively transition extensive data rather than cross functional
            solutions. Monotonectally syndicate multidisciplinary materials
            before go forward benefits. Intrinsicly syndicate an expanded array
            of processes and cross-unit partnerships.
          </p>
          <p>
            Efficiently plagiarize 24/365 action items and focused
            infomediaries. Distinctively seize superior initiatives for wireless
            technologies. Dynamically optimize.
          </p>
        </div>

        <div class="company">
          <h3>COMPANY</h3>
          <a href="#">Home</a>
          <a href="#">Shop</a>
          <a href="#">About</a>
          <a href="#">How It Works</a>
          <a href="#">Contact</a>
        </div>

        <div class="information">
          <h3>INFORMATION</h3>
          <a href="#">Tearms &amp;Condition</a>
          <a href="#">Privacy Policy</a>
          <a href="#">How to Buy</a>
          <a href="#">How to Sell</a>
          <a href="#">Promotion</a>
        </div>

        <div class="category">
          <h3>SHOP CATEGORY</h3>
          <a href="#">Men</a>
          <a href="#">Women</a>
          <a href="#">Child</a>
          <a href="#">Apparel</a>
          <a href="#">Brows All</a>
        </div>
      </div>

      <div class="copyright">
        <div class="container-copyright">
          <div class="container-copyright__text">
            <p>© 2017 Brand All Rights Reserved.</p>
          </div>
          <div class="container-copyright__icons">
            <a href="#"
              ><img src="./assets/imgs/icons/f.png" alt="Фэйсбук"
            /></a>
            <a href="#"
              ><img src="./assets/imgs/icons/twitter.png" alt="Твиттер"
            /></a>
            <a href="#"
              ><img src="./assets/imgs/icons/in.png" alt="#"
            /></a>
            <a href="#"><img src="./assets/imgs/icons/p.png" alt="#" /></a>
            <a href="#"
              ><img src="./assets/imgs/icons/g+.png" alt="#"
            /></a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
// import Catalog from './components/catalog.vue'
// import Basket from './components/basket.vue'
  export default {
    components: { Catalog, Basket },
    data() {
      return {
			  catalogItems: [],
			  basketItems: [],
			  showBasket: false,
			  showCatalog: true,
			  catalogUrl: 'https://raw.githubusercontent.com/kellolo/static/master/JSON/catalog.json',
			  basketUrl: 'https://raw.githubusercontent.com/kellolo/static/master/JSON/basket.json',
			  items: [],
        basketItems: []
      }
		},
		methods: {
			get(url) {
				return fetch(url).then(d => d.json())
			},

			add(item) {
				let find = this.basketItems.find(el => el.productId == item.productId);
				if (find) {
					find.amount++;
				} else {
          let newItem = Object.assign( {}, item, { amount: 1 });
					this.basketItems.push(newItem);
				}
			},

			remove(id) {
				let find = this.basketItems.find(el => el.productId == id);
				if (find.amount > 1) {
					find.amount--;
				} else {
					this.basketItems.splice(this.basketItems.indexOf(find), 1);
				}
			}
		},
		mounted() {
			this.get(this.catalogUrl).then(items => {
			this.catalogItems = items
			});
			this.get(this.basketUrl).then(basket => {
				this.basketItems = basket.content
			})
		}
  }
</script>