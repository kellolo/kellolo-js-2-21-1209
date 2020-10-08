export default () => {
    const app = new Vue({
        el: '#app',
        data: {
            showBasket: false,
            catalogUrl: 'https://raw.githubusercontent.com/kellolo/static/master/JSON/catalog.json',
            basketUrl: 'https://raw.githubusercontent.com/kellolo/static/master/JSON/basket.json',
            basketItems: [],
            catalogItems: [],
        },
        
        methods: {
            get(url) {
                return fetch(url)
                    .then(d => d.json())
            },
            add(item) {
                let find = this.basketItems.find(el => el.productId == item.productId);
                if (find) {
                    find.amount++;
                } else {
                    let newItem = Object.assign({}, item, { amount: 1 });
                    console.log(newItem)
                    this.basketItems.push(newItem);
                }
                this._render();
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
            this.get(this.catalogUrl).then(items => { this.catalogItems = items });
            this.get(this.basketUrl).then(basket => { this.basketItems = basket.content });
        },
    });
}