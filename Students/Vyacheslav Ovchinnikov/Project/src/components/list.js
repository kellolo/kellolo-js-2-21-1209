import Item from './item.js';

let type = {
    Catalog: 'catalog',
    Basket: 'basket'
}

export default class List {
    constructor(container, url, basket = null) {
        this.items = [];
        this.container = document.querySelector(container);
        this.url = 'https://raw.githubusercontent.com/kellolo/static/master/JSON' + url;
        this.basket = basket;
        this._init();
    }

    _init() {
        this._get(this.url)
            .then(data => {
                this.items = this.basket ? data : data.content; 
                if (this.filtered) {
                    this.filtered = data;
                }
                
                this._render();
                this._handleActions();
            })
    }

    _get(url) {
        return fetch(url).then(d => d.json())
    }

    _render() {
        let str = '';
        let arr = this.filtered ? this.filtered : this.items;
        arr.forEach(item => {
            str += new Item(item, type[this.constructor.name]).render()
        });
        if (type[this.constructor.name] == 'basket'){
            str += `
                <div class="headerCartWrapTotalPrice">
                    <div>total</div>
                    <div>$500.00</div>
                </div>
                <button type="button" class="button productsButtonIndex">Checkout</button>
                <button type="button" class="button productsButtonIndex">Go to cart</button>
            `
        };
        this.container.innerHTML = str;
    }

    _handleActions() {
        return true
    }
}