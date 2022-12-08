<template>
<div class="filter">
  <p class="filter__title" v-text="'Фильтр'" />
  <FilterName class="filter__byname"/>
  <FilterType class="filter__bytype"/>
</div>
</template>

<script>
import FilterType from './Filters/FilterType.vue';
import FilterName from './Filters/FilterName.vue';

export default {
  name: 'Filters',
  components: { FilterType, FilterName },
};
</script>

<style lang="scss" scoped>
.filter {
  width: 280px;
  height: 184px;
  overflow: hidden;
}

</style>
