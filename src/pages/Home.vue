<template>
    <AppLayout>
        <template #title>
            Рецепти
        </template>
        <template #controls>
            <router-link :to="getRecipePath('new')">
                <AppButton text="Добавити рецепт"/>
            </router-link>
        </template>
        <template #inner>
            <div class="wrapper">
                <el-table :data="recipes" style="width: 100%">
                    <el-table-column prop="idMeal" label="Id" />
                    <el-table-column label="Image">
                        <template #default="scope">
                            <router-link :to="getRecipePath(scope.row.idMeal)">
                                <img
                                class="image" 
                                :src="scope.row.strMealThumb" 
                                :alt="scope.row.strMeal"
                                >
                            </router-link>
                        </template>
                    </el-table-column>
                    <el-table-column prop="strMeal" label="Name" />
                    <el-table-column prop="strArea" label="Area" />
                    <el-table-column prop="strCategory" label="Category" />
                    <el-table-column label="Tags">
                        <template #default="scope">
                            <template v-if="scope?.row?.strTags">
                                <el-tag 
                                    v-for="(tag, key) in scope.row.strTags.split(',')" 
                                    :key="key" 
                                    type="primary"
                                    class="tag"
                                    >
                                    {{ tag }}
                                </el-tag>
                            </template>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
        </template>
    </AppLayout>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { RecipesService } from '@/services';
import { ROUTES_PATH } from '@/constants';
import AppLayout from '@/layouts/AppLayout.vue';
import AppButton from '@/components/AppButton.vue';

const recipes = ref();

const fetchRecipes = async () => {
    try {
        recipes.value = await RecipesService.getRecipesByLetter();
    } catch {

    }
}

const getRecipePath = (id) => {
    return `${ROUTES_PATH.RECIPE.split(':')[0]}${id}`
}

onMounted(fetchRecipes);
</script>

<style lang="scss" scoped>
// @import '@/assets/styles/index.scss';
.tag {
    margin: 2px;
}

.image {
    width: 70px;
    height: 70px;
 }
</style>
