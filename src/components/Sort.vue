<template>
  <select class="sort" v-model="sortValue.sort" @change="changeOptions">
    <option disabled value="">Сортировка</option>
    <option
      v-for="option in options"
      :key="option.id"
      :value="option.id"
    >
      <div>
        <span v-text="option.name"/>
      </div>
    </option>
  </select>
</template>

<script>
export default {
  name: 'Sort',
  props: {
    sortValue: {
      sort: String,
    },
  },
  data() {
    return {
      options: [
        { id: 'up', name: 'Номер накладной: по возрастанию' },
        { id: 'down', name: 'Номер накладной: по убыванию' },
      ],
    };
  },
  methods: {
    changeOptions(event) {
      this.$emit('update:sort', event.target.value);
    },
  },
};
</script>

<style scoped>
.sort {
  width: 232px;
  height: 32px;
  border: 1px solid #E0E5E6;
  border-radius: 2px;
  padding: 8px 12px;
}

</style>
