import { get, post, put, del } from '../../libraries/requests';
export default {
    state: {
        basketItems:[],
        basketUrl: '/api/basket'
    },
    mutations: {
        updateBasketItems(state, items){
            state.basketItems = items;
        },
        addNewItem(state, newItem){
            state.basketItems.push(newItem);
        },
        removeItem(state, find){
            state.basketItems.splice(state.basketItems.indexOf(find), 1)
        }
    },
    actions: {
        async getBasketItems(ctx){
            get(ctx.state.basketUrl).then(basket => { 
                let items = basket.content;
                ctx.commit('updateBasketItems', items);
            });
        },
        add(ctx, item){
            let find = ctx.state.basketItems.find(el => el.productId == item.productId);
            if (find) {
                put(`/api/basket/${find.productId}`, { amount: 1 })
                .then(status => {
                    if (status.status) {
                        find.amount++;
                    }
                })
            } else {
                let newItem = Object.assign({}, item, { amount: 1 });
                post('/api/basket', newItem)
                .then(status => {
                    if (status.status) {
                        ctx.commit('addNewItem', newItem);
                    }
                })
            }
        },
        remove(ctx, id){
            let find = ctx.state.basketItems.find(el => el.productId == id);
            if (find.amount > 1) {
                put(`/api/basket/${id}`, { amount: -1 })
                .then(status => {
                    if (status.status) {
                        find.amount--;
                    }
                })
            } else {
                del(`/api/basket/${id}`)
                .then(status => {       /*{ status: true }*/
                    if (status.status) {
                        ctx.commit('removeItem', find);
                    }
                })
            }
        }
    },
    getters:{
        basketItems(state){
            return state.basketItems
        }
    }
}