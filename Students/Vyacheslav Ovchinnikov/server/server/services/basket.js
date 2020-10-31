function _search(array, id) {
    return array.find(el => el.productId == id)
}
function _sum(bas) {
    let sum = 0;
    for(let i = 0; i < bas.length; i++){
        let price = ( (bas[i].productPrice) * (bas[i].amount) );
        sum += price;
    }
    return sum
}

module.exports = {
    add(basket, item) {
        basket.content.push(item);
        basket.totalPrice = _sum(basket.content);
        return basket
    },
    change(basket, id, amount) {
        let find = _search(basket.content, id);
        find.amount += amount;
        basket.totalPrice = _sum(basket.content);
        return basket
    },
    delete(basket, id) {
        let find = _search(basket.content, id);
        basket.content.splice(basket.content.indexOf(find), 1);
        basket.totalPrice = _sum(basket.content);
        return basket
    }
}