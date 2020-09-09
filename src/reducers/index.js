import {combineReducers} from "redux";
import {reducer as formReducer} from "redux-form";

const applicationsReducer = (state = null, action) => {
    if (action.type === "GET_APPLICATIONS") {
        return action.payload;
    }
    return state;
};

const currentApplication = (state = null, action) => {
    if (action.type === "EDIT_APPLICATION") {
        return action.payload;
    }
    return state;
};

const sortByOption = (state = "date", action) => {
    if (action.type === "SORT_APPLICATIONS_OPTION") {
        return action.payload;
    }
    return state;
};

const sortByOrder = (state = true, action) => {
    if (action.type === "SORT_APPLICATIONS_ORDER") {
        return action.payload;
    }
    return state;
};

export default combineReducers({
    applications: applicationsReducer,
    currentApplication,
    sortByOption,
    sortByOrder,
    form: formReducer,
});
