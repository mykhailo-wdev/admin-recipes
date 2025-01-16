<template>
    <transition appear>
        <div class="root">
            <div class="heading">
                Loading...
            </div>
        </div>
    </transition>
</template>

<script setup>

</script>

<style lang="scss" scoped>
@import '@/assets/styles/index.scss';

.root {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba($white, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
}

.heading {
    font-size: 28px;
    font-weight: 700;
}
</style>