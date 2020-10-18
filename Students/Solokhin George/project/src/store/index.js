import Vue from "vue";
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        items: [],
        item: null,
        totalprice: 0,
    },
    mutations: {
        getItems(items){
              this.state.items=items;
        },
        // getTotalPrice(state, totalprice){
        //     state.totalprice=totalprice;
        //     console.log(state.totalprice)
        // },
        // add(state, item) {
        //     console.log(state.items);
        //     let find = state.items.find(el => el.productId == item.productId);
        //     if (find) {
        //         find.amount++;
        //     } else {
        //         let newItem = Object.assign({}, item, { amount: 1 });
        //         console.log(newItem)
        //         this.items.push(newItem);
        //     }
        //     state.totalPrice+=item.productPrice;
        // },
        // remove(state, id) {
        //     let find = state.items.find(el => el.productId == id);
        //     if (find.amount > 1) {
        //         find.amount--;
        //     } else {
        //         this.items.splice(this.items.indexOf(find), 1);
        //     }
        //     this.totalPrice-=find.productPrice;
        // }
    },
    actions: {
       add(context, item){
           
       }
    }
})