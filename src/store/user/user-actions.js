import {createAction} from "../../utils/reducer/reducer-utils";
import {USER_ACTION_TYPES} from "../../context/user-context";

export const setCurrentUser = (user) => createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);
