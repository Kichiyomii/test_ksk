import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/table',
    name: 'Table',
    component: () => import(/* webpackChunkName: "about" */ '@/pages/Table.vue'),
  },

  {
    path: '/widget',
    name: 'Widget',
    component: () => import(/* webpackChunkName: "about" */ '@/pages/Table.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
