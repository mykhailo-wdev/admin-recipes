<template>
    <AppLayout>
        <template #title>
            Категорії
        </template>
        <template #controls>
            <AppButton text="Добавити категорію"/>
        </template>
        <template #inner>
            
        </template>
    </AppLayout>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import AppLayout from '@/layouts/AppLayout.vue';
import AppButton from '@/components/AppButton.vue';

</script>
