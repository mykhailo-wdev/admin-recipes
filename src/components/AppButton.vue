<template>
    <el-button type="primary" class="btn">{{ text }}</el-button>
</template>

<script setup>
const props = defineProps({
    text: {
        type: String,
        default: ''
    }
})
</script>

<style lang="scss" scoped>
@import '@/assets/styles/index';
.btn {
    cursor: pointer;
    border: none;
    outline: none;
    background-color: $violet;
    font-size: 17px;
    padding: 20px 24px;
    border-radius: 4px;
}
</style>