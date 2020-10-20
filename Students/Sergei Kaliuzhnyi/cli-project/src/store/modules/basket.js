import { get, post, put, del } from '../../libraries/requests';
export default {
    state: {
        items:[],
        url: '/api/basket'
    },
    mutations: {
        updateItems(state, items){
            state.items = items;
        },
        addNewItem(state, newItem){
            state.items.push(newItem);
        },
        removeItem(state, find){
            state.items.splice(state.items.indexOf(find), 1)
        }
    },
    actions: {
        async getItems(ctx){
            get(ctx.state.url).then(basket => { 
                let items = basket.content;
                ctx.commit('updateItems', items);
            });
        },
        add(ctx, item){
            let find = ctx.state.items.find(el => el.productId == item.productId);
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
            let find = ctx.state.items.find(el => el.productId == id);
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
            return state.items
        }
    }
}