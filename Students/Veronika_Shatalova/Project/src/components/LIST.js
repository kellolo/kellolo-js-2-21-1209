import Item from './ITEM';

let type = {
    Catalog: 'catalog',
    Basket: 'basket'
}

export default class List {
    constructor(container, url, basket = null){
        this.items = [];
        this.container = container;
        this.url = url;
        this.basket = basket;
        this._init();
    }

    _init(){
        this._get(this.url)
        .then(data => {
            this.items = this.basket ? data : data.content;
            this._render();
            this._handleActions();
        })
    }

    _get(url){
        return fetch(url).then(d => d.json())
    }

    _render() {
        let str = '';
        this.items.forEach(item => {
            str += new Item(item, type[this.constructor.name]).render()
        })

        this.container.innerHTML = str;
    }

    _handleActions(){
        return true
    }
}