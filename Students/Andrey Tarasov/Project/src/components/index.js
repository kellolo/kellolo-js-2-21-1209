// import Basket from './basket';
// import Catalog from './catalog';



export default () => {
  let app = new Vue({
    el: '#app',
		data: {
			catalogItems: [],
			basketItems: [],
			showBasket: false,
			showCatalog: true,
			catalogUrl: 'https://raw.githubusercontent.com/kellolo/static/master/JSON/catalog.json',
			basketUrl: 'https://raw.githubusercontent.com/kellolo/static/master/JSON/basket.json',
			items: [],
			basketItems: []
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
  });
}