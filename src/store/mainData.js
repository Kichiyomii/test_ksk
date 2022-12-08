export default {
  state: {
    orders: [],
  },
  mutations: {
    setPhotos(state, payload) {
      state.photos = payload;
    },
  },
  getters: {
    getAllPhotos(state) {
      return state.photos;
    },
  },
  actions: {
    fetchPhotos(context) {

    },
  },
};
