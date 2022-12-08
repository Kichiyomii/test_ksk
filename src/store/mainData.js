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
  },
  getters: {
    getOrders(state) {
      return state.orders;
    },
  },
  actions: {
    fetchOrders(context) {
      getStaticData().then((response) => {
        context.commit('setOrders', response.data);
      });
    },
  },
};
