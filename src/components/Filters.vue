<template>
<div class="filter">
  <p class="filter__title" v-text="'Фильтр'" />
  <div class="filtername">
    <p class="filtername__title" v-text="'Номер накладной:'"/>
    <input
      placeholder="Введите фрагмент"
      @input="updateInput" v-model="filterValue.text"
      class="filtername__input" type="text"
    />
  </div>
  <div class="filtertype">
    <p class="filtertype__title" v-text="'Номер накладной'"/>
    <select class="filtertype__select" v-model="filterValue.select" @change="changeOptions">
      <option disabled value="">Выберите из списка</option>
      <option
        v-for="option in options"
        :key="option.id"
        :value="option.id"
      >
        <span v-text="option.name"/>
      </option>
    </select>
  </div>
</div>
</template>

<script>

export default {
  name: 'Filters',
  props: {
    filterValue: {
      text: String,
      select: String,
    },
  },
  data() {
    return {
      options: this.$store.state.dataModule.types,
    };
  },
  methods: {
    changeOptions(event) {
      this.$emit('update:text', event.target.value);
    },
    updateInput(event) {
      this.$emit('update:select', event.target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
.filter {
  padding: 8px 16px;
  height: 184px;
  margin-right: 16px;
  &__title {
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 24px;
  }
}
.filtertype {
  margin-top: 16px;
  &__title {
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 4px;
  }
  &__select {
    width: 248px;
    border: 1px solid #E0E5E6;
    border-radius: 2px;
    height: 32px;
    padding: 8px 12px;
  }
}
.filtername {
  &__title {
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 4px;
  }
  &__input {
    width: 248px;
    border: 1px solid #E0E5E6;
    border-radius: 2px;
    height: 32px;
    padding: 8px 12px;
  }
}
</style>
