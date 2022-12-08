<template>
  <div>
    <div v-for="order in orders" :key="order.id">
      <span v-text="order.number"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Table',
  props: {
    orders: Array,
  },
};
</script>

<style scoped>

</style>
