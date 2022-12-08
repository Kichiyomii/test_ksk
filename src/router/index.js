import Vue from 'vue';
import VueRouter from 'vue-router';
import Table from '@/pages/Table';
import Widget from '@/pages/Widget';

Vue.use(VueRouter);

const routes = [
  {
    path: '/table',
    name: 'Table',
    component: Table,
  },

  {
    path: '/widget',
    name: 'Widget',
    component: Widget,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
