<template>
  <div id="app">
    <Header/>
    <Default/>
  </div>
</template>

<script>
import Header from '@/layouts/Header.vue';
import Default from '@/layouts/Default.vue';

export default {
  name: 'App',
  components: {
    Header,
    Default,
  },
  mounted() {
    this.$store.dispatch('fetchOrders');
  },
};
</script>
