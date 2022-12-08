import Vue from 'vue';
import Vuex from 'vuex';
import dataModule from './mainData';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    dataModule,
  },
});
