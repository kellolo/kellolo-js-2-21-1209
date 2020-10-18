<template>
  <div>

    <div class="cart-list-content" id="app_catalog">
        <div class="cart-list__product" v-for='basket in Items' :key="basket.productId">
            <a href="product.html" class="cart-list__product_image"><img :src="basket.productImg" alt="tee-shirt"></a>
            <div class="cart-list__product_data">
                <a href="product.html"><h3>{{basket.productName}}</h3></a>
                    <div class="star-rating">
                        <img src="https://raw.githubusercontent.com/xorrou1/responses/master/ProjectFiles/img/promo/star-rating.png" alt="star-rating">    
                    </div>
                <span><span class="product-count">{{basket.amount}} </span>x $ {{basket.productPrice}}</span>
            </div>
            <input class="product-remove-btn" 
                @click="remove(basket.productId)"
                type="image" 
                src="https://raw.githubusercontent.com/xorrou1/responses/master/ProjectFiles/img/promo/arrow_cancel.png" 
                alt="arrow_cancel">
        </div>  
    </div>
    <div class="cart-list__total">
        <span class="cart-list__total_span">TOTAL</span>
        <span class="cart-list__total_span">$ <span class="cart-list__total-span"
                >{{getTotalSum()}}</span></span>
    </div>
    <input type="button" class="cart-list__button cart-list__button-one cart-list__button_action " value="Checkout">
    <input type="button" class="cart-list__button" value="Go to cart">

  </div>
</template>

<script>
export default {
    data() {
        return {
            items: [],
            url: 'https://raw.githubusercontent.com/xorrou1/responses/master/JSON%20carts%20marcet/basket.json' ,
            sumTotal : 0
        }
    },
    methods: {
            get(url) {
                return fetch(url).then(d => d.json());
            },
            add(item) {
                let find = this.Items.find(el => el.productId == item.productId);
                if (find) {
                    find.amount++;
                } else {
                    this.Items.push(item);
                }
            },
            remove(id) {
                let find = this.Items.find(el => el.productId == id);
                if (find.amount > 1) {
                    find.amount--;
                } else {
                    this.Items.splice(this.Items.indexOf(find), 1);
                }
            },
    
            getTotalSum() {
                let sum = 0;
                for (let key in this.Items) {
                    sum += this.Items[key].productPrice * this.Items[key].amount;
                }
                return sum;
            }
        },
    mounted(){
        this.get(this.url).then(basket => { this.Items = basket.content} );                     
    }

}

</script>
