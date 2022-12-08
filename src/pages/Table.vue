<template>
  <div>
    <table class="table">
      <thead class="table__header" >
      <tr>
        <td> ID </td>
        <td> Номер накладной </td>
        <td> Тип заказа </td>
        <td> Дата создания </td>
        <td class="table__header__delete"> </td>
      </tr>
      </thead>
      <tbody class="table__body">
      <tr v-for="order in orders" :key="order.id">
        <td v-text="order.id"/>
        <td v-text="order.number"/>
        <td v-text="parsedType(order.type)"/>
        <td v-text="parsedDate(order.creationDate)"/>
        <td class="table__body__delete">
          <img class="table__body__delete__img" src="../assets/icons/dots.svg">
        </td>
        <div
          @click="deleteOrder(order.id)" class="table__modal"> <img src="../assets/icons/bin.svg">
          Удалить
        </div>
      </tr>
      </tbody>
    </table>
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

.table {
  width: 100%;
  &__header {
    text-align: center;
    font-weight: 700;
    font-size: 14px;
    background: #E6E6E6;
    & tr {
      & td {
        padding: 12px 0;
      }
    }
    &__delete {
      width: 60px;
    }
  }
  &__body {
    font-weight: 400;
    & tr {
      position: relative;
      & td {
        padding: 12px 16px;
        border-bottom: 1px solid #E6E6E6;
        position: relative;
      }
    }
    &__delete {
      display: flex;
      width: 60px;
      height: 44px;
      justify-content: center;
      &:hover{
        & ~ .table__modal {
          display: flex;
        }
      }
      &__img {
        width: 4px;
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
