<template>
    <div class="menu">
        <div class="logo">
            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
                viewBox="0 0 512.031 512.031" xml:space="preserve" width="50" height="50">
                <rect x="49.654" y="7.608" style="fill:#FF6A5E;" width="357.956" height="496.823"/>
                <rect x="407.617" y="7.608" style="fill:#FFF6DD;" width="54.762" height="496.823"/>
                <polygon style="fill:#F59D40;" points="354.173,114.063 321.317,83.644 288.46,114.063 288.46,7.604 354.173,7.604 "/>
                <path style="fill:#C9D6D6;" d="M269.931,188.975c8.414-14.573,27.045-19.566,41.621-11.151l0,0
                    c14.571,8.414,19.564,27.046,11.153,41.62l-16.649,28.834c-8.413,14.572-27.046,19.565-41.62,11.152l0,0
                    c-14.574-8.416-19.566-27.049-11.153-41.621L269.931,188.975z"/>
                <g>
                    <polygon style="fill:#311363;" points="87.677,38.022 72.468,38.022 72.468,481.614 354.174,481.614 354.174,466.405 
                        87.677,466.405 	"/>
                    <path style="fill:#311363;" d="M415.218,0H400.01h-38.231h-80.923H42.05v512.031h357.96h15.209h54.763V0L415.218,0L415.218,0z
                        M346.57,15.209V96.66l-25.252-23.38l-25.253,23.38V15.209L346.57,15.209L346.57,15.209z M400.01,496.823H57.259V15.209h193.179
                        v68.25h15.209v-68.25h15.209v116.26l40.462-37.461l40.461,37.461V15.209h38.231v481.614H400.01z M454.772,496.823h-12.173V382.756
                        H427.39v114.066h-12.172V15.209h12.172v277.644h15.209V15.209h12.173V496.823z"/>
                    <rect x="427.389" y="313.134" style="fill:#311363;" width="15.209" height="49.345"/>
                    <path style="fill:#311363;" d="M173.381,261.695c2.645,0.709,5.346,1.061,8.078,1.061c3.861,0,7.778-0.705,11.67-2.099
                        l30.909,53.536l-52.359,90.688l13.171,7.604l47.969-83.084l47.969,83.084l13.171-7.604L241.6,314.193l26.005-45.043
                        c3.873,1.296,7.939,1.971,12.037,1.971c13.574,0,26.219-7.296,32.999-19.04l16.65-28.835c10.492-18.181,4.24-41.51-13.937-52.006
                        c-5.786-3.341-12.36-5.107-19.01-5.107c-13.573,0-26.217,7.296-32.998,19.041l-16.648,28.834
                        c-9.194,15.926-5.536,35.803,7.733,47.544l-21.611,37.432l-26.52-45.935c5.385-4.565,9.066-10.196,10.778-16.581
                        c2.308-8.615,0.833-17.837-4.266-26.668l-28.527-49.411l-13.171,7.604l28.527,49.411c3.038,5.262,3.988,10.493,2.746,15.127
                        c-0.673,2.514-2.014,4.848-3.92,6.95l-37.792-65.459l-13.171,7.604l37.792,65.458c-2.773,0.599-5.464,0.592-7.978-0.081
                        c-4.634-1.242-8.689-4.679-11.727-9.942l-28.527-49.409l-13.171,7.604l28.527,49.409
                        C157.517,253.498,164.766,259.386,173.381,261.695z M259.869,221.611l16.648-28.834c4.073-7.055,11.67-11.437,19.827-11.437
                        c3.984,0,7.928,1.062,11.406,3.069c10.917,6.303,14.67,20.314,8.37,31.232l-16.649,28.834c-4.073,7.054-11.67,11.436-19.828,11.436
                        c-3.985,0-7.927-1.061-11.404-3.067C257.321,246.54,253.566,232.528,259.869,221.611z"/>
                </g>
            </svg>

        </div>
        <el-menu :router="true" class="nav el-menu-vertical-demo">
            <el-menu-item :index="ROUTES_PATH.HOME" :class="['item', isPathActive(ROUTES_PATH.HOME)  && 'active']">
                <el-icon :size="24"><Food /></el-icon>
            </el-menu-item>
            <el-menu-item :index="ROUTES_PATH.CATEGORIES" :class="['item', isPathActive(ROUTES_PATH.CATEGORIES)  && 'active']">
                <el-icon :size="24"><Dish /></el-icon>
            </el-menu-item>
        </el-menu>

    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { ROUTES_PATH } from '@/constants';

const router = useRouter();

const route = useRoute();

const isPathActive = (path) => {
    return route.path === path;
}

onMounted(isPathActive);


</script>

<style lang="scss" scoped>
@import '@/assets/styles/index.scss';

.menu {
    height: 100%;
    min-height: 100vh;
    border-right: 1px solid $border;
    padding: 5px 5px 0;
}

.nav {
    border: none;
}

.logo {
    padding: 5px;
    border-bottom: 1px solid $border;
}

.item {
    color: $violet;
    &.active {
        color: $pink;
    }
}

</style>