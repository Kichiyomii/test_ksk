<template>
  <div class="toggle">
    <div @click="$router.push({ path: '/table', replace: true })">
      <img src="../assets/icons/table.svg"/>
    </div>
    <div class="divider"/>
    <div @click="$router.push({ path: '/widget', replace: true })" class="toggle__widget">
      <img src="../assets/icons/widget.svg"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Toggle',
};
</script>

<style lang="scss" scoped>
.toggle {
  width: 80px;
  height: 40px;
  display: flex;
  border-radius: 4px;
  justify-content: space-evenly;
  align-items: center;
  border: 1px solid #647A8C;
  cursor: pointer;
  &__widget {
    padding-bottom: 3px;
  }
}

.divider {
  width: 2px;
  height: 100%;
  background-color: #647A8C;
}

</style>
