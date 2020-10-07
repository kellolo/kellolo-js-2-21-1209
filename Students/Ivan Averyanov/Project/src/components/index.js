
export default () =>{
    let app = new Vue({
        el: '#app',
        data:{
                catalogItems: [],
                basketItems: [],
                showBasket: false,
                catalogUrl: 'https://raw.githubusercontent.com/xorrou1/responses/master/JSON%20carts%20marcet/catalog.json' ,
                basketUrl: 'https://raw.githubusercontent.com/xorrou1/responses/master/JSON%20carts%20marcet/basket.json' ,
                sumTotal : 0
        },
        methods: {
            get(url) {
                return fetch(url).then(d => d.json());
            },
            add(item) {
                let find = this.basketItems.find(el => el.productId == item.productId);
                if (find) {
                    find.amount++;
                } else {
                    this.basketItems.push(item);
                }
            },
            remove(id) {
                let find = this.basketItems.find(el => el.productId == id);
                if (find.amount > 1) {
                    find.amount--;
                } else {
                    this.basketItems.splice(this.basketItems.indexOf(find), 1);
                }
            },
    
            getTotalSum() {
                let sum = 0;
                for (let key in this.basketItems) {
                    sum += this.basketItems[key].productPrice * this.basketItems[key].amount;
                }
                return sum;
            }
        },
        mounted(){
            this.get(this.catalogUrl).then(items => { this.catalogItems = items} );
            this.get(this.basketUrl).then(basket => { this.basketItems = basket.content} );                
        }
    });
}
