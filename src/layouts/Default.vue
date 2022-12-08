<template>
<div class="main">
  <Filters :filter-value="filterValue"/>
  <div class="main__container">
    <div class="main__sortcontainer">
      <Sort :sort-value="sortValue"/>
      <Toggle class="main__toggle"/>
    </div>
    <router-view :types="types" :orders="searchOrders"/>
  </div>
</div>
</template>

<script>
import Sort from '@/components/Sort';
import Toggle from '@/components/Toggle';
import Filters from '@/components/Filters';

export default {
  name: 'Default.vue',
  components: {
    Filters,
    Sort,
    Toggle,
  },
  data() {
    return {
      filterValue: {
        text: '',
        select: '',
      },
      sortValue: {
        sort: '',
      },
      types: this.$store.getters.getTypes,
    };
  },
  async mounted() {
    console.log(this.$route.name);
    if (this.$route.name !== 'Table' || this.$route.name !== 'Widget') {
      this.$router.push('/table');
    }
    await this.$store.dispatch('fetchOrders');
  },
  computed: {
    orders() {
      return this.$store.getters.getOrders;
    },
    sortedOrders() {
      return [...this.orders].sort((order1, order2) => {
        if (this.sortValue.sort === 'up') {
          return order1.number.localeCompare(order2.number);
        }
        if (this.sortValue.sort === 'down') {
          return order2.number.localeCompare(order1.number);
        }
        return this.orders;
      });
    },
    searchOrders() {
      return this.sortedOrders.filter(
        (order) => {
          if (this.filterValue.select === '') {
            return order.number.includes(this.filterValue.text);
          }
          return order.number.includes(this.filterValue.text)
            && order.type === this.filterValue.select;
        },
      );
    },
  },
};
</script>

<style lang="scss">
.main {
  display: flex;
  height: 100%;
  padding: 0 116px;
  &__container {
    width: 100%;
  }
  &__sortcontainer {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
  &__toggle {
    margin-bottom: 32px;
  }
}

</style>
