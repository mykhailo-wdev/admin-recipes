<template>
    <AppLayout>
        <template #title>
            Рецепти
        </template>
        <template #controls>
            <AppButton/>
        </template>
    </AppLayout>
</template>

<script setup>
import AppLayout from '@/layouts/AppLayout.vue';
import AppButton from '@/components/AppButton.vue';
</script>
