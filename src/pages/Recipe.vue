<template>
    <AppLayout>
        <template #title>
            {{ isCreatingMode ? 'Новий рецепт' : recipeUpdated.strMeal }}
        </template>
        <template #controls>
            <AppButton text="Зберегти" @click="createOrUpdateRecipe"/>
        </template>
        <template #inner>
            <AppLoader v-if="isLoading"/>
            <div class="wrapper">
                <div class="row">
                    <div class="col">
                        <div class="label">Title</div>
                        <el-input v-model="recipeUpdated.strMeal" placeholder="Title" />
                    </div>
                    <div class="col">
                        <div class="label">Areas</div>
                        <el-select
                            v-model="recipeUpdated.strArea"
                            placeholder="Area"
                            >
                            <el-option
                                v-for="item in areas"
                                :key="item.strArea"
                                :label="item.strArea"
                                :value="item.strArea"
                            />
                        </el-select>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <div class="label">Categories</div>
                        <el-select
                            v-model="recipeUpdated.strCategory"
                            placeholder="Categories"
                            >
                            <el-option
                                v-for="item in categories"
                                :key="item.strCategory"
                                :label="item.strCategory"
                                :value="item.strCategory"
                            />
                        </el-select>
                    </div>
                </div>
                <div class="ingredients" v-if="recipeIngredients.length">
                    <div class="subtitle">Ingredients</div>
                    <div class="row align-items-flex-end" 
                        v-for="(ingredient, index) in recipeIngredients" 
                        :key="`${ingredient.id}-${index}`"
                    >
                        <div class="col col-small mb-2">{{ index + 1 }}</div>
                        <div class="col">
                            <div class="label">Measure</div>
                            <el-input v-model="recipeIngredients[index].measure" placeholder="Measure" />
                        </div>
                        <div class="col">
                            <div class="label">Title</div>
                            <el-input v-model="recipeIngredients[index].title" placeholder="Title" />
                        </div>
                        <div class="col col-small mb-2">
                            <AppButton 
                                circle 
                                icon="Delete" 
                                @click="removeIngredient" 
                            />
                        </div>
                    </div>
                    <AppButton text="Додати інгредієнт"  @click="() => addIngredient(index)" />
                </div>
                <div class="subtitle" v-else>Ingredients are empty. Please, add new ingredients</div>
                <div class="row">
                    <div class="col">
                        <div class="subtitle">Instructions</div>
                        <el-input
                            v-model="recipeUpdated.strInstructions"
                            :autosize="{ minRows: 2, maxRows: 6 }"
                            type="textarea"
                            placeholder="Instructions"
                        />
                    </div>
                </div>
            </div>
        </template>
    </AppLayout>
</template>

<script setup>
import { ref, computed, onMounted  } from 'vue';
import { useRoute } from 'vue-router';
import AppLayout from '@/layouts/AppLayout.vue';
import AppButton from '@/components/AppButton.vue';
import { getRecipeById } from '@/services/RecipeService';
import { RecipesService, CommonService } from '@/services';
import { useRootStore } from '@/stores/root';
import AppLoader from '@/components/AppLoader.vue'; 
import { notify } from '@/utils';



const route = useRoute();
const rootStore = useRootStore();
const recipeId = route?.params.id;
const recipe = ref(RecipesService.getEmptyRecipe());
const recipeUpdated = ref(RecipesService.getEmptyRecipe());
const isCreatingMode = ref(true);
const recipeIngredients = ref([CommonService.getEmptyIngredient()]);
const areas = computed(() => rootStore.areas);
const categories = computed(() => rootStore.categories);
const isLoading = ref(false);

const fetchRecipe = async () => {
    try {
        isLoading.value = true;
        const data = await RecipesService.getRecipeById(recipeId)
        recipe.value = {...data};
        recipeUpdated.value = {...data};
        isCreatingMode.value = false;
        setTimeout(() => {
            isLoading.value = false;
        }, 1000);
    } catch(error) {
        console.log(error)
    }
}

const normalizeRecipeIngredients = () => {
    const normalizeIngredients = [];

    for(let i = 1; i <= 20; i++) {
        if(recipe.value[`strIngredient${i}`]) {
            const ingr = {
                id: Math.random().toString(36).slice(2),
                title: recipe.value[`strIngredient${i}`],
                measure: recipe.value[`strMeasure${i}`]
            }
            normalizeIngredients.push(ingr)
        }
        
    }
    recipeIngredients.value = normalizeIngredients;
}


const addIngredient = () => {
    recipeIngredients.value.push(CommonService.getEmptyIngredient());
}

const removeIngredient = (index) => {
    recipeIngredients.value.splice(index, 1);
}

const createOrUpdateRecipe = () => {
    isCreatingMode.value ? createRecipe() : updateRecipe()
}

const createRecipe = async () => {
    try {
        const params  = { ...recipeUpdated.value}

        denormalizeRecipeIngredients(params);
        isLoading.value = true;

        setTimeout(() => {
            isLoading.value = false;
            notify('Створено', `Рецепт ${params.strMeal} створений`, 'success');
        }, 500);

        await RecipesService.createRecipe();

    } catch(err) {
        console.log(err)
    }
}


const updateRecipe = async () => {
    try {
        const params  = { ...recipeUpdated.value}

        denormalizeRecipeIngredients(params);
        isLoading.value = true
        await RecipesService.updateRecipe();

        setTimeout(() => {
            isLoading.value = false;
            notify('Обновлено', `Рецепт ${params.strMeal} обновлений`, 'success');
        }, 500);

    } catch(err) {
        console.log(err)
    }
}


const denormalizeRecipeIngredients = (recipe) => {
    for (let i  = 1; i <= 20; i++) {
        const ingredient = recipeIngredients.value[i - 1];

        if(ingredient?.title && ingredient?.measure) {
            recipe[`strIngredient${i}`] = ingredient.title;
            recipe[`strMeasure${i}`] = ingredient.measure;
        } else {
            recipe[`strIngredient${i}`] = '';
            recipe[`strMeasure${i}`] = '';
        }
    }
}


onMounted(async() => {
    if(parseInt(recipeId)) {
        await fetchRecipe();
        normalizeRecipeIngredients()
    }
})
</script>


<style lang="scss">
.ingredients {
    padding-bottom: 16px;
}
</style>