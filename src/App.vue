<template>
  <RouterView />
</template>

<script setup>
import { onMounted } from 'vue';
import { RouterView } from 'vue-router';
import { useRootStore } from './stores/root';

const rooteStore = useRootStore();

onMounted(() => {
  rooteStore.getAreas();
  rooteStore.getCategories();
  rooteStore.getIngredients();
})

</script>

<style lang="scss" scoped>
@import '@/assets/styles/index.scss';


</style>
