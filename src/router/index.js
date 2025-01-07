import { createRouter, createWebHistory } from 'vue-router';
import { ROUTES_PATH } from '../constants/router.js';
import Home from '../pages/Home.vue';
import Categories from '@/pages/Categories.vue';
import Recipe from '@/pages/Recipe.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: ROUTES_PATH.HOME, 
      name: 'home',
      component: Home,
    },
    {
      path: ROUTES_PATH.CATEGORIES, 
      name: 'categories',
      component: Categories,
    },
    {
      path: ROUTES_PATH.RECIPE, 
      name: 'recipe',
      component: Recipe,
    },
  ],
});

export default router;
