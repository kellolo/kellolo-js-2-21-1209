<template>
    <div class="headerBasket">
        <img src="img/cart.png" alt="cart" @click="basketShow = !basketShow">
        <div class="headerBasket_count" id="basketTotal">2</div>
        <div class="headerBasket_detail" v-show="basketShow">
            <div class="headerBasket_detail_items">
                <div class="headerBasket_detail-item" v-for="basket of itemsBasket" :key="basket.productId">
                    <img :src="basket.productImg">
                    <div class="headerBasket_detail-item__about">
                        <div class="headerBasket_detail-item__about__name">{{ basket.productName }}</div>
                        <div class="headerBasket_detail-item__about__raiting">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </div>
                        <div class="headerBasket_detail-item__about__amount">
                            ${{basket.productPrice }} x {{ basket.amount }}
                        </div>
                    </div>
                    <button class="btn btn-cl" @click="remove(basket.productId)"><i class="fas fa-times-circle"></i></button>
                </div>
            </div>
        <nav>
            <button class="btn btn-pink">Go to cart</button>
            <button class="btn btn-pink">Checkout</button>
        </nav>
        </div>
    </div>
</template>

<script>
export default {

    data(){return {
      basketShow: false,
      basketUrl: 'https://raw.githubusercontent.com/kulyamzin/GeekBrain/master/Files/GeekBrains/basket.json',
      itemsBasket:[]
    }},
    methods: {
      get(url) {
        return fetch(url).then(d => d.json());
      },
      remove(id){
        let currElem = this.itemsBasket.find(element => element.productId == id);
        if (currElem.amount > 1) {
          currElem.amount--;
        } else{
          this.itemsBasket.splice(this.itemsBasket.indexOf(currElem),1);
          if (this.itemsBasket.length == 0){
            this.basketShow = false;
          }
        }
      },
      add(item){
        let currElem = this.itemsBasket.find(element => element.productId == item.productId);
        if (currElem) {
          currElem.amount++;
        } else{
          let newItem = Object.assign({},item,{amount: 1});
          this.itemsBasket.push(newItem);
        }
      }
    },
    mounted() {
      this.get(this.basketUrl).then(items => { this.itemsBasket = items.content; });
    }
}
</script>

<style>

</style>