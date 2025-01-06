<template>
    <div class="root">
        <nav class="menuInner">
            <AppMenu/>
        </nav>
        <main class="main">
            <header class="header">
                <div class="title">
                    <slot name="title"></slot>
                </div>
                <div class="controls">
                    <slot name="controls"></slot>
                </div>
            </header>
            <div class="inner">
                <slot name="inner"></slot>
            </div>
        </main>
    </div>
</template>

<script setup>
import AppMenu from '@/components/AppMenu.vue';
</script>

<style lang="scss" scoped>
@import '@/assets/styles/index.scss';

.menuInner {
    width: 70px;
}

.root {
    display: flex;
}

.main {
    flex: 1;
    padding: 20px 16px;
}

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.title {
    color: $violet;
    font-size: 28px;
    font-weight: 700;
}


</style>