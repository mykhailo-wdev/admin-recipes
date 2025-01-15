<template>
    <el-button v-if="!circle" type="primary" class="btn">{{ text }}</el-button>
    <el-button v-else :icon="icon" circle type="danger" class="circle"></el-button>
</template>

<script setup>
const props = defineProps({
    text: {
        type: String,
        default: ''
    },
    circle: {
        type: Boolean,
        default: false
    },
    icon: {
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

.circle {
    background-color: $pink;
    font-size: 16px;
}
</style>