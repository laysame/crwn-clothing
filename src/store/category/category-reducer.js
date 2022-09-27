import {CATEGORIES_TYPE} from "./category-types";

const INITIAL_STATE = {
    categories: {},
}

export const categoriesReducer = (state = INITIAL_STATE, action = {}) => {

    const {type, payload} = action;

    switch (type) {
        case CATEGORIES_TYPE.SET_CATEGORIES_MAP:
            return {
                ...state,
                categories: payload,
            }
        default:
            return state;
    }
}