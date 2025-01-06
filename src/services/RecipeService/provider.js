import axios from "axios";

import { URL_RECIPES_BY_LETTER } from '@/constants';


export const getRecipesByLetter = async () => {
    const  data = await axios.get(URL_RECIPES_BY_LETTER)

    return data
}