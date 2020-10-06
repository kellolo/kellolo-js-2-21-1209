export default class Item {
    constructor(item, type) {
        this.item = item;
        this.type = type;
    }

    render() {
            switch (this.type) {
                case 'catalog': {
                    return renderCatalogItem(this.item)
                }

                case 'basket': {
                    return renderBasketItem(this.item)
                }
            }
    }
}


function renderCatalogItem(item) {
    return `
        <section class="product">
            <a href="#">
                <img class="product__img" src="${item.productImg}" alt="photo">
            </a>
            <div class="product__content">
                <h2><a href="#" class="product__name">${item.productName}</a></h2>
                <p class="product__price">$${item.productPrice}</p>
            </div>
            <a href="#" class="product__add"
                        name="add"
                        data-id="${item.productId}"
                        data-name="${item.productName}"
                        data-price="${item.productPrice}"
                        data-img="${item.productImg}">
                <img src="../src/assets/imgs/addToCart.png" alt="Корзина"> Add to Cart
            </a>
        </section>
    `
}

function renderBasketItem(item) {
    return `
        <div class="d-flex headerCartWrapIn">
            <a href="#" class="d-flex ">
                <img src="${item.productImg}" alt="photo">
                <div>
                    <div>${item.productName}</div>
                    <span><i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star-half-alt"></i>
                    </span>
                    <div class="headerCartWrapPrice">${item.amount} <span>x</span> $${item.productPrice}</div>
                </div>
            </a>
            <button class="fas fa-times-circle" 
                    data-id="${item.productId}"
                    name="remove">
            </button>
        </div>
    `
}