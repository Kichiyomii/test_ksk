<template>
<div class="main">
  <Filters/>
  <div class="main__container">
    <div class="main__sortcontainer">
      <Sort/>
      <Toggle class="main__toggle"/>
    </div>
    <div style="width: 100%; height: 100px; background-color: blue;"></div>
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

};
</script>

<style lang="scss">
.main {
  display: flex;
  height: 100%;
  padding: 0px 116px;
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
