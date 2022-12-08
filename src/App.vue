<template>
  <div id="app">
    <Header/>
    <Default/>
  </div>
</template>

<script>
import Header from '@/layouts/Header';
import Default from '@/layouts/Default';

export default {
  name: 'App',
  components: {
    Header,
    Default,
  },
};
</script>
