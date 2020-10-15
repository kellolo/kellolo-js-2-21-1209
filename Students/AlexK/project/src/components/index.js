export default () => {

  var catalog = new Vue({
    el: '#app',
    data: {
      basketShow: false,
      catalogUrl: 'https://raw.githubusercontent.com/kulyamzin/GeekBrain/master/Files/GeekBrains/catalog.json',
      basketUrl: 'https://raw.githubusercontent.com/kulyamzin/GeekBrain/master/Files/GeekBrains/basket.json',
      itemsCatalog: [],
      itemsBasket:[]
    },
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
      this.get(this.catalogUrl).then(items => { this.itemsCatalog = items; });
      this.get(this.basketUrl).then(items => { this.itemsBasket = items.content; });
    }
  })

}