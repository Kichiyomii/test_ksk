import getStaticData from '../../api/main_data';

export default {
  state: {
    orders: [],
    type: {
      Pickup: 'Самовывоз',
      Delivery: 'Курьерская доставка',
      'Pick-point': 'Доставка в пункт выдачи',
    },
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
