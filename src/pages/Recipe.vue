<template>
    <AppLayout>
        <template #title>
            {{ isCreatingMode ? 'Новий рецепт' : recipeUpdated.strMeal }}
        </template>
        <template #controls>
            <AppButton text="Зберегти"/>
        </template>
        <template #inner>
            {{ recipeUpdated }}
        </template>
    </AppLayout>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import AppLayout from '@/layouts/AppLayout.vue';
import AppButton from '@/components/AppButton.vue';
import { getRecipeById } from '@/services/RecipeService';
import { RecipesService } from '@/services';


const route = useRoute();
const recipeId = route?.params.id;
const recipe = ref(RecipesService.getEmptyRecipe());
const recipeUpdated = ref(RecipesService.getEmptyRecipe());
const isCreatingMode = ref(true);

const fetchRecipe = async () => {
    try {
        const data = await RecipesService.getRecipeById(recipeId)
        recipe.value = data;
        recipeUpdated.value = data;
        isCreatingMode.value = false;
    } catch {

    }
}

onMounted(() => {
    if(parseInt(recipeId)) {
        fetchRecipe();
    }
})
</script>
