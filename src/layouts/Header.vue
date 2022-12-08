<template>
<div class="header">
  <p class="header__title" v-text="'Тестовое задание'"/>
</div>
</template>

<script>
export default {
  name: 'Header.vue',
};
</script>

<style lang="scss">
  .header {
  width: 100%;
  height: 260px;
  display: flex;
  align-items: center;
  background: linear-gradient(267.21deg, #900793 0.16%, rgba(134, 4, 137, 0.785707) 0.16%,
    rgba(159, 12, 162, 0.762269) 43.22%, rgba(5, 1, 190, 0.734375) 98.12%
  , rgba(0, 28, 126, 0.619792) 100.15%, rgba(6, 77, 142, 0.447917) 102.03%,
    rgba(1, 0, 60, 0) 102.73%);
    &__title {
      font-size: 36px;
      font-weight: 700;
      color: white;
      margin-left: 110px;
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
  }
</style>
