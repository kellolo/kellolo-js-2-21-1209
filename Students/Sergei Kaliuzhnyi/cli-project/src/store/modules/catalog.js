import { get } from '../../libraries/requests';
export default {
    state: {
        catalogItems:[],
        catalogUrl: '/api/catalog'
    },
    mutations: {
        updateCatalogItems(state, items){
            state.catalogItems = items;
        },
    },
    actions: {
        async getCatalogItems(ctx){
            get(ctx.state.catalogUrl).then(catalog => { 
                let items = catalog;
                ctx.commit('updateCatalogItems', items);
            });
        }
    },
    getters:{
        catalogItems(state){
            return state.catalogItems
        }
    }
}