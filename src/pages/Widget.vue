<template>
  <div class="widget">
    <div class="widget__item" v-for="order in orders" :key="order.id">
      <div class="widget__item__header">
        <span v-text="order.id"/>
        <div class="widget__item__header__delete">
          <img class="widget__item__header__delete__img" src="../assets/icons/dots.svg">
          <div
            @click="deleteOrder(order.id)" class="widget__modal">
            <img src="../assets/icons/bin.svg">
            Удалить
          </div>
        </div>
      </div>
      <div class="widget__item__body">
        <div class="widget__item__body__container">
          <span
            class="widget__item__body__container__title"
            v-text="'Номер накладной:'"
          />
          <span class="widget__item__body__container__subtitle" v-text="order.number"/>
        </div>
        <div class="widget__item__body__container">
          <span
            class="widget__item__body__container__title"
            v-text="'Тип заказа:'"
          />
          <span class="widget__item__body__container__subtitle" v-text="parsedType(order.type)"/>
        </div>
        <div class="widget__item__body__container">
          <span
            v-text="'Дата создания:'"
            class="widget__item__body__container__title"
          />
          <span
            class="widget__item__body__container__subtitle"
            v-text="parsedDate(order.creationDate)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  name: 'Table',
  props: {
    orders: Array,
    types: Array,
  },
  methods: {
    parsedType(type) {
      return this.types.find((storeType) => storeType.id === type).name;
    },
    parsedDate(date) {
      return moment(date).format('DD.MM.YYYY hh:mm:ss');
    },
    deleteOrder(id) {
      this.$store.dispatch('deleteOrder', id);
    },
  },
};
</script>

<style lang="scss">

.widget {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  background: #F6FAFB;
  &__item {
    width: 340px;
    box-shadow: 0px 4px 12px #EBEBEB;
    border-radius: 3px;
    border: 1px solid #E0E5E6;
    padding: 12px 16px;
    font-size: 14px;

    &__header {
      display: flex;
      justify-content: space-between;
      margin-bottom: 20px;
      &__delete {
        width: 20px;
        height: 20px;
        display: flex;
        align-items: baseline;
        justify-content: flex-end;
        position: relative;
        &:hover{
          & div {
            display: flex;
          }
        }
      }
    }

    &__body {
      display: flex;
      flex-direction: column;
      gap: 10px;

      &__container {
        display: flex;
        gap: 10px;

        &__title {
          width: 125px;
          font-weight: 700;
          color: #647A8C;
        }
      }
    }
  }
  &__modal {
    background: white;
    gap: 12px;
    padding: 12px 15px;
    display: none;
    position: absolute;
    right: 10px;
    top: -9px;
    box-shadow: 0px 4px 4px rgba(182, 182, 182, 0.25);
    border-radius: 2px;
    cursor: pointer;
    &:hover {
      display: flex;
    }
  }
}

</style>
