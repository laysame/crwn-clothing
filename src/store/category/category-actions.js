import {createAction} from "../../utils/reducer/reducer-utils";
import {CATEGORIES_TYPE} from "./category-types";

export const setCategoriesMap =  (categories) => createAction(CATEGORIES_TYPE.SET_CATEGORIES_MAP, categories);


