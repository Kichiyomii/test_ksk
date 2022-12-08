import getStaticData from '../../api/main_data';

export default {
  state: {
    orders: [],
    types: [
      { id: 'Pickup', name: 'Самовывоз' },
      { id: 'Delivery', name: 'Курьерская доставка' },
      { id: 'Pick-point', name: 'Доставка в пункт выдачи' },
    ],
  },
  mutations: {
    setOrders(state, payload) {
      state.orders = payload;
    },
    deleteOrder(state, id) {
      state.orders = state.orders.filter((o) => o.id !== id);
    },
  },
  getters: {
    getOrders(state) {
      return state.orders;
    },
    getTypes(state) {
      return state.types;
    },
  },
  actions: {
    fetchOrders(context) {
      getStaticData().then((response) => {
        context.commit('setOrders', response.data);
      });
    },
    deleteOrder({ commit }, id) {
      commit('deleteOrder', id);
    },
  },
};
