export default {
    items: [],
    container: null,
    containerItems: null,
    shown: false,
    url: 'https://raw.githubusercontent.com/kellolo/static/master/JSON/basket.json',
    init() {
        this.container = document.querySelector('#basket');
        this.containerItems = document.querySelector('#basket-items');
        this._get(this.url)
            .then(basket => {
                this.items = basket.content;
            })
            .finally(() => {
                this._render();
                this._handleActions();
            })
    },
    _get(url) {
        return fetch(url).then(d => d.json());
    },
    _render() {
        let htmlStr = '';
        this.items.forEach(item => {
            htmlStr += `
            <div class="d-flex headerCartWrapIn mb-1 p-2">
                    <img src="${item.productImg}" alt="" width="85" height="100>
                    <div>
                        <div>${item.productName}</div>
                        <span>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star-half-alt"></i>
                        </span>
                        <div class="headerCartWrapPrice">${item.amount} 
                            <span>x</span> $${item.productPrice}
                        </div>

                <button 
                    class="fas fa-times-circle" 
                    data-id="${item.productId}"
                    name="remove"
                ></button>
            </div>
            `
        });
        this.container.innerHTML = htmlStr;
    },
    _handleActions() {
        document.querySelector('#basket-toggler').addEventListener('click', () => {
            this.container.classList.toggle('invisible');
            // document.querySelector('#basket').classList.toggle('invisible');
            this.shown = !this.shown;
        })

        this.container.addEventListener('click', ev => {
            if (ev.target.name == 'remove') {
                this._remove(ev.target.dataset.id);
            }
        })
    },
    add(item) {
        let find = this.items.find(el => el.productId == item.productId);
        if (find) {
            find.amount++;
        } else {
            this.items.push(item);
        }
        this._render();
    },
    _remove(id) {
        let find = this.items.find(el => el.productId == id);
        if (find.amount > 1) {
            find.amount--;
        } else {
            this.items.splice(this.items.indexOf(find), 1);
        }
        this._render();
    }
}

class Catal {
    constructor() {
        this.container = document.querySelector('.row');
        this.items = [];
        this._init();
    }

    _init() {
        this.items = data.map(h => new ProductBask(h.name, h.cost));
        this._render();
    }

    _render() {
        let html = '';

        this.items.forEach(item => {
            html += item.render();
        })

        this.container.innerHTML = html;
    }
}

class ProductBask {
    constructor(name, cost) {
        this.name = name;
        this.age = age;
    }

    render() {
        return `
            <div class="card">
                <img src="${item.productImg}" alt="" width="85" height="100>
                <p><b>${this.name}</b></p>
                <p>${this.cost}</p>
            </div>
        `
    }
}
